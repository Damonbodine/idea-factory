const fs = require('fs');
const path = require('path');

// Generate import statements
let imports = '';
for (let i = 1; i <= 100; i++) {
  imports += `import Design${i} from './Design${i}'\n`;
}

// Generate array elements
let arrayElements = '';
for (let i = 1; i <= 100; i++) {
  arrayElements += `  Design${i},\n`;
}

// Create the full index content
const indexContent = `${imports}
export const designs = [
${arrayElements}]

export function getDesign(id: number) {
  return designs[id - 1] || Design1
}
`;

// Write to index.tsx
const indexPath = path.join(__dirname, '..', 'components', 'designs', 'index.tsx');
fs.writeFileSync(indexPath, indexContent);

console.log('✅ Updated index.tsx with 100 designs!');