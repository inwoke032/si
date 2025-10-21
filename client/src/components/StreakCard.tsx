import { Flame, Trophy, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import type { StreakData } from "@shared/schema";

interface StreakCardProps {
  streakData: StreakData;
}

export function StreakCard({ streakData }: StreakCardProps) {
  return (
    <Card className="hover-elevate">
      <CardContent className="p-6">
        <div className="grid grid-cols-3 gap-4">
          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex justify-center mb-2">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-full">
                <Flame className="w-6 h-6 text-orange-500" />
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-primary">
              {streakData.currentStreak}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Racha Actual
            </div>
          </motion.div>

          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex justify-center mb-2">
              <div className="p-3 bg-amber-100 dark:bg-amber-900/20 rounded-full">
                <Trophy className="w-6 h-6 text-amber-500" />
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-secondary">
              {streakData.longestStreak}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Mejor Racha
            </div>
          </motion.div>

          <motion.div 
            className="text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="flex justify-center mb-2">
              <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-full">
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              </div>
            </div>
            <div className="text-2xl md:text-3xl font-bold text-chart-1">
              {streakData.totalTasksCompleted}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              Total Tareas
            </div>
          </motion.div>
        </div>
      </CardContent>
    </Card>
  );
}
