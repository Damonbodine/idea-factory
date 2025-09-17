'use client'
export default function Design88() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 via-pink-200 to-yellow-200">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-6xl mb-4">🍦</div>
          <h1 className="text-6xl font-black text-pink-600">SCOOP 88</h1>
          <p className="text-2xl text-blue-600">Sweet treats & cool beats</p>
        </header>
        <main>
          <div className="bg-white rounded-3xl p-12 max-w-4xl mx-auto shadow-xl">
            <h2 className="text-4xl font-black text-center mb-8 text-pink-600">
              FLAVORS OF THE DAY
            </h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-5xl mb-2">🍓</div>
                <div className="font-bold">Strawberry</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">🍫</div>
                <div className="font-bold">Chocolate</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">🍦</div>
                <div className="font-bold">Vanilla</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">🥭</div>
                <div className="font-bold">Mango</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">🍋</div>
                <div className="font-bold">Lemon</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">🥥</div>
                <div className="font-bold">Coconut</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}