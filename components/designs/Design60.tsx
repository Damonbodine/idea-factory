'use client'
export default function Design60() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="flex items-center gap-2">
            <div className="text-3xl">📚</div>
            <div className="text-2xl font-bold text-blue-900">LearnHub 60</div>
          </div>
          <nav className="flex gap-6">
            <a href="#" className="text-blue-700">Courses</a>
            <a href="#" className="text-blue-700">Instructors</a>
            <a href="#" className="text-blue-700">Pricing</a>
          </nav>
        </header>
        <main>
          <h1 className="text-6xl font-bold text-blue-900 mb-6">
            Learn Without<br />Limits
          </h1>
          <p className="text-xl text-gray-700 mb-12">Master new skills from anywhere</p>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">Design</h3>
              <p className="text-gray-600">120+ Courses</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-2">Development</h3>
              <p className="text-gray-600">200+ Courses</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-2">Business</h3>
              <p className="text-gray-600">150+ Courses</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}