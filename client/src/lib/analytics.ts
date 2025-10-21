export interface ProgressStats {
  totalTasks: number;
  completedTasks: number;
  completionRate: number;
  daysActive: number;
  averageTasksPerDay: number;
}

export function calculateProgressStats(taskProgress: Record<string, boolean>): ProgressStats {
  const completedTasks = Object.values(taskProgress).filter(Boolean).length;
  const totalTasks = Object.keys(taskProgress).length;
  const completionRate = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  
  const uniqueDays = new Set(
    Object.keys(taskProgress)
      .filter(key => taskProgress[key])
      .map(key => key.split('-')[0])
  ).size;
  
  const averageTasksPerDay = uniqueDays > 0 ? completedTasks / uniqueDays : 0;
  
  return {
    totalTasks,
    completedTasks,
    completionRate: Math.round(completionRate * 10) / 10,
    daysActive: uniqueDays,
    averageTasksPerDay: Math.round(averageTasksPerDay * 10) / 10,
  };
}

export function getWeeklyProgress(taskProgress: Record<string, boolean>): number[] {
  const weekData = Array(7).fill(0);
  
  Object.entries(taskProgress).forEach(([key, completed]) => {
    if (completed) {
      const [dateStr] = key.split('-');
      const date = new Date(dateStr);
      const dayOfWeek = date.getDay();
      weekData[dayOfWeek]++;
    }
  });
  
  return weekData;
}

export function getMonthlyProgress(taskProgress: Record<string, boolean>, year: number, month: number): number {
  let completed = 0;
  
  Object.entries(taskProgress).forEach(([key, isCompleted]) => {
    if (isCompleted) {
      const [dateStr] = key.split('-');
      const date = new Date(dateStr);
      if (date.getFullYear() === year && date.getMonth() === month) {
        completed++;
      }
    }
  });
  
  return completed;
}
