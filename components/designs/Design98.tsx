'use client'
export default function Design98() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-burgundy-900 to-black">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center text-white mb-20">
          <div className="text-5xl font-serif mb-2">Château 98</div>
          <div className="text-gold-400 tracking-widest">WINE & DINE</div>
        </header>
        <main className="text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl font-serif mb-8">
              Savor the<br />
              <span className="text-gold-400">Moment</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Curated wines from around the world
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="border border-gold-400/30 p-8">
                <div className="text-4xl mb-4">🍷</div>
                <h3 className="text-gold-400">Red</h3>
                <p className="text-gray-400">Bold & complex</p>
              </div>
              <div className="border border-gold-400/30 p-8">
                <div className="text-4xl mb-4">🥂</div>
                <h3 className="text-gold-400">White</h3>
                <p className="text-gray-400">Crisp & refreshing</p>
              </div>
              <div className="border border-gold-400/30 p-8">
                <div className="text-4xl mb-4">🍾</div>
                <h3 className="text-gold-400">Sparkling</h3>
                <p className="text-gray-400">Celebrate life</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}