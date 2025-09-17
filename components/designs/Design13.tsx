'use client'
import { motion } from 'framer-motion'
import { Mouse } from 'lucide-react'

export default function Design13() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur z-50 px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="font-bold">Parallax13</div>
          <button className="px-4 py-2 bg-sky-500 text-white rounded">Menu</button>
        </div>
      </nav>
      <main className="pt-20">
        <div className="h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <h1 className="text-8xl font-bold mb-8">SCROLL</h1>
            <Mouse className="w-8 h-8 mx-auto animate-bounce" />
          </motion.div>
        </div>
        <div className="h-screen bg-sky-200 flex items-center justify-center">
          <h2 className="text-6xl">Section Two</h2>
        </div>
      </main>
    </div>
  )
}