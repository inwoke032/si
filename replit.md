# Plan de Pasantía Interactivo - PWA

## 📋 Descripción del Proyecto

Una aplicación web progresiva (PWA) moderna y altamente interactiva diseñada para ayudar a estudiantes a planificar y seguir su camino hacia una pasantía en Inteligencia Artificial. La aplicación preserva exactamente el calendario y horario original del usuario, pero con mejoras significativas en interactividad, funcionalidad offline y experiencia de usuario.

## 🎨 Paleta de Colores "Tierra Suave"

- **Primary**: #E8A87C (terracotta cálido)
- **Secondary**: #C38D9E (mauve suave)
- **Background**: #FDFBF8 (blanco cálido)
- **Surface**: #F3E9E2 (beige claro)

Esta paleta fue diseñada para crear una experiencia motivacional y acogedora que inspire al usuario en su camino de aprendizaje.

## ✨ Características Principales

### 1. Vista Resumen Mensual
- Timeline interactivo de 12 meses con fases de aprendizaje
- Gráfico de distribución del tiempo semanal (Chart.js)
- Card de enfoque mensual con descripción y objetivos
- Sistema de gamificación con racha de días consecutivos

### 2. Roadmap de Estudio
- 4 pilares fundamentales con acordeones expandibles
- Checkboxes para marcar progreso en cada sección
- Contenido detallado sobre Matemáticas, Programación, Teoría de IA y Ruta de Estudio

### 3. Calendario Interactivo
- Navegación mensual fluida con animaciones
- Indicadores visuales de tareas completadas por día
- Resaltado del día actual
- Rango de fechas: 20 octubre 2025 - 19 octubre 2026

### 4. Vista Mi Día a Día
- Horario semanal completo preservado del diseño original
- Checkboxes interactivos para marcar actividades completadas
- Tooltips con detalles y recursos para cada tarea
- Plan de estudio Python dinámico que cambia semanalmente
- Navegación entre días con flechas

### 5. Sistema de Gamificación
- **Racha Actual**: Contador de días consecutivos completando tareas
- **Mejor Racha**: Record personal de días consecutivos
- **Total de Tareas**: Contador acumulativo de todas las tareas completadas
- Animaciones de celebración al completar objetivos

### 6. PWA Completa
- Instalable en cualquier dispositivo (móvil, tablet, desktop)
- Funciona 100% offline después de primera carga
- Service Worker con estrategias de cache inteligentes
- Manifest.json optimizado con íconos en múltiples tamaños
- Soporte para notificaciones push (preparado para futuro)

### 7. Modo Oscuro/Claro
- Toggle animado en el header
- Transiciones suaves entre temas
- Preferencia guardada en localStorage
- Todos los componentes adaptan colores automáticamente

### 8. Exportación de Datos
- **JSON**: Respaldo completo de datos
- **PDF**: Reporte visual del plan de pasantía
- **iCal**: Importación a Google Calendar/Outlook

## 🏗️ Arquitectura Técnica

### Frontend Stack
- **React 18** con TypeScript para type safety
- **Tailwind CSS** con configuración personalizada de colores
- **Framer Motion** para animaciones fluidas
- **Chart.js** para visualizaciones de datos
- **shadcn/ui** para componentes base consistentes
- **Vite** como build tool optimizado

### State Management
- **React Context** para tema (dark/light mode)
- **Custom Hooks** para localStorage persistence:
  - `useLocalStorage` - Wrapper genérico para localStorage
  - `useTaskProgress` - Manejo de tareas y rachas
- **Zustand** podría agregarse en futuro para state más complejo

### Persistencia de Datos
- **localStorage** para todos los datos del usuario:
  - Progreso de tareas (`taskProgress`)
  - Datos de racha (`streakData`)
  - Roadmap completado (`roadmap-completed`)
  - Preferencia de tema (`theme`)
- No requiere backend para funcionalidad básica
- Los datos persisten entre sesiones y offline

### PWA Implementation
- **Service Worker** con estrategias de cache:
  - Cache-first para assets estáticos
  - Network-first para API calls (futuro)
  - Offline fallback page
- **Manifest.json** con:
  - Íconos 192x192 y 512x512
  - `display: standalone` para app-like experience
  - Theme color matching con paleta

## 📂 Estructura de Archivos

```
client/
├── src/
│   ├── components/
│   │   ├── Header.tsx              # Header con logo y theme toggle
│   │   ├── Navigation.tsx          # Pills de navegación animadas
│   │   ├── StreakCard.tsx          # Card de gamificación
│   │   ├── TimelineCard.tsx        # Timeline de 12 meses
│   │   ├── ChartCard.tsx           # Gráfico Chart.js
│   │   ├── MonthlyFocusCard.tsx    # Enfoque mensual
│   │   ├── ExportDialog.tsx        # Modal de exportación
│   │   └── views/
│   │       ├── ResumenView.tsx     # Vista resumen
│   │       ├── RoadmapView.tsx     # Vista roadmap
│   │       ├── CalendarView.tsx    # Vista calendario
│   │       └── DayView.tsx         # Vista día a día
│   ├── contexts/
│   │   └── ThemeContext.tsx        # Context para dark/light mode
│   ├── hooks/
│   │   ├── useLocalStorage.ts      # Hook genérico localStorage
│   │   └── useTaskProgress.ts      # Hook para tareas y rachas
│   ├── lib/
│   │   └── calendar-data.ts        # Datos del calendario y horario
│   └── pages/
│       └── HomePage.tsx            # Página principal
├── index.html                      # HTML con meta tags PWA
└── public/
    ├── manifest.json               # PWA manifest
    └── icons/                      # Íconos 192x192 y 512x512
```

## 🎯 Datos Preservados del Original

### Horario Semanal
- **7 días** con horarios específicos para cada día
- **Tareas focus** marcadas (Estudio Python, Anki, Proyectos, etc.)
- **Descripción detallada** de cada actividad

### Plan de Estudio Python
- **48 semanas** de contenido programado
- **Temas progresivos**: Fundamentos → ML Clásico → Deep Learning → Preparación
- **Integración dinámica** en vista diaria según fecha actual

### Roadmap de Estudio
- **4 secciones principales** con contenido completo
- **Descripción de pilares**: Matemáticas, Programación, Teoría IA
- **Ruta sugerida de 6-12 meses** con fases

### Enfoque Mensual
- **12 meses** de octubre 2025 a septiembre 2026
- **Descripción específica** de objetivos para cada mes
- **Código de colores** por fase (naranja, ámbar, amarillo, lima)

### Distribución del Tiempo
- **7 categorías** de estudio con horas asignadas
- **Visualización en gráfico** de donut con Chart.js
- **Colores distintivos** para cada categoría

## 🚀 Deployment en GitHub Pages

### Setup Automático
1. Push del código a GitHub
2. GitHub Actions build automático (.github/workflows/deploy.yml)
3. Deploy a GitHub Pages
4. App disponible en `https://[usuario].github.io/[repo]/`

### Optimizaciones para GitHub Pages
- Base path configurado en Vite
- Assets path relatives
- Service worker scope correcto
- Manifest start_url adaptado

## 🔮 Próximas Mejoras (Futuras)

### Backend & Sync
- API endpoints para sincronización multi-dispositivo
- PostgreSQL para backup en servidor
- User authentication con Replit Auth

### Notificaciones
- Sistema de notificaciones push implementado
- Recordatorios programables para tareas
- Configuración de horarios de notificaciones

### Analytics & Insights
- Gráficos de tendencia de progreso
- Predicciones basadas en comportamiento
- Sugerencias de optimización de tiempo

### Social Features
- Compartir progreso con mentores
- Colaboración en proyectos
- Leaderboard de rachas (opcional)

## 📝 Recent Changes (Octubre 2025)

- ✅ Schema TypeScript completo definido
- ✅ Todos los componentes React creados con design system
- ✅ ThemeProvider con dark/light mode
- ✅ Sistema de localStorage con hooks personalizados
- ✅ Gamificación con racha implementada
- ✅ PWA manifest y configuración completa
- ✅ Animaciones Framer Motion en todas las vistas
- ✅ Preservación exacta de calendario y horario original
- ✅ GitHub Actions workflow para deployment

## 🎓 User Preferences

- **Idioma preferido**: Español (es)
- **Tema inicial**: Light mode (con opción dark mode)
- **Horario de estudio**: Lun-Vie (6 AM - 11 PM), Sáb-Dom (2 PM - 12 AM)
- **Enfoque principal**: Preparación para pasantía en IA
- **Duración del plan**: 12 meses (20 oct 2025 - 19 oct 2026)

## 🔧 Comandos Útiles

```bash
# Desarrollo local
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
```

## 🌟 Design Principles

1. **Motivational Warmth** - Colores cálidos y mensajes positivos
2. **Effortless Navigation** - Navegación intuitiva con 4 vistas principales
3. **Touch-First** - Optimizado para interacción táctil
4. **Offline Resilience** - Funciona sin conexión después de primera carga
5. **Progressive Disclosure** - Información organizada en niveles jerárquicos
