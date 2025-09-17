'use client'
export default function Design26() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-8 py-16">
        <header className="mb-20">
          <div className="text-5xl font-mono">ISOMETRIC.26</div>
        </header>
        <main className="relative">
          <div className="grid grid-cols-4 gap-8">
            {Array.from({length: 8}).map((_, i) => (
              <div
                key={i}
                className="h-32 bg-gradient-to-br from-blue-400 to-purple-600 transform rotate-45 shadow-lg"
                style={{transform: `rotate(45deg) scale(${0.8 + (i * 0.02)})`}}
              />
            ))}
          </div>
          <div className="text-center mt-20">
            <h1 className="text-3xl font-bold">Dimensional Design</h1>
            <p className="text-gray-600 mt-4">Perspectives that matter</p>
          </div>
        </main>
      </div>
    </div>
  )
}