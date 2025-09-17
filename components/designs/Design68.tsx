'use client'
export default function Design68() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-5xl mb-4">🌍</div>
          <h1 className="text-4xl font-bold text-green-800">Hope Foundation</h1>
          <p className="text-green-600">Making the world a better place</p>
        </header>
        <main>
          <div className="text-center mb-12">
            <h2 className="text-5xl font-light text-gray-800 mb-4">
              Together We Can<br />
              <span className="text-green-600 font-bold">Make a Difference</span>
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-xl font-bold mb-2">10K+ Lives Changed</h3>
              <p className="text-gray-600">Your impact matters</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">50+ Projects</h3>
              <p className="text-gray-600">Across the globe</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-2">Join Us</h3>
              <p className="text-gray-600">Be the change</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}