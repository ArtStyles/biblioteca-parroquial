# 📚 Biblioteca Parroquial

Sistema de gestión de biblioteca desarrollado con Next.js 14, TypeScript y Supabase.

## ✨ Características

- 🔍 **Búsqueda avanzada** de libros por título, autor, editorial
- 📖 **Gestión completa** de libros (CRUD)
- 🔐 **Acceso administrativo** con autenticación
- 🌙 **Modo oscuro/claro** con toggle
- 📱 **Diseño responsive** y PWA ready
- 🗄️ **Base de datos** en Supabase (PostgreSQL)

## 🛠️ Tecnologías

- **Frontend:** Next.js 14, TypeScript, Tailwind CSS
- **UI Components:** Shadcn/ui
- **Base de datos:** Supabase (PostgreSQL)
- **Deployment:** Vercel
- **Estado:** React Context + useReducer

## 🚀 Deployment

El proyecto está configurado para deployment automático en Vercel:

- **Producción:** https://biblioteca-parroquial.vercel.app
- **GitHub:** https://github.com/ArtStyles/biblioteca-parroquial

## 📋 Variables de Entorno

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 🗄️ Base de Datos

La base de datos se configura automáticamente con el script SQL en `supabase/schema.sql`.

## 👨‍💻 Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Generar iconos
npm run generate-icons
```

## 📄 Licencia

MIT License