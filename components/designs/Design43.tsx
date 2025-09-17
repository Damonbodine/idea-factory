'use client'
export default function Design43() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-8 py-16">
        <header className="mb-20">
          <div className="flex items-center gap-4">
            <div className="text-5xl font-light">Δ</div>
            <div>
              <div className="text-3xl">Scientific Design</div>
              <div className="text-sm text-gray-600">Hypothesis 43</div>
            </div>
          </div>
        </header>
        <main>
          <div className="bg-white p-8 shadow-lg">
            <h1 className="text-4xl mb-6">Research & Development</h1>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold mb-4">Methodology</h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-600"></div>
                    <span>Data Collection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-600"></div>
                    <span>Analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-purple-600"></div>
                    <span>Conclusion</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Results</h2>
                <div className="h-40 bg-gradient-to-r from-blue-100 to-purple-100 rounded"></div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t">
              <p className="text-sm text-gray-600">
                E = mc² • The intersection of science and design
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}