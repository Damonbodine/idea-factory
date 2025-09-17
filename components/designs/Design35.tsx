'use client'
export default function Design35() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3">
            <div className="text-sm mb-8">35/SWISS</div>
          </div>
          <div className="col-span-9">
            <header className="mb-20">
              <h1 className="text-6xl font-light">Precision</h1>
              <div className="w-full h-px bg-black mt-4"></div>
            </header>
          </div>
          <div className="col-span-3">
            <nav className="text-sm space-y-2">
              <div>Information</div>
              <div>Structure</div>
              <div>Typography</div>
              <div>Grid System</div>
            </nav>
          </div>
          <div className="col-span-6">
            <main>
              <p className="text-lg leading-relaxed">
                The International Typographic Style has emerged from a desire to represent information
                objectively and in a universal manner.
              </p>
            </main>
          </div>
          <div className="col-span-3">
            <div className="aspect-square bg-red-600"></div>
            <div className="aspect-square bg-black mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  )
}