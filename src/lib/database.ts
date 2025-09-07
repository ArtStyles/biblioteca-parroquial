import { supabase } from './supabase'
import { Libro } from '@/types'

// Convertir de formato de BD a formato de la app
function dbToApp(dbLibro: any): Libro {
  return {
    id: dbLibro.id,
    titulo: dbLibro.titulo,
    editorial: dbLibro.editorial,
    autor: dbLibro.autor,
    clasificacion: dbLibro.clasificacion,
    anoEdicion: dbLibro.ano_edicion,
    folio: dbLibro.folio,
    tomo: dbLibro.tomo,
  }
}

// Convertir de formato de la app a formato de BD
function appToDb(libro: Libro | Omit<Libro, 'id'>) {
  return {
    titulo: libro.titulo,
    editorial: libro.editorial,
    autor: libro.autor,
    clasificacion: libro.clasificacion,
    ano_edicion: libro.anoEdicion,
    folio: libro.folio,
    tomo: libro.tomo,
  }
}

// Obtener todos los libros
export async function getLibros(): Promise<Libro[]> {
  try {
    const { data, error } = await supabase
      .from('libros')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching libros:', error)
      return []
    }

    return data.map(dbToApp)
  } catch (error) {
    console.error('Error in getLibros:', error)
    return []
  }
}

// Obtener un libro por ID
export async function getLibroById(id: string): Promise<Libro | null> {
  try {
    const { data, error } = await supabase
      .from('libros')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      console.error('Error fetching libro:', error)
      return null
    }

    return dbToApp(data)
  } catch (error) {
    console.error('Error in getLibroById:', error)
    return null
  }
}

// Crear un nuevo libro
export async function createLibro(libro: Omit<Libro, 'id'>): Promise<Libro | null> {
  try {
    const { data, error } = await supabase
      .from('libros')
      .insert(appToDb(libro))
      .select()
      .single()

    if (error) {
      console.error('Error creating libro:', error)
      return null
    }

    return dbToApp(data)
  } catch (error) {
    console.error('Error in createLibro:', error)
    return null
  }
}

// Actualizar un libro
export async function updateLibro(id: string, libro: Partial<Omit<Libro, 'id'>>): Promise<Libro | null> {
  try {
    const updateData = appToDb(libro as Libro)
    // updated_at se maneja automáticamente por el trigger de la base de datos

    const { data, error } = await supabase
      .from('libros')
      .update(updateData)
      .eq('id', id)
      .select()
      .single()

    if (error) {
      console.error('Error updating libro:', error)
      return null
    }

    return dbToApp(data)
  } catch (error) {
    console.error('Error in updateLibro:', error)
    return null
  }
}

// Eliminar un libro
export async function deleteLibro(id: string): Promise<boolean> {
  try {
    const { error } = await supabase
      .from('libros')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting libro:', error)
      return false
    }

    return true
  } catch (error) {
    console.error('Error in deleteLibro:', error)
    return false
  }
}

// Buscar libros
export async function searchLibros(query: string): Promise<Libro[]> {
  try {
    const { data, error } = await supabase
      .from('libros')
      .select('*')
      .or(`titulo.ilike.%${query}%,autor.ilike.%${query}%,editorial.ilike.%${query}%,clasificacion.ilike.%${query}%,folio.ilike.%${query}%`)
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error searching libros:', error)
      return []
    }

    return data.map(dbToApp)
  } catch (error) {
    console.error('Error in searchLibros:', error)
    return []
  }
}

// Obtener clasificaciones únicas
export async function getClasificaciones(): Promise<string[]> {
  try {
    const { data, error } = await supabase
      .from('libros')
      .select('clasificacion')
      .not('clasificacion', 'is', null)

    if (error) {
      console.error('Error fetching clasificaciones:', error)
      return []
    }

    const clasificaciones = [...new Set(data.map(item => item.clasificacion))]
    return clasificaciones.sort()
  } catch (error) {
    console.error('Error in getClasificaciones:', error)
    return []
  }
}
