# 📘 Instrucciones Rápidas para GitHub Pages

## ✨ Tu aplicación ya está lista para GitHub Pages

### Paso 1: Sube el código a GitHub

```bash
git add .
git commit -m "Configuración completa para GitHub Pages"
git push origin main
```

### Paso 2: Activa GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings** (Configuración)
3. En el menú lateral, click en **Pages**
4. En "Source" (Fuente), selecciona **GitHub Actions**
5. ¡Listo! El despliegue es automático

### Paso 3: Espera el despliegue

- Ve a la pestaña **Actions** en tu repositorio
- Verás el workflow "Deploy to GitHub Pages" ejecutándose
- Espera 2-3 minutos hasta que termine ✅

### Paso 4: Visita tu sitio

Tu aplicación estará disponible en:
```
https://[tu-usuario].github.io/program/
```

Por ejemplo: `https://inwoke032.github.io/program/`

## 🎯 ¡Y eso es todo!

Cada vez que hagas cambios y hagas `git push`, tu sitio se actualizará automáticamente.

## 📱 Instalar como PWA

Una vez en GitHub Pages, puedes:
- **En móvil:** Usar "Agregar a pantalla de inicio"
- **En desktop:** Hacer click en el ícono de instalación en la barra de direcciones
- ¡La app funcionará offline!

## ❓ ¿Problemas?

Si el sitio no carga:
1. Presiona **Ctrl+Shift+R** para hacer hard refresh
2. Verifica que GitHub Pages esté activado en Settings
3. Revisa que el workflow terminó exitosamente en Actions

---
Para más detalles, consulta `DEPLOYMENT.md`
