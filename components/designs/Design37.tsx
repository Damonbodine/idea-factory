'use client'
export default function Design37() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-8 py-16">
        <header className="mb-20">
          <div className="flex items-end gap-8">
            <div className="text-8xl font-thin">37</div>
            <div>
              <div className="text-3xl">ARCHITECTURAL</div>
              <div className="text-sm text-gray-600">FORM FOLLOWS FUNCTION</div>
            </div>
          </div>
        </header>
        <main className="grid grid-cols-12 gap-4">
          {Array.from({length: 24}).map((_, i) => (
            <div key={i} className={`col-span-${(i % 4) + 1} h-32 bg-gray-${200 + (i % 4) * 100}`}></div>
          ))}
        </main>
        <footer className="mt-20">
          <div className="flex justify-between items-center">
            <div className="w-1/3 h-px bg-black"></div>
            <div className="text-center px-8">Blueprint for Tomorrow</div>
            <div className="w-1/3 h-px bg-black"></div>
          </div>
        </footer>
      </div>
    </div>
  )
}