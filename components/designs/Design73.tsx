'use client'
export default function Design73() {
  return (
    <div className="min-h-screen bg-rose-50">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="inline-block">
            <div className="text-6xl font-bold text-rose-600" style={{fontFamily: 'cursive'}}>
              Retro Revival
            </div>
            <div className="text-rose-500">~ Since 1973 ~</div>
          </div>
        </header>
        <main>
          <div className="text-center mb-12">
            <h2 className="text-4xl text-rose-800 mb-4">Timeless Treasures</h2>
            <p className="text-rose-600">One-of-a-kind vintage finds</p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-64 bg-rose-200 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold text-rose-800">Clothing</h3>
            </div>
            <div className="text-center">
              <div className="h-64 bg-rose-300 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold text-rose-800">Accessories</h3>
            </div>
            <div className="text-center">
              <div className="h-64 bg-rose-200 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold text-rose-800">Decor</h3>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}