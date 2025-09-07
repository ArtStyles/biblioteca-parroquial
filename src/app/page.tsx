'use client'

import { useEffect } from 'react'
import { Header } from '@/components/layout/Header'
import { SearchFilters } from '@/components/features/search/SearchFilters'
import { BookList } from '@/components/features/books/BookList'
import { BookForm } from '@/components/features/books/BookForm'
import { LoginDialog } from '@/components/features/auth/LoginDialog'
import { AdminBanner } from '@/components/features/auth/AdminBanner'
import { useBiblioteca } from '@/contexts/BibliotecaContext'
import { Libro } from '@/types'

export default function BibliotecaPage() {
  const { state, dispatch, createLibro, updateLibro, deleteLibro } = useBiblioteca()
  const { 
    esAdministrador, 
    mostrarLogin, 
    dialogoAbierto, 
    nuevoLibro, 
    libroEditando, 
    modoEdicion 
  } = state

  // Los datos se cargan automáticamente desde la base de datos en el contexto

  const handleAddBook = () => {
    dispatch({ type: 'SET_DIALOGO_ABIERTO', payload: true })
    dispatch({ type: 'RESET_NUEVO_LIBRO' })
  }

  const handleEditBook = (libro: Libro) => {
    dispatch({ type: 'SET_LIBRO_EDITANDO', payload: libro })
    dispatch({ type: 'SET_NUEVO_LIBRO', payload: {
      titulo: libro.titulo,
      editorial: libro.editorial,
      autor: libro.autor,
      clasificacion: libro.clasificacion,
      anoEdicion: libro.anoEdicion,
      folio: libro.folio,
      tomo: libro.tomo,
    }})
    dispatch({ type: 'SET_MODO_EDICION', payload: true })
    dispatch({ type: 'SET_DIALOGO_ABIERTO', payload: true })
  }

  const handleDeleteBook = async (id: string) => {
    await deleteLibro(id)
  }

  const handleSaveBook = async () => {
    if (modoEdicion && libroEditando) {
      await updateLibro(libroEditando.id, nuevoLibro)
    } else {
      await createLibro(nuevoLibro)
    }
    dispatch({ type: 'CERRAR_MODAL' })
  }

  const handleCloseModal = () => {
    dispatch({ type: 'CERRAR_MODAL' })
  }

  const handleAdminAccess = () => {
    dispatch({ type: 'SET_MOSTRAR_LOGIN', payload: true })
  }

  const handleCloseLogin = () => {
    dispatch({ type: 'SET_MOSTRAR_LOGIN', payload: false })
    dispatch({ type: 'SET_ERROR_LOGIN', payload: '' })
  }

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  const handleToggleView = () => {
    dispatch({ type: 'SET_ES_ADMINISTRADOR', payload: false })
  }

  const handleClearFilters = () => {
    dispatch({ type: 'SET_FILTROS', payload: {
      busqueda: '',
      clasificacion: 'todos',
      ano: 'todos'
    }})
  }


  return (
    <div className="min-h-screen bg-background">
      <Header
        onAddBook={handleAddBook}
        onAdminAccess={handleAdminAccess}
        onLogout={handleLogout}
        onToggleView={handleToggleView}
      />

      <main className="container mx-auto px-4 py-8">
        {esAdministrador && <AdminBanner />}

        <SearchFilters onClearFilters={handleClearFilters} />

        <BookList
          onEditBook={handleEditBook}
          onDeleteBook={handleDeleteBook}
        />
      </main>

      <BookForm
        isOpen={dialogoAbierto}
        onClose={handleCloseModal}
        onSave={handleSaveBook}
      />

      <LoginDialog
        isOpen={mostrarLogin}
        onClose={handleCloseLogin}
      />
    </div>
  )
}
