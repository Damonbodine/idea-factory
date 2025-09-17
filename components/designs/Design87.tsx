'use client'
export default function Design87() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-green-50">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-6xl mb-4">🌸</div>
          <h1 className="text-5xl font-script text-pink-600">Bloom 87</h1>
          <p className="text-green-600">Fresh flowers daily</p>
        </header>
        <main>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-800 mb-4">
              Nature&apos;s Beauty<br />
              <span className="text-pink-600 font-script">Delivered</span>
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 bg-pink-200 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl">
                🌹
              </div>
              <h3 className="font-semibold">Roses</h3>
              <p className="text-gray-600">Classic romance</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-yellow-200 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl">
                🌻
              </div>
              <h3 className="font-semibold">Sunflowers</h3>
              <p className="text-gray-600">Bright & cheerful</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl">
                🌷
              </div>
              <h3 className="font-semibold">Tulips</h3>
              <p className="text-gray-600">Spring elegance</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}