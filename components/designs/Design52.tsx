'use client'
export default function Design52() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-6xl mb-4">和</div>
          <div className="text-sm tracking-widest">DESIGN 52</div>
        </header>
        <main className="max-w-2xl mx-auto">
          <div className="grid grid-cols-3 gap-px bg-gray-200">
            <div className="bg-white p-8 aspect-square flex items-center justify-center">
              <div className="text-4xl">静</div>
            </div>
            <div className="bg-white p-8 aspect-square flex items-center justify-center">
              <div className="text-4xl">簡</div>
            </div>
            <div className="bg-white p-8 aspect-square flex items-center justify-center">
              <div className="text-4xl">美</div>
            </div>
          </div>
          <p className="text-center mt-12 text-gray-600">
            Silence • Simplicity • Beauty
          </p>
        </main>
      </div>
    </div>
  )
}