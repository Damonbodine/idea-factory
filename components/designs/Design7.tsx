'use client'
import { motion } from 'framer-motion'
import { Code, Palette } from 'lucide-react'

export default function Design7() {
  return (
    <div className="min-h-screen flex">
      <div className="w-1/2 bg-black text-white p-12 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Code className="w-12 h-12 mb-6" />
          <h2 className="text-5xl font-bold mb-4">Developers</h2>
          <p className="text-gray-400 mb-6">
            Clean code, powerful APIs, seamless integration
          </p>
          <button className="px-6 py-3 border border-white hover:bg-white hover:text-black transition">
            View Documentation
          </button>
        </motion.div>
      </div>
      <div className="w-1/2 bg-white text-black p-12 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Palette className="w-12 h-12 mb-6" />
          <h2 className="text-5xl font-bold mb-4">Designers</h2>
          <p className="text-gray-600 mb-6">
            Beautiful interfaces, intuitive experiences
          </p>
          <button className="px-6 py-3 bg-black text-white hover:bg-gray-900 transition">
            Browse Gallery
          </button>
        </motion.div>
      </div>
    </div>
  )
}