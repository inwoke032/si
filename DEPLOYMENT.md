# Guía de Despliegue para GitHub Pages

Este documento explica cómo desplegar el Plan de Pasantía Interactivo en GitHub Pages.

## 🚀 Despliegue Automático (Recomendado)

### Configuración Inicial

1. **Sube tu código a GitHub:**
   ```bash
   git add .
   git commit -m "Setup for GitHub Pages deployment"
   git push origin main
   ```

2. **Habilita GitHub Pages:**
   - Ve a tu repositorio en GitHub
   - Settings → Pages
   - En "Source", selecciona **"GitHub Actions"**

3. **El workflow se ejecutará automáticamente:**
   - Cada vez que hagas push a `main`
   - También puedes ejecutarlo manualmente desde la pestaña Actions
   - Tu app estará disponible en: `https://[tu-usuario].github.io/program/`

### Verificación del Despliegue

1. Ve a la pestaña **Actions** en GitHub
2. Verifica que el workflow "Deploy to GitHub Pages" se completó exitosamente ✅
3. Visita tu URL de GitHub Pages
4. La aplicación debería cargar completamente

## 🔧 Build Manual (Desarrollo)

### Probar el Build Localmente

```bash
# Instalar dependencias
npm install

# Build para GitHub Pages
npm run build:gh-pages

# Preview del build
npm run preview
```

Abre http://localhost:5000 para ver el preview del build.

### Verificar el Build

Después del build, verifica que:
- ✅ La carpeta `dist/public` existe
- ✅ Contiene `index.html` y otros archivos
- ✅ La carpeta `assets/` tiene los archivos JS y CSS
- ✅ Los íconos están en `icons/`

## 📁 Estructura del Build

```
dist/public/
├── index.html
├── manifest.json
├── sw.js
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── assets/
    ├── index-[hash].js
    └── index-[hash].css
```

## 🐛 Solución de Problemas

### El sitio no carga en GitHub Pages

1. **Verifica la URL base:**
   - La URL debe ser: `https://[usuario].github.io/program/`
   - Nota el `/program/` al final

2. **Revisa el workflow:**
   - Ve a Actions → Deploy to GitHub Pages
   - Verifica que no haya errores en el build

3. **Limpia la caché:**
   - Presiona Ctrl+Shift+R (Windows/Linux) o Cmd+Shift+R (Mac)
   - Esto hace un "hard refresh" del navegador

### Los assets no cargan (404 errors)

1. **Verifica el base path en vite.config.ts:**
   ```typescript
   base: process.env.GITHUB_PAGES === 'true' ? '/program/' : '/'
   ```

2. **Asegúrate de usar el script correcto:**
   ```bash
   npm run build:gh-pages
   ```
   NO uses `npm run build` para GitHub Pages.

### El manifest.json da error 404

1. **Verifica que use rutas relativas:**
   - `start_url: "."`
   - `scope: "."`
   - `src: "icons/icon-192.png"` (sin `/` al inicio)

### La PWA no se instala

1. **Verifica que estés usando HTTPS:**
   - GitHub Pages usa HTTPS automáticamente ✅

2. **Revisa el manifest.json:**
   - Debe cargarse correctamente (sin 404)
   - Los íconos deben existir

3. **Verifica el Service Worker:**
   - Abre DevTools → Application → Service Workers
   - Debería estar registrado y activo

## ✅ Checklist de Despliegue

Antes de desplegar, verifica:

- [ ] El build local funciona: `npm run build:gh-pages && npm run preview`
- [ ] No hay errores en la consola del navegador
- [ ] El calendario muestra las fechas correctamente
- [ ] El horario semanal es el correcto
- [ ] Las tareas se pueden marcar/desmarcar
- [ ] El tema oscuro/claro funciona
- [ ] El manifest.json se carga sin errores
- [ ] Los íconos existen y son accesibles
- [ ] El workflow de GitHub Actions está configurado
- [ ] GitHub Pages está habilitado en Settings

## 🔄 Actualizar el Sitio

Para actualizar tu sitio después de hacer cambios:

```bash
git add .
git commit -m "Descripción de los cambios"
git push origin main
```

El workflow automáticamente:
1. Instalará las dependencias
2. Ejecutará el build
3. Desplegará a GitHub Pages
4. Tu sitio se actualizará en ~2-3 minutos

## 📊 Monitoreo

### Ver el estado del despliegue:
1. Ve a Actions en GitHub
2. Selecciona el workflow más reciente
3. Revisa los logs de cada paso

### Ver analytics (futuro):
- GitHub Pages no provee analytics por defecto
- Considera agregar Google Analytics o similar si necesitas métricas

## 🌐 Dominio Personalizado (Opcional)

Si quieres usar un dominio personalizado:

1. Ve a Settings → Pages
2. En "Custom domain", ingresa tu dominio
3. Configura los DNS según las instrucciones de GitHub
4. Actualiza `base` en vite.config.ts a `'/'`

## 💡 Tips

- **Caché del navegador:** Si no ves los cambios, usa Ctrl+Shift+R
- **Service Worker:** Si la PWA no actualiza, ve a DevTools → Application → Service Workers → Unregister
- **Base path:** Recuerda que GitHub Pages usa `/program/` en la URL
- **Testing local:** Siempre prueba con `npm run preview` antes de desplegar

## 🆘 Soporte

Si tienes problemas:
1. Revisa los logs en la pestaña Actions
2. Verifica la consola del navegador (F12)
3. Compara con la checklist de arriba
4. Revisa que todas las rutas sean relativas
