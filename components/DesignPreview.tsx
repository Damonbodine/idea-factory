'use client'

import { getDesign } from './designs'

interface DesignPreviewProps {
  id: number
}

export default function DesignPreview({ id }: DesignPreviewProps) {
  const Design = getDesign(id)

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <div className="transform scale-[0.25] origin-top-left w-[400%] h-[400%]">
        <Design />
      </div>
    </div>
  )
}