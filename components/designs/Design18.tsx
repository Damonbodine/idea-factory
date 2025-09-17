'use client'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Design18() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-100 to-white">
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur z-50 px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="font-bold">PARALLAX/18</div>
          <div className="flex gap-6">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </nav>
      <section className="h-screen flex items-center justify-center relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-8xl font-bold mb-8">SCROLL DOWN</h1>
          <ChevronDown className="w-12 h-12 mx-auto animate-bounce" />
        </motion.div>
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full opacity-50" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-sky-200 rounded-full opacity-50" />
      </section>
      <section className="h-screen bg-sky-200 flex items-center justify-center">
        <h2 className="text-6xl font-bold">Layer Two</h2>
      </section>
    </div>
  )
}