'use client'
export default function Design54() {
  return (
    <div className="min-h-screen bg-orange-50">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-orange-600 text-6xl mb-2">🍕</div>
          <h1 className="text-4xl font-serif text-orange-900">Delicious Design</h1>
          <p className="text-orange-700">Tasty interfaces served fresh daily</p>
        </header>
        <main className="grid grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-orange-200"></div>
            <div className="p-6">
              <h2 className="text-xl font-serif mb-2">Recipe One</h2>
              <p className="text-gray-600">Fresh ingredients</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-red-200"></div>
            <div className="p-6">
              <h2 className="text-xl font-serif mb-2">Recipe Two</h2>
              <p className="text-gray-600">Homemade goodness</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-yellow-200"></div>
            <div className="p-6">
              <h2 className="text-xl font-serif mb-2">Recipe Three</h2>
              <p className="text-gray-600">Family favorite</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}