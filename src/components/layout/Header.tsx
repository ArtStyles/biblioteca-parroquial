'use client'

import { Church, BookOpen, LogOut, Eye, Lock, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/common/ThemeToggle'
import { useBiblioteca } from '@/contexts/BibliotecaContext'

interface HeaderProps {
  onAddBook: () => void
  onAdminAccess: () => void
  onLogout: () => void
  onToggleView: () => void
}

export function Header({ onAddBook, onAdminAccess, onLogout, onToggleView }: HeaderProps) {
  const { state } = useBiblioteca()
  const { esAdministrador } = state

  return (
    <header className="border-b bg-card">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Church className="h-8 w-8 text-primary" />
              <BookOpen className="h-4 w-4 text-primary absolute -bottom-1 -right-1 bg-background rounded-full p-0.5" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground">Biblioteca Parroquial</h1>
              <p className="text-muted-foreground">
                {esAdministrador ? "Panel de administración" : "Catálogo de textos religiosos y literatura"}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <ThemeToggle />
            
            {esAdministrador ? (
              <>
                <Button variant="outline" onClick={onLogout} className="gap-2 bg-transparent">
                  <LogOut className="h-4 w-4" />
                  Cerrar Sesión
                </Button>
                <Button variant="default" onClick={onToggleView} className="gap-2">
                  <Eye className="h-4 w-4" />
                  Vista Pública
                </Button>
                <Button onClick={onAddBook} className="gap-2">
                  <Plus className="h-4 w-4" />
                  Agregar Libro
                </Button>
              </>
            ) : (
              <Button variant="outline" onClick={onAdminAccess} className="gap-2 bg-transparent">
                <Lock className="h-4 w-4" />
                Administrador
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
