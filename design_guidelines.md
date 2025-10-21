# Design Guidelines: Plan de Pasantía Interactivo PWA

## Design Approach

**Selected Approach:** Hybrid - Design System Foundation + Custom Interactive Elements

**Rationale:** This is a productivity/planning tool requiring efficiency and learnability, but with a warm, motivational character. We'll use Material Design 3 principles for component behavior and interactions, while maintaining the existing "Tierra Suave" color palette for brand consistency and emotional connection.

**Key Design Principles:**
1. **Motivational Warmth:** Celebrate progress with subtle animations and positive feedback
2. **Effortless Navigation:** Clear information hierarchy with instant access to all views
3. **Touch-First Interactions:** Optimized for mobile with intuitive gestures
4. **Offline Resilience:** Visual indicators of sync status and offline capability

---

## Core Design Elements

### A. Color Palette

**Light Mode:**
- **Primary:** 27 64% 69% (warm terracotta #E8A87C)
- **Secondary:** 340 32% 68% (soft mauve #C38D9E)
- **Background:** 40 50% 98% (warm off-white #FDFBF8)
- **Surface:** 30 33% 93% (light beige #F3E9E2)
- **Text Primary:** 0 0% 29% (dark gray #4A4A4A)
- **Text Secondary:** 0 0% 54% (medium gray)
- **Success:** 142 71% 45% (green for completed tasks)
- **Warning:** 45 93% 57% (amber for upcoming deadlines)

**Dark Mode:**
- **Primary:** 27 64% 69% (same terracotta, works well on dark)
- **Secondary:** 340 32% 68% (same mauve)
- **Background:** 0 0% 12% (deep charcoal #1F1F1F)
- **Surface:** 0 0% 16% (elevated charcoal #292929)
- **Surface Elevated:** 0 0% 20% (cards/modals #333333)
- **Text Primary:** 0 0% 95% (light gray)
- **Text Secondary:** 0 0% 70% (medium gray)

### B. Typography

**Font Stack:** Inter (existing, excellent choice for productivity apps)

**Hierarchy:**
- **Hero/Page Titles:** 2.5rem (40px), font-weight 700, letter-spacing -0.02em
- **Section Headings:** 1.75rem (28px), font-weight 600
- **Card Titles:** 1.25rem (20px), font-weight 600
- **Body Large:** 1rem (16px), font-weight 500 (for interactive elements)
- **Body Regular:** 1rem (16px), font-weight 400, line-height 1.6
- **Labels/Meta:** 0.875rem (14px), font-weight 500
- **Captions:** 0.75rem (12px), font-weight 400

### C. Layout System

**Spacing Units:** Use Tailwind units of 1, 2, 4, 6, 8, 12, 16, 20 for consistent rhythm
- **Component padding:** p-4 (mobile), p-6 (tablet), p-8 (desktop)
- **Section spacing:** mb-8 (mobile), mb-12 (desktop)
- **Grid gaps:** gap-4 (default), gap-6 (spacious layouts)
- **Container max-width:** max-w-7xl for main content

**Responsive Breakpoints:**
- Mobile-first approach
- Tablet (md:): 768px - 2 column layouts emerge
- Desktop (lg:): 1024px - Full multi-column layouts, sidebar navigation option

### D. Component Library

**Navigation:**
- Pill-style segmented control (existing pattern, enhance with smooth slide indicator)
- Bottom navigation bar on mobile for quick view switching
- Hamburger menu for settings, export, and secondary functions

**Calendar:**
- Month view: 7-column grid with day numbers, visual indicators for tasks
- Week view: Horizontal timeline with hourly slots
- Day cells: Rounded corners, subtle hover states, active state with primary color fill
- Interactive: Tap to select, long-press for multi-select, swipe between months

**Task Cards:**
- Rounded-lg (12px radius), shadow-sm elevation
- Left accent border using category colors
- Checkbox with smooth check animation (scale + fade)
- Expandable details on tap with slide-down animation
- Time indicators with clock icon

**Progress Indicators:**
- Circular progress rings for monthly goals (using Chart.js or custom SVG)
- Linear progress bars for daily completion (gradient from secondary to primary)
- Streak counter with flame icon and animated increment

**Dashboard Widgets:**
- Glass morphism cards: backdrop-blur-md, bg-white/80 (light) or bg-surface/80 (dark)
- Hover lift effect: hover:shadow-lg, hover:-translate-y-1 transition
- Chart.js visualizations with custom color schemes matching palette

**Modals/Sheets:**
- Bottom sheets on mobile (slide up from bottom)
- Centered modals on desktop with backdrop blur
- Smooth spring animations using CSS transitions

**Interactive Elements:**
- Drag handles: Vertical dots icon, subtle gray, appears on hover
- Floating Action Button (FAB): Primary color, fixed bottom-right, shadow-xl
- Toggle switches: Primary color when active, smooth slide animation
- Ripple effects on tap (Material Design inspired)

### E. Animations

**Use Sparingly, Purposefully:**
- **Page transitions:** Fade + slight slide (150ms, ease-out)
- **Task completion:** Checkbox scale + confetti particles (celebrate wins!)
- **Progress updates:** Smooth counter animations (animate from previous to new value)
- **Calendar navigation:** Slide left/right for month changes (200ms)
- **Card interactions:** Subtle lift on hover (100ms), expand on click (200ms)
- **Loading states:** Skeleton screens with shimmer effect (not spinners)

**No Animations:**
- Background decorations
- Continuous loops
- Distracting movements during reading/planning

---

## PWA-Specific Design

**Install Prompt:**
- Custom banner at top on first visit (dismissible, remembers preference)
- Clear value proposition: "Install for offline access and notifications"
- Native install button in settings menu

**Offline Indicator:**
- Subtle toast notification when going offline: "Working offline" with cloud-off icon
- Sync status indicator in header (cloud icon with pulse when syncing)

**App Icon:**
- Use existing 512x512 icon
- Ensure icon works on both light and dark backgrounds
- Maskable icon variant for adaptive icons

**Splash Screen:**
- Background matches theme color (#E8A87C for light, #1F1F1F for dark)
- App name in Inter font
- Simple logo/icon centered

---

## Interactive Features Design

**Dark Mode Toggle:**
- Sun/moon icon toggle in header (top-right)
- Instant theme switch with smooth color transitions (200ms)
- Preference saved to localStorage

**Task Management:**
- Swipe right on task to mark complete (green checkmark appears)
- Swipe left to defer to tomorrow (calendar icon appears)
- Tap task for full details modal with resources and notes

**Gamification:**
- Daily streak counter: Card with number, flame icon, subtitle "days in a row"
- Progress rings: Weekly goal completion in primary color
- Milestone celebrations: Full-screen confetti animation + encouraging message

**Notifications:**
- Settings panel for notification preferences
- Visual: Bell icon with badge count for unread reminders
- Notification card design: White (light) or surface (dark), left accent, action buttons

**Export Functionality:**
- Export button in settings with dropdown: "PDF Report", "iCal Export", "JSON Backup"
- Loading state during export with progress indicator
- Success toast: "Calendar exported successfully" with download icon

---

## Images

**No hero image required** - This is a utility app where functionality takes precedence over marketing imagery.

**Icon Usage:**
- Lucide icons or Heroicons for UI elements (24px standard size)
- Larger icons (48px) for empty states and celebration screens
- Category icons for different task types (book for study, code bracket for programming, etc.)

---

## Quality Standards

**Performance:**
- Lazy load Chart.js only when needed
- Optimize service worker caching strategy
- Minimize CSS animations (use transform and opacity only)

**Accessibility:**
- ARIA labels on all interactive elements
- Keyboard navigation for all features
- Focus indicators with primary color ring
- Minimum contrast ratio 4.5:1 for text

**Touch Targets:**
- Minimum 44x44px for all interactive elements
- Adequate spacing between tap targets (8px minimum)
- Visual feedback on touch (slight opacity change)

This design creates a warm, motivational productivity app that feels native on any device while maintaining easy deployment to GitHub Pages.