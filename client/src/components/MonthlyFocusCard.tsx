import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { monthlyFocusData } from "@/lib/calendar-data";

interface MonthlyFocusCardProps {
  date: Date;
}

export function MonthlyFocusCard({ date }: MonthlyFocusCardProps) {
  const key = `${date.getFullYear()}-${date.getMonth()}`;
  const focus = monthlyFocusData[key];

  if (!focus) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="hover-elevate">
        <CardContent className="p-6">
          <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">
            {focus.title}
          </h2>
          <p className="text-sm md:text-base text-foreground leading-relaxed">
            {focus.description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
