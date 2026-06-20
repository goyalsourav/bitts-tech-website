'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function TabTitle() {
  const pathname = usePathname()

  useEffect(() => {
    document.title = 'Bitts Tech'
  }, [pathname])

  return null
}
