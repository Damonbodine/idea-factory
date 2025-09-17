'use client'
import { motion } from 'framer-motion'

export default function Design10() {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-purple-500/20"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-pink-500/20"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-blue-500/20"></div>
      </div>
      <nav className="relative z-10 p-6 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-purple-400">NEON</span>
          <span className="text-pink-400">FORGE</span>
        </div>
        <div className="flex gap-6 text-sm">
          {['Services', 'Work', 'Contact'].map(item => (
            <a key={item} href="#" className="relative group">
              <span>{item}</span>
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 scale-x-0 group-hover:scale-x-100 transition-transform"></span>
            </a>
          ))}
        </div>
      </nav>
      <main className="relative z-10 flex items-center justify-center min-h-[80vh] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-7xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              FUTURE
            </span>
            <br />
            <span className="text-white drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
              IS NOW
            </span>
          </h1>
          <p className="text-xl mb-8 text-gray-400">
            Next-gen digital experiences
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition">
            Enter the Matrix
          </button>
        </motion.div>
      </main>
    </div>
  )
}