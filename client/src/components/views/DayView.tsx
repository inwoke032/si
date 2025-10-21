import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronLeft, ChevronRight, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { weeklySchedule, taskDetails, getPythonTopicForDate } from "@/lib/calendar-data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface DayViewProps {
  selectedDate: Date;
  onDayChange: (direction: number) => void;
  isTaskCompleted: (taskId: string, date: string) => boolean;
  toggleTask: (taskId: string, date: string) => void;
}

export function DayView({ 
  selectedDate, 
  onDayChange,
  isTaskCompleted,
  toggleTask
}: DayViewProps) {
  const dayOfWeek = selectedDate.getDay();
  const schedule = weeklySchedule[dayOfWeek] || [];
  const pythonTopic = getPythonTopicForDate(selectedDate);
  const dateStr = selectedDate.toISOString().split('T')[0];

  const dateTitle = selectedDate.toLocaleDateString('es-ES', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  const getTaskDescription = (taskName: string, topic?: string): string => {
    if (taskName === "Estudio Python" && topic) {
      const pythonDetails = taskDetails["Estudio Python"];
      return pythonDetails[topic] || taskDetails[taskName] || "No hay detalles adicionales para esta tarea.";
    }
    return taskDetails[taskName] || "No hay detalles adicionales para esta tarea.";
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
              onClick={() => onDayChange(-1)}
              className="hover-elevate"
              data-testid="button-prev-day"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <motion.h2 
              key={dateStr}
              className="text-lg md:text-2xl font-semibold text-primary capitalize text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {dateTitle}
            </motion.h2>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onDayChange(1)}
              className="hover-elevate"
              data-testid="button-next-day"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
          
          <p className="text-sm md:text-base text-muted-foreground mb-6 text-center">
            Este es tu plan de acción para hoy. Marca las tareas completadas y pasa el cursor 
            sobre el ícono de información para ver más detalles.
          </p>
          
          <div className="space-y-3">
            <AnimatePresence>
              {schedule.map((item, index) => {
                let taskKey = item.task;
                let taskDisplay = item.task;
                let topic: string | undefined;
                
                if (item.task === 'Estudio Python') {
                  topic = pythonTopic;
                  taskKey = `${item.task}-${pythonTopic}`;
                  taskDisplay = `Estudio Python: ${pythonTopic}`;
                }
                
                const uniqueId = `${dateStr}-${index}-${taskKey}`;
                const completed = isTaskCompleted(uniqueId, dateStr);
                const description = getTaskDescription(item.task, topic);
                
                return (
                  <motion.div
                    key={uniqueId}
                    className={`
                      flex items-center gap-3 p-4 rounded-md
                      ${item.focus 
                        ? 'bg-orange-100 dark:bg-orange-900/20 border-l-4 border-primary' 
                        : 'bg-muted'
                      }
                      ${completed ? 'opacity-60' : ''}
                      hover-elevate
                    `}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ delay: index * 0.03 }}
                    data-testid={`task-${index}`}
                  >
                    <Checkbox
                      checked={completed}
                      onCheckedChange={() => toggleTask(uniqueId, dateStr)}
                      data-testid={`checkbox-task-${index}`}
                    />
                    
                    <div className="flex-1 min-w-0">
                      <div className="text-xs md:text-sm font-semibold text-primary">
                        {item.time}
                      </div>
                      <div className={`
                        text-sm md:text-base font-medium
                        ${completed ? 'line-through text-muted-foreground' : 'text-foreground'}
                      `}>
                        {taskDisplay}
                      </div>
                    </div>
                    
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="flex-shrink-0 hover-elevate"
                          >
                            <Info className="w-4 h-4" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent 
                          className="max-w-xs md:max-w-sm p-3"
                          side="left"
                        >
                          <p className="text-sm leading-relaxed">{description}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
