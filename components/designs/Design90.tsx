'use client'
export default function Design90() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brown-900 to-black text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-8xl font-black">VINYL</div>
          <div className="text-4xl text-orange-500">RECORDS • 1990</div>
        </header>
        <main>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl mb-8 text-center">
              Spin the<br />
              <span className="text-orange-500">Classics</span>
            </h2>
            <div className="grid grid-cols-3 gap-8">
              {Array.from({length: 9}).map((_, i) => (
                <div key={i} className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                  <div className="w-24 h-24 bg-black rounded-full border-4 border-gray-700"></div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}