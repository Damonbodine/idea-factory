'use client'
export default function Design84() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-yellow-100">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-6xl mb-4">🐾</div>
          <h1 className="text-5xl font-bold text-green-800">PetPals 84</h1>
          <p className="text-green-600">Everything for your furry friends</p>
        </header>
        <main>
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-800 mb-4">
              Happy Pets,<br />
              <span className="text-green-600 font-bold">Happy Life</span>
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-5xl mb-2">🐕</div>
              <div className="font-bold">Dogs</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-5xl mb-2">🐈</div>
              <div className="font-bold">Cats</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-5xl mb-2">🐦</div>
              <div className="font-bold">Birds</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-5xl mb-2">🐠</div>
              <div className="font-bold">Fish</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}