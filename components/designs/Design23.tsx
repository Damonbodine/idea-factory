'use client'
export default function Design23() {
  return (
    <div className="min-h-screen bg-amber-50 p-8">
      <div className="max-w-4xl mx-auto bg-white border-8 border-amber-900 p-12">
        <header className="text-center mb-8 border-b-4 border-amber-900 pb-8">
          <div className="text-sm tracking-widest mb-2">ESTABLISHED 1923</div>
          <h1 className="text-6xl font-serif">VINTAGE</h1>
          <div className="text-4xl font-serif">Design Co.</div>
        </header>
        <main className="text-center">
          <div className="mb-8">
            <div className="inline-block bg-amber-900 text-amber-50 px-8 py-4 text-2xl font-serif">
              AUTHENTIC • CLASSIC • TIMELESS
            </div>
          </div>
          <p className="text-lg font-serif mb-8 max-w-2xl mx-auto">
            Crafting distinguished digital experiences with old-world charm and modern sophistication
          </p>
          <button className="border-4 border-amber-900 px-8 py-3 font-serif text-xl hover:bg-amber-900 hover:text-white transition">
            View Portfolio
          </button>
        </main>
        <footer className="text-center mt-12 pt-8 border-t-4 border-amber-900">
          <div className="text-sm">San Francisco • New York • London</div>
        </footer>
      </div>
    </div>
  )
}