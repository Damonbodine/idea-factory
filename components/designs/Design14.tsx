'use client'
import { motion } from 'framer-motion'
import { Layers, Box, Grid3x3 } from 'lucide-react'

export default function Design14() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="mb-12">
        <h1 className="text-4xl font-bold">CardFlow14</h1>
      </header>
      <main className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {[
          { icon: Layers, title: 'Stack', color: 'bg-purple-500' },
          { icon: Box, title: 'Build', color: 'bg-blue-500' },
          { icon: Grid3x3, title: 'Scale', color: 'bg-green-500' }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition"
          >
            <div className={`${item.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
              <item.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600">
              Professional solutions for modern challenges
            </p>
          </motion.div>
        ))}
      </main>
    </div>
  )
}