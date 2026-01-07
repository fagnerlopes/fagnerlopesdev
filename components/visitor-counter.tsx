"use client"

import { useEffect, useState } from "react"
import { Eye } from "lucide-react"

export function VisitorCounter() {
  const [visitors, setVisitors] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/visitors')
      .then(res => res.json())
      .then(data => {
        setVisitors(data.visitors)
        setLoading(false)
      })
      .catch(err => {
        console.error('Erro ao carregar visitas:', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground animate-pulse">
        <Eye className="h-4 w-4" />
        <span>Carregando...</span>
      </div>
    )
  }

  if (visitors === null) {
    return null
  }

  return (
    <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <Eye className="h-4 w-4" />
      <span>
        <strong className="text-foreground">{visitors.toLocaleString('pt-BR')}</strong> visitas
      </span>
    </div>
  )
}

