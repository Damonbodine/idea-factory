'use client'
export default function Design27() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <div className="container mx-auto px-8 py-16">
        <nav className="flex justify-center mb-20">
          <div className="flex gap-2">
            {['Home', 'About', 'Services', 'Contact'].map(item => (
              <div key={item} className="px-8 py-3 bg-white rounded-full shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </nav>
        <main>
          <div className="text-center mb-20">
            <div className="inline-block">
              <h1 className="text-6xl font-light mb-4">Organic</h1>
              <div className="h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
              <p className="text-xl mt-4 text-gray-600">Natural Digital Flow</p>
            </div>
          </div>
          <div className="flex justify-center gap-8">
            <div className="w-64 h-64 bg-green-200 rounded-full opacity-50" />
            <div className="w-48 h-48 bg-blue-200 rounded-full opacity-50 mt-8" />
            <div className="w-56 h-56 bg-purple-200 rounded-full opacity-50 mt-16" />
          </div>
        </main>
      </div>
    </div>
  )
}