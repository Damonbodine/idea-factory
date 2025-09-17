import { getDesign } from '@/components/designs'

export default function PreviewPage({ params }: { params: { id: string } }) {
  const id = parseInt(params.id)
  const Design = getDesign(id)

  return <Design />
}