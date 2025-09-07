# Metadatos y Configuración de la Aplicación

## 📋 Resumen

Este documento describe la configuración de metadatos, iconos y SEO para la aplicación de Biblioteca Parroquial.

## 🎨 Iconos de la Aplicación

### Iconos Generados

La aplicación incluye los siguientes iconos en diferentes tamaños:

- **favicon.ico** - Icono principal del navegador
- **favicon-16x16.png** - Icono de 16x16 píxeles
- **favicon-32x32.png** - Icono de 32x32 píxeles
- **apple-touch-icon.png** - Icono para dispositivos Apple (180x180)
- **icon-192x192.png** - Icono para PWA (192x192)
- **icon-512x512.png** - Icono para PWA (512x512)
- **safari-pinned-tab.svg** - Icono para Safari (SVG)

### Generación de Iconos

Para generar los iconos, ejecuta:

```bash
npm run generate-icons
```

Este comando utiliza Sharp para generar todos los iconos necesarios con el diseño "BP" (Biblioteca Parroquial) en color azul (#5bbad5).

## 🔍 Metadatos SEO

### Configuración Principal

Los metadatos están centralizados en `src/lib/metadata.ts` e incluyen:

- **Título**: "Biblioteca Parroquial - Sistema de Gestión"
- **Descripción**: Descripción completa del sistema
- **Palabras clave**: Términos relevantes para SEO
- **Open Graph**: Metadatos para redes sociales
- **Twitter Cards**: Metadatos para Twitter
- **Robots**: Configuración de indexación

### Metadatos por Página

Para páginas específicas, usa la función `generatePageMetadata()`:

```typescript
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata(
  'Título de la Página',
  'Descripción específica',
  ['palabra1', 'palabra2']
)
```

## 🌐 Configuración de la Aplicación

### Manifest Web App

El archivo `public/site.webmanifest` configura la aplicación como PWA:

- **Nombre**: Biblioteca Parroquial - Sistema de Gestión
- **Nombre corto**: Biblioteca Parroquial
- **Tema**: Azul (#5bbad5)
- **Modo**: Standalone
- **Orientación**: Portrait-primary

### Robots.txt

El archivo `public/robots.txt` configura la indexación:

- Permite indexación general
- Incluye sitemap
- Bloquea áreas administrativas

### Sitemap.xml

El archivo `public/sitemap.xml` incluye:

- Página principal
- Catálogo de libros
- Página de búsqueda

## 🎨 Tema y Colores

### Colores Principales

- **Primario**: #5bbad5 (Azul claro)
- **Secundario**: #2c5aa0 (Azul oscuro)
- **Acento**: #f4a261 (Naranja)
- **Fondo**: #ffffff (Blanco)
- **Texto**: #212529 (Gris oscuro)

### Configuración del Tema

Los temas claro y oscuro están configurados en `src/lib/theme.ts` con:

- Colores de fondo y texto
- Colores de componentes UI
- Colores de estado (hover, focus, etc.)
- Colores de accesibilidad

## 📱 Configuración PWA

### Características PWA

- **Instalable**: La aplicación se puede instalar como app nativa
- **Offline**: Funciona sin conexión (futuro)
- **Responsive**: Adaptable a diferentes dispositivos
- **Iconos**: Iconos en múltiples tamaños
- **Manifest**: Configuración completa de PWA

### Instalación

Los usuarios pueden instalar la aplicación desde:

1. **Chrome/Edge**: Botón de instalación en la barra de direcciones
2. **Safari**: Botón "Agregar a pantalla de inicio"
3. **Firefox**: Botón de instalación en el menú

## 🔧 Comandos Útiles

```bash
# Generar iconos
npm run generate-icons

# Desarrollo
npm run dev

# Construcción
npm run build

# Linting
npm run lint
```

## 📊 Monitoreo SEO

### Herramientas Recomendadas

1. **Google Search Console**: Monitorear indexación
2. **Google PageSpeed Insights**: Rendimiento
3. **Lighthouse**: Auditoría completa
4. **GTmetrix**: Análisis de velocidad

### Métricas Importantes

- **Core Web Vitals**: LCP, FID, CLS
- **SEO Score**: Puntuación de SEO
- **Accessibility**: Accesibilidad
- **Best Practices**: Mejores prácticas

## 🚀 Próximas Mejoras

- [ ] Iconos personalizados con logo de la parroquia
- [ ] Metadatos dinámicos basados en contenido
- [ ] Sitemap automático
- [ ] Configuración de analytics
- [ ] Optimización de imágenes
- [ ] Configuración de caché
- [ ] Configuración de CDN

## 📝 Notas

- Los iconos se generan automáticamente con Sharp
- Los metadatos están centralizados para fácil mantenimiento
- La configuración PWA permite instalación como app nativa
- Los colores siguen las mejores prácticas de accesibilidad
