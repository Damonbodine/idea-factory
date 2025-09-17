'use client'
export default function Design66() {
  return (
    <div className="min-h-screen bg-cream-50">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-6xl mb-4">🥐</div>
          <h1 className="text-5xl font-serif text-brown-800">Sweet Moments</h1>
          <p className="text-brown-600">Artisan Bakery & Café</p>
        </header>
        <main>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-brown-800 mb-4">
              Freshly Baked<br />Every Morning
            </h2>
            <p className="text-brown-600">From our ovens to your table</p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {['Croissants', 'Breads', 'Pastries', 'Coffee'].map(item => (
              <div key={item} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="h-24 bg-brown-100 rounded mb-4"></div>
                <div className="font-serif text-brown-800">{item}</div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}