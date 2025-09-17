const fs = require('fs');
const path = require('path');

const uniqueDesigns = [
  // Design 51: Spotify-inspired
  {
    id: 51,
    content: `'use client'
export default function Design51() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="text-3xl font-bold text-green-500">SOUNDWAVE</div>
          <nav className="flex gap-8">
            <a href="#" className="hover:text-green-500 transition">Discover</a>
            <a href="#" className="hover:text-green-500 transition">Artists</a>
            <a href="#" className="hover:text-green-500 transition">Playlists</a>
          </nav>
        </header>
        <main>
          <h1 className="text-7xl font-bold mb-8">
            Music for<br />
            <span className="text-green-500">Every Mood</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12">Stream your creativity</p>
          <div className="grid grid-cols-4 gap-4">
            {Array.from({length: 8}).map((_, i) => (
              <div key={i} className="aspect-square bg-gradient-to-br from-green-600 to-green-900 rounded-lg"></div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 52: Japanese Minimalism
  {
    id: 52,
    content: `'use client'
export default function Design52() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-6xl mb-4">和</div>
          <div className="text-sm tracking-widest">DESIGN 52</div>
        </header>
        <main className="max-w-2xl mx-auto">
          <div className="grid grid-cols-3 gap-px bg-gray-200">
            <div className="bg-white p-8 aspect-square flex items-center justify-center">
              <div className="text-4xl">静</div>
            </div>
            <div className="bg-white p-8 aspect-square flex items-center justify-center">
              <div className="text-4xl">簡</div>
            </div>
            <div className="bg-white p-8 aspect-square flex items-center justify-center">
              <div className="text-4xl">美</div>
            </div>
          </div>
          <p className="text-center mt-12 text-gray-600">
            Silence • Simplicity • Beauty
          </p>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 53: Retro Wave
  {
    id: 53,
    content: `'use client'
export default function Design53() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-pink-900 to-indigo-900">
      <div className="container mx-auto px-8 py-16 relative">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-cyan-500/50 to-transparent"></div>
        </div>
        <header className="relative z-10 text-center mb-20">
          <h1 className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
            RETRO WAVE
          </h1>
          <div className="text-pink-300">1985 DIGITAL DREAMS</div>
        </header>
        <main className="relative z-10">
          <div className="grid grid-cols-3 gap-8">
            <div className="h-64 bg-gradient-to-b from-pink-500/20 to-cyan-500/20 border-2 border-cyan-500"></div>
            <div className="h-64 bg-gradient-to-b from-pink-500/20 to-cyan-500/20 border-2 border-pink-500"></div>
            <div className="h-64 bg-gradient-to-b from-pink-500/20 to-cyan-500/20 border-2 border-purple-500"></div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 54: Food Blog Style
  {
    id: 54,
    content: `'use client'
export default function Design54() {
  return (
    <div className="min-h-screen bg-orange-50">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-orange-600 text-6xl mb-2">🍕</div>
          <h1 className="text-4xl font-serif text-orange-900">Delicious Design</h1>
          <p className="text-orange-700">Tasty interfaces served fresh daily</p>
        </header>
        <main className="grid grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-orange-200"></div>
            <div className="p-6">
              <h2 className="text-xl font-serif mb-2">Recipe One</h2>
              <p className="text-gray-600">Fresh ingredients</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-red-200"></div>
            <div className="p-6">
              <h2 className="text-xl font-serif mb-2">Recipe Two</h2>
              <p className="text-gray-600">Homemade goodness</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="h-48 bg-yellow-200"></div>
            <div className="p-6">
              <h2 className="text-xl font-serif mb-2">Recipe Three</h2>
              <p className="text-gray-600">Family favorite</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 55: Fitness/Sport
  {
    id: 55,
    content: `'use client'
export default function Design55() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="text-4xl font-black italic text-red-500">POWER</div>
          <div className="flex gap-6 text-sm uppercase">
            <a href="#">Train</a>
            <a href="#">Nutrition</a>
            <a href="#">Results</a>
          </div>
        </header>
        <main>
          <h1 className="text-8xl font-black mb-8">
            NO<br />
            PAIN<br />
            <span className="text-red-500">NO GAIN</span>
          </h1>
          <div className="grid grid-cols-4 gap-4 mt-12">
            {['STRENGTH', 'CARDIO', 'FLEXIBILITY', 'ENDURANCE'].map(item => (
              <div key={item} className="bg-red-500 p-6 text-center font-bold">
                {item}
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 56: Cryptocurrency/Web3
  {
    id: 56,
    content: `'use client'
export default function Design56() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 to-blue-950">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="text-3xl font-bold text-purple-400">WEB3.56</div>
          <button className="px-6 py-2 border border-purple-400 text-purple-400 rounded-full">
            Connect Wallet
          </button>
        </header>
        <main className="text-center">
          <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-6">
            Decentralized Future
          </h1>
          <p className="text-xl text-gray-400 mb-12">Build on the blockchain</p>
          <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-purple-900/30 border border-purple-500/30 p-6 rounded-lg">
              <div className="text-3xl mb-2">🔗</div>
              <div>Smart Contracts</div>
            </div>
            <div className="bg-blue-900/30 border border-blue-500/30 p-6 rounded-lg">
              <div className="text-3xl mb-2">🪙</div>
              <div>DeFi Solutions</div>
            </div>
            <div className="bg-indigo-900/30 border border-indigo-500/30 p-6 rounded-lg">
              <div className="text-3xl mb-2">🎨</div>
              <div>NFT Marketplace</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 57: Fashion/Runway
  {
    id: 57,
    content: `'use client'
export default function Design57() {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="container mx-auto px-8 py-16">
        <header className="border-b border-black pb-4 mb-20">
          <div className="flex justify-between items-baseline">
            <div className="text-5xl font-light tracking-wider">VOGUE</div>
            <div className="text-sm tracking-widest">COLLECTION 57</div>
          </div>
        </header>
        <main className="grid grid-cols-2 gap-16">
          <div>
            <div className="aspect-[3/4] bg-gray-100 mb-4"></div>
            <p className="text-xs tracking-widest">SPRING / SUMMER</p>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl font-light mb-8">
              Haute<br />Couture<br />Digital
            </h1>
            <p className="text-gray-600 mb-8">Where fashion meets technology</p>
            <button className="self-start border-b-2 border-black pb-1">
              VIEW COLLECTION
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 58: Medical/Healthcare
  {
    id: 58,
    content: `'use client'
export default function Design58() {
  return (
    <div className="min-h-screen bg-blue-50">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="flex items-center gap-2">
            <div className="text-blue-600 text-3xl">+</div>
            <div className="text-2xl font-semibold text-blue-900">MediCare 58</div>
          </div>
          <nav className="flex gap-8 text-blue-700">
            <a href="#">Services</a>
            <a href="#">Doctors</a>
            <a href="#">Contact</a>
          </nav>
        </header>
        <main>
          <h1 className="text-5xl font-light text-blue-900 mb-6">
            Your Health,<br />Our Priority
          </h1>
          <p className="text-xl text-blue-700 mb-12">Advanced care with compassion</p>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-2">🏥</div>
              <div className="text-sm">Emergency</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-2">💊</div>
              <div className="text-sm">Pharmacy</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-2">🔬</div>
              <div className="text-sm">Laboratory</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="text-3xl mb-2">👨‍⚕️</div>
              <div className="text-sm">Consultation</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 59: Music Festival
  {
    id: 59,
    content: `'use client'
export default function Design59() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-400 via-pink-500 to-purple-600">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-white">
            <div className="text-2xl mb-4">SUMMER 2025</div>
            <h1 className="text-8xl font-black">VIBEFEST</h1>
            <div className="text-2xl mt-4">JULY 15-17 • DESIGN PARK</div>
          </div>
        </header>
        <main className="text-white text-center">
          <div className="mb-12">
            <div className="text-4xl font-bold mb-4">HEADLINERS</div>
            <div className="space-y-2 text-2xl">
              <div>THE PIXELS</div>
              <div>GRADIENT BOYS</div>
              <div>VECTOR QUEENS</div>
            </div>
          </div>
          <button className="bg-white text-purple-600 px-12 py-4 text-xl font-bold rounded-full">
            GET TICKETS
          </button>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 60: Educational Platform
  {
    id: 60,
    content: `'use client'
export default function Design60() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="flex items-center gap-2">
            <div className="text-3xl">📚</div>
            <div className="text-2xl font-bold text-blue-900">LearnHub 60</div>
          </div>
          <nav className="flex gap-6">
            <a href="#" className="text-blue-700">Courses</a>
            <a href="#" className="text-blue-700">Instructors</a>
            <a href="#" className="text-blue-700">Pricing</a>
          </nav>
        </header>
        <main>
          <h1 className="text-6xl font-bold text-blue-900 mb-6">
            Learn Without<br />Limits
          </h1>
          <p className="text-xl text-gray-700 mb-12">Master new skills from anywhere</p>
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold mb-2">Design</h3>
              <p className="text-gray-600">120+ Courses</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-2">Development</h3>
              <p className="text-gray-600">200+ Courses</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-2">Business</h3>
              <p className="text-gray-600">150+ Courses</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 61: Real Estate
  {
    id: 61,
    content: `'use client'
export default function Design61() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="text-3xl font-bold text-gray-900">ESTATE.61</div>
          <nav className="flex gap-8">
            <a href="#" className="text-gray-700">Properties</a>
            <a href="#" className="text-gray-700">Agents</a>
            <a href="#" className="text-gray-700">About</a>
          </nav>
        </header>
        <main>
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h1 className="text-6xl font-light mb-6">Find Your<br />Dream Home</h1>
              <p className="text-xl text-gray-600 mb-8">Luxury properties in prime locations</p>
              <div className="flex gap-4">
                <button className="px-8 py-3 bg-black text-white">Browse Listings</button>
                <button className="px-8 py-3 border border-black">Virtual Tours</button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-200 aspect-square"></div>
              <div className="bg-gray-300 aspect-square"></div>
              <div className="bg-gray-300 aspect-square"></div>
              <div className="bg-gray-200 aspect-square"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 62: Travel Agency
  {
    id: 62,
    content: `'use client'
export default function Design62() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-blue-600">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center text-white mb-20">
          <div className="text-5xl mb-2">✈️</div>
          <h1 className="text-4xl font-bold">WanderLust 62</h1>
          <p className="text-blue-100">Your journey begins here</p>
        </header>
        <main className="text-white">
          <div className="text-center mb-12">
            <h2 className="text-6xl font-bold mb-4">Explore The World</h2>
            <p className="text-xl text-blue-100">Unforgettable adventures await</p>
          </div>
          <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/20 backdrop-blur rounded-lg p-6 text-center">
              <div className="text-4xl mb-2">🏖️</div>
              <div className="font-bold">Beaches</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg p-6 text-center">
              <div className="text-4xl mb-2">🏔️</div>
              <div className="font-bold">Mountains</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg p-6 text-center">
              <div className="text-4xl mb-2">🏛️</div>
              <div className="font-bold">Cities</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 63: Podcast Platform
  {
    id: 63,
    content: `'use client'
export default function Design63() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-600 rounded-full"></div>
            <div className="text-2xl font-bold">PodStream 63</div>
          </div>
          <nav className="flex gap-8">
            <a href="#">Discover</a>
            <a href="#">Trending</a>
            <a href="#">Categories</a>
          </nav>
        </header>
        <main>
          <h1 className="text-6xl font-bold mb-6">
            Stories That<br />
            <span className="text-purple-500">Matter</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12">Listen to the voices shaping our world</p>
          <div className="grid grid-cols-4 gap-4">
            {Array.from({length: 8}).map((_, i) => (
              <div key={i} className="bg-gray-800 p-4 rounded-lg">
                <div className="aspect-square bg-purple-600/20 rounded mb-3"></div>
                <div className="text-sm font-bold">Episode {i + 1}</div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 64: Law Firm
  {
    id: 64,
    content: `'use client'
export default function Design64() {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="border-b border-gray-700 pb-6 mb-20">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-serif">LAW & ORDER</div>
            <div className="text-sm tracking-widest">EST. 1964</div>
          </div>
        </header>
        <main>
          <h1 className="text-5xl font-serif mb-8">
            Justice.<br />
            Integrity.<br />
            Excellence.
          </h1>
          <p className="text-xl text-gray-400 mb-12">
            Protecting your rights with decades of expertise
          </p>
          <div className="grid grid-cols-3 gap-8">
            <div className="border-l-2 border-gold-400 pl-6">
              <h3 className="text-xl font-serif mb-2">Corporate Law</h3>
              <p className="text-gray-400">Expert business counsel</p>
            </div>
            <div className="border-l-2 border-gold-400 pl-6">
              <h3 className="text-xl font-serif mb-2">Civil Litigation</h3>
              <p className="text-gray-400">Powerful advocacy</p>
            </div>
            <div className="border-l-2 border-gold-400 pl-6">
              <h3 className="text-xl font-serif mb-2">Family Law</h3>
              <p className="text-gray-400">Compassionate guidance</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 65: Gaming Platform
  {
    id: 65,
    content: `'use client'
export default function Design65() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="text-4xl font-black text-cyan-400">GAMEZON</div>
          <div className="flex gap-6 text-cyan-300">
            <a href="#">Store</a>
            <a href="#">Library</a>
            <a href="#">Community</a>
          </div>
        </header>
        <main className="text-center">
          <h1 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 mb-6">
            LEVEL UP
          </h1>
          <p className="text-2xl text-gray-300 mb-12">Join millions of players worldwide</p>
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-purple-800/50 backdrop-blur border border-purple-500/50 p-8 rounded-lg">
              <div className="text-5xl mb-4">🎮</div>
              <div className="text-xl font-bold">10K+ Games</div>
            </div>
            <div className="bg-blue-800/50 backdrop-blur border border-blue-500/50 p-8 rounded-lg">
              <div className="text-5xl mb-4">👥</div>
              <div className="text-xl font-bold">5M+ Players</div>
            </div>
            <div className="bg-pink-800/50 backdrop-blur border border-pink-500/50 p-8 rounded-lg">
              <div className="text-5xl mb-4">🏆</div>
              <div className="text-xl font-bold">Daily Tournaments</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 66: Bakery/Cafe
  {
    id: 66,
    content: `'use client'
export default function Design66() {
  return (
    <div className="min-h-screen bg-cream-50">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-6xl mb-4">🥐</div>
          <h1 className="text-5xl font-serif text-brown-800">Sweet Moments</h1>
          <p className="text-brown-600">Artisan Bakery & Café</p>
        </header>
        <main>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-brown-800 mb-4">
              Freshly Baked<br />Every Morning
            </h2>
            <p className="text-brown-600">From our ovens to your table</p>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {['Croissants', 'Breads', 'Pastries', 'Coffee'].map(item => (
              <div key={item} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="h-24 bg-brown-100 rounded mb-4"></div>
                <div className="font-serif text-brown-800">{item}</div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 67: Architecture Studio
  {
    id: 67,
    content: `'use client'
export default function Design67() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-8 py-16">
        <header className="mb-20">
          <div className="grid grid-cols-12 gap-4 items-end">
            <div className="col-span-2">
              <div className="text-6xl font-thin">67°</div>
            </div>
            <div className="col-span-10">
              <div className="text-4xl font-light">ARCHITECTS</div>
              <div className="h-px bg-black mt-2"></div>
            </div>
          </div>
        </header>
        <main>
          <div className="grid grid-cols-3 gap-px bg-gray-200">
            <div className="bg-white p-12">
              <h2 className="text-2xl mb-4">Vision</h2>
              <p className="text-gray-600">Creating spaces that inspire</p>
            </div>
            <div className="bg-white p-12">
              <h2 className="text-2xl mb-4">Design</h2>
              <p className="text-gray-600">Form meets function</p>
            </div>
            <div className="bg-white p-12">
              <h2 className="text-2xl mb-4">Build</h2>
              <p className="text-gray-600">Bringing dreams to life</p>
            </div>
          </div>
          <div className="mt-12 h-64 bg-gray-100"></div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 68: Charity/Non-profit
  {
    id: 68,
    content: `'use client'
export default function Design68() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-5xl mb-4">🌍</div>
          <h1 className="text-4xl font-bold text-green-800">Hope Foundation</h1>
          <p className="text-green-600">Making the world a better place</p>
        </header>
        <main>
          <div className="text-center mb-12">
            <h2 className="text-5xl font-light text-gray-800 mb-4">
              Together We Can<br />
              <span className="text-green-600 font-bold">Make a Difference</span>
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">💚</div>
              <h3 className="text-xl font-bold mb-2">10K+ Lives Changed</h3>
              <p className="text-gray-600">Your impact matters</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold mb-2">50+ Projects</h3>
              <p className="text-gray-600">Across the globe</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-xl font-bold mb-2">Join Us</h3>
              <p className="text-gray-600">Be the change</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 69: Photography Portfolio
  {
    id: 69,
    content: `'use client'
export default function Design69() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="text-2xl">LENS.69</div>
          <nav className="flex gap-8 text-sm">
            <a href="#" className="hover:text-gray-400">Portfolio</a>
            <a href="#" className="hover:text-gray-400">About</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </nav>
        </header>
        <main>
          <h1 className="text-7xl font-light mb-12">
            Capturing<br />
            <span className="italic">Moments</span>
          </h1>
          <div className="grid grid-cols-3 gap-2">
            <div className="aspect-square bg-gray-900"></div>
            <div className="aspect-square bg-gray-800 col-span-2 row-span-2"></div>
            <div className="aspect-square bg-gray-700"></div>
            <div className="aspect-square bg-gray-600 col-span-2"></div>
            <div className="aspect-square bg-gray-500"></div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 70: Bank/Finance
  {
    id: 70,
    content: `'use client'
export default function Design70() {
  return (
    <div className="min-h-screen bg-navy-950 text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="text-3xl font-bold">TRUST BANK</div>
          <nav className="flex gap-8">
            <a href="#" className="hover:text-blue-400">Personal</a>
            <a href="#" className="hover:text-blue-400">Business</a>
            <a href="#" className="hover:text-blue-400">Wealth</a>
          </nav>
        </header>
        <main>
          <h1 className="text-6xl font-light mb-8">
            Your Financial<br />
            <span className="text-blue-400">Future Secured</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12">Banking made simple, secure, and smart</p>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-blue-900/20 border border-blue-800 p-6">
              <div className="text-2xl font-bold mb-2">2.5%</div>
              <div className="text-sm text-gray-400">Savings APY</div>
            </div>
            <div className="bg-blue-900/20 border border-blue-800 p-6">
              <div className="text-2xl font-bold mb-2">24/7</div>
              <div className="text-sm text-gray-400">Support</div>
            </div>
            <div className="bg-blue-900/20 border border-blue-800 p-6">
              <div className="text-2xl font-bold mb-2">$0</div>
              <div className="text-sm text-gray-400">Monthly Fees</div>
            </div>
            <div className="bg-blue-900/20 border border-blue-800 p-6">
              <div className="text-2xl font-bold mb-2">256-bit</div>
              <div className="text-sm text-gray-400">Encryption</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 71: Weather App
  {
    id: 71,
    content: `'use client'
export default function Design71() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-sky-600">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center text-white mb-20">
          <div className="text-6xl mb-4">☀️</div>
          <h1 className="text-4xl font-light">Weather 71</h1>
          <p className="text-sky-100">Your daily forecast companion</p>
        </header>
        <main className="text-white">
          <div className="text-center mb-12">
            <div className="text-8xl font-thin mb-4">72°</div>
            <div className="text-2xl">Sunny</div>
            <div className="text-sky-200">San Francisco, CA</div>
          </div>
          <div className="grid grid-cols-5 gap-4 max-w-2xl mx-auto">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map(day => (
              <div key={day} className="bg-white/20 backdrop-blur rounded-lg p-4 text-center">
                <div className="text-sm mb-2">{day}</div>
                <div className="text-2xl mb-2">☀️</div>
                <div>72°</div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 72: Book Store
  {
    id: 72,
    content: `'use client'
export default function Design72() {
  return (
    <div className="min-h-screen bg-amber-50">
      <div className="container mx-auto px-8 py-16">
        <header className="border-b-2 border-amber-900 pb-4 mb-20">
          <div className="flex justify-between items-baseline">
            <div className="text-4xl font-serif">Chapter 72</div>
            <div className="text-sm">INDEPENDENT BOOKSTORE</div>
          </div>
        </header>
        <main>
          <h1 className="text-6xl font-serif text-amber-900 mb-8">
            Stories<br />
            Worth<br />
            Telling
          </h1>
          <p className="text-xl text-amber-700 mb-12">Curated collection of literary treasures</p>
          <div className="grid grid-cols-4 gap-6">
            {Array.from({length: 8}).map((_, i) => (
              <div key={i} className="bg-amber-100 aspect-[3/4] rounded shadow-md"></div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 73: Vintage Shop
  {
    id: 73,
    content: `'use client'
export default function Design73() {
  return (
    <div className="min-h-screen bg-rose-50">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="inline-block">
            <div className="text-6xl font-bold text-rose-600" style={{fontFamily: 'cursive'}}>
              Retro Revival
            </div>
            <div className="text-rose-500">~ Since 1973 ~</div>
          </div>
        </header>
        <main>
          <div className="text-center mb-12">
            <h2 className="text-4xl text-rose-800 mb-4">Timeless Treasures</h2>
            <p className="text-rose-600">One-of-a-kind vintage finds</p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="h-64 bg-rose-200 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold text-rose-800">Clothing</h3>
            </div>
            <div className="text-center">
              <div className="h-64 bg-rose-300 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold text-rose-800">Accessories</h3>
            </div>
            <div className="text-center">
              <div className="h-64 bg-rose-200 rounded-full mb-4"></div>
              <h3 className="text-xl font-bold text-rose-800">Decor</h3>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 74: Space/Astronomy
  {
    id: 74,
    content: `'use client'
export default function Design74() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 py-16 relative">
        <div className="absolute inset-0 opacity-50">
          {Array.from({length: 50}).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                top: \`\${Math.random() * 100}%\`,
                left: \`\${Math.random() * 100}%\`,
                animation: 'twinkle 3s infinite'
              }}
            />
          ))}
        </div>
        <header className="relative z-10 text-center mb-20">
          <div className="text-6xl mb-4">🚀</div>
          <h1 className="text-4xl font-bold">COSMOS 74</h1>
          <p className="text-gray-400">Explore the infinite</p>
        </header>
        <main className="relative z-10 text-center">
          <h2 className="text-6xl font-light mb-8">
            Journey to the<br />
            <span className="text-purple-400">Stars</span>
          </h2>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-4xl mb-2">🌍</div>
              <div>Earth</div>
            </div>
            <div>
              <div className="text-4xl mb-2">🌙</div>
              <div>Moon</div>
            </div>
            <div>
              <div className="text-4xl mb-2">🪐</div>
              <div>Mars</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 75: Kids/Children
  {
    id: 75,
    content: `'use client'
export default function Design75() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-200 via-pink-200 to-blue-200">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <h1 className="text-6xl font-black text-purple-600">
            FUN ZONE 75
          </h1>
          <div className="text-2xl text-pink-600">Where kids play & learn!</div>
        </header>
        <main>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-red-400 rounded-3xl p-8 text-white text-center transform rotate-2">
              <div className="text-5xl mb-2">🎨</div>
              <div className="font-bold">ART</div>
            </div>
            <div className="bg-blue-400 rounded-3xl p-8 text-white text-center transform -rotate-2">
              <div className="text-5xl mb-2">🎮</div>
              <div className="font-bold">GAMES</div>
            </div>
            <div className="bg-green-400 rounded-3xl p-8 text-white text-center transform rotate-3">
              <div className="text-5xl mb-2">📚</div>
              <div className="font-bold">STORIES</div>
            </div>
            <div className="bg-purple-400 rounded-3xl p-8 text-white text-center transform -rotate-1">
              <div className="text-5xl mb-2">🎵</div>
              <div className="font-bold">MUSIC</div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button className="bg-rainbow-gradient text-white px-12 py-6 rounded-full text-2xl font-bold animate-bounce">
              START PLAYING!
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 76: Luxury Watch
  {
    id: 76,
    content: `'use client'
export default function Design76() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-gold-400 text-sm tracking-[0.5em] mb-2">SWISS MADE</div>
          <h1 className="text-5xl font-thin tracking-wider">CHRONOS</h1>
          <div className="text-gold-400 text-sm tracking-[0.5em] mt-2">MCMLXXVI</div>
        </header>
        <main>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl font-thin mb-8">
              Timeless<br />
              <span className="text-gold-400">Elegance</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">Precision crafted since 1976</p>
            <div className="grid grid-cols-3 gap-12">
              <div>
                <div className="w-32 h-32 border-2 border-gold-400 rounded-full mx-auto mb-4"></div>
                <div className="text-sm text-gold-400">Heritage</div>
              </div>
              <div>
                <div className="w-32 h-32 border-2 border-gold-400 rounded-full mx-auto mb-4"></div>
                <div className="text-sm text-gold-400">Precision</div>
              </div>
              <div>
                <div className="w-32 h-32 border-2 border-gold-400 rounded-full mx-auto mb-4"></div>
                <div className="text-sm text-gold-400">Luxury</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 77: Social Media
  {
    id: 77,
    content: `'use client'
export default function Design77() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 to-orange-500">
      <div className="container mx-auto px-8 py-16">
        <header className="text-white text-center mb-20">
          <div className="text-6xl font-black">SOCIAL77</div>
          <p className="text-2xl">Connect. Share. Inspire.</p>
        </header>
        <main className="text-white">
          <div className="max-w-md mx-auto">
            <div className="bg-white/20 backdrop-blur rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/30 rounded-full"></div>
                <div>
                  <div className="font-bold">@username</div>
                  <div className="text-sm opacity-80">2.5M followers</div>
                </div>
              </div>
              <div className="bg-white/10 rounded-2xl p-4 mb-4">
                <p className="mb-4">Living my best life ✨</p>
                <div className="h-48 bg-white/20 rounded-xl"></div>
              </div>
              <div className="flex justify-around">
                <button className="text-2xl">❤️ 42K</button>
                <button className="text-2xl">💬 1.2K</button>
                <button className="text-2xl">↗️ Share</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 78: Dentist/Medical
  {
    id: 78,
    content: `'use client'
export default function Design78() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="flex items-center gap-2">
            <div className="text-4xl">🦷</div>
            <div className="text-2xl font-semibold text-blue-600">SmileCare 78</div>
          </div>
          <nav className="flex gap-8">
            <a href="#" className="text-gray-700">Services</a>
            <a href="#" className="text-gray-700">Team</a>
            <a href="#" className="text-gray-700">Contact</a>
          </nav>
        </header>
        <main>
          <h1 className="text-5xl font-light text-gray-900 mb-6">
            Your Smile,<br />
            <span className="text-blue-600 font-semibold">Our Priority</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12">Modern dentistry with a gentle touch</p>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-2">🪥</div>
              <div className="font-semibold">Cleaning</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-2">✨</div>
              <div className="font-semibold">Whitening</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-2">🔧</div>
              <div className="font-semibold">Repair</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="text-3xl mb-2">😊</div>
              <div className="font-semibold">Cosmetic</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 79: Car Dealership
  {
    id: 79,
    content: `'use client'
export default function Design79() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="text-4xl font-bold text-red-600">VELOCITY 79</div>
          <nav className="flex gap-8">
            <a href="#" className="hover:text-red-600">Models</a>
            <a href="#" className="hover:text-red-600">Configure</a>
            <a href="#" className="hover:text-red-600">Test Drive</a>
          </nav>
        </header>
        <main>
          <h1 className="text-7xl font-black mb-8">
            PURE<br />
            <span className="text-red-600">PERFORMANCE</span>
          </h1>
          <p className="text-xl text-gray-400 mb-12">0-60 in 2.8 seconds</p>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">450HP</div>
              <div className="text-gray-500">Horsepower</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">200MPH</div>
              <div className="text-gray-500">Top Speed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">V8</div>
              <div className="text-gray-500">Engine</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 80: Wedding/Event
  {
    id: 80,
    content: `'use client'
export default function Design80() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-100 to-pink-100">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-6xl font-script text-rose-600 mb-2">Forever & Always</div>
          <div className="text-rose-500">Wedding Planning • Design 80</div>
        </header>
        <main className="text-center">
          <h2 className="text-5xl font-light text-gray-800 mb-6">
            Your Perfect Day<br />
            <span className="text-rose-600 font-script">Awaits</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">Creating magical moments since 1980</p>
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">💐</div>
              <h3 className="text-xl font-semibold mb-2">Floral Design</h3>
              <p className="text-gray-600">Breathtaking arrangements</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">🎂</div>
              <h3 className="text-xl font-semibold mb-2">Catering</h3>
              <p className="text-gray-600">Exquisite cuisine</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-xl font-semibold mb-2">Photography</h3>
              <p className="text-gray-600">Timeless memories</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 81: Pizza Restaurant
  {
    id: 81,
    content: `'use client'
export default function Design81() {
  return (
    <div className="min-h-screen bg-red-600 text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-8xl font-black">SLICE 81</div>
          <div className="text-2xl">AUTHENTIC ITALIAN PIZZA</div>
        </header>
        <main>
          <div className="bg-white text-red-600 rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-5xl font-black mb-8 text-center">
              HOT & FRESH
            </h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-6xl mb-2">🍕</div>
                <div className="font-bold">Classic</div>
                <div className="text-sm text-gray-600">$12</div>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-2">🍕</div>
                <div className="font-bold">Pepperoni</div>
                <div className="text-sm text-gray-600">$14</div>
              </div>
              <div className="text-center">
                <div className="text-6xl mb-2">🍕</div>
                <div className="font-bold">Supreme</div>
                <div className="text-sm text-gray-600">$16</div>
              </div>
            </div>
            <button className="bg-red-600 text-white px-8 py-4 rounded-full font-bold mx-auto block mt-8">
              ORDER NOW
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 82: Gym/Fitness Club
  {
    id: 82,
    content: `'use client'
export default function Design82() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="text-4xl font-black text-yellow-400">IRON82</div>
          <nav className="flex gap-8 text-yellow-400">
            <a href="#">Classes</a>
            <a href="#">Trainers</a>
            <a href="#">Join</a>
          </nav>
        </header>
        <main>
          <h1 className="text-8xl font-black mb-8">
            BUILD<br />
            YOUR<br />
            <span className="text-yellow-400">LEGACY</span>
          </h1>
          <div className="grid grid-cols-4 gap-4 mt-12">
            <div className="bg-yellow-400 text-black p-6 text-center font-black">
              <div className="text-3xl mb-2">💪</div>
              STRENGTH
            </div>
            <div className="bg-gray-800 p-6 text-center font-black">
              <div className="text-3xl mb-2">🏃</div>
              CARDIO
            </div>
            <div className="bg-yellow-400 text-black p-6 text-center font-black">
              <div className="text-3xl mb-2">🧘</div>
              YOGA
            </div>
            <div className="bg-gray-800 p-6 text-center font-black">
              <div className="text-3xl mb-2">🥊</div>
              BOXING
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 83: Beauty Salon
  {
    id: 83,
    content: `'use client'
export default function Design83() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-purple-100">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-5xl font-script text-purple-600 mb-2">Glamour Studio</div>
          <div className="text-purple-500">Beauty & Wellness • Est. 83</div>
        </header>
        <main>
          <div className="text-center mb-12">
            <h2 className="text-6xl font-light text-gray-800 mb-4">
              Reveal Your<br />
              <span className="text-purple-600 font-script">Inner Glow</span>
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">💅</div>
              <h3 className="text-xl font-semibold mb-2">Nails</h3>
              <p className="text-gray-600">Manicure & Art</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">💇‍♀️</div>
              <h3 className="text-xl font-semibold mb-2">Hair</h3>
              <p className="text-gray-600">Cut & Color</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-semibold mb-2">Skin</h3>
              <p className="text-gray-600">Facials & Treatment</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 84: Pet Store
  {
    id: 84,
    content: `'use client'
export default function Design84() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-yellow-100">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-6xl mb-4">🐾</div>
          <h1 className="text-5xl font-bold text-green-800">PetPals 84</h1>
          <p className="text-green-600">Everything for your furry friends</p>
        </header>
        <main>
          <div className="text-center mb-12">
            <h2 className="text-4xl text-gray-800 mb-4">
              Happy Pets,<br />
              <span className="text-green-600 font-bold">Happy Life</span>
            </h2>
          </div>
          <div className="grid grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-5xl mb-2">🐕</div>
              <div className="font-bold">Dogs</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-5xl mb-2">🐈</div>
              <div className="font-bold">Cats</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-5xl mb-2">🐦</div>
              <div className="font-bold">Birds</div>
            </div>
            <div className="bg-white rounded-2xl p-6 text-center shadow-lg">
              <div className="text-5xl mb-2">🐠</div>
              <div className="font-bold">Fish</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 85: Music Studio
  {
    id: 85,
    content: `'use client'
export default function Design85() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-black">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="text-4xl font-bold text-purple-400">STUDIO 85</div>
          <nav className="flex gap-8 text-purple-300">
            <a href="#">Recording</a>
            <a href="#">Mixing</a>
            <a href="#">Artists</a>
          </nav>
        </header>
        <main className="text-white">
          <h1 className="text-7xl font-bold mb-8">
            Where Music<br />
            <span className="text-purple-400">Comes Alive</span>
          </h1>
          <p className="text-xl text-purple-200 mb-12">Professional recording & production</p>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-purple-800/30 backdrop-blur border border-purple-600 rounded-lg p-8">
              <div className="text-3xl mb-4">🎤</div>
              <h3 className="text-xl font-bold mb-2">Vocal Booth</h3>
              <p className="text-purple-200">Crystal clear recordings</p>
            </div>
            <div className="bg-purple-800/30 backdrop-blur border border-purple-600 rounded-lg p-8">
              <div className="text-3xl mb-4">🎹</div>
              <h3 className="text-xl font-bold mb-2">Live Room</h3>
              <p className="text-purple-200">Full band sessions</p>
            </div>
            <div className="bg-purple-800/30 backdrop-blur border border-purple-600 rounded-lg p-8">
              <div className="text-3xl mb-4">🎛️</div>
              <h3 className="text-xl font-bold mb-2">Control Room</h3>
              <p className="text-purple-200">State-of-the-art mixing</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 86: Barber Shop
  {
    id: 86,
    content: `'use client'
export default function Design86() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="inline-block">
            <div className="flex items-center gap-4 mb-2">
              <div className="w-12 h-12 bg-red-600 transform rotate-45"></div>
              <div className="text-5xl font-bold">SHARP 86</div>
              <div className="w-12 h-12 bg-blue-600 transform rotate-45"></div>
            </div>
            <div className="text-red-400">CLASSIC BARBER SHOP</div>
          </div>
        </header>
        <main>
          <h2 className="text-6xl font-bold text-center mb-12">
            Old School<br />
            <span className="text-red-400">New Cool</span>
          </h2>
          <div className="grid grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 text-center">
              <div className="text-3xl mb-2">✂️</div>
              <div>Classic Cut</div>
              <div className="text-red-400 font-bold">$25</div>
            </div>
            <div className="bg-gray-800 p-6 text-center">
              <div className="text-3xl mb-2">🪒</div>
              <div>Hot Shave</div>
              <div className="text-red-400 font-bold">$30</div>
            </div>
            <div className="bg-gray-800 p-6 text-center">
              <div className="text-3xl mb-2">🧔</div>
              <div>Beard Trim</div>
              <div className="text-red-400 font-bold">$20</div>
            </div>
            <div className="bg-gray-800 p-6 text-center">
              <div className="text-3xl mb-2">👑</div>
              <div>Full Service</div>
              <div className="text-red-400 font-bold">$60</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 87: Flower Shop
  {
    id: 87,
    content: `'use client'
export default function Design87() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-green-50">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-6xl mb-4">🌸</div>
          <h1 className="text-5xl font-script text-pink-600">Bloom 87</h1>
          <p className="text-green-600">Fresh flowers daily</p>
        </header>
        <main>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-800 mb-4">
              Nature&apos;s Beauty<br />
              <span className="text-pink-600 font-script">Delivered</span>
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 bg-pink-200 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl">
                🌹
              </div>
              <h3 className="font-semibold">Roses</h3>
              <p className="text-gray-600">Classic romance</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-yellow-200 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl">
                🌻
              </div>
              <h3 className="font-semibold">Sunflowers</h3>
              <p className="text-gray-600">Bright & cheerful</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl">
                🌷
              </div>
              <h3 className="font-semibold">Tulips</h3>
              <p className="text-gray-600">Spring elegance</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 88: Ice Cream Shop
  {
    id: 88,
    content: `'use client'
export default function Design88() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-200 via-pink-200 to-yellow-200">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-6xl mb-4">🍦</div>
          <h1 className="text-6xl font-black text-pink-600">SCOOP 88</h1>
          <p className="text-2xl text-blue-600">Sweet treats & cool beats</p>
        </header>
        <main>
          <div className="bg-white rounded-3xl p-12 max-w-4xl mx-auto shadow-xl">
            <h2 className="text-4xl font-black text-center mb-8 text-pink-600">
              FLAVORS OF THE DAY
            </h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-5xl mb-2">🍓</div>
                <div className="font-bold">Strawberry</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">🍫</div>
                <div className="font-bold">Chocolate</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">🍦</div>
                <div className="font-bold">Vanilla</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">🥭</div>
                <div className="font-bold">Mango</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">🍋</div>
                <div className="font-bold">Lemon</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">🥥</div>
                <div className="font-bold">Coconut</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 89: Yoga Studio
  {
    id: 89,
    content: `'use client'
export default function Design89() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-blue-100">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-6xl mb-4">🧘‍♀️</div>
          <h1 className="text-5xl font-light text-purple-800">Namaste 89</h1>
          <p className="text-purple-600">Mind • Body • Spirit</p>
        </header>
        <main>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-light text-gray-800 mb-4">
              Find Your<br />
              <span className="text-purple-600 font-semibold">Inner Peace</span>
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">☀️</div>
              <h3 className="text-xl font-semibold mb-2">Morning Flow</h3>
              <p className="text-gray-600">6:00 AM</p>
            </div>
            <div className="bg-white/70 backdrop-blur rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">🌙</div>
              <h3 className="text-xl font-semibold mb-2">Evening Restore</h3>
              <p className="text-gray-600">7:00 PM</p>
            </div>
            <div className="bg-white/70 backdrop-blur rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-semibold mb-2">Power Yoga</h3>
              <p className="text-gray-600">12:00 PM</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 90: Vintage Record Store
  {
    id: 90,
    content: `'use client'
export default function Design90() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brown-900 to-black text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-8xl font-black">VINYL</div>
          <div className="text-4xl text-orange-500">RECORDS • 1990</div>
        </header>
        <main>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl mb-8 text-center">
              Spin the<br />
              <span className="text-orange-500">Classics</span>
            </h2>
            <div className="grid grid-cols-3 gap-8">
              {Array.from({length: 9}).map((_, i) => (
                <div key={i} className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                  <div className="w-24 h-24 bg-black rounded-full border-4 border-gray-700"></div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 91: Sushi Restaurant
  {
    id: 91,
    content: `'use client'
export default function Design91() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-red-600 text-6xl mb-2">寿司</div>
          <h1 className="text-4xl">KOKU 91</h1>
          <div className="text-gray-400">AUTHENTIC JAPANESE</div>
        </header>
        <main>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-light mb-12 text-center">
              Tradition Meets<br />
              <span className="text-red-600">Perfection</span>
            </h2>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-gray-900 p-4 text-center">
                <div className="text-3xl mb-2">🍣</div>
                <div>Nigiri</div>
              </div>
              <div className="bg-gray-900 p-4 text-center">
                <div className="text-3xl mb-2">🍱</div>
                <div>Bento</div>
              </div>
              <div className="bg-gray-900 p-4 text-center">
                <div className="text-3xl mb-2">🥢</div>
                <div>Sashimi</div>
              </div>
              <div className="bg-gray-900 p-4 text-center">
                <div className="text-3xl mb-2">🍜</div>
                <div>Ramen</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 92: Skateboard Shop
  {
    id: 92,
    content: `'use client'
export default function Design92() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-orange-500">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center text-white mb-20">
          <h1 className="text-8xl font-black">SHRED 92</h1>
          <div className="text-2xl">SKATE OR DIE</div>
        </header>
        <main className="text-white">
          <div className="bg-black/20 backdrop-blur rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-5xl font-black mb-8 text-center">
              RIDE THE<br />STREETS
            </h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl mb-2">🛹</div>
                <div className="font-bold">Decks</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl mb-2">👟</div>
                <div className="font-bold">Shoes</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 text-center">
                <div className="text-4xl mb-2">🧢</div>
                <div className="font-bold">Gear</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 93: Cocktail Bar
  {
    id: 93,
    content: `'use client'
export default function Design93() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 to-black">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center text-gold-400 mb-20">
          <div className="text-6xl font-thin tracking-wider">The Velvet</div>
          <div className="text-2xl tracking-[0.5em]">LOUNGE 93</div>
        </header>
        <main className="text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-light mb-8">
              Cocktails &<br />
              <span className="text-gold-400">Conversations</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">Crafted with passion since 1993</p>
            <div className="grid grid-cols-3 gap-8">
              <div className="border border-gold-400/30 p-8">
                <div className="text-4xl mb-4">🍸</div>
                <h3 className="text-gold-400 mb-2">Classics</h3>
                <p className="text-gray-400">Timeless favorites</p>
              </div>
              <div className="border border-gold-400/30 p-8">
                <div className="text-4xl mb-4">🥃</div>
                <h3 className="text-gold-400 mb-2">Whiskey</h3>
                <p className="text-gray-400">Premium selection</p>
              </div>
              <div className="border border-gold-400/30 p-8">
                <div className="text-4xl mb-4">🍹</div>
                <h3 className="text-gold-400 mb-2">Signature</h3>
                <p className="text-gray-400">House specials</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 94: Motorcycle Shop
  {
    id: 94,
    content: `'use client'
export default function Design94() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="text-5xl font-black text-orange-600">REBEL 94</div>
          <nav className="flex gap-8 text-orange-500">
            <a href="#">Bikes</a>
            <a href="#">Parts</a>
            <a href="#">Service</a>
          </nav>
        </header>
        <main>
          <h1 className="text-7xl font-black mb-8">
            BORN TO<br />
            <span className="text-orange-600">RIDE</span>
          </h1>
          <p className="text-2xl text-gray-400 mb-12">Freedom on two wheels</p>
          <div className="grid grid-cols-3 gap-8">
            <div className="bg-orange-600/10 border border-orange-600 p-8">
              <div className="text-4xl mb-4">🏍️</div>
              <h3 className="text-xl font-bold mb-2">Cruisers</h3>
              <p className="text-gray-400">Classic American steel</p>
            </div>
            <div className="bg-orange-600/10 border border-orange-600 p-8">
              <div className="text-4xl mb-4">🏁</div>
              <h3 className="text-xl font-bold mb-2">Sport</h3>
              <p className="text-gray-400">Pure performance</p>
            </div>
            <div className="bg-orange-600/10 border border-orange-600 p-8">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold mb-2">Custom</h3>
              <p className="text-gray-400">Build your dream</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 95: Meditation App
  {
    id: 95,
    content: `'use client'
export default function Design95() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center text-white mb-20">
          <div className="text-6xl mb-4">🕉️</div>
          <h1 className="text-5xl font-light">Mindful 95</h1>
          <p className="text-purple-200">Your journey to inner peace</p>
        </header>
        <main className="text-white">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-light mb-8">
              Breathe.<br />
              Relax.<br />
              <span className="text-purple-300">Transform.</span>
            </h2>
            <div className="bg-white/10 backdrop-blur rounded-3xl p-12">
              <div className="space-y-4">
                <div className="bg-white/10 rounded-full p-4">5 min Morning Meditation</div>
                <div className="bg-white/10 rounded-full p-4">10 min Stress Relief</div>
                <div className="bg-white/10 rounded-full p-4">20 min Deep Sleep</div>
              </div>
              <button className="mt-8 bg-purple-600 px-8 py-4 rounded-full">
                Start Session
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 96: Surf Shop
  {
    id: 96,
    content: `'use client'
export default function Design96() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-400 to-blue-600">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center text-white mb-20">
          <div className="text-6xl mb-4">🏄‍♂️</div>
          <h1 className="text-6xl font-bold">WAVE 96</h1>
          <p className="text-2xl">Catch the perfect ride</p>
        </header>
        <main className="text-white">
          <div className="bg-white/20 backdrop-blur rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-8 text-center">
              SURF&apos;S UP!
            </h2>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-5xl mb-2">🏄</div>
                <div className="font-bold">Boards</div>
                <div className="text-cyan-200">50+ Models</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">🤿</div>
                <div className="font-bold">Wetsuits</div>
                <div className="text-cyan-200">All Sizes</div>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-2">🌊</div>
                <div className="font-bold">Lessons</div>
                <div className="text-cyan-200">Pro Teachers</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 97: Tattoo Studio
  {
    id: 97,
    content: `'use client'
export default function Design97() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <h1 className="text-7xl font-black">
            <span className="text-red-600">INK</span>97
          </h1>
          <div className="text-xl text-gray-400">TATTOO & PIERCING</div>
        </header>
        <main>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold mb-12 text-center">
              Art That<br />
              <span className="text-red-600">Lives Forever</span>
            </h2>
            <div className="grid grid-cols-3 gap-8">
              <div className="bg-gray-900 p-8 text-center">
                <div className="text-4xl mb-4">🌹</div>
                <h3 className="text-xl font-bold mb-2">Traditional</h3>
                <p className="text-gray-400">Classic designs</p>
              </div>
              <div className="bg-gray-900 p-8 text-center">
                <div className="text-4xl mb-4">🐉</div>
                <h3 className="text-xl font-bold mb-2">Japanese</h3>
                <p className="text-gray-400">Ancient art</p>
              </div>
              <div className="bg-gray-900 p-8 text-center">
                <div className="text-4xl mb-4">💀</div>
                <h3 className="text-xl font-bold mb-2">Realism</h3>
                <p className="text-gray-400">Photographic detail</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 98: Wine Bar
  {
    id: 98,
    content: `'use client'
export default function Design98() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-burgundy-900 to-black">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center text-white mb-20">
          <div className="text-5xl font-serif mb-2">Château 98</div>
          <div className="text-gold-400 tracking-widest">WINE & DINE</div>
        </header>
        <main className="text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl font-serif mb-8">
              Savor the<br />
              <span className="text-gold-400">Moment</span>
            </h2>
            <p className="text-xl text-gray-400 mb-12">
              Curated wines from around the world
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div className="border border-gold-400/30 p-8">
                <div className="text-4xl mb-4">🍷</div>
                <h3 className="text-gold-400">Red</h3>
                <p className="text-gray-400">Bold & complex</p>
              </div>
              <div className="border border-gold-400/30 p-8">
                <div className="text-4xl mb-4">🥂</div>
                <h3 className="text-gold-400">White</h3>
                <p className="text-gray-400">Crisp & refreshing</p>
              </div>
              <div className="border border-gold-400/30 p-8">
                <div className="text-4xl mb-4">🍾</div>
                <h3 className="text-gold-400">Sparkling</h3>
                <p className="text-gray-400">Celebrate life</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 99: Escape Room
  {
    id: 99,
    content: `'use client'
export default function Design99() {
  return (
    <div className="min-h-screen bg-black text-green-500">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <h1 className="text-7xl font-mono glitch" data-text="ESCAPE 99">
            ESCAPE 99
          </h1>
          <div className="text-xl text-green-400">60 MINUTES TO FREEDOM</div>
        </header>
        <main>
          <div className="max-w-4xl mx-auto">
            <div className="border border-green-500 p-8 bg-black/50">
              <h2 className="text-4xl font-mono mb-8 text-center">
                CAN YOU<br />
                <span className="text-red-500 animate-pulse">ESCAPE?</span>
              </h2>
              <div className="grid grid-cols-3 gap-6 font-mono">
                <div className="border border-green-500/50 p-4">
                  <div className="text-2xl mb-2">🔒</div>
                  <div>THE VAULT</div>
                  <div className="text-sm text-green-400">Difficulty: ████░</div>
                </div>
                <div className="border border-green-500/50 p-4">
                  <div className="text-2xl mb-2">🧪</div>
                  <div>MAD SCIENTIST</div>
                  <div className="text-sm text-green-400">Difficulty: █████</div>
                </div>
                <div className="border border-green-500/50 p-4">
                  <div className="text-2xl mb-2">👻</div>
                  <div>HAUNTED</div>
                  <div className="text-sm text-green-400">Difficulty: ███░░</div>
                </div>
              </div>
              <div className="text-center mt-8">
                <div className="text-2xl animate-pulse">PRESS ENTER TO BEGIN</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 100: Grand Finale
  {
    id: 100,
    content: `'use client'
export default function Design100() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gold-400 via-purple-600 to-blue-600">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center text-white mb-20">
          <div className="text-4xl mb-4">⭐ THE ULTIMATE ⭐</div>
          <h1 className="text-9xl font-black">100</h1>
          <div className="text-3xl">DESIGN COLLECTION COMPLETE</div>
        </header>
        <main className="text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-6xl font-bold text-center mb-12">
              A Century of<br />
              <span className="text-gold-300">Creative Excellence</span>
            </h2>
            <div className="grid grid-cols-10 gap-2 mb-12">
              {Array.from({length: 100}).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-white/20 backdrop-blur rounded flex items-center justify-center text-xs font-bold"
                >
                  {i + 1}
                </div>
              ))}
            </div>
            <div className="text-center">
              <button className="bg-white text-purple-600 px-16 py-6 rounded-full text-2xl font-black hover:scale-110 transition-transform">
                VIEW THE COLLECTION
              </button>
            </div>
            <div className="text-center mt-12 text-2xl">
              🎉 Thank you for exploring all 100 designs! 🎉
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  }
];

// Write all the unique design files
uniqueDesigns.forEach(design => {
  const filePath = path.join(__dirname, '..', 'components', 'designs', `Design${design.id}.tsx`);
  fs.writeFileSync(filePath, design.content);
  console.log(`✅ Created Design${design.id}.tsx`);
});

console.log('\n🎉 Successfully created 50 more unique designs (51-100)!');
console.log('Total: 100 completely unique designs!');