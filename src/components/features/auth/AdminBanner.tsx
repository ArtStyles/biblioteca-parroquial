'use client'

import { Settings } from 'lucide-react'
import { MESSAGES } from '@/lib/constants'

export function AdminBanner() {
  return (
    <div className="mb-6 p-4 bg-primary/10 border border-primary/20 rounded-lg">
      <div className="flex items-center gap-2 text-primary">
        <Settings className="h-5 w-5" />
        <span className="font-medium">Modo Administrador</span>
      </div>
      <p className="text-sm text-muted-foreground mt-1">
        {MESSAGES.ADMIN_MODE_INFO}
      </p>
    </div>
  )
}
