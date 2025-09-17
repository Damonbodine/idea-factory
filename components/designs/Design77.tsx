'use client'
export default function Design77() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-orange-500">
      <div className="container mx-auto px-8 py-16">
        <header className="text-white text-center mb-20">
          <div className="text-6xl font-black">SOCIAL77</div>
          <p className="text-2xl">Connect. Share. Inspire.</p>
        </header>
        <main className="text-white">
          <div className="max-w-md mx-auto">
            <div className="bg-white/20 backdrop-blur rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/30 rounded-full"></div>
                <div>
                  <div className="font-bold">@username</div>
                  <div className="text-sm opacity-80">2.5M followers</div>
                </div>
              </div>
              <div className="bg-white/10 rounded-2xl p-4 mb-4">
                <p className="mb-4">Living my best life ✨</p>
                <div className="h-48 bg-white/20 rounded-xl"></div>
              </div>
              <div className="flex justify-around">
                <button className="text-2xl">❤️ 42K</button>
                <button className="text-2xl">💬 1.2K</button>
                <button className="text-2xl">↗️ Share</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}