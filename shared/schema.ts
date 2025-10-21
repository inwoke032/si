import { z } from "zod";

// Task Progress Schema
export const taskProgressSchema = z.object({
  taskId: z.string(),
  date: z.string(), // ISO date string
  completed: z.boolean(),
  completedAt: z.string().optional(),
});

export type TaskProgress = z.infer<typeof taskProgressSchema>;

// Daily Schedule Item
export const scheduleItemSchema = z.object({
  time: z.string(),
  task: z.string(),
  focus: z.boolean().optional(),
  completed: z.boolean().optional(),
});

export type ScheduleItem = z.infer<typeof scheduleItemSchema>;

// User Settings
export const userSettingsSchema = z.object({
  theme: z.enum(["light", "dark"]).default("light"),
  notifications: z.boolean().default(true),
  notificationTimes: z.array(z.string()).default([]),
  language: z.enum(["es", "en"]).default("es"),
});

export type UserSettings = z.infer<typeof userSettingsSchema>;

// Streak Data
export const streakDataSchema = z.object({
  currentStreak: z.number().default(0),
  longestStreak: z.number().default(0),
  lastCompletedDate: z.string().optional(),
  totalTasksCompleted: z.number().default(0),
});

export type StreakData = z.infer<typeof streakDataSchema>;

// Weekly Progress
export const weeklyProgressSchema = z.object({
  weekStartDate: z.string(),
  tasksCompleted: z.number().default(0),
  totalTasks: z.number().default(0),
  focusHours: z.number().default(0),
});

export type WeeklyProgress = z.infer<typeof weeklyProgressSchema>;

// Roadmap Item
export const roadmapItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  content: z.string(),
  completed: z.boolean().default(false),
});

export type RoadmapItem = z.infer<typeof roadmapItemSchema>;

// Monthly Focus
export const monthlyFocusSchema = z.object({
  month: z.string(), // Format: "YYYY-MM"
  title: z.string(),
  description: z.string(),
  color: z.string(),
  textColor: z.string(),
});

export type MonthlyFocus = z.infer<typeof monthlyFocusSchema>;

// Notification
export const notificationSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
  scheduledTime: z.string(),
  read: z.boolean().default(false),
  createdAt: z.string(),
});

export type Notification = z.infer<typeof notificationSchema>;

// Export Data
export const exportDataSchema = z.object({
  format: z.enum(["pdf", "ical", "json"]),
  dateRange: z.object({
    start: z.string(),
    end: z.string(),
  }).optional(),
});

export type ExportData = z.infer<typeof exportDataSchema>;
