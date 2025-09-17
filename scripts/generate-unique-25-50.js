const fs = require('fs');
const path = require('path');

const uniqueDesigns = [
  // Design 25: Neon Gradient
  {
    id: 25,
    content: `'use client'
export default function Design25() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-pink-800 to-red-700">
      <div className="container mx-auto px-8 py-16">
        <nav className="flex justify-between items-center mb-20">
          <div className="text-white text-3xl font-bold">NEON/25</div>
          <div className="flex gap-6">
            {['About', 'Work', 'Contact'].map(item => (
              <button key={item} className="px-6 py-2 bg-white/10 backdrop-blur-lg text-white rounded-full hover:bg-white/20 transition-all">
                {item}
              </button>
            ))}
          </div>
        </nav>
        <main className="text-center text-white">
          <h1 className="text-8xl font-bold mb-6">
            Glow<br />Forward
          </h1>
          <p className="text-2xl mb-12 text-pink-200">Radiant Digital Experiences</p>
          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-64 bg-white/10 backdrop-blur-lg rounded-lg" />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 26: Isometric Grid
  {
    id: 26,
    content: `'use client'
export default function Design26() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-8 py-16">
        <header className="mb-20">
          <div className="text-5xl font-mono">ISOMETRIC.26</div>
        </header>
        <main className="relative">
          <div className="grid grid-cols-4 gap-8">
            {Array.from({length: 8}).map((_, i) => (
              <div
                key={i}
                className="h-32 bg-gradient-to-br from-blue-400 to-purple-600 transform rotate-45 shadow-lg"
                style={{transform: \`rotate(45deg) scale(\${0.8 + (i * 0.02)})\`}}
              />
            ))}
          </div>
          <div className="text-center mt-20">
            <h1 className="text-3xl font-bold">Dimensional Design</h1>
            <p className="text-gray-600 mt-4">Perspectives that matter</p>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 27: Organic Flow
  {
    id: 27,
    content: `'use client'
export default function Design27() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-blue-50">
      <div className="container mx-auto px-8 py-16">
        <nav className="flex justify-center mb-20">
          <div className="flex gap-2">
            {['Home', 'About', 'Services', 'Contact'].map(item => (
              <div key={item} className="px-8 py-3 bg-white rounded-full shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </nav>
        <main>
          <div className="text-center mb-20">
            <div className="inline-block">
              <h1 className="text-6xl font-light mb-4">Organic</h1>
              <div className="h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
              <p className="text-xl mt-4 text-gray-600">Natural Digital Flow</p>
            </div>
          </div>
          <div className="flex justify-center gap-8">
            <div className="w-64 h-64 bg-green-200 rounded-full opacity-50" />
            <div className="w-48 h-48 bg-blue-200 rounded-full opacity-50 mt-8" />
            <div className="w-56 h-56 bg-purple-200 rounded-full opacity-50 mt-16" />
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 28: Terminal Theme
  {
    id: 28,
    content: `'use client'
export default function Design28() {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <div className="p-8">
        <div className="mb-8">
          <span className="text-green-600">user@design28:~$</span> ls -la
        </div>
        <div className="mb-8">
          <div className="text-green-300">drwxr-xr-x  5 user user 4096 Sep 17 12:00 .</div>
          <div className="text-green-300">drwxr-xr-x  3 user user 4096 Sep 17 11:00 ..</div>
          <div className="text-green-300">-rw-r--r--  1 user user  256 Sep 17 12:00 index.html</div>
        </div>
        <div className="mb-8">
          <span className="text-green-600">user@design28:~$</span> cat welcome.txt
        </div>
        <div className="max-w-2xl">
          <h1 className="text-4xl mb-4 text-green-400">TERMINAL_DESIGN</h1>
          <p className="mb-8">Welcome to the command line interface of web design.</p>
          <div className="border border-green-400 p-4">
            <div>&gt; Executing creative.sh...</div>
            <div>&gt; Loading innovation modules...</div>
            <div>&gt; Design process initialized.</div>
          </div>
        </div>
        <div className="mt-8">
          <span className="text-green-600 animate-pulse">user@design28:~$</span>
          <span className="animate-pulse"> _</span>
        </div>
      </div>
    </div>
  )
}`
  },
  // Design 29: Magazine Layout
  {
    id: 29,
    content: `'use client'
export default function Design29() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-8 py-16">
        <header className="border-b-4 border-black pb-4 mb-12">
          <div className="flex justify-between items-end">
            <div className="text-6xl font-serif">MAGAZINE</div>
            <div className="text-sm">ISSUE 29 • 2025</div>
          </div>
        </header>
        <main className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="aspect-video bg-gray-200 mb-4"></div>
            <h1 className="text-4xl font-serif mb-4">Headlines That Matter</h1>
            <p className="text-lg leading-relaxed columns-2 gap-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="col-span-4">
            <div className="border-l-4 border-black pl-8">
              <h2 className="text-2xl font-bold mb-4">SIDEBAR</h2>
              <div className="space-y-4">
                <div className="pb-4 border-b">Article One</div>
                <div className="pb-4 border-b">Article Two</div>
                <div className="pb-4 border-b">Article Three</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 30: Memphis Style
  {
    id: 30,
    content: `'use client'
export default function Design30() {
  return (
    <div className="min-h-screen bg-yellow-300">
      <div className="container mx-auto px-8 py-16">
        <div className="absolute top-20 left-20 w-32 h-32 bg-pink-500 rounded-full"></div>
        <div className="absolute top-40 right-20 w-24 h-48 bg-blue-500 transform rotate-12"></div>
        <div className="absolute bottom-20 left-40 w-40 h-20 bg-green-500 skew-x-12"></div>
        <div className="relative z-10">
          <header className="text-center mb-20">
            <div className="inline-block bg-white p-8 shadow-xl transform -rotate-2">
              <h1 className="text-6xl font-black">MEMPHIS</h1>
              <div className="text-2xl">DESIGN 30</div>
            </div>
          </header>
          <main className="text-center">
            <div className="inline-block bg-black text-white p-12 transform rotate-1">
              <h2 className="text-3xl mb-4">Playful Geometry</h2>
              <p>Where fun meets function</p>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}`
  },
  // Design 31: Data Dashboard
  {
    id: 31,
    content: `'use client'
export default function Design31() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="grid grid-cols-12 h-screen">
        <aside className="col-span-2 bg-gray-900 p-4">
          <div className="text-xl font-bold mb-8">DASH/31</div>
          <nav className="space-y-2">
            {['Overview', 'Analytics', 'Reports', 'Settings'].map(item => (
              <div key={item} className="px-4 py-2 bg-gray-800 rounded">{item}</div>
            ))}
          </nav>
        </aside>
        <main className="col-span-10 p-8">
          <h1 className="text-3xl mb-8">Data Control Center</h1>
          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="bg-gray-900 p-6 rounded-lg">
                <div className="text-sm text-gray-400 mb-2">METRIC {i}</div>
                <div className="text-3xl font-bold mb-4">{(i * 1234).toLocaleString()}</div>
                <div className="h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded"></div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 32: Glassmorphism
  {
    id: 32,
    content: `'use client'
export default function Design32() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-blue-600 to-cyan-500">
      <div className="container mx-auto px-8 py-16">
        <header className="mb-20">
          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-2xl inline-block">
            <div className="text-3xl font-bold text-white">GLASS/32</div>
          </div>
        </header>
        <main>
          <div className="bg-white/10 backdrop-blur-xl p-12 rounded-3xl border border-white/20">
            <h1 className="text-5xl font-bold text-white mb-6">Transparent Beauty</h1>
            <p className="text-xl text-white/80 mb-12">See through the future of design</p>
            <div className="grid grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white/5 backdrop-blur p-6 rounded-2xl border border-white/10">
                  <div className="h-32"></div>
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
  // Design 33: Newspaper
  {
    id: 33,
    content: `'use client'
export default function Design33() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <header className="border-b-8 border-double border-black pb-4 mb-8">
          <div className="text-center">
            <div className="text-6xl font-serif font-black">The Daily Design</div>
            <div className="flex justify-between mt-2">
              <span>Vol. XXXIII</span>
              <span>Design & Innovation</span>
              <span>Edition 2025</span>
            </div>
          </div>
        </header>
        <main>
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-3">
              <h1 className="text-5xl font-serif mb-4">Breaking: New Design Paradigm</h1>
              <div className="columns-3 gap-6 text-sm">
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                <p className="mb-4">Sed do eiusmod tempor incididunt ut labore...</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation...</p>
              </div>
            </div>
            <div className="border-l-2 border-black pl-4">
              <h2 className="text-xl font-bold mb-4">INDEX</h2>
              <div className="text-sm space-y-2">
                <div>Business......A1</div>
                <div>Tech.........B1</div>
                <div>Design.......C1</div>
                <div>Opinion......D1</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 34: Retro Gaming
  {
    id: 34,
    content: `'use client'
export default function Design34() {
  return (
    <div className="min-h-screen bg-black text-white font-mono">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="inline-block">
            <div className="text-6xl mb-4 text-yellow-400" style={{textShadow: '4px 4px 0px #ff00ff'}}>
              ARCADE
            </div>
            <div className="text-xl text-cyan-400">INSERT COIN TO CONTINUE</div>
          </div>
        </header>
        <main className="max-w-4xl mx-auto">
          <div className="border-4 border-yellow-400 p-8">
            <div className="text-center mb-8">
              <div className="text-3xl mb-4">HIGH SCORE</div>
              <div className="text-5xl text-yellow-400">999999</div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <button className="bg-red-600 p-4 text-2xl">PLAYER 1</button>
              <button className="bg-blue-600 p-4 text-2xl">PLAYER 2</button>
            </div>
          </div>
          <div className="text-center mt-8 animate-pulse">
            <div className="text-cyan-400">PRESS START</div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 35: Swiss Grid
  {
    id: 35,
    content: `'use client'
export default function Design35() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-8 py-16">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-3">
            <div className="text-sm mb-8">35/SWISS</div>
          </div>
          <div className="col-span-9">
            <header className="mb-20">
              <h1 className="text-6xl font-light">Precision</h1>
              <div className="w-full h-px bg-black mt-4"></div>
            </header>
          </div>
          <div className="col-span-3">
            <nav className="text-sm space-y-2">
              <div>Information</div>
              <div>Structure</div>
              <div>Typography</div>
              <div>Grid System</div>
            </nav>
          </div>
          <div className="col-span-6">
            <main>
              <p className="text-lg leading-relaxed">
                The International Typographic Style has emerged from a desire to represent information
                objectively and in a universal manner.
              </p>
            </main>
          </div>
          <div className="col-span-3">
            <div className="aspect-square bg-red-600"></div>
            <div className="aspect-square bg-black mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  )
}`
  },
  // Design 36: Vaporwave
  {
    id: 36,
    content: `'use client'
export default function Design36() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-pink-500 to-cyan-400">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-400"
               style={{textShadow: '0 0 40px rgba(255,0,255,0.5)'}}>
            ａｅｓｔｈｅｔｉｃ
          </div>
          <div className="text-2xl text-white mt-4">デザイン • 36</div>
        </header>
        <main className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/20 to-transparent"></div>
          <div className="grid grid-cols-3 gap-8 relative z-10">
            {[1, 2, 3].map(i => (
              <div key={i} className="aspect-square bg-gradient-to-br from-cyan-400/30 to-pink-500/30 backdrop-blur-lg border-2 border-pink-500/50"></div>
            ))}
          </div>
          <div className="text-center mt-20">
            <button className="px-12 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xl">
              リミックス
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 37: Architectural
  {
    id: 37,
    content: `'use client'
export default function Design37() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-8 py-16">
        <header className="mb-20">
          <div className="flex items-end gap-8">
            <div className="text-8xl font-thin">37</div>
            <div>
              <div className="text-3xl">ARCHITECTURAL</div>
              <div className="text-sm text-gray-600">FORM FOLLOWS FUNCTION</div>
            </div>
          </div>
        </header>
        <main className="grid grid-cols-12 gap-4">
          {Array.from({length: 24}).map((_, i) => (
            <div key={i} className={\`col-span-\${(i % 4) + 1} h-32 bg-gray-\${200 + (i % 4) * 100}\`}></div>
          ))}
        </main>
        <footer className="mt-20">
          <div className="flex justify-between items-center">
            <div className="w-1/3 h-px bg-black"></div>
            <div className="text-center px-8">Blueprint for Tomorrow</div>
            <div className="w-1/3 h-px bg-black"></div>
          </div>
        </footer>
      </div>
    </div>
  )
}`
  },
  // Design 38: Comic Book
  {
    id: 38,
    content: `'use client'
export default function Design38() {
  return (
    <div className="min-h-screen bg-yellow-300">
      <div className="container mx-auto px-8 py-16">
        <header className="mb-12">
          <div className="bg-red-600 text-white p-4 inline-block transform -skew-x-12 shadow-xl">
            <h1 className="text-5xl font-black italic">KABOOM!</h1>
          </div>
        </header>
        <main className="grid grid-cols-2 gap-4">
          <div className="bg-white border-4 border-black p-8">
            <div className="bg-blue-600 text-white p-4 mb-4 relative">
              <div className="text-2xl font-bold">POW!</div>
              <div className="absolute -bottom-3 left-8 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-blue-600 border-r-[20px] border-r-transparent"></div>
            </div>
            <p className="text-lg font-bold">Meanwhile, at Design HQ...</p>
          </div>
          <div className="bg-white border-4 border-black p-8">
            <div className="text-center">
              <div className="text-6xl font-black text-red-600">BANG!</div>
              <p className="mt-4">Action-packed interfaces!</p>
            </div>
          </div>
          <div className="col-span-2 bg-white border-4 border-black p-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-4">Coming Soon...</div>
              <div className="text-xl">The Amazing Design 38</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 39: Luxury Brand
  {
    id: 39,
    content: `'use client'
export default function Design39() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-xs tracking-[0.5em] mb-4">ESTABLISHED 2025</div>
          <div className="text-6xl font-thin tracking-[0.3em]">LUXE</div>
          <div className="text-xs tracking-[0.5em] mt-4">DESIGN XXXIX</div>
        </header>
        <main>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-2xl font-light leading-relaxed mb-12">
              Exquisite craftsmanship meets digital excellence
            </p>
            <div className="grid grid-cols-3 gap-px bg-white/10">
              {Array.from({length: 9}).map((_, i) => (
                <div key={i} className="aspect-square bg-black"></div>
              ))}
            </div>
            <button className="mt-12 border border-white px-12 py-4 tracking-widest hover:bg-white hover:text-black transition-all">
              DISCOVER
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 40: Psychedelic
  {
    id: 40,
    content: `'use client'
export default function Design40() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <h1 className="text-8xl font-black text-white"
              style={{transform: 'perspective(400px) rotateY(15deg)'}}>
            GROOVY
          </h1>
          <div className="text-3xl text-yellow-300 mt-4">✿ Design 40 ✿</div>
        </header>
        <main>
          <div className="relative">
            <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply"></div>
            <div className="absolute top-20 right-20 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply"></div>
            <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-orange-400 rounded-full mix-blend-multiply"></div>
            <div className="relative z-10 text-center py-40">
              <p className="text-4xl text-white font-bold">Peace, Love & Pixels</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 41: Corporate Minimal
  {
    id: 41,
    content: `'use client'
export default function Design41() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-8 py-16">
        <header className="flex justify-between items-center mb-20">
          <div className="text-2xl font-light">CORPORATE</div>
          <nav className="flex gap-12 text-sm">
            <a href="#">Services</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
        </header>
        <main>
          <div className="mb-20">
            <h1 className="text-7xl font-extralight mb-8">
              Enterprise<br />
              Solutions
            </h1>
            <div className="w-24 h-0.5 bg-black"></div>
          </div>
          <div className="grid grid-cols-3 gap-16">
            <div>
              <div className="text-4xl font-light mb-4">01</div>
              <h3 className="text-xl mb-2">Strategy</h3>
              <p className="text-gray-600">Comprehensive planning for digital transformation</p>
            </div>
            <div>
              <div className="text-4xl font-light mb-4">02</div>
              <h3 className="text-xl mb-2">Innovation</h3>
              <p className="text-gray-600">Cutting-edge solutions for modern challenges</p>
            </div>
            <div>
              <div className="text-4xl font-light mb-4">03</div>
              <h3 className="text-xl mb-2">Excellence</h3>
              <p className="text-gray-600">Uncompromising quality in execution</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 42: Street Art
  {
    id: 42,
    content: `'use client'
export default function Design42() {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="container mx-auto px-8 py-16">
        <header className="mb-20">
          <div className="inline-block">
            <h1 className="text-8xl font-black text-transparent"
                style={{
                  WebkitTextStroke: '3px #ff00ff',
                  textShadow: '5px 5px 0 #00ffff'
                }}>
              STREET
            </h1>
            <div className="text-3xl text-yellow-400 -mt-4">DESIGN 42</div>
          </div>
        </header>
        <main>
          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-8 transform rotate-2">
              <h2 className="text-4xl font-bold text-white mb-4">URBAN</h2>
              <p className="text-white">Raw creativity unleashed</p>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-blue-600 p-8 transform -rotate-2">
              <h2 className="text-4xl font-bold text-white mb-4">REBEL</h2>
              <p className="text-white">Breaking all the rules</p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <div className="inline-block bg-red-600 text-white px-8 py-4 text-2xl font-bold transform skew-x-12">
              TAG YOUR STYLE
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 43: Scientific
  {
    id: 43,
    content: `'use client'
export default function Design43() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-8 py-16">
        <header className="mb-20">
          <div className="flex items-center gap-4">
            <div className="text-5xl font-light">Δ</div>
            <div>
              <div className="text-3xl">Scientific Design</div>
              <div className="text-sm text-gray-600">Hypothesis 43</div>
            </div>
          </div>
        </header>
        <main>
          <div className="bg-white p-8 shadow-lg">
            <h1 className="text-4xl mb-6">Research & Development</h1>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-bold mb-4">Methodology</h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-blue-600"></div>
                    <span>Data Collection</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-600"></div>
                    <span>Analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-purple-600"></div>
                    <span>Conclusion</span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">Results</h2>
                <div className="h-40 bg-gradient-to-r from-blue-100 to-purple-100 rounded"></div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t">
              <p className="text-sm text-gray-600">
                E = mc² • The intersection of science and design
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 44: Art Gallery
  {
    id: 44,
    content: `'use client'
export default function Design44() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-8 py-16">
        <header className="border-b border-gray-200 pb-8 mb-12">
          <div className="flex justify-between items-center">
            <div className="text-3xl font-light">Gallery 44</div>
            <nav className="flex gap-8 text-sm uppercase tracking-wider">
              <a href="#">Exhibitions</a>
              <a href="#">Artists</a>
              <a href="#">Collection</a>
              <a href="#">Visit</a>
            </nav>
          </div>
        </header>
        <main>
          <div className="text-center mb-16">
            <h1 className="text-6xl font-light mb-4">Contemporary Vision</h1>
            <p className="text-xl text-gray-600">Curated Digital Experiences</p>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {Array.from({length: 8}).map((_, i) => (
              <div key={i} className={\`\${i === 0 || i === 5 ? 'col-span-2 row-span-2' : ''} bg-gray-100 aspect-square\`}></div>
            ))}
          </div>
          <div className="text-center mt-16">
            <button className="border-2 border-black px-8 py-3 uppercase tracking-wider">
              View Exhibition
            </button>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 45: Vintage Poster
  {
    id: 45,
    content: `'use client'
export default function Design45() {
  return (
    <div className="min-h-screen bg-amber-50">
      <div className="container mx-auto px-8 py-16">
        <div className="bg-amber-100 border-8 border-amber-900 p-12">
          <header className="text-center mb-12">
            <div className="text-amber-900">
              <div className="text-2xl">★ VINTAGE ★</div>
              <h1 className="text-7xl font-bold my-4">POSTER</h1>
              <div className="text-2xl">DESIGN CO.</div>
            </div>
          </header>
          <main>
            <div className="text-center mb-12">
              <div className="inline-block bg-red-800 text-amber-100 px-8 py-4 text-3xl font-bold">
                EST. 1945
              </div>
            </div>
            <div className="border-4 border-amber-900 p-8">
              <p className="text-center text-xl text-amber-900">
                "Timeless designs for the modern age"
              </p>
            </div>
            <div className="flex justify-center gap-8 mt-12">
              <div className="text-amber-900">✦</div>
              <div className="text-amber-900">✦</div>
              <div className="text-amber-900">✦</div>
            </div>
          </main>
          <footer className="text-center mt-12">
            <div className="text-sm text-amber-700">EDITION No. 45</div>
          </footer>
        </div>
      </div>
    </div>
  )
}`
  },
  // Design 46: Futuristic UI
  {
    id: 46,
    content: `'use client'
export default function Design46() {
  return (
    <div className="min-h-screen bg-gray-950 text-cyan-300">
      <div className="container mx-auto px-8 py-16">
        <header className="mb-20">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 border-2 border-cyan-300 rounded-full animate-spin"></div>
            <div className="text-3xl">NEXUS_46</div>
          </div>
        </header>
        <main>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8">
              <div className="border border-cyan-300/30 p-8 bg-cyan-300/5">
                <h1 className="text-5xl mb-6">Neural Interface</h1>
                <p className="text-cyan-100 mb-8">
                  Connecting human creativity with digital precision
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {['Alpha', 'Beta', 'Gamma'].map(wave => (
                    <div key={wave} className="border border-cyan-300/50 p-4 text-center">
                      <div className="text-sm text-cyan-400">{wave}</div>
                      <div className="text-2xl">{Math.floor(Math.random() * 100)}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="border border-cyan-300/30 p-4 bg-cyan-300/5 mb-4">
                <div className="text-xs text-cyan-400 mb-2">SYSTEM STATUS</div>
                <div className="text-green-400">● ONLINE</div>
              </div>
              <div className="border border-cyan-300/30 p-4 bg-cyan-300/5">
                <div className="text-xs text-cyan-400 mb-2">PROCESSING</div>
                <div className="h-2 bg-cyan-900 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-cyan-400 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 47: Nature Inspired
  {
    id: 47,
    content: `'use client'
export default function Design47() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 to-blue-100">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="inline-block">
            <div className="text-green-700 text-6xl mb-2">🌿</div>
            <h1 className="text-5xl font-light text-green-800">Natural</h1>
            <p className="text-green-600">Design 47 • Organic Growth</p>
          </div>
        </header>
        <main>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/50 backdrop-blur p-12 rounded-3xl">
              <h2 className="text-3xl text-green-800 mb-6">Sustainable Design</h2>
              <p className="text-green-700 mb-8">
                Where nature meets technology in perfect harmony
              </p>
              <div className="flex justify-around">
                <div className="text-center">
                  <div className="text-4xl mb-2">🌱</div>
                  <div className="text-sm text-green-600">Growth</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">💧</div>
                  <div className="text-sm text-blue-600">Flow</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-2">☀️</div>
                  <div className="text-sm text-yellow-600">Energy</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 48: Monochrome
  {
    id: 48,
    content: `'use client'
export default function Design48() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-8 py-16">
        <header className="mb-20">
          <div className="flex items-center justify-between">
            <div className="text-5xl font-bold">M48</div>
            <div className="flex gap-2">
              {Array.from({length: 5}).map((_, i) => (
                <div key={i} className={\`w-8 h-8 bg-\${i === 0 ? 'white' : i === 1 ? 'gray-200' : i === 2 ? 'gray-400' : i === 3 ? 'gray-600' : 'gray-800'}\`}></div>
              ))}
            </div>
          </div>
        </header>
        <main>
          <div className="grid grid-cols-2 gap-px bg-gray-800">
            <div className="bg-black p-12">
              <h1 className="text-6xl mb-6">Mono<br />chrome</h1>
            </div>
            <div className="bg-black p-12">
              <p className="text-gray-400 text-xl">
                The power of contrast. The beauty of simplicity.
              </p>
            </div>
            <div className="bg-black p-12">
              <div className="w-full h-32 bg-gradient-to-r from-black via-gray-500 to-white"></div>
            </div>
            <div className="bg-black p-12">
              <button className="border-2 border-white px-8 py-4 hover:bg-white hover:text-black transition-all">
                EXPLORE SHADES
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 49: Industrial
  {
    id: 49,
    content: `'use client'
export default function Design49() {
  return (
    <div className="min-h-screen bg-gray-200">
      <div className="container mx-auto px-8 py-16">
        <header className="mb-20">
          <div className="bg-yellow-500 text-black p-2 inline-block">
            <div className="flex items-center gap-4">
              <div className="text-4xl font-black">⚙</div>
              <div>
                <div className="text-2xl font-black">INDUSTRIAL</div>
                <div className="text-xs">DESIGN UNIT 49</div>
              </div>
            </div>
          </div>
        </header>
        <main>
          <div className="bg-gray-800 text-white p-12">
            <h1 className="text-5xl font-black mb-8">HEAVY DUTY<br />INTERFACES</h1>
            <div className="grid grid-cols-4 gap-4 mb-8">
              {['STEEL', 'CONCRETE', 'POWER', 'BUILD'].map(word => (
                <div key={word} className="bg-yellow-500 text-black p-4 text-center font-black">
                  {word}
                </div>
              ))}
            </div>
            <p className="text-gray-300">
              Robust solutions for demanding environments. Built to last.
            </p>
          </div>
          <div className="bg-yellow-500 h-8 flex items-center px-4">
            <div className="flex gap-4">
              {Array.from({length: 10}).map((_, i) => (
                <div key={i} className="w-1 h-4 bg-black"></div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}`
  },
  // Design 50: Celebration Finale
  {
    id: 50,
    content: `'use client'
export default function Design50() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      <div className="container mx-auto px-8 py-16">
        <header className="text-center mb-20">
          <div className="text-white">
            <div className="text-2xl mb-4">🎉 FINALE 🎉</div>
            <h1 className="text-8xl font-bold mb-4">50</h1>
            <div className="text-3xl">Design Complete!</div>
          </div>
        </header>
        <main>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/20 backdrop-blur-lg p-12 rounded-3xl text-white text-center">
              <h2 className="text-4xl font-bold mb-6">Mission Accomplished</h2>
              <p className="text-xl mb-8">
                50 unique designs, infinite possibilities
              </p>
              <div className="grid grid-cols-5 gap-2 mb-8">
                {Array.from({length: 50}).map((_, i) => (
                  <div key={i} className="w-full h-12 bg-white/30 rounded flex items-center justify-center text-sm font-bold">
                    {i + 1}
                  </div>
                ))}
              </div>
              <button className="bg-white text-purple-600 px-12 py-4 rounded-full text-xl font-bold hover:scale-105 transition-transform">
                CHOOSE YOUR FAVORITE
              </button>
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

console.log('\n🎉 Successfully created 26 unique designs for components 25-50!');