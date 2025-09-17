'use client'

import { Palette, Layout, Type, Grid } from 'lucide-react'
import { UIAnalysis } from '@/types/ui-cloner'

interface AnalysisProps {
  analysis: UIAnalysis
}

export default function ImageAnalyzer({ analysis }: AnalysisProps) {
  return (
    <div className="space-y-6">
      {/* Color Scheme */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <Palette className="w-4 h-4" />
          Detected Colors
        </h3>
        <div className="flex gap-3">
          <div className="flex-1">
            <div
              className="h-20 rounded-lg shadow-sm"
              style={{ backgroundColor: analysis.colorScheme.primary }}
            />
            <p className="text-xs text-gray-600 mt-2">Primary</p>
            <p className="text-xs font-mono">{analysis.colorScheme.primary}</p>
          </div>
          <div className="flex-1">
            <div
              className="h-20 rounded-lg shadow-sm"
              style={{ backgroundColor: analysis.colorScheme.secondary }}
            />
            <p className="text-xs text-gray-600 mt-2">Secondary</p>
            <p className="text-xs font-mono">{analysis.colorScheme.secondary}</p>
          </div>
          <div className="flex-1">
            <div
              className="h-20 rounded-lg shadow-sm border"
              style={{ backgroundColor: analysis.colorScheme.background }}
            />
            <p className="text-xs text-gray-600 mt-2">Background</p>
            <p className="text-xs font-mono">{analysis.colorScheme.background}</p>
          </div>
          <div className="flex-1">
            <div
              className="h-20 rounded-lg shadow-sm"
              style={{ backgroundColor: analysis.colorScheme.text }}
            />
            <p className="text-xs text-gray-600 mt-2">Text</p>
            <p className="text-xs font-mono">{analysis.colorScheme.text}</p>
          </div>
        </div>
      </div>

      {/* Layout */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <Layout className="w-4 h-4" />
          Layout Structure
        </h3>
        <div className="bg-gray-50 rounded-lg p-4">
          <p className="text-sm text-gray-600 mb-2">
            Layout Type: <span className="font-medium text-gray-900">{analysis.layout}</span>
          </p>
          <p className="text-sm text-gray-600">
            Style: <span className="font-medium text-gray-900">{analysis.style}</span>
          </p>
        </div>
      </div>

      {/* Components */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <Grid className="w-4 h-4" />
          Detected Components
        </h3>
        <div className="space-y-2">
          {analysis.components.map((component, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg px-4 py-2 flex justify-between items-center"
            >
              <span className="text-sm font-medium capitalize">{component.type}</span>
              <span className="text-xs text-gray-500">
                {component.style || component.layout || component.position}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Typography */}
      <div>
        <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
          <Type className="w-4 h-4" />
          Typography
        </h3>
        <div className="bg-gray-50 rounded-lg p-4 text-sm text-gray-600">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <p>Heading: <span className="font-medium text-gray-900">{analysis.typography.headingFont}</span></p>
              <p>Size: <span className="font-medium text-gray-900">{analysis.typography.headingSize}</span></p>
            </div>
            <div>
              <p>Body: <span className="font-medium text-gray-900">{analysis.typography.bodyFont}</span></p>
              <p>Size: <span className="font-medium text-gray-900">{analysis.typography.bodySize}</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}