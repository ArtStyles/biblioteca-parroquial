'use client'

import { Church } from 'lucide-react'
import { BookCard } from './BookCard'
import { useBiblioteca } from '@/contexts/BibliotecaContext'
import { useMemo } from 'react'
import { Libro } from '@/types'

interface BookListProps {
  onEditBook: (libro: Libro) => void
  onDeleteBook: (id: string) => void
}

export function BookList({ onEditBook, onDeleteBook }: BookListProps) {
  const { state } = useBiblioteca()
  const { libros, filtros, esAdministrador } = state

  // Filtrar libros basado en búsqueda y filtros
  const librosFiltrados = useMemo(() => {
    return libros.filter((libro) => {
      const coincideBusqueda =
        filtros.busqueda === "" ||
        libro.titulo.toLowerCase().includes(filtros.busqueda.toLowerCase()) ||
        libro.autor.toLowerCase().includes(filtros.busqueda.toLowerCase()) ||
        libro.editorial.toLowerCase().includes(filtros.busqueda.toLowerCase()) ||
        libro.folio.toLowerCase().includes(filtros.busqueda.toLowerCase()) ||
        libro.clasificacion.toLowerCase().includes(filtros.busqueda.toLowerCase())

      const coincideClasificacion = filtros.clasificacion === "todos" || libro.clasificacion === filtros.clasificacion

      const coincideAno = filtros.ano === "todos" || libro.anoEdicion.toString() === filtros.ano

      return coincideBusqueda && coincideClasificacion && coincideAno
    })
  }, [libros, filtros])

  if (librosFiltrados.length === 0) {
    return (
      <div className="text-center py-12">
        <Church className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h3 className="text-lg font-semibold mb-2">No se encontraron libros</h3>
        <p className="text-muted-foreground">
          {esAdministrador
            ? "Intenta ajustar los filtros o agregar nuevos libros a la colección."
            : "Intenta ajustar los filtros de búsqueda."}
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {librosFiltrados.map((libro) => (
        <BookCard
          key={libro.id}
          libro={libro}
          esAdministrador={esAdministrador}
          onEdit={onEditBook}
          onDelete={onDeleteBook}
        />
      ))}
    </div>
  )
}
