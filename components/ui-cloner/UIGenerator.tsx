'use client'

import { UIAnalysis } from '@/types/ui-cloner'

interface UIGeneratorProps {
  analysis: UIAnalysis
  variationIndex: number
}

export default function UIGenerator({ analysis, variationIndex }: UIGeneratorProps) {
  // Generate variations based on the analysis
  const generateVariation = () => {
    const variations = [
      // Variation 1: Original clone
      {
        bgColor: analysis.colorScheme.background,
        primaryColor: analysis.colorScheme.primary,
        layout: analysis.layout,
      },
      // Variation 2: Dark mode version
      {
        bgColor: '#1F2937',
        primaryColor: analysis.colorScheme.primary,
        textColor: '#FFFFFF',
        layout: analysis.layout,
      },
      // Variation 3: Different color scheme
      {
        bgColor: analysis.colorScheme.background,
        primaryColor: '#EC4899', // Pink
        secondaryColor: '#8B5CF6', // Purple
        layout: analysis.layout,
      },
      // Add more variations...
    ]

    return variations[variationIndex % variations.length]
  }

  const variation = generateVariation()

  return (
    <div
      className="w-full h-[600px] rounded-lg shadow-lg overflow-hidden"
      style={{ backgroundColor: variation.bgColor }}
    >
      {/* Navbar */}
      {analysis.components.find((c) => c.type === 'navbar') && (
        <nav
          className="p-4 flex justify-between items-center"
          style={{ backgroundColor: variation.primaryColor }}
        >
          <div className="text-white font-bold text-xl">Logo</div>
          <div className="flex gap-6">
            {['Home', 'About', 'Services', 'Contact'].map((item) => (
              <a key={item} href="#" className="text-white hover:opacity-80">
                {item}
              </a>
            ))}
          </div>
        </nav>
      )}

      {/* Hero Section */}
      {analysis.components.find((c) => c.type === 'hero') && (
        <div className="p-12 text-center">
          <h1
            className="text-5xl font-bold mb-4"
            style={{ color: variation.textColor || analysis.colorScheme.text }}
          >
            Welcome to Our Site
          </h1>
          <p
            className="text-xl mb-8"
            style={{ color: variation.textColor || analysis.colorScheme.text, opacity: 0.8 }}
          >
            Creating amazing experiences for you
          </p>
          <button
            className="px-8 py-3 rounded-lg text-white font-medium"
            style={{ backgroundColor: variation.primaryColor }}
          >
            Get Started
          </button>
        </div>
      )}

      {/* Features Grid */}
      {analysis.components.find((c) => c.type === 'features') && (
        <div className="p-12 grid grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="p-6 rounded-lg"
              style={{
                backgroundColor: variation.textColor === '#FFFFFF' ? '#374151' : '#F3F4F6',
              }}
            >
              <div
                className="w-12 h-12 rounded-full mb-4"
                style={{ backgroundColor: variation.primaryColor }}
              />
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: variation.textColor || analysis.colorScheme.text }}
              >
                Feature {i}
              </h3>
              <p
                className="text-sm"
                style={{
                  color: variation.textColor || analysis.colorScheme.text,
                  opacity: 0.7,
                }}
              >
                Description of this amazing feature that helps users.
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Footer */}
      {analysis.components.find((c) => c.type === 'footer') && (
        <footer
          className="p-6 text-center mt-auto"
          style={{
            backgroundColor: variation.textColor === '#FFFFFF' ? '#111827' : '#F9FAFB',
          }}
        >
          <p
            className="text-sm"
            style={{
              color: variation.textColor || analysis.colorScheme.text,
              opacity: 0.6,
            }}
          >
            © 2025 Your Company. All rights reserved.
          </p>
        </footer>
      )}
    </div>
  )
}