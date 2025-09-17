'use client'

import { useState, useCallback } from 'react'
import { Upload, Wand2, Loader2 } from 'lucide-react'
import ImageAnalyzer from '@/components/ui-cloner/ImageAnalyzer'
import VariationPanel from '@/components/ui-cloner/VariationPanel'
import { UIAnalysis } from '@/types/ui-cloner'

export default function UICloner() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)
  const [analyzing, setAnalyzing] = useState(false)
  const [uiAnalysis, setUiAnalysis] = useState<UIAnalysis | null>(null)
  const [generatedUIs, setGeneratedUIs] = useState<string[]>([])
  const [selectedVariation, setSelectedVariation] = useState<number>(0)

  const handleImageUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedImage(reader.result as string)
        analyzeImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const analyzeImage = useCallback(async (imageData: string) => {
    setAnalyzing(true)

    // Simulate AI analysis (in production, this would call an AI vision API)
    setTimeout(() => {
      const mockAnalysis = {
        layout: 'grid',
        colorScheme: {
          primary: '#3B82F6',
          secondary: '#10B981',
          background: '#FFFFFF',
          text: '#1F2937'
        },
        components: [
          { type: 'navbar', position: 'top' },
          { type: 'hero', style: 'centered' },
          { type: 'features', layout: 'grid-3' },
          { type: 'footer', style: 'minimal' }
        ],
        typography: {
          headingFont: 'sans-serif',
          bodyFont: 'sans-serif',
          headingSize: 'large',
          bodySize: 'medium'
        },
        style: 'modern-clean'
      }

      setUiAnalysis(mockAnalysis)
      generateUIVariations(mockAnalysis)
      setAnalyzing(false)
    }, 2000)
  }, [])

  const generateUIVariations = (analysis: UIAnalysis) => {
    // Generate 10-20 variations based on the analysis
    const variations = []
    const numVariations = 15 // Generate 15 variations

    for (let i = 0; i < numVariations; i++) {
      variations.push(`variation-${i + 1}`)
    }

    setGeneratedUIs(variations)
  }

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setUploadedImage(reader.result as string)
        analyzeImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
            UI Cloner & Variation Generator
          </h1>
          <p className="text-gray-600 text-lg">
            Upload a UI screenshot and generate 10-20 unique variations instantly
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Upload className="w-6 h-6" />
              Upload UI Image
            </h2>

            {!uploadedImage ? (
              <div
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                className="border-3 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-500 transition-colors cursor-pointer"
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label htmlFor="image-upload" className="cursor-pointer">
                  <Upload className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                  <p className="text-xl font-medium mb-2">Drop your UI image here</p>
                  <p className="text-gray-500">or click to browse</p>
                  <p className="text-sm text-gray-400 mt-4">Supports: PNG, JPG, JPEG</p>
                </label>
              </div>
            ) : (
              <div className="relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={uploadedImage}
                  alt="Uploaded UI"
                  className="w-full rounded-lg shadow-md"
                />
                {analyzing && (
                  <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                    <div className="text-white text-center">
                      <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4" />
                      <p className="text-lg font-medium">Analyzing UI...</p>
                      <p className="text-sm opacity-80">Extracting colors, layout, and components</p>
                    </div>
                  </div>
                )}
                <button
                  onClick={() => {
                    setUploadedImage(null)
                    setUiAnalysis(null)
                    setGeneratedUIs([])
                  }}
                  className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          {/* Analysis & Preview Section */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Wand2 className="w-6 h-6" />
              AI Analysis & Generation
            </h2>

            {uiAnalysis ? (
              <ImageAnalyzer analysis={uiAnalysis} />
            ) : (
              <div className="text-center py-12 text-gray-500">
                <Wand2 className="w-16 h-16 mx-auto mb-4 opacity-30" />
                <p className="text-lg">Upload an image to start analysis</p>
                <p className="text-sm mt-2">AI will detect layout, colors, and components</p>
              </div>
            )}
          </div>
        </div>

        {/* Generated Variations */}
        {generatedUIs.length > 0 && uiAnalysis && (
          <div className="mt-12">
            <VariationPanel
              variations={generatedUIs}
              selectedIndex={selectedVariation}
              onSelect={setSelectedVariation}
              originalAnalysis={uiAnalysis}
            />
          </div>
        )}
      </div>
    </div>
  )
}