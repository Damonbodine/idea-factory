'use client'

import { motion } from 'framer-motion'
import { Palette, Lightbulb, Heart, Wand2 } from 'lucide-react'

export default function Design3() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-pink-50">
      <nav className="px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-full animate-pulse"></div>
            <span className="text-2xl font-black">CreativeStudio</span>
          </div>
          <div className="flex gap-6">
            {['Work', 'Play', 'About', 'Contact'].map(item => (
              <a key={item} href="#" className="relative group">
                <span className="text-gray-700">{item}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-orange-400 group-hover:w-full transition-all"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-8 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-black mb-6">
            <span className="inline-block transform -rotate-3 text-green-600">Creative</span>{' '}
            <span className="inline-block transform rotate-3 text-pink-600">Code</span>{' '}
            <span className="inline-block transform -rotate-2 text-purple-600">Wand2</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Where imagination meets innovation. We craft digital experiences that delight.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-orange-400 text-white rounded-full font-bold transform hover:scale-105 transition shadow-xl">
            Let&apos;s Create Together
          </button>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Palette, label: 'Design', color: 'text-green-500' },
            { icon: Lightbulb, label: 'Ideas', color: 'text-yellow-500' },
            { icon: Heart, label: 'Passion', color: 'text-pink-500' },
            { icon: Wand2, label: 'Innovation', color: 'text-purple-500' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition text-center"
            >
              <item.icon className={`w-12 h-12 mx-auto mb-3 ${item.color}`} />
              <p className="font-bold">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </div>
  )
}