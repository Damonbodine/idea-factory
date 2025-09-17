'use client'
export default function Design82() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="text-4xl font-black text-yellow-400">IRON82</div>
          <nav className="flex gap-8 text-yellow-400">
            <a href="#">Classes</a>
            <a href="#">Trainers</a>
            <a href="#">Join</a>
          </nav>
        </header>
        <main>
          <h1 className="text-8xl font-black mb-8">
            BUILD<br />
            YOUR<br />
            <span className="text-yellow-400">LEGACY</span>
          </h1>
          <div className="grid grid-cols-4 gap-4 mt-12">
            <div className="bg-yellow-400 text-black p-6 text-center font-black">
              <div className="text-3xl mb-2">💪</div>
              STRENGTH
            </div>
            <div className="bg-gray-800 p-6 text-center font-black">
              <div className="text-3xl mb-2">🏃</div>
              CARDIO
            </div>
            <div className="bg-yellow-400 text-black p-6 text-center font-black">
              <div className="text-3xl mb-2">🧘</div>
              YOGA
            </div>
            <div className="bg-gray-800 p-6 text-center font-black">
              <div className="text-3xl mb-2">🥊</div>
              BOXING
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}