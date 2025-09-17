'use client'
export default function Design58() {
  return (
    <div className="min-h-screen bg-blue-50">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="flex items-center gap-2">
            <div className="text-blue-600 text-3xl">+</div>
            <div className="text-2xl font-semibold text-blue-900">MediCare 58</div>
          </div>
          <nav className="flex gap-8 text-blue-700">
            <a href="#">Services</a>
            <a href="#">Doctors</a>
            <a href="#">Contact</a>
          </nav>
        </header>
        <main>
          <h1 className="text-5xl font-light text-blue-900 mb-6">
            Your Health,<br />Our Priority
          </h1>
          <p className="text-xl text-blue-700 mb-12">Advanced care with compassion</p>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-2">🏥</div>
              <div className="text-sm">Emergency</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-2">💊</div>
              <div className="text-sm">Pharmacy</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-2">🔬</div>
              <div className="text-sm">Laboratory</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-2">👨‍⚕️</div>
              <div className="text-sm">Consultation</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}