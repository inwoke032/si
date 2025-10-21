import { useLocalStorage } from './useLocalStorage';
import type { TaskProgress, StreakData } from '@shared/schema';

export function useTaskProgress() {
  const [taskProgress, setTaskProgress] = useLocalStorage<TaskProgress[]>('taskProgress', []);
  const [streakData, setStreakData] = useLocalStorage<StreakData>('streakData', {
    currentStreak: 0,
    longestStreak: 0,
    totalTasksCompleted: 0,
  });

  const isTaskCompleted = (taskId: string, date: string): boolean => {
    return taskProgress.some(t => t.taskId === taskId && t.date === date && t.completed);
  };

  const toggleTask = (taskId: string, date: string) => {
    const existing = taskProgress.find(t => t.taskId === taskId && t.date === date);
    
    if (existing) {
      setTaskProgress(prev => prev.map(t => 
        t.taskId === taskId && t.date === date
          ? { ...t, completed: !t.completed, completedAt: !t.completed ? new Date().toISOString() : undefined }
          : t
      ));
      
      if (!existing.completed) {
        updateStreak(date);
      }
    } else {
      const newTask: TaskProgress = {
        taskId,
        date,
        completed: true,
        completedAt: new Date().toISOString(),
      };
      setTaskProgress(prev => [...prev, newTask]);
      updateStreak(date);
    }
  };

  const updateStreak = (date: string) => {
    setStreakData(prev => {
      const totalCompleted = prev.totalTasksCompleted + 1;
      const today = new Date().toISOString().split('T')[0];
      const yesterday = new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split('T')[0];
      
      let newStreak = prev.currentStreak;
      
      if (!prev.lastCompletedDate || prev.lastCompletedDate === yesterday || prev.lastCompletedDate === today) {
        newStreak = prev.currentStreak + 1;
      } else {
        newStreak = 1;
      }
      
      return {
        currentStreak: newStreak,
        longestStreak: Math.max(newStreak, prev.longestStreak),
        lastCompletedDate: date,
        totalTasksCompleted: totalCompleted,
      };
    });
  };

  const getCompletedTasksForDate = (date: string): number => {
    return taskProgress.filter(t => t.date === date && t.completed).length;
  };

  return {
    taskProgress,
    streakData,
    isTaskCompleted,
    toggleTask,
    getCompletedTasksForDate,
  };
}
