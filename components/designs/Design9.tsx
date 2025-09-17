'use client'
export default function Design9() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-8 py-12">
        <header className="grid grid-cols-12 gap-4 mb-16">
          <div className="col-span-2">
            <div className="w-8 h-8 bg-red-600"></div>
          </div>
          <div className="col-span-10 text-right text-sm">
            <a href="#" className="ml-8">Projekte</a>
            <a href="#" className="ml-8">Über</a>
            <a href="#" className="ml-8">Kontakt</a>
          </div>
        </header>
        <main>
          <div className="grid grid-cols-12 gap-4 items-end mb-16">
            <div className="col-span-7">
              <h1 className="text-7xl font-bold leading-none">
                Helvetica<br/>
                Neue<br/>
                Studio
              </h1>
            </div>
            <div className="col-span-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square bg-gray-900"></div>
                <div className="aspect-square bg-gray-400"></div>
                <div className="aspect-square bg-gray-600"></div>
                <div className="aspect-square bg-gray-200"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-3 text-sm">
              <p>Präzision in Design und Entwicklung seit 2010</p>
            </div>
            <div className="col-span-3 col-start-10 text-sm text-right">
              <p>Zürich, Schweiz</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}