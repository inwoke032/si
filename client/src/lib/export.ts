// Export utilities for calendar data

import type { TaskProgress, StreakData } from "@shared/schema";
import { weeklySchedule, pythonStudyPlan, roadmapData, START_DATE, END_DATE } from "./calendar-data";

export function exportAsJSON(taskProgress: TaskProgress[], streakData: StreakData) {
  const data = {
    version: '1.0',
    exportDate: new Date().toISOString(),
    taskProgress,
    streakData,
    dateRange: {
      start: START_DATE.toISOString(),
      end: END_DATE.toISOString(),
    },
    weeklySchedule,
    pythonStudyPlan,
    roadmapData,
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `plan-pasantia-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function exportAsICalendar() {
  let icalContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Plan de Pasantía//ES',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:Plan de Pasantía en IA',
    'X-WR-TIMEZONE:America/Santo_Domingo',
  ];

  // Generate events for each week
  const currentDate = new Date(START_DATE);
  const endDate = new Date(END_DATE);
  let weekNumber = 0;

  while (currentDate <= endDate) {
    const dayOfWeek = currentDate.getDay();
    const schedule = weeklySchedule[dayOfWeek];
    const pythonTopic = pythonStudyPlan[weekNumber] || "Repaso Final";

    if (schedule) {
      schedule.forEach((item) => {
        let summary = item.task;
        let description = item.task;

        if (item.task === 'Estudio Python') {
          summary = `Estudio Python: ${pythonTopic}`;
          description = `${pythonTopic}\n\nEsta es tu sesión de estudio de Python. Concéntrate en dominar este tema antes de continuar.`;
        }

        // Parse time (simplified - assumes format like "9:25 AM - 11:00 AM")
        const [startTime, endTime] = item.time.split(' - ');
        const dateStr = currentDate.toISOString().split('T')[0].replace(/-/g, '');
        
        icalContent.push('BEGIN:VEVENT');
        icalContent.push(`UID:${currentDate.getTime()}-${item.task.replace(/\s/g, '-')}@plan-pasantia`);
        icalContent.push(`DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`);
        icalContent.push(`DTSTART:${dateStr}T${convertToICalTime(startTime)}`);
        icalContent.push(`DTEND:${dateStr}T${convertToICalTime(endTime || startTime)}`);
        icalContent.push(`SUMMARY:${summary}`);
        icalContent.push(`DESCRIPTION:${description.replace(/\n/g, '\\n')}`);
        if (item.focus) {
          icalContent.push('PRIORITY:1');
        }
        icalContent.push('END:VEVENT');
      });
    }

    currentDate.setDate(currentDate.getDate() + 1);
    if (currentDate.getDay() === 1) { // Monday - new week
      weekNumber++;
    }
  }

  icalContent.push('END:VCALENDAR');

  const blob = new Blob([icalContent.join('\r\n')], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `plan-pasantia-${new Date().toISOString().split('T')[0]}.ics`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function convertToICalTime(timeStr: string): string {
  // Convert "9:25 AM" to "092500"
  const cleaned = timeStr.trim().toUpperCase().replace(' ONWARDS', '').trim();
  if (cleaned === '') return '000000';
  
  const match = cleaned.match(/(\d{1,2}):(\d{2})\s*(AM|PM)?/);
  if (!match) return '120000'; // Default noon
  
  let hours = parseInt(match[1]);
  const minutes = match[2];
  const period = match[3];
  
  if (period === 'PM' && hours !== 12) hours += 12;
  if (period === 'AM' && hours === 12) hours = 0;
  
  return `${String(hours).padStart(2, '0')}${minutes}00`;
}

export function exportAsPDF() {
  // This is a simplified version - in production, you'd use a library like jsPDF
  // For now, we'll create a print-friendly HTML version
  
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    alert('Por favor permite pop-ups para exportar como PDF');
    return;
  }

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <title>Plan de Pasantía en IA</title>
      <meta charset="UTF-8">
      <style>
        body {
          font-family: 'Arial', sans-serif;
          max-width: 800px;
          margin: 40px auto;
          padding: 20px;
          line-height: 1.6;
        }
        h1 { color: #E8A87C; text-align: center; }
        h2 { color: #C38D9E; border-bottom: 2px solid #E8A87C; padding-bottom: 10px; }
        h3 { color: #E8A87C; }
        .schedule-day { margin-bottom: 30px; page-break-inside: avoid; }
        .schedule-item { margin: 10px 0; padding: 10px; background: #f9f9f9; border-left: 4px solid #E8A87C; }
        .focus { background: #FFF3E0; border-left-color: #E8A87C; font-weight: bold; }
        @media print {
          body { margin: 0; padding: 20px; }
          .no-print { display: none; }
        }
      </style>
    </head>
    <body>
      <h1>Plan de Pasantía en IA</h1>
      <p style="text-align: center;">Del ${START_DATE.toLocaleDateString('es-ES')} al ${END_DATE.toLocaleDateString('es-ES')}</p>
      
      <h2>Horario Semanal</h2>
      ${Object.entries(weeklySchedule).map(([day, schedule]) => {
        const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        return `
          <div class="schedule-day">
            <h3>${dayNames[parseInt(day)]}</h3>
            ${schedule.map(item => `
              <div class="schedule-item ${item.focus ? 'focus' : ''}">
                <strong>${item.time}</strong>: ${item.task}
              </div>
            `).join('')}
          </div>
        `;
      }).join('')}
      
      <h2>Plan de Estudio Python (48 Semanas)</h2>
      <ol>
        ${pythonStudyPlan.map(topic => `<li>${topic}</li>`).join('')}
      </ol>
      
      <div class="no-print" style="text-align: center; margin-top: 40px;">
        <button onclick="window.print()" style="padding: 10px 20px; background: #E8A87C; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px;">
          Imprimir / Guardar como PDF
        </button>
        <button onclick="window.close()" style="padding: 10px 20px; background: #C38D9E; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 16px; margin-left: 10px;">
          Cerrar
        </button>
      </div>
    </body>
    </html>
  `;

  printWindow.document.write(htmlContent);
  printWindow.document.close();
}
