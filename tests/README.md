# Tests para Plan de Pasantía Interactivo

## Tests Básicos

### Tests Funcionales

#### 1. Verificación del Calendario
- [ ] El calendario muestra correctamente los 12 meses del plan
- [ ] Las fechas van desde 20 octubre 2025 hasta 19 octubre 2026
- [ ] Se puede navegar entre meses usando las flechas
- [ ] El día actual está resaltado correctamente

#### 2. Verificación del Horario
- [ ] El horario semanal se muestra completo (7 días)
- [ ] Cada día tiene las tareas correctas
- [ ] Los horarios coinciden con el plan original
- [ ] Las tareas marcadas como "focus" están resaltadas

#### 3. Verificación del Plan de Estudio Python
- [ ] El plan de 48 semanas se muestra correctamente
- [ ] El tema de la semana actual corresponde a la fecha
- [ ] Los temas progresan correctamente (Fundamentos → ML → Deep Learning)

#### 4. Verificación de la Funcionalidad de Tareas
- [ ] Se pueden marcar/desmarcar tareas con los checkboxes
- [ ] El progreso se guarda en localStorage
- [ ] El contador de rachas funciona correctamente
- [ ] Las tareas completadas se reflejan en el calendario

#### 5. Verificación del Roadmap
- [ ] Los 4 pilares se muestran correctamente
- [ ] Los acordeones se expanden/contraen
- [ ] Se puede marcar progreso en cada sección

#### 6. Verificación de PWA
- [ ] El manifest.json está correctamente configurado
- [ ] Los íconos existen en public/icons/
- [ ] El service worker se registra correctamente
- [ ] La app funciona offline después de la primera carga

#### 7. Verificación de Temas
- [ ] El toggle de tema oscuro/claro funciona
- [ ] La preferencia se guarda en localStorage
- [ ] Todos los componentes se adaptan al tema

#### 8. Verificación de Exportación
- [ ] El diálogo de exportación se abre
- [ ] Se puede exportar a JSON
- [ ] Se puede exportar a PDF (preparado)
- [ ] Se puede exportar a iCal (preparado)

### Tests de GitHub Pages

#### 1. Build para GitHub Pages
```bash
npm run build:gh-pages
```
- [ ] El build se completa sin errores
- [ ] Los archivos se generan en dist/public/
- [ ] El base path está configurado correctamente
- [ ] Los assets se cargan con rutas relativas correctas

#### 2. Verificación del Manifest
- [ ] start_url y scope usan rutas relativas
- [ ] Los íconos usan rutas relativas
- [ ] El manifest se carga correctamente en GitHub Pages

## Cómo Ejecutar los Tests

### Test Manual
1. Inicia el servidor de desarrollo: `npm run dev:frontend`
2. Abre http://localhost:5000
3. Verifica cada punto de la lista manualmente

### Test de Build
1. Ejecuta el build para GitHub Pages: `npm run build:gh-pages`
2. Verifica que no haya errores
3. Revisa los archivos generados en dist/public/

### Test de Preview
1. Ejecuta: `npm run preview`
2. Abre http://localhost:5000
3. Verifica que todo funcione igual que en desarrollo

## Resultados Esperados

✅ **Todas las funcionalidades del calendario y horario deben funcionar sin cambios**
✅ **El proyecto debe funcionar correctamente en GitHub Pages**
✅ **La PWA debe ser instalable y funcionar offline**
✅ **Los datos del usuario deben persistir en localStorage**
✅ **El tema oscuro/claro debe funcionar correctamente**

## Notas

- El calendario y horario están preservados del diseño original
- No se deben hacer cambios que afecten estas áreas
- Las mejoras solo deben agregar funcionalidad adicional
