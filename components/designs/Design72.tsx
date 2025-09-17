'use client'
export default function Design72() {
  return (
    <div className="min-h-screen bg-amber-50">
      <div className="container mx-auto px-8 py-16">
        <header className="border-b-2 border-amber-900 pb-4 mb-20">
          <div className="flex justify-between items-baseline">
            <div className="text-4xl font-serif">Chapter 72</div>
            <div className="text-sm">INDEPENDENT BOOKSTORE</div>
          </div>
        </header>
        <main>
          <h1 className="text-6xl font-serif text-amber-900 mb-8">
            Stories<br />
            Worth<br />
            Telling
          </h1>
          <p className="text-xl text-amber-700 mb-12">Curated collection of literary treasures</p>
          <div className="grid grid-cols-4 gap-6">
            {Array.from({length: 8}).map((_, i) => (
              <div key={i} className="bg-amber-100 aspect-[3/4] rounded shadow-md"></div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}