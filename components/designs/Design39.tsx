'use client'
export default function Design39() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-xs tracking-[0.5em] mb-4">ESTABLISHED 2025</div>
          <div className="text-6xl font-thin tracking-[0.3em]">LUXE</div>
          <div className="text-xs tracking-[0.5em] mt-4">DESIGN XXXIX</div>
        </header>
        <main>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl font-light leading-relaxed mb-12">
              Exquisite craftsmanship meets digital excellence
            </p>
            <div className="grid grid-cols-3 gap-px bg-white/10">
              {Array.from({length: 9}).map((_, i) => (
                <div key={i} className="aspect-square bg-black"></div>
              ))}
            </div>
            <button className="mt-12 border border-white px-12 py-4 tracking-widest hover:bg-white hover:text-black transition-all">
              DISCOVER
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}