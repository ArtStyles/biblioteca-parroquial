'use client'

import { Lock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useBiblioteca } from '@/contexts/BibliotecaContext'
import { MESSAGES } from '@/lib/constants'

interface LoginDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function LoginDialog({ isOpen, onClose }: LoginDialogProps) {
  const { state, dispatch } = useBiblioteca()
  const { credenciales, errorLogin } = state

  const handleInputChange = (field: 'usuario' | 'password', value: string) => {
    dispatch({ 
      type: 'SET_CREDENCIALES', 
      payload: { ...credenciales, [field]: value } 
    })
  }

  const handleLogin = () => {
    dispatch({ type: 'LOGIN', payload: credenciales })
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleLogin()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Acceso de Administrador
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div>
            <Label htmlFor="usuario">Usuario</Label>
            <Input
              id="usuario"
              value={credenciales.usuario}
              onChange={(e) => handleInputChange('usuario', e.target.value)}
              placeholder="Ingresa tu usuario"
              onKeyDown={handleKeyDown}
            />
          </div>
          <div>
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              value={credenciales.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              placeholder="Ingresa tu contraseña"
              onKeyDown={handleKeyDown}
            />
          </div>
          {errorLogin && (
            <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
              {errorLogin}
            </div>
          )}
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose} className="flex-1">
              Cancelar
            </Button>
            <Button onClick={handleLogin} className="flex-1">
              Iniciar Sesión
            </Button>
          </div>
          <div className="text-xs text-muted-foreground text-center p-2 bg-muted rounded-md">
            <strong>Demo:</strong> {MESSAGES.DEMO_CREDENTIALS}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
