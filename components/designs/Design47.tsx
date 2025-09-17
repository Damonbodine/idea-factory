'use client'
export default function Design47() {
  const items = [
    { h: 'h-32', color: 'bg-red-400' },
    { h: 'h-48', color: 'bg-blue-400' },
    { h: 'h-40', color: 'bg-green-400' },
    { h: 'h-64', color: 'bg-yellow-400' },
    { h: 'h-32', color: 'bg-purple-400' },
    { h: 'h-56', color: 'bg-pink-400' }
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold">MASONRY47</h1>
      </header>
      <div className="columns-1 md:columns-3 gap-4 max-w-6xl mx-auto">
        {items.map((item, i) => (
          <div key={i} className={`${item.color} ${item.h} mb-4 rounded-lg p-4 break-inside-avoid`}>
            <div className="text-white font-bold">Block {i + 1}</div>
          </div>
        ))}
      </div>
    </div>
  )
}