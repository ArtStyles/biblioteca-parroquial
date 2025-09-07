import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para la base de datos
export interface Database {
  public: {
    Tables: {
      libros: {
        Row: {
          id: string
          titulo: string
          editorial: string
          autor: string
          clasificacion: string
          ano_edicion: number
          folio: string
          tomo: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          titulo: string
          editorial: string
          autor: string
          clasificacion: string
          ano_edicion: number
          folio: string
          tomo: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          titulo?: string
          editorial?: string
          autor?: string
          clasificacion?: string
          ano_edicion?: number
          folio?: string
          tomo?: string
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}
