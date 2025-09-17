'use client'
import { Rocket, Zap, Shield } from 'lucide-react'

export default function Design24() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Rocket className="w-6 h-6 text-blue-600" />
          <span className="text-xl font-bold">TechStart/24</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-gray-600 hover:text-blue-600">Product</a>
          <a href="#" className="text-gray-600 hover:text-blue-600">Pricing</a>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Get Started</button>
        </div>
      </nav>
      <main className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm mb-4">
            <Zap className="w-4 h-4" />
            Launch Week
          </div>
          <h1 className="text-6xl font-bold mb-4">
            Build faster.<br />
            Ship smarter.
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The development platform for ambitious teams
          </p>
          <div className="flex gap-4 justify-center">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg">Start Free Trial</button>
            <button className="px-6 py-3 border border-gray-300 rounded-lg">Watch Demo</button>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {[
            { icon: Rocket, title: 'Fast Deploy' },
            { icon: Shield, title: 'Secure' },
            { icon: Zap, title: 'Scalable' }
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold">{item.title}</h3>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}