'use client'
import { motion } from 'framer-motion'
import { Crown } from 'lucide-react'

export default function Design12() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="border-b border-gray-800">
        <nav className="container mx-auto px-8 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Crown className="w-6 h-6 text-gold-500" />
            <span className="text-xl tracking-widest">LUXE</span>
          </div>
          <div className="flex gap-12 text-sm tracking-wider">
            <a href="#" className="hover:text-gold-500 transition">COLLECTION</a>
            <a href="#" className="hover:text-gold-500 transition">ATELIER</a>
            <a href="#" className="hover:text-gold-500 transition">CONTACT</a>
          </div>
        </nav>
      </div>
      <main className="container mx-auto px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-7xl font-thin tracking-wider mb-6">
            EXCLUSIVE
          </h1>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto mb-6" />
          <p className="text-6xl font-bold mb-12">
            DIGITAL CRAFTSMANSHIP
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12 tracking-wide">
            Bespoke digital experiences for discerning brands that demand excellence
          </p>
          <button className="px-12 py-4 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black transition tracking-widest">
            DISCOVER
          </button>
        </motion.div>
      </main>
    </div>
  )
}