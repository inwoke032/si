import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { roadmapData } from "@/lib/calendar-data";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export function RoadmapView() {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [completedItems, setCompletedItems] = useLocalStorage<Set<string>>('roadmap-completed', new Set());

  const toggleExpand = (id: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const toggleComplete = (id: string) => {
    setCompletedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
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
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 text-center">
            Roadmap de Estudio en IA
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-8 text-center max-w-3xl mx-auto">
            Esta es tu guía de estudio detallada. Se basa en tres pilares fundamentales: Matemáticas, 
            Programación y Teoría de IA. Utiliza esta sección para profundizar en cada tema y seguir 
            la ruta de aprendizaje sugerida.
          </p>
          
          <div className="space-y-4">
            {roadmapData.map((item, index) => {
              const isExpanded = expandedItems.has(item.id);
              const isCompleted = completedItems.has(item.id);
              
              return (
                <motion.div
                  key={item.id}
                  className="border border-border rounded-md overflow-hidden hover-elevate"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="p-4">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        checked={isCompleted}
                        onCheckedChange={() => toggleComplete(item.id)}
                        className="mt-1"
                        data-testid={`checkbox-roadmap-${item.id}`}
                      />
                      
                      <button
                        onClick={() => toggleExpand(item.id)}
                        className="flex-1 flex items-center justify-between text-left group"
                        data-testid={`button-roadmap-${item.id}`}
                      >
                        <span className={`
                          text-base md:text-lg font-semibold transition-colors
                          ${isCompleted ? 'line-through text-muted-foreground' : 'text-primary group-hover:text-secondary'}
                        `}>
                          {item.title}
                        </span>
                        <motion.div
                          animate={{ rotate: isExpanded ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        </motion.div>
                      </button>
                    </div>
                    
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 ml-8 text-sm md:text-base text-foreground leading-relaxed whitespace-pre-line">
                            {item.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
