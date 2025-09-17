'use client'
export default function Design83() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-5xl font-script text-purple-600 mb-2">Glamour Studio</div>
          <div className="text-purple-500">Beauty & Wellness • Est. 83</div>
        </header>
        <main>
          <div className="text-center mb-12">
            <h2 className="text-6xl font-light text-gray-800 mb-4">
              Reveal Your<br />
              <span className="text-purple-600 font-script">Inner Glow</span>
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">💅</div>
              <h3 className="text-xl font-semibold mb-2">Nails</h3>
              <p className="text-gray-600">Manicure & Art</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">💇‍♀️</div>
              <h3 className="text-xl font-semibold mb-2">Hair</h3>
              <p className="text-gray-600">Cut & Color</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2">Skin</h3>
              <p className="text-gray-600">Facials & Treatment</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}