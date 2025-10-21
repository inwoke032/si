import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { monthlyFocusData } from "@/lib/calendar-data";

export function TimelineCard() {
  const months = Object.values(monthlyFocusData);

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
          Hoja de Ruta de 12 Meses
        </h2>
        <p className="text-sm md:text-base text-muted-foreground mb-6">
          Esta es tu trayectoria de aprendizaje y desarrollo. Cada fase se construye sobre la anterior, 
          llevándote desde los fundamentos técnicos hasta la búsqueda activa de tu pasantía.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {months.map((month, index) => (
            <motion.div
              key={month.month}
              className={`
                p-4 rounded-md cursor-pointer
                ${month.color} ${month.textColor}
                hover-elevate active-elevate-2
              `}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -2 }}
              data-testid={`timeline-month-${index}`}
            >
              <h3 className="font-bold text-sm md:text-base">
                {month.title.split(':')[0]}
              </h3>
            </motion.div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
