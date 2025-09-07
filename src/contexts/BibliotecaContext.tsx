'use client'

import React, { createContext, useContext, useReducer, ReactNode, useEffect } from 'react'
import { Libro, Credenciales, FiltrosLibros, NuevoLibro, EstadoBiblioteca } from '@/types'
import { ADMIN_CREDENTIALS } from '@/lib/constants'
import { getLibros, createLibro, updateLibro, deleteLibro, searchLibros } from '@/lib/database'

// Tipos para las acciones
type BibliotecaAction =
  | { type: 'SET_LIBROS'; payload: Libro[] }
  | { type: 'ADD_LIBRO'; payload: Libro }
  | { type: 'UPDATE_LIBRO'; payload: Libro }
  | { type: 'DELETE_LIBRO'; payload: string }
  | { type: 'SET_FILTROS'; payload: Partial<FiltrosLibros> }
  | { type: 'SET_ES_ADMINISTRADOR'; payload: boolean }
  | { type: 'SET_MOSTRAR_LOGIN'; payload: boolean }
  | { type: 'SET_CREDENCIALES'; payload: Credenciales }
  | { type: 'SET_ERROR_LOGIN'; payload: string }
  | { type: 'SET_DIALOGO_ABIERTO'; payload: boolean }
  | { type: 'SET_LIBRO_EDITANDO'; payload: Libro | null }
  | { type: 'SET_MODO_EDICION'; payload: boolean }
  | { type: 'SET_NUEVO_LIBRO'; payload: Partial<NuevoLibro> }
  | { type: 'RESET_NUEVO_LIBRO' }
  | { type: 'CERRAR_MODAL' }
  | { type: 'LOGIN'; payload: Credenciales }
  | { type: 'LOGOUT' }
  | { type: 'LOAD_LIBROS' }
  | { type: 'LOAD_LIBROS_SUCCESS'; payload: Libro[] }
  | { type: 'LOAD_LIBROS_ERROR'; payload: string }
  | { type: 'CREATE_LIBRO'; payload: Omit<Libro, 'id'> }
  | { type: 'UPDATE_LIBRO_DB'; payload: { id: string; libro: Partial<Omit<Libro, 'id'>> } }
  | { type: 'DELETE_LIBRO_DB'; payload: string }

// Estado inicial
const initialState: EstadoBiblioteca = {
  libros: [],
  filtros: {
    busqueda: '',
    clasificacion: 'todos',
    ano: 'todos'
  },
  esAdministrador: false,
  mostrarLogin: false,
  credenciales: { usuario: '', password: '' },
  errorLogin: '',
  dialogoAbierto: false,
  libroEditando: null,
  modoEdicion: false,
  nuevoLibro: {
    titulo: '',
    editorial: '',
    autor: '',
    clasificacion: '',
    anoEdicion: new Date().getFullYear(),
    folio: '',
    tomo: '',
  }
}

// Reducer
function bibliotecaReducer(state: EstadoBiblioteca, action: BibliotecaAction): EstadoBiblioteca {
  switch (action.type) {
    case 'SET_LIBROS':
      return { ...state, libros: action.payload }
    
    case 'ADD_LIBRO':
      return { ...state, libros: [...state.libros, action.payload] }
    
    case 'UPDATE_LIBRO':
      return {
        ...state,
        libros: state.libros.map(libro =>
          libro.id === action.payload.id ? action.payload : libro
        )
      }
    
    case 'DELETE_LIBRO':
      return {
        ...state,
        libros: state.libros.filter(libro => libro.id !== action.payload)
      }
    
    case 'SET_FILTROS':
      return {
        ...state,
        filtros: { ...state.filtros, ...action.payload }
      }
    
    case 'SET_ES_ADMINISTRADOR':
      return { ...state, esAdministrador: action.payload }
    
    case 'SET_MOSTRAR_LOGIN':
      return { ...state, mostrarLogin: action.payload }
    
    case 'SET_CREDENCIALES':
      return { ...state, credenciales: action.payload }
    
    case 'SET_ERROR_LOGIN':
      return { ...state, errorLogin: action.payload }
    
    case 'SET_DIALOGO_ABIERTO':
      return { ...state, dialogoAbierto: action.payload }
    
    case 'SET_LIBRO_EDITANDO':
      return { ...state, libroEditando: action.payload }
    
    case 'SET_MODO_EDICION':
      return { ...state, modoEdicion: action.payload }
    
    case 'SET_NUEVO_LIBRO':
      return {
        ...state,
        nuevoLibro: { ...state.nuevoLibro, ...action.payload }
      }
    
    case 'RESET_NUEVO_LIBRO':
      return {
        ...state,
        nuevoLibro: {
          titulo: '',
          editorial: '',
          autor: '',
          clasificacion: '',
          anoEdicion: new Date().getFullYear(),
          folio: '',
          tomo: '',
        }
      }
    
    case 'CERRAR_MODAL':
      return {
        ...state,
        dialogoAbierto: false,
        modoEdicion: false,
        libroEditando: null,
        nuevoLibro: {
          titulo: '',
          editorial: '',
          autor: '',
          clasificacion: '',
          anoEdicion: new Date().getFullYear(),
          folio: '',
          tomo: '',
        }
      }
    
    case 'LOGIN':
      const isValidLogin = 
        action.payload.usuario === ADMIN_CREDENTIALS.usuario &&
        action.payload.password === ADMIN_CREDENTIALS.password
      
      return {
        ...state,
        esAdministrador: isValidLogin,
        mostrarLogin: !isValidLogin,
        credenciales: isValidLogin ? { usuario: '', password: '' } : action.payload,
        errorLogin: isValidLogin ? '' : 'Usuario o contraseña incorrectos'
      }
    
    case 'LOGOUT':
      return {
        ...state,
        esAdministrador: false,
        credenciales: { usuario: '', password: '' }
      }
    
    case 'LOAD_LIBROS':
      return { ...state }
    
    case 'LOAD_LIBROS_SUCCESS':
      return { ...state, libros: action.payload }
    
    case 'LOAD_LIBROS_ERROR':
      console.error('Error loading libros:', action.payload)
      return { ...state }
    
    case 'CREATE_LIBRO':
      return { ...state }
    
    case 'UPDATE_LIBRO_DB':
      return { ...state }
    
    case 'DELETE_LIBRO_DB':
      return { ...state }
    
    default:
      return state
  }
}

// Contexto
const BibliotecaContext = createContext<{
  state: EstadoBiblioteca
  dispatch: React.Dispatch<BibliotecaAction>
  loadLibros: () => Promise<void>
  createLibro: (libro: Omit<Libro, 'id'>) => Promise<Libro | null>
  updateLibro: (id: string, libro: Partial<Omit<Libro, 'id'>>) => Promise<Libro | null>
  deleteLibro: (id: string) => Promise<boolean>
} | null>(null)

// Provider
export function BibliotecaProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(bibliotecaReducer, initialState)

  // Cargar libros desde la base de datos
  const loadLibros = async () => {
    dispatch({ type: 'LOAD_LIBROS' })
    try {
      const libros = await getLibros()
      dispatch({ type: 'LOAD_LIBROS_SUCCESS', payload: libros })
    } catch (error) {
      dispatch({ type: 'LOAD_LIBROS_ERROR', payload: error instanceof Error ? error.message : 'Error desconocido' })
    }
  }

  // Crear libro en la base de datos
  const createLibroDB = async (libro: Omit<Libro, 'id'>): Promise<Libro | null> => {
    try {
      const nuevoLibro = await createLibro(libro)
      if (nuevoLibro) {
        dispatch({ type: 'ADD_LIBRO', payload: nuevoLibro })
      }
      return nuevoLibro
    } catch (error) {
      console.error('Error creating libro:', error)
      return null
    }
  }

  // Actualizar libro en la base de datos
  const updateLibroDB = async (id: string, libro: Partial<Omit<Libro, 'id'>>): Promise<Libro | null> => {
    try {
      const libroActualizado = await updateLibro(id, libro)
      if (libroActualizado) {
        dispatch({ type: 'UPDATE_LIBRO', payload: libroActualizado })
      }
      return libroActualizado
    } catch (error) {
      console.error('Error updating libro:', error)
      return null
    }
  }

  // Eliminar libro de la base de datos
  const deleteLibroDB = async (id: string): Promise<boolean> => {
    try {
      const success = await deleteLibro(id)
      if (success) {
        dispatch({ type: 'DELETE_LIBRO', payload: id })
      }
      return success
    } catch (error) {
      console.error('Error deleting libro:', error)
      return false
    }
  }

  // Cargar libros al inicializar
  useEffect(() => {
    loadLibros()
  }, [])

  return (
    <BibliotecaContext.Provider value={{ 
      state, 
      dispatch, 
      loadLibros, 
      createLibro: createLibroDB, 
      updateLibro: updateLibroDB, 
      deleteLibro: deleteLibroDB 
    }}>
      {children}
    </BibliotecaContext.Provider>
  )
}

// Hook personalizado
export function useBiblioteca() {
  const context = useContext(BibliotecaContext)
  if (!context) {
    console.error('❌ useBiblioteca debe ser usado dentro de BibliotecaProvider')
    throw new Error('useBiblioteca debe ser usado dentro de BibliotecaProvider')
  }
  console.log('✅ useBiblioteca context cargado correctamente')
  return context
}
