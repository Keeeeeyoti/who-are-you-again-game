const fs = require('fs');
const path = require('path');

// Read the index.html file
const indexPath = path.join(__dirname, 'web-build', 'index.html');
let html = fs.readFileSync(indexPath, 'utf8');

// Replace absolute paths with GitHub Pages paths
html = html.replace(
  /src="\/_expo\//g,
  'src="/who-are-you-again-game/_expo/'
);

// Write the fixed file back
fs.writeFileSync(indexPath, html);

console.log('Fixed asset paths for GitHub Pages deployment'); 