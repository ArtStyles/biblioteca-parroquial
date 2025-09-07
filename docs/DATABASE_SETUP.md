# Configuración de Base de Datos - Supabase

## 🚀 Guía de Configuración

### **Paso 1: Crear Proyecto en Supabase**

1. Ve a [supabase.com](https://supabase.com)
2. Crea una cuenta gratuita
3. Crea un nuevo proyecto
4. Anota la **URL** y **API Key** del proyecto

### **Paso 2: Configurar Base de Datos**

1. Ve a la pestaña **SQL Editor** en Supabase
2. Copia y ejecuta el contenido de `supabase/schema.sql`
3. Esto creará la tabla `libros` con datos de ejemplo

### **Paso 3: Configurar Variables de Entorno**

1. Crea un archivo `.env.local` en la raíz del proyecto
2. Agrega las siguientes variables:

```env
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_api_key_de_supabase
```

### **Paso 4: Configurar Vercel**

1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. En la configuración del proyecto, agrega las variables de entorno:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 🗄️ Estructura de la Base de Datos

### **Tabla: libros**

| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | UUID | Identificador único |
| titulo | VARCHAR(255) | Título del libro |
| editorial | VARCHAR(255) | Editorial |
| autor | VARCHAR(255) | Autor del libro |
| clasificacion | VARCHAR(100) | Clasificación |
| ano_edicion | INTEGER | Año de edición |
| folio | VARCHAR(50) | Código de folio |
| tomo | VARCHAR(50) | Tomo |
| created_at | TIMESTAMP | Fecha de creación |
| updated_at | TIMESTAMP | Fecha de actualización |

## 🔧 Funciones Disponibles

### **Operaciones CRUD**
- `getLibros()` - Obtener todos los libros
- `getLibroById(id)` - Obtener libro por ID
- `createLibro(libro)` - Crear nuevo libro
- `updateLibro(id, libro)` - Actualizar libro
- `deleteLibro(id)` - Eliminar libro
- `searchLibros(query)` - Buscar libros

### **Funciones Auxiliares**
- `getClasificaciones()` - Obtener clasificaciones únicas

## 🔒 Seguridad

### **Row Level Security (RLS)**
- ✅ Lectura pública permitida
- ✅ Inserción, actualización y eliminación requieren autenticación
- ✅ Políticas de seguridad configuradas

### **Índices de Rendimiento**
- ✅ Índice en título
- ✅ Índice en autor
- ✅ Índice en clasificación
- ✅ Índice en año de edición
- ✅ Índice en folio

## 📊 Límites Gratuitos

### **Supabase Free Tier**
- ✅ 500MB de base de datos
- ✅ 2GB de ancho de banda
- ✅ 50,000 filas
- ✅ 2 proyectos

### **Vercel Free Tier**
- ✅ 100GB de ancho de banda
- ✅ 1000 horas de build
- ✅ Dominio personalizado
- ✅ SSL automático

## 🚀 Deploy

### **Comandos de Deploy**

```bash
# Instalar dependencias
npm install

# Construir proyecto
npm run build

# Deploy a Vercel
vercel --prod
```

### **Variables de Entorno en Vercel**

1. Ve a tu proyecto en Vercel
2. Settings → Environment Variables
3. Agrega:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 🔍 Monitoreo

### **Supabase Dashboard**
- Monitorea el uso de la base de datos
- Ve las consultas en tiempo real
- Administra usuarios y permisos

### **Vercel Analytics**
- Monitorea el rendimiento
- Ve las métricas de uso
- Analiza el tráfico

## 🛠️ Troubleshooting

### **Problemas Comunes**

1. **Error de conexión a Supabase**
   - Verifica las variables de entorno
   - Confirma que la URL y API key son correctas

2. **Error de permisos**
   - Verifica las políticas RLS
   - Confirma que la autenticación está configurada

3. **Error de deploy**
   - Verifica que todas las variables están en Vercel
   - Confirma que el build es exitoso localmente

## 📞 Soporte

- **Supabase**: [docs.supabase.com](https://docs.supabase.com)
- **Vercel**: [vercel.com/docs](https://vercel.com/docs)
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
