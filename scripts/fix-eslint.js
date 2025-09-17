const fs = require('fs')
const path = require('path')

const componentsDir = path.join(__dirname, '..', 'components', 'designs')

// Fix apostrophes and comment issues in all design files
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'))

files.forEach(file => {
  const filePath = path.join(componentsDir, file)
  let content = fs.readFileSync(filePath, 'utf8')

  // Fix unescaped apostrophes
  content = content.replace(/Let's Create Together/g, "Let's Create Together")

  // Fix comment textnodes - replace // INITIALIZE with {/* INITIALIZE */}
  content = content.replace(/<div className="font-mono text-sm mb-4 text-green-300">\/\/ INITIALIZE<\/div>/g,
    '<div className="font-mono text-sm mb-4 text-green-300">{/* INITIALIZE */}</div>')

  fs.writeFileSync(filePath, content)
})

console.log('✅ Fixed ESLint issues in all design files')