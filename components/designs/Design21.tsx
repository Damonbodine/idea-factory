'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Zap, Star } from 'lucide-react'

export default function Design21() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-600 text-white">
      <nav className="px-8 py-6">
        <div className="flex justify-between items-center">
          <div className="text-3xl font-extrabold">AGENCY</div>
          <div className="hidden md:flex gap-8">
            <a href="#" className="hover:text-purple-200 transition">Services</a>
            <a href="#" className="hover:text-purple-200 transition">Work</a>
            <a href="#" className="hover:text-purple-200 transition">About</a>
            <a href="#" className="hover:text-purple-200 transition">Contact</a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <h1 className="text-7xl font-extrabold mb-6 leading-tight">
            WE BUILD<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">
              BOLD IDEAS
            </span>
          </h1>
          <p className="text-xl mb-8 text-white/90">
            Transform your vision into reality with cutting-edge solutions
          </p>
          <button className="px-8 py-4 bg-white text-purple-600 font-bold rounded-full flex items-center gap-3 hover:scale-110 transition">
            Get Started <ArrowRight />
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/10 backdrop-blur p-8 rounded-2xl">
            <Zap className="w-12 h-12 mb-4 text-purple-300" />
            <h3 className="text-2xl font-bold mb-2">Fast Delivery</h3>
            <p className="text-white/80">Lightning-fast development cycles</p>
          </div>
          <div className="bg-white/10 backdrop-blur p-8 rounded-2xl">
            <Sparkles className="w-12 h-12 mb-4 text-purple-300" />
            <h3 className="text-2xl font-bold mb-2">Creative Solutions</h3>
            <p className="text-white/80">Innovative approaches to every challenge</p>
          </div>
          <div className="bg-white/10 backdrop-blur p-8 rounded-2xl">
            <Star className="w-12 h-12 mb-4 text-purple-300" />
            <h3 className="text-2xl font-bold mb-2">Premium Quality</h3>
            <p className="text-white/80">Excellence in every line of code</p>
          </div>
        </div>
      </main>
    </div>
  )
}