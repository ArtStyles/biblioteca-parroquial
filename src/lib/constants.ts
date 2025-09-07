// Constantes de la aplicación

export const ADMIN_CREDENTIALS = {
  usuario: "admin",
  password: "biblioteca2024",
} as const

export const CLASIFICACIONES_DEFAULT = [
  "Literatura",
  "Clásicos", 
  "Tecnología",
  "Historia",
  "Religión",
  "Filosofía",
  "Ciencias",
  "Arte",
  "Biografía",
  "Referencia"
] as const

export const MESSAGES = {
  LOGIN_ERROR: "Usuario o contraseña incorrectos",
  DELETE_CONFIRM: "¿Eliminar libro? ",
  DELETE_DESCRIPTION: "Esta acción no se puede deshacer. El libro será eliminado permanentemente de la biblioteca.",
  NO_BOOKS_FOUND: "No se encontraron libros ",
  NO_BOOKS_ADMIN: "Intenta ajustar los filtros o agregar nuevos libros a la colección.",
  NO_BOOKS_PUBLIC: "Intenta ajustar los filtros de búsqueda.",
  ADMIN_MODE_INFO: "Puedes agregar, editar y eliminar libros. Los usuarios normales solo pueden consultar el catálogo.",
  DEMO_CREDENTIALS: "Demo: Usuario: admin | Contraseña: biblioteca2024"
} as const

export const PLACEHOLDERS = {
  SEARCH: "Buscar por título, autor, editorial, folio o clasificación...",
  TITULO: "Título del libro",
  AUTOR: "Nombre del autor",
  EDITORIAL: "Editorial",
  CLASIFICACION: "Clasificación",
  TOMO: "Tomo",
  FOLIO: "Código de folio",
  USUARIO: "Ingresa tu usuario",
  PASSWORD: "Ingresa tu contraseña"
} as const
