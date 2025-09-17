'use client'
export default function Design80() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-100 to-pink-100">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-6xl font-script text-rose-600 mb-2">Forever & Always</div>
          <div className="text-rose-500">Wedding Planning • Design 80</div>
        </header>
        <main className="text-center">
          <h2 className="text-5xl font-light text-gray-800 mb-6">
            Your Perfect Day<br />
            <span className="text-rose-600 font-script">Awaits</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">Creating magical moments since 1980</p>
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">💐</div>
              <h3 className="text-xl font-semibold mb-2">Floral Design</h3>
              <p className="text-gray-600">Breathtaking arrangements</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">🎂</div>
              <h3 className="text-xl font-semibold mb-2">Catering</h3>
              <p className="text-gray-600">Exquisite cuisine</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-xl font-semibold mb-2">Photography</h3>
              <p className="text-gray-600">Timeless memories</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}