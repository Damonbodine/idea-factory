'use client'
export default function Design91() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-red-600 text-6xl mb-2">寿司</div>
          <h1 className="text-4xl">KOKU 91</h1>
          <div className="text-gray-400">AUTHENTIC JAPANESE</div>
        </header>
        <main>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-light mb-12 text-center">
              Tradition Meets<br />
              <span className="text-red-600">Perfection</span>
            </h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-gray-900 p-4 text-center">
                <div className="text-3xl mb-2">🍣</div>
                <div>Nigiri</div>
              </div>
              <div className="bg-gray-900 p-4 text-center">
                <div className="text-3xl mb-2">🍱</div>
                <div>Bento</div>
              </div>
              <div className="bg-gray-900 p-4 text-center">
                <div className="text-3xl mb-2">🥢</div>
                <div>Sashimi</div>
              </div>
              <div className="bg-gray-900 p-4 text-center">
                <div className="text-3xl mb-2">🍜</div>
                <div>Ramen</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}