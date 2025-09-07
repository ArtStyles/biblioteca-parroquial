'use client'

import { Search, Filter, Calendar } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useBiblioteca } from '@/contexts/BibliotecaContext'
import { useMemo } from 'react'

interface SearchFiltersProps {
  onClearFilters: () => void
}

export function SearchFilters({ onClearFilters }: SearchFiltersProps) {
  const { state, dispatch } = useBiblioteca()
  const { libros, filtros } = state

  // Obtener clasificaciones únicas para el filtro
  const clasificaciones = useMemo(() => {
    const clasifs = Array.from(new Set(libros.map((libro) => libro.clasificacion)))
    return clasifs.sort()
  }, [libros])

  // Obtener años únicos para el filtro
  const anos = useMemo(() => {
    const anosUnicos = Array.from(new Set(libros.map((libro) => libro.anoEdicion)))
    return anosUnicos.sort((a, b) => b - a)
  }, [libros])

  const handleSearchChange = (value: string) => {
    dispatch({ type: 'SET_FILTROS', payload: { busqueda: value } })
  }

  const handleClasificacionChange = (value: string) => {
    dispatch({ type: 'SET_FILTROS', payload: { clasificacion: value } })
  }

  const handleAnoChange = (value: string) => {
    dispatch({ type: 'SET_FILTROS', payload: { ano: value } })
  }

  const hasActiveFilters = 
    filtros.busqueda !== '' || 
    filtros.clasificacion !== 'todos' || 
    filtros.ano !== 'todos'

  return (
    <div className="mb-8 space-y-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar por título, autor, editorial, folio o clasificación..."
            value={filtros.busqueda}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>
        <div className="flex gap-2">
          <Select value={filtros.clasificacion} onValueChange={handleClasificacionChange}>
            <SelectTrigger className="w-48">
              <Filter className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Clasificación" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todas las clasificaciones</SelectItem>
              {clasificaciones.map((clasif) => (
                <SelectItem key={clasif} value={clasif}>
                  {clasif}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={filtros.ano} onValueChange={handleAnoChange}>
            <SelectTrigger className="w-32">
              <Calendar className="h-4 w-4 mr-2" />
              <SelectValue placeholder="Año" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="todos">Todos</SelectItem>
              {anos.map((ano) => (
                <SelectItem key={ano} value={ano.toString()}>
                  {ano}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span>
          Mostrando {state.libros.length} de {libros.length} libros
        </span>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onClearFilters}
          >
            Limpiar filtros
          </Button>
        )}
      </div>
    </div>
  )
}
