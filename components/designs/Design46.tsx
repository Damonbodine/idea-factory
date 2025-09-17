'use client'
export default function Design46() {
  return (
    <div className="min-h-screen bg-gray-950 text-cyan-300">
      <div className="container mx-auto px-8 py-16">
        <header className="mb-20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 border-2 border-cyan-300 rounded-full animate-spin"></div>
            <div className="text-3xl">NEXUS_46</div>
          </div>
        </header>
        <main>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8">
              <div className="border border-cyan-300/30 p-8 bg-cyan-300/5">
                <h1 className="text-5xl mb-6">Neural Interface</h1>
                <p className="text-cyan-100 mb-8">
                  Connecting human creativity with digital precision
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {['Alpha', 'Beta', 'Gamma'].map(wave => (
                    <div key={wave} className="border border-cyan-300/50 p-4 text-center">
                      <div className="text-sm text-cyan-400">{wave}</div>
                      <div className="text-2xl">{Math.floor(Math.random() * 100)}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="border border-cyan-300/30 p-4 bg-cyan-300/5 mb-4">
                <div className="text-xs text-cyan-400 mb-2">SYSTEM STATUS</div>
                <div className="text-green-400">● ONLINE</div>
              </div>
              <div className="border border-cyan-300/30 p-4 bg-cyan-300/5">
                <div className="text-xs text-cyan-400 mb-2">PROCESSING</div>
                <div className="h-2 bg-cyan-900 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-cyan-400 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}