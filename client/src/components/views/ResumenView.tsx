import { TimelineCard } from "@/components/TimelineCard";
import { ChartCard } from "@/components/ChartCard";
import { MonthlyFocusCard } from "@/components/MonthlyFocusCard";
import { StreakCard } from "@/components/StreakCard";
import { motion } from "framer-motion";
import type { StreakData } from "@shared/schema";

interface ResumenViewProps {
  streakData: StreakData;
  currentDate: Date;
}

export function ResumenView({ streakData, currentDate }: ResumenViewProps) {
  return (
    <motion.div
      className="space-y-6 md:space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      <StreakCard streakData={streakData} />
      
      <TimelineCard />
      
      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        <ChartCard />
        <MonthlyFocusCard date={currentDate} />
      </div>
    </motion.div>
  );
}
