'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { getDesign } from '@/components/designs'

export default function DesignPage() {
  const params = useParams()
  const id = parseInt(params.id as string)
  const Design = getDesign(id)

  return (
    <div className="min-h-screen">
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Gallery</span>
        </Link>
      </div>

      <div className="fixed top-4 right-4 z-50">
        <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
          <span className="font-semibold">Design {id}</span>
        </div>
      </div>

      <Design />
    </div>
  )
}