'use client'
export default function Design81() {
  return (
    <div className="min-h-screen bg-red-600 text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-8xl font-black">SLICE 81</div>
          <div className="text-2xl">AUTHENTIC ITALIAN PIZZA</div>
        </header>
        <main>
          <div className="bg-white text-red-600 rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-5xl font-black mb-8 text-center">
              HOT & FRESH
            </h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-6xl mb-2">🍕</div>
                <div className="font-bold">Classic</div>
                <div className="text-sm text-gray-600">$12</div>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-2">🍕</div>
                <div className="font-bold">Pepperoni</div>
                <div className="text-sm text-gray-600">$14</div>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-2">🍕</div>
                <div className="font-bold">Supreme</div>
                <div className="text-sm text-gray-600">$16</div>
              </div>
            </div>
            <button className="bg-red-600 text-white px-8 py-4 rounded-full font-bold mx-auto block mt-8">
              ORDER NOW
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}