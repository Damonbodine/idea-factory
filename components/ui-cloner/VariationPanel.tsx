'use client'

import { useState } from 'react'
import { Download, Code, Eye, Copy, Shuffle, Layers } from 'lucide-react'
import UIGenerator from './UIGenerator'
import CodeExporter from './CodeExporter'
import { UIAnalysis } from '@/types/ui-cloner'

interface VariationPanelProps {
  variations: string[]
  selectedIndex: number
  onSelect: (index: number) => void
  originalAnalysis: UIAnalysis
}

export default function VariationPanel({
  variations,
  selectedIndex,
  onSelect,
  originalAnalysis,
}: VariationPanelProps) {
  const [viewMode, setViewMode] = useState<'preview' | 'code'>('preview')
  const [showAllVariations, setShowAllVariations] = useState(false)

  const colorVariations = [
    { name: 'Original', primary: originalAnalysis.colorScheme.primary, secondary: originalAnalysis.colorScheme.secondary },
    { name: 'Dark Mode', primary: originalAnalysis.colorScheme.primary, secondary: originalAnalysis.colorScheme.secondary, dark: true },
    { name: 'Vibrant', primary: '#EC4899', secondary: '#8B5CF6' },
    { name: 'Ocean', primary: '#0EA5E9', secondary: '#06B6D4' },
    { name: 'Forest', primary: '#10B981', secondary: '#059669' },
    { name: 'Sunset', primary: '#F97316', secondary: '#DC2626' },
    { name: 'Monochrome', primary: '#6B7280', secondary: '#374151' },
    { name: 'Candy', primary: '#F472B6', secondary: '#A78BFA' },
    { name: 'Professional', primary: '#1E40AF', secondary: '#7C3AED' },
    { name: 'Earth', primary: '#92400E', secondary: '#B45309' },
    { name: 'Neon', primary: '#22D3EE', secondary: '#A3E635' },
    { name: 'Royal', primary: '#7C3AED', secondary: '#DC2626' },
    { name: 'Pastel', primary: '#FCA5A5', secondary: '#FDE68A' },
    { name: 'Tech', primary: '#3B82F6', secondary: '#10B981' },
    { name: 'Minimal', primary: '#000000', secondary: '#FFFFFF' },
  ]

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <Layers className="w-6 h-6" />
          Generated Variations ({variations.length})
        </h2>
        <div className="flex gap-4">
          <button
            onClick={() => setShowAllVariations(!showAllVariations)}
            className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 flex items-center gap-2"
          >
            <Eye className="w-4 h-4" />
            {showAllVariations ? 'Show Selected' : 'Show All'}
          </button>
          <button
            className="px-4 py-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 flex items-center gap-2"
          >
            <Shuffle className="w-4 h-4" />
            Generate More
          </button>
        </div>
      </div>

      {/* Variation Tabs */}
      <div className="mb-6">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {colorVariations.map((variation, index) => (
            <button
              key={index}
              onClick={() => onSelect(index)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all ${
                selectedIndex === index
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {variation.name}
            </button>
          ))}
        </div>
      </div>

      {/* View Mode Toggle */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setViewMode('preview')}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
            viewMode === 'preview' ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
        >
          <Eye className="w-4 h-4" />
          Preview
        </button>
        <button
          onClick={() => setViewMode('code')}
          className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
            viewMode === 'code' ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
        >
          <Code className="w-4 h-4" />
          Code
        </button>
      </div>

      {/* Content Area */}
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        {viewMode === 'preview' ? (
          showAllVariations ? (
            <div className="grid grid-cols-3 gap-4 p-4">
              {colorVariations.map((variation, index) => (
                <div
                  key={index}
                  className="cursor-pointer hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
                  onClick={() => onSelect(index)}
                >
                  <div className="text-xs font-medium text-gray-600 p-2 bg-gray-50">
                    {variation.name}
                  </div>
                  <div className="transform scale-[0.25] origin-top-left w-[400%] h-[400px]">
                    <UIGenerator
                      analysis={{
                        ...originalAnalysis,
                        colorScheme: {
                          ...originalAnalysis.colorScheme,
                          primary: variation.primary,
                          secondary: variation.secondary,
                        },
                      }}
                      variationIndex={index}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="p-4">
              <UIGenerator analysis={originalAnalysis} variationIndex={selectedIndex} />
            </div>
          )
        ) : (
          <div className="p-4">
            <CodeExporter analysis={originalAnalysis} variationIndex={selectedIndex} />
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 mt-6">
        <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2">
          <Copy className="w-4 h-4" />
          Copy Code
        </button>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2">
          <Download className="w-4 h-4" />
          Export All
        </button>
      </div>
    </div>
  )
}