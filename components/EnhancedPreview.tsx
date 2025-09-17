'use client'

import { useState, useEffect } from 'react'
import DesignPreview from './DesignPreview'

interface EnhancedPreviewProps {
  id: number
  useIframe?: boolean
}

export default function EnhancedPreview({ id, useIframe = false }: EnhancedPreviewProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100)
    return () => clearTimeout(timer)
  }, [id])

  if (useIframe) {
    return (
      <div className="relative w-full h-full">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-100 animate-pulse" />
        )}
        <iframe
          src={`/preview/${id}`}
          className="w-full h-full border-0"
          style={{
            transform: 'scale(0.25)',
            transformOrigin: 'top left',
            width: '400%',
            height: '400%'
          }}
          onLoad={() => setIsLoading(false)}
        />
      </div>
    )
  }

  return <DesignPreview id={id} />
}