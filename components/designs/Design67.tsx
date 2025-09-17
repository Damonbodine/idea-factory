'use client'
export default function Design67() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-8 py-16">
        <header className="mb-20">
          <div className="grid grid-cols-12 gap-4 items-end">
            <div className="col-span-2">
              <div className="text-6xl font-thin">67°</div>
            </div>
            <div className="col-span-10">
              <div className="text-4xl font-light">ARCHITECTS</div>
              <div className="h-px bg-black mt-2"></div>
            </div>
          </div>
        </header>
        <main>
          <div className="grid grid-cols-3 gap-px bg-gray-200">
            <div className="bg-white p-12">
              <h2 className="text-2xl mb-4">Vision</h2>
              <p className="text-gray-600">Creating spaces that inspire</p>
            </div>
            <div className="bg-white p-12">
              <h2 className="text-2xl mb-4">Design</h2>
              <p className="text-gray-600">Form meets function</p>
            </div>
            <div className="bg-white p-12">
              <h2 className="text-2xl mb-4">Build</h2>
              <p className="text-gray-600">Bringing dreams to life</p>
            </div>
          </div>
          <div className="mt-12 h-64 bg-gray-100"></div>
        </main>
      </div>
    </div>
  )
}