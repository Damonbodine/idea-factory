'use client'

import { useState } from 'react'
import Link from 'next/link'
import DesignPreview from '@/components/DesignPreview'

const designs = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Design ${i + 1}`,
  style: getDesignStyle(i),
  gradient: getGradient(i),
  accent: getAccentColor(i)
}))

function getDesignStyle(index: number) {
  const styles = ['Bold', 'Startup', 'Creative', 'Modern', 'Vibrant', 'Minimal', 'Dynamic']
  return styles[index % styles.length]
}

function getGradient(index: number) {
  const gradients = [
    'from-purple-600 to-blue-600',
    'from-green-400 to-blue-500',
    'from-pink-500 to-orange-400',
    'from-indigo-500 to-purple-600',
    'from-red-500 to-yellow-500',
    'from-cyan-500 to-blue-500',
    'from-emerald-500 to-teal-500',
    'from-violet-600 to-pink-600',
    'from-amber-500 to-red-500',
    'from-blue-600 to-purple-600'
  ]
  return gradients[index % gradients.length]
}

function getAccentColor(index: number) {
  const colors = ['purple', 'blue', 'green', 'red', 'yellow', 'pink', 'indigo', 'orange']
  return colors[index % colors.length]
}

export default function Home() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            IdeaFactory UI Showcase
          </h1>
          <p className="text-xl text-gray-600">
            Select a design to preview the full homepage layout
          </p>
          <p className="text-sm text-gray-500 mt-2">
            50 unique designs combining bold, startup, and creative aesthetics
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Live previews of actual designs
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
          {designs.map((design) => (
            <Link
              key={design.id}
              href={`/design/${design.id}`}
              className="group relative"
              onMouseEnter={() => setHoveredId(design.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-white border border-gray-100">
                {/* Live Preview - Always visible */}
                <div className="absolute inset-0 pointer-events-none">
                  <DesignPreview id={design.id} />
                </div>

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex items-end p-3 transition-opacity ${
                  hoveredId === design.id ? 'opacity-100' : 'opacity-0'
                } pointer-events-none`}>
                  <div className="text-white">
                    <p className="font-bold text-sm md:text-base">{design.name}</p>
                    <p className="text-xs opacity-90">{design.style} Style</p>
                  </div>
                </div>

                {/* Bottom gradient for readability */}
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/90 to-transparent pointer-events-none" />

                {/* Card Label */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/95 backdrop-blur px-2 py-1">
                  <p className="text-xs font-medium text-gray-700">{design.name}</p>
                  <p className="text-[10px] text-gray-500">{design.style}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
