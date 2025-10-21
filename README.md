# Plan de Pasantía Interactivo - PWA

Una aplicación web progresiva (PWA) completa para planificar y seguir tu camino hacia una pasantía en Inteligencia Artificial.

## ✨ Características

- 📅 **Calendario Interactivo** - Navega por meses y visualiza tu plan de estudio
- 📊 **Dashboard de Progreso** - Visualiza tu avance con gráficos y métricas
- 🔥 **Sistema de Rachas** - Gamificación con contador de días consecutivos
- 📚 **Roadmap de Estudio** - Guía detallada con 3 pilares fundamentales
- ✅ **Seguimiento de Tareas** - Marca actividades completadas con checkboxes interactivos
- 🌓 **Modo Oscuro/Claro** - Cambia entre temas con un clic
- 📱 **PWA Completa** - Instalable en móvil y desktop, funciona offline
- 📥 **Exportación de Datos** - Descarga tu plan en JSON, PDF o iCal
- 🎨 **Animaciones Suaves** - Experiencia visual pulida con Framer Motion

## 🚀 Desplegar en GitHub Pages

### Opción 1: Configuración Automática (Recomendada)

1. **Haz fork de este repositorio** en tu cuenta de GitHub

2. **Habilita GitHub Pages:**
   - Ve a Settings → Pages
   - En "Source", selecciona "GitHub Actions"

3. **Ejecuta el workflow:**
   - Ve a la pestaña "Actions"
   - El workflow se ejecutará automáticamente en cada push a `main`
   - Tu app estará disponible en `https://[tu-usuario].github.io/[nombre-repo]/`

### Opción 2: Build Manual

```bash
# Instala dependencias
npm install

# Build para producción
npm run build

# La carpeta dist/public contiene los archivos listos para desplegar
```

Luego sube los archivos de `dist/public` a GitHub Pages manualmente.

## 🛠️ Desarrollo Local

```bash
# Instala dependencias
npm install

# Inicia el servidor de desarrollo
npm run dev

# La aplicación estará disponible en http://localhost:5000
```

## 📦 Tecnologías

- **React 18** - Framework UI
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animaciones
- **Chart.js** - Visualizaciones
- **Vite** - Build tool
- **shadcn/ui** - Component library

## 📱 PWA Features

- ✅ Instalable en dispositivos móviles y desktop
- ✅ Funciona completamente offline después de la primera carga
- ✅ Service Worker con cache inteligente
- ✅ Manifest.json configurado
- ✅ Íconos optimizados para todas las plataformas

## 🎯 Estructura del Proyecto

```
.
├── client/              # Frontend React
│   ├── src/
│   │   ├── components/  # Componentes React
│   │   ├── pages/       # Páginas
│   │   ├── hooks/       # Custom hooks
│   │   ├── lib/         # Utilidades y datos
│   │   └── contexts/    # React contexts
├── public/              # Assets estáticos
│   ├── icons/           # Íconos PWA
│   └── manifest.json    # PWA manifest
├── server/              # Backend Express
└── shared/              # Código compartido
```

## 📄 Licencia

MIT License - Siéntete libre de usar este proyecto para tu propio aprendizaje.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:
1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 🌟 Créditos

Desarrollado con ❤️ usando React, TypeScript y Tailwind CSS.
Diseño inspirado en la paleta "Tierra Suave" para una experiencia cálida y motivadora.
