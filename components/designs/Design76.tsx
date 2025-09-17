'use client'
export default function Design76() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-gold-400 text-sm tracking-[0.5em] mb-2">SWISS MADE</div>
          <h1 className="text-5xl font-thin tracking-wider">CHRONOS</h1>
          <div className="text-gold-400 text-sm tracking-[0.5em] mt-2">MCMLXXVI</div>
        </header>
        <main>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl font-thin mb-8">
              Timeless<br />
              <span className="text-gold-400">Elegance</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">Precision crafted since 1976</p>
            <div className="grid grid-cols-3 gap-12">
              <div>
                <div className="w-32 h-32 border-2 border-gold-400 rounded-full mx-auto mb-4"></div>
                <div className="text-sm text-gold-400">Heritage</div>
              </div>
              <div>
                <div className="w-32 h-32 border-2 border-gold-400 rounded-full mx-auto mb-4"></div>
                <div className="text-sm text-gold-400">Precision</div>
              </div>
              <div>
                <div className="w-32 h-32 border-2 border-gold-400 rounded-full mx-auto mb-4"></div>
                <div className="text-sm text-gold-400">Luxury</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}