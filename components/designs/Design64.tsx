'use client'
export default function Design64() {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="border-b border-gray-700 pb-6 mb-20">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-serif">LAW & ORDER</div>
            <div className="text-sm tracking-widest">EST. 1964</div>
          </div>
        </header>
        <main>
          <h1 className="text-5xl font-serif mb-8">
            Justice.<br />
            Integrity.<br />
            Excellence.
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            Protecting your rights with decades of expertise
          </p>
          <div className="grid grid-cols-3 gap-8">
            <div className="border-l-2 border-gold-400 pl-6">
              <h3 className="text-xl font-serif mb-2">Corporate Law</h3>
              <p className="text-gray-400">Expert business counsel</p>
            </div>
            <div className="border-l-2 border-gold-400 pl-6">
              <h3 className="text-xl font-serif mb-2">Civil Litigation</h3>
              <p className="text-gray-400">Powerful advocacy</p>
            </div>
            <div className="border-l-2 border-gold-400 pl-6">
              <h3 className="text-xl font-serif mb-2">Family Law</h3>
              <p className="text-gray-400">Compassionate guidance</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}