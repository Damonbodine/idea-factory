'use client'

import { useState } from 'react'
import Link from 'next/link'

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
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${design.gradient} opacity-90`} />

                <div className="absolute inset-0 bg-white m-2 rounded-lg">
                  <div className="p-3">
                    <div className={`h-2 w-16 bg-gradient-to-r ${design.gradient} rounded mb-2`} />
                    <div className="space-y-1">
                      <div className="h-1 bg-gray-200 rounded w-full" />
                      <div className="h-1 bg-gray-200 rounded w-3/4" />
                    </div>
                  </div>

                  <div className={`mx-3 h-20 bg-gradient-to-br ${design.gradient} rounded-lg opacity-20`} />

                  <div className="p-3 space-y-2">
                    <div className="grid grid-cols-3 gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="h-8 bg-gray-100 rounded" />
                      ))}
                    </div>
                    <div className="h-1 bg-gray-200 rounded w-full" />
                    <div className="h-1 bg-gray-200 rounded w-2/3" />
                  </div>
                </div>

                {hoveredId === design.id && (
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center transition-opacity">
                    <div className="text-white text-center">
                      <p className="font-bold text-lg">{design.name}</p>
                      <p className="text-sm opacity-90">{design.style}</p>
                    </div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
