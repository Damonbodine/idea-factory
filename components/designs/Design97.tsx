'use client'
export default function Design97() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <h1 className="text-7xl font-black">
            <span className="text-red-600">INK</span>97
          </h1>
          <div className="text-xl text-gray-400">TATTOO & PIERCING</div>
        </header>
        <main>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center">
              Art That<br />
              <span className="text-red-600">Lives Forever</span>
            </h2>
            <div className="grid grid-cols-3 gap-8">
              <div className="bg-gray-900 p-8 text-center">
                <div className="text-4xl mb-4">🌹</div>
                <h3 className="text-xl font-bold mb-2">Traditional</h3>
                <p className="text-gray-400">Classic designs</p>
              </div>
              <div className="bg-gray-900 p-8 text-center">
                <div className="text-4xl mb-4">🐉</div>
                <h3 className="text-xl font-bold mb-2">Japanese</h3>
                <p className="text-gray-400">Ancient art</p>
              </div>
              <div className="bg-gray-900 p-8 text-center">
                <div className="text-4xl mb-4">💀</div>
                <h3 className="text-xl font-bold mb-2">Realism</h3>
                <p className="text-gray-400">Photographic detail</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}