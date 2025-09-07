# Sistema de Biblioteca Parroquial

Sistema de gestión de biblioteca parroquial desarrollado con Next.js 14, TypeScript y Tailwind CSS.

## 🏗️ Arquitectura del Proyecto

### Estructura de Carpetas

```
src/
├── app/                    # App Router de Next.js
│   ├── globals.css         # Estilos globales
│   ├── layout.tsx          # Layout principal
│   └── page.tsx            # Página principal
├── components/
│   ├── ui/                 # Componentes base (shadcn/ui)
│   ├── layout/             # Componentes de layout
│   │   └── Header.tsx      # Header de la aplicación
│   ├── features/           # Componentes específicos por funcionalidad
│   │   ├── books/          # Componentes relacionados con libros
│   │   │   ├── BookCard.tsx    # Tarjeta de libro
│   │   │   ├── BookForm.tsx    # Formulario de libro
│   │   │   └── BookList.tsx    # Lista de libros
│   │   ├── auth/           # Componentes de autenticación
│   │   │   ├── LoginDialog.tsx # Diálogo de login
│   │   │   └── AdminBanner.tsx # Banner de administrador
│   │   └── search/         # Componentes de búsqueda
│   │       └── SearchFilters.tsx # Filtros de búsqueda
│   └── common/             # Componentes reutilizables
├── lib/
│   ├── utils.ts            # Utilidades generales
│   └── constants.ts        # Constantes de la aplicación
├── types/
│   └── index.ts            # Definiciones de tipos TypeScript
├── contexts/
│   └── BibliotecaContext.tsx # Contexto global de la aplicación
├── hooks/                  # Custom hooks
└── data/
    └── mockData.ts         # Datos mock y configuraciones
```

## 🚀 Características

- **Gestión de Libros**: Agregar, editar, eliminar y buscar libros
- **Sistema de Autenticación**: Login para administradores
- **Filtros Avanzados**: Búsqueda por título, autor, editorial, clasificación y año
- **Interfaz Responsiva**: Diseño adaptativo para diferentes dispositivos
- **Estado Global**: Manejo de estado con React Context
- **Tipado Fuerte**: TypeScript para mayor seguridad de tipos

## 🛠️ Tecnologías Utilizadas

- **Next.js 14** - Framework de React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de CSS
- **shadcn/ui** - Componentes de UI
- **Lucide React** - Iconos
- **React Hook Form** - Manejo de formularios
- **Zod** - Validación de esquemas

## 📦 Instalación

1. Clona el repositorio
2. Instala las dependencias:
   ```bash
   npm install
   # o
   pnpm install
   ```

3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   # o
   pnpm dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador

## 🔐 Credenciales de Administrador

- **Usuario**: admin
- **Contraseña**: biblioteca2024

## 📝 Funcionalidades

### Para Usuarios Públicos
- Consultar el catálogo de libros
- Buscar libros por diferentes criterios
- Filtrar por clasificación y año
- Ver detalles de los libros

### Para Administradores
- Todas las funcionalidades públicas
- Agregar nuevos libros
- Editar libros existentes
- Eliminar libros
- Acceso a información adicional (folios)

## 🎨 Componentes Principales

### Header
- Logo y título de la biblioteca
- Botones de acceso según el rol del usuario
- Navegación principal

### SearchFilters
- Barra de búsqueda
- Filtros por clasificación y año
- Estadísticas de resultados

### BookCard
- Información del libro
- Acciones de edición/eliminación (solo admin)
- Diseño responsivo

### BookForm
- Formulario para agregar/editar libros
- Validación de campos requeridos
- Modal responsivo

## 🔄 Estado Global

El estado de la aplicación se maneja a través de `BibliotecaContext` que incluye:

- Lista de libros
- Filtros de búsqueda
- Estado de autenticación
- Modales y formularios
- Configuraciones de la aplicación

## 🚀 Próximas Mejoras

- [ ] Persistencia de datos con base de datos
- [ ] Sistema de préstamos
- [ ] Reportes y estadísticas
- [ ] Categorización automática
- [ ] Importación masiva de libros
- [ ] Sistema de notificaciones
- [ ] Modo offline
- [ ] API REST

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.
