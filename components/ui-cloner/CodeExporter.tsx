'use client'

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { UIAnalysis } from '@/types/ui-cloner'

interface CodeExporterProps {
  analysis: UIAnalysis
  variationIndex: number
}

export default function CodeExporter({ analysis }: CodeExporterProps) {
  const [copied, setCopied] = useState(false)
  const [exportFormat, setExportFormat] = useState<'react' | 'html' | 'tailwind'>('react')

  const generateCode = () => {
    if (exportFormat === 'react') {
      return generateReactCode()
    } else if (exportFormat === 'html') {
      return generateHTMLCode()
    } else {
      return generateTailwindCode()
    }
  }

  const generateReactCode = () => {
    return `import React from 'react'

export default function GeneratedUI() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '${analysis.colorScheme.background}' }}>
      {/* Navigation */}
      <nav className="p-4 flex justify-between items-center" style={{ backgroundColor: '${analysis.colorScheme.primary}' }}>
        <div className="text-white font-bold text-xl">Logo</div>
        <div className="flex gap-6">
          {['Home', 'About', 'Services', 'Contact'].map((item) => (
            <a key={item} href="#" className="text-white hover:opacity-80">
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="p-12 text-center">
        <h1 className="text-5xl font-bold mb-4" style={{ color: '${analysis.colorScheme.text}' }}>
          Welcome to Our Site
        </h1>
        <p className="text-xl mb-8" style={{ color: '${analysis.colorScheme.text}', opacity: 0.8 }}>
          Creating amazing experiences for you
        </p>
        <button className="px-8 py-3 rounded-lg text-white font-medium" style={{ backgroundColor: '${analysis.colorScheme.primary}' }}>
          Get Started
        </button>
      </div>

      {/* Features */}
      <div className="p-12 grid grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="p-6 rounded-lg bg-gray-100">
            <div className="w-12 h-12 rounded-full mb-4" style={{ backgroundColor: '${analysis.colorScheme.primary}' }} />
            <h3 className="text-lg font-semibold mb-2">Feature {i}</h3>
            <p className="text-sm text-gray-600">
              Description of this amazing feature.
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="p-6 text-center bg-gray-100">
        <p className="text-sm text-gray-600">
          © 2025 Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  )
}`
  }

  const generateHTMLCode = () => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Generated UI</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: system-ui, -apple-system, sans-serif; background: ${analysis.colorScheme.background}; }
    nav { display: flex; justify-content: space-between; align-items: center; padding: 1rem 2rem; background: ${analysis.colorScheme.primary}; }
    .nav-links { display: flex; gap: 2rem; }
    .nav-links a { color: white; text-decoration: none; }
    .hero { padding: 3rem; text-align: center; }
    .hero h1 { font-size: 3rem; margin-bottom: 1rem; color: ${analysis.colorScheme.text}; }
    .hero p { font-size: 1.25rem; margin-bottom: 2rem; color: ${analysis.colorScheme.text}; opacity: 0.8; }
    .btn { padding: 0.75rem 2rem; background: ${analysis.colorScheme.primary}; color: white; border: none; border-radius: 0.5rem; cursor: pointer; }
    .features { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; padding: 3rem; }
    .feature { padding: 1.5rem; background: #f3f4f6; border-radius: 0.5rem; }
    footer { padding: 1.5rem; text-align: center; background: #f9fafb; color: #4b5563; }
  </style>
</head>
<body>
  <nav>
    <div style="color: white; font-weight: bold; font-size: 1.25rem;">Logo</div>
    <div class="nav-links">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Contact</a>
    </div>
  </nav>

  <div class="hero">
    <h1>Welcome to Our Site</h1>
    <p>Creating amazing experiences for you</p>
    <button class="btn">Get Started</button>
  </div>

  <div class="features">
    <div class="feature">
      <h3>Feature 1</h3>
      <p>Description of this amazing feature.</p>
    </div>
    <div class="feature">
      <h3>Feature 2</h3>
      <p>Description of this amazing feature.</p>
    </div>
    <div class="feature">
      <h3>Feature 3</h3>
      <p>Description of this amazing feature.</p>
    </div>
  </div>

  <footer>
    <p>© 2025 Your Company. All rights reserved.</p>
  </footer>
</body>
</html>`
  }

  const generateTailwindCode = () => {
    return `<div class="min-h-screen bg-white">
  <!-- Navigation -->
  <nav class="p-4 flex justify-between items-center bg-blue-600">
    <div class="text-white font-bold text-xl">Logo</div>
    <div class="flex gap-6">
      <a href="#" class="text-white hover:opacity-80">Home</a>
      <a href="#" class="text-white hover:opacity-80">About</a>
      <a href="#" class="text-white hover:opacity-80">Services</a>
      <a href="#" class="text-white hover:opacity-80">Contact</a>
    </div>
  </nav>

  <!-- Hero Section -->
  <div class="p-12 text-center">
    <h1 class="text-5xl font-bold mb-4 text-gray-900">
      Welcome to Our Site
    </h1>
    <p class="text-xl mb-8 text-gray-700">
      Creating amazing experiences for you
    </p>
    <button class="px-8 py-3 rounded-lg text-white font-medium bg-blue-600 hover:bg-blue-700">
      Get Started
    </button>
  </div>

  <!-- Features -->
  <div class="p-12 grid grid-cols-3 gap-6">
    <div class="p-6 rounded-lg bg-gray-100">
      <div class="w-12 h-12 rounded-full mb-4 bg-blue-600"></div>
      <h3 class="text-lg font-semibold mb-2">Feature 1</h3>
      <p class="text-sm text-gray-600">
        Description of this amazing feature.
      </p>
    </div>
    <div class="p-6 rounded-lg bg-gray-100">
      <div class="w-12 h-12 rounded-full mb-4 bg-blue-600"></div>
      <h3 class="text-lg font-semibold mb-2">Feature 2</h3>
      <p class="text-sm text-gray-600">
        Description of this amazing feature.
      </p>
    </div>
    <div class="p-6 rounded-lg bg-gray-100">
      <div class="w-12 h-12 rounded-full mb-4 bg-blue-600"></div>
      <h3 class="text-lg font-semibold mb-2">Feature 3</h3>
      <p class="text-sm text-gray-600">
        Description of this amazing feature.
      </p>
    </div>
  </div>

  <!-- Footer -->
  <footer class="p-6 text-center bg-gray-100">
    <p class="text-sm text-gray-600">
      © 2025 Your Company. All rights reserved.
    </p>
  </footer>
</div>`
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generateCode())
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div>
      {/* Format Selector */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setExportFormat('react')}
          className={`px-4 py-2 rounded-lg ${
            exportFormat === 'react' ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
        >
          React/JSX
        </button>
        <button
          onClick={() => setExportFormat('html')}
          className={`px-4 py-2 rounded-lg ${
            exportFormat === 'html' ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
        >
          HTML/CSS
        </button>
        <button
          onClick={() => setExportFormat('tailwind')}
          className={`px-4 py-2 rounded-lg ${
            exportFormat === 'tailwind' ? 'bg-blue-600 text-white' : 'bg-gray-100'
          }`}
        >
          Tailwind
        </button>
      </div>

      {/* Code Display */}
      <div className="relative">
        <pre className="bg-gray-900 text-gray-100 p-6 rounded-lg overflow-x-auto">
          <code className="text-sm">{generateCode()}</code>
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-gray-300" />
          )}
        </button>
      </div>
    </div>
  )
}