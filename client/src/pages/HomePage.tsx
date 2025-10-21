import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Navigation } from "@/components/Navigation";
import { ResumenView } from "@/components/views/ResumenView";
import { RoadmapView } from "@/components/views/RoadmapView";
import { CalendarView } from "@/components/views/CalendarView";
import { DayView } from "@/components/views/DayView";
import { ExportDialog } from "@/components/ExportDialog";
import { useTaskProgress } from "@/hooks/useTaskProgress";
import { START_DATE, END_DATE } from "@/lib/calendar-data";
import { AnimatePresence } from "framer-motion";
import { requestNotificationPermission, showNotification } from "@/lib/pwa";
import { useToast } from "@/hooks/use-toast";

type View = "resumen" | "roadmap" | "calendario" | "dia";

export default function HomePage() {
  const [currentView, setCurrentView] = useState<View>("resumen");
  const [selectedDate, setSelectedDate] = useState(new Date(START_DATE));
  const [calendarDate, setCalendarDate] = useState(new Date(START_DATE.getFullYear(), START_DATE.getMonth(), 1));
  const [exportDialogOpen, setExportDialogOpen] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const { toast } = useToast();
  
  const { 
    streakData, 
    isTaskCompleted, 
    toggleTask, 
    getCompletedTasksForDate 
  } = useTaskProgress();

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    setCurrentView("dia");
  };

  const handleMonthChange = (direction: number) => {
    const newDate = new Date(calendarDate);
    newDate.setMonth(newDate.getMonth() + direction);
    setCalendarDate(newDate);
  };

  const handleDayChange = (direction: number) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + direction);
    
    if (newDate >= START_DATE && newDate <= END_DATE) {
      setSelectedDate(newDate);
    }
  };

  const handleNotificationsClick = async () => {
    if (!('Notification' in window)) {
      toast({
        title: "Notificaciones no disponibles",
        description: "Tu navegador no soporta notificaciones push",
        variant: "destructive",
      });
      return;
    }

    const hasPermission = await requestNotificationPermission();
    setNotificationsEnabled(hasPermission);

    if (hasPermission) {
      toast({
        title: "¡Notificaciones activadas!",
        description: "Te enviaremos recordatorios para mantenerte en el camino hacia tu objetivo",
      });

      showNotification("¡Estás listo para el éxito!", {
        body: "Te notificaremos sobre tus tareas y objetivos diarios",
        tag: "welcome-notification",
      });
    } else {
      toast({
        title: "Permiso denegado",
        description: "Puedes activar las notificaciones desde la configuración de tu navegador",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    if ('Notification' in window && Notification.permission === 'granted') {
      setNotificationsEnabled(true);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onExportClick={() => setExportDialogOpen(true)}
        onNotificationsClick={handleNotificationsClick}
        notificationCount={notificationsEnabled ? 0 : 1}
      />
      
      <Navigation 
        currentView={currentView} 
        onViewChange={setCurrentView} 
      />
      
      <main className="container mx-auto px-4 md:px-8 max-w-7xl py-6 md:py-8">
        <AnimatePresence mode="wait">
          {currentView === "resumen" && (
            <ResumenView 
              key="resumen"
              streakData={streakData}
              currentDate={selectedDate}
            />
          )}
          
          {currentView === "roadmap" && (
            <RoadmapView key="roadmap" />
          )}
          
          {currentView === "calendario" && (
            <CalendarView
              key="calendario"
              selectedDate={selectedDate}
              calendarDate={calendarDate}
              onDateSelect={handleDateSelect}
              onMonthChange={handleMonthChange}
              getCompletedTasksForDate={getCompletedTasksForDate}
            />
          )}
          
          {currentView === "dia" && (
            <DayView
              key="dia"
              selectedDate={selectedDate}
              onDayChange={handleDayChange}
              isTaskCompleted={isTaskCompleted}
              toggleTask={toggleTask}
            />
          )}
        </AnimatePresence>
      </main>
      
      <ExportDialog 
        open={exportDialogOpen} 
        onOpenChange={setExportDialogOpen} 
      />
    </div>
  );
}
