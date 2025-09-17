'use client'
export default function Design32() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-blue-600 to-cyan-500">
      <div className="container mx-auto px-8 py-16">
        <header className="mb-20">
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl inline-block">
            <div className="text-3xl font-bold text-white">GLASS/32</div>
          </div>
        </header>
        <main>
          <div className="bg-white/10 backdrop-blur-xl p-12 rounded-3xl border border-white/20">
            <h1 className="text-5xl font-bold text-white mb-6">Transparent Beauty</h1>
            <p className="text-xl text-white/80 mb-12">See through the future of design</p>
            <div className="grid grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white/5 backdrop-blur p-6 rounded-2xl border border-white/10">
                  <div className="h-32"></div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}