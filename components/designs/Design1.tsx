'use client'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function Design1() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 to-blue-900/50" />
      </div>
      <nav className="relative z-10 p-6 flex justify-between items-center">
        <div className="text-2xl font-bold">STUDIO</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-purple-400 transition">Work</a>
          <a href="#" className="hover:text-purple-400 transition">About</a>
          <a href="#" className="hover:text-purple-400 transition">Contact</a>
        </div>
      </nav>
      <main className="relative z-10 flex items-center min-h-[80vh] px-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-7xl font-black mb-6">
            CINEMATIC<br />EXPERIENCES
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            We create immersive digital stories that captivate audiences
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-purple-600 rounded-full flex items-center gap-3 hover:bg-purple-700 transition">
              <Play className="w-5 h-5" /> Watch Reel
            </button>
            <button className="px-8 py-4 border border-white/30 rounded-full hover:bg-white/10 transition">
              View Projects
            </button>
          </div>
        </motion.div>
      </main>
    </div>
  )
}