import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { START_DATE, END_DATE } from "@/lib/calendar-data";

interface CalendarViewProps {
  selectedDate: Date;
  calendarDate: Date;
  onDateSelect: (date: Date) => void;
  onMonthChange: (direction: number) => void;
  getCompletedTasksForDate: (date: string) => number;
}

const DAYS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];

export function CalendarView({
  selectedDate,
  calendarDate,
  onDateSelect,
  onMonthChange,
  getCompletedTasksForDate
}: CalendarViewProps) {
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  const monthName = calendarDate.toLocaleDateString('es-ES', { 
    month: 'long', 
    year: 'numeric' 
  });

  const isToday = (day: number) => {
    return day === today.getDate() && 
           month === today.getMonth() && 
           year === today.getFullYear();
  };

  const isSelected = (day: number) => {
    return day === selectedDate.getDate() && 
           month === selectedDate.getMonth() && 
           year === selectedDate.getFullYear();
  };

  const isInRange = (day: number) => {
    const currentDate = new Date(year, month, day);
    return currentDate >= START_DATE && currentDate <= END_DATE;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onMonthChange(-1)}
              className="hover-elevate"
              data-testid="button-prev-month"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <motion.h2 
              key={monthName}
              className="text-xl md:text-2xl font-semibold text-primary capitalize"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {monthName}
            </motion.h2>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onMonthChange(1)}
              className="hover-elevate"
              data-testid="button-next-month"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
          
          <p className="text-sm md:text-base text-muted-foreground mb-6 text-center">
            Navega por los meses y haz clic en un día para ver el horario detallado en la vista "Mi Día".
          </p>
          
          <div className="grid grid-cols-7 gap-2">
            {DAYS.map(day => (
              <div 
                key={day} 
                className="text-center text-xs md:text-sm font-semibold text-muted-foreground p-2"
              >
                {day}
              </div>
            ))}
            
            {Array.from({ length: firstDay }, (_, i) => (
              <div key={`empty-${i}`} />
            ))}
            
            {Array.from({ length: daysInMonth }, (_, i) => {
              const day = i + 1;
              const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
              const completedCount = getCompletedTasksForDate(dateStr);
              const inRange = isInRange(day);
              
              return (
                <motion.button
                  key={day}
                  onClick={() => {
                    if (inRange) {
                      onDateSelect(new Date(year, month, day));
                    }
                  }}
                  className={`
                    relative p-2 md:p-3 rounded-full text-sm md:text-base font-medium
                    transition-all duration-200
                    ${!inRange ? 'text-muted-foreground/30 cursor-not-allowed' : ''}
                    ${isToday(day) && inRange ? 'bg-primary text-primary-foreground' : ''}
                    ${isSelected(day) && inRange ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' : ''}
                    ${inRange && !isToday(day) ? 'hover-elevate hover:bg-muted' : ''}
                  `}
                  disabled={!inRange}
                  whileHover={inRange ? { scale: 1.05 } : {}}
                  whileTap={inRange ? { scale: 0.95 } : {}}
                  data-testid={`calendar-day-${day}`}
                >
                  {day}
                  {completedCount > 0 && inRange && (
                    <motion.div 
                      className="absolute bottom-1 right-1 w-2 h-2 bg-chart-1 rounded-full"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500 }}
                    />
                  )}
                </motion.button>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
