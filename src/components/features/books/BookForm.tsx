'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useBiblioteca } from '@/contexts/BibliotecaContext'
import { useEffect } from 'react'

interface BookFormProps {
  isOpen: boolean
  onClose: () => void
  onSave: () => void
}

export function BookForm({ isOpen, onClose, onSave }: BookFormProps) {
  const { state, dispatch } = useBiblioteca()
  const { nuevoLibro, modoEdicion } = state

  const handleInputChange = (field: string, value: string | number) => {
    dispatch({ 
      type: 'SET_NUEVO_LIBRO', 
      payload: { [field]: value } 
    })
  }

  const handleSave = () => {
    if (nuevoLibro.titulo && nuevoLibro.autor) {
      onSave()
    }
  }

  const handleClose = () => {
    dispatch({ type: 'CERRAR_MODAL' })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>
            {modoEdicion ? "Editar Libro" : "Agregar Nuevo Libro"}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="titulo">Título *</Label>
            <Input
              id="titulo"
              value={nuevoLibro.titulo}
              onChange={(e) => handleInputChange('titulo', e.target.value)}
              placeholder="Título del libro"
            />
          </div>
          <div>
            <Label htmlFor="autor">Autor *</Label>
            <Input
              id="autor"
              value={nuevoLibro.autor}
              onChange={(e) => handleInputChange('autor', e.target.value)}
              placeholder="Nombre del autor"
            />
          </div>
          <div>
            <Label htmlFor="editorial">Editorial</Label>
            <Input
              id="editorial"
              value={nuevoLibro.editorial}
              onChange={(e) => handleInputChange('editorial', e.target.value)}
              placeholder="Editorial"
            />
          </div>
          <div>
            <Label htmlFor="clasificacion">Clasificación</Label>
            <Input
              id="clasificacion"
              value={nuevoLibro.clasificacion}
              onChange={(e) => handleInputChange('clasificacion', e.target.value)}
              placeholder="Clasificación"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="ano">Año de Edición</Label>
              <Input
                id="ano"
                type="number"
                value={nuevoLibro.anoEdicion}
                onChange={(e) => handleInputChange('anoEdicion', Number.parseInt(e.target.value))}
              />
            </div>
            <div>
              <Label htmlFor="tomo">Tomo</Label>
              <Input
                id="tomo"
                value={nuevoLibro.tomo}
                onChange={(e) => handleInputChange('tomo', e.target.value)}
                placeholder="Tomo"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="folio">Folio</Label>
            <Input
              id="folio"
              value={nuevoLibro.folio}
              onChange={(e) => handleInputChange('folio', e.target.value)}
              placeholder="Código de folio"
            />
          </div>
          <Button onClick={handleSave} className="w-full">
            {modoEdicion ? "Guardar Cambios" : "Agregar Libro"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
