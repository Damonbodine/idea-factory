'use client'
export default function Design17() {
  const items = [
    { h: 'h-32', bg: 'bg-red-400', title: 'Strategy' },
    { h: 'h-48', bg: 'bg-blue-400', title: 'Design' },
    { h: 'h-40', bg: 'bg-green-400', title: 'Development' },
    { h: 'h-64', bg: 'bg-yellow-400', title: 'Marketing' },
    { h: 'h-36', bg: 'bg-purple-400', title: 'Analytics' },
    { h: 'h-56', bg: 'bg-pink-400', title: 'Support' },
    { h: 'h-44', bg: 'bg-orange-400', title: 'Innovation' },
    { h: 'h-52', bg: 'bg-teal-400', title: 'Growth' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold">MASONRY/17</h1>
        <p className="text-gray-600 mt-2">Creative Grid Solutions</p>
      </header>
      <div className="columns-1 md:columns-3 lg:columns-4 gap-4 max-w-7xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className={`${item.bg} ${item.h} mb-4 rounded-lg p-6 break-inside-avoid text-white`}>
            <div className="font-bold text-xl">{item.title}</div>
            <div className="text-white/80 text-sm mt-2">Service {i + 1}</div>
          </div>
        ))}
      </div>
    </div>
  )
}