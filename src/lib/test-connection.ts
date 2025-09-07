// Archivo temporal para probar la conexión a Supabase
import { supabase } from './supabase'

export async function testSupabaseConnection() {
  try {
    console.log('🔍 Probando conexión a Supabase...')
    
    // Probar conexión básica
    const { data, error } = await supabase
      .from('libros')
      .select('*')
      .limit(1)
    
    if (error) {
      console.error('❌ Error de conexión:', error)
      return false
    }
    
    console.log('✅ Conexión exitosa a Supabase')
    console.log('📊 Datos recibidos:', data)
    return true
  } catch (error) {
    console.error('❌ Error inesperado:', error)
    return false
  }
}

// Función para probar la inserción de un libro
export async function testInsertBook() {
  try {
    console.log('📚 Probando inserción de libro...')
    
    const testBook = {
      titulo: 'Libro de Prueba',
      editorial: 'Editorial Test',
      autor: 'Autor Test',
      clasificacion: 'Test',
      ano_edicion: 2024,
      folio: 'TEST-001',
      tomo: '1'
    }
    
    const { data, error } = await supabase
      .from('libros')
      .insert(testBook)
      .select()
    
    if (error) {
      console.error('❌ Error insertando libro:', error)
      return false
    }
    
    console.log('✅ Libro insertado exitosamente:', data)
    return true
  } catch (error) {
    console.error('❌ Error inesperado:', error)
    return false
  }
}
