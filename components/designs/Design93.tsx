'use client'
export default function Design93() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 to-black">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center text-gold-400 mb-20">
          <div className="text-6xl font-thin tracking-wider">The Velvet</div>
          <div className="text-2xl tracking-[0.5em]">LOUNGE 93</div>
        </header>
        <main className="text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-light mb-8">
              Cocktails &<br />
              <span className="text-gold-400">Conversations</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">Crafted with passion since 1993</p>
            <div className="grid grid-cols-3 gap-8">
              <div className="border border-gold-400/30 p-8">
                <div className="text-4xl mb-4">🍸</div>
                <h3 className="text-gold-400 mb-2">Classics</h3>
                <p className="text-gray-400">Timeless favorites</p>
              </div>
              <div className="border border-gold-400/30 p-8">
                <div className="text-4xl mb-4">🥃</div>
                <h3 className="text-gold-400 mb-2">Whiskey</h3>
                <p className="text-gray-400">Premium selection</p>
              </div>
              <div className="border border-gold-400/30 p-8">
                <div className="text-4xl mb-4">🍹</div>
                <h3 className="text-gold-400 mb-2">Signature</h3>
                <p className="text-gray-400">House specials</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}