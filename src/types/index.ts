// Tipos principales de la aplicación

export interface Libro {
  id: string
  titulo: string
  editorial: string
  autor: string
  clasificacion: string
  anoEdicion: number
  folio: string
  tomo: string
}

export interface Credenciales {
  usuario: string
  password: string
}

export interface FiltrosLibros {
  busqueda: string
  clasificacion: string
  ano: string
}

export interface NuevoLibro {
  titulo: string
  editorial: string
  autor: string
  clasificacion: string
  anoEdicion: number
  folio: string
  tomo: string
}

export type ModoVista = 'publico' | 'administrador'

export interface EstadoBiblioteca {
  libros: Libro[]
  filtros: FiltrosLibros
  esAdministrador: boolean
  mostrarLogin: boolean
  credenciales: Credenciales
  errorLogin: string
  dialogoAbierto: boolean
  libroEditando: Libro | null
  modoEdicion: boolean
  nuevoLibro: NuevoLibro
}
