const fs = require('fs');

// Simple 1x1 white PNG in base64
const whitePNG = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==', 'base64');

// Create the assets directory if it doesn't exist
if (!fs.existsSync('assets')) {
  fs.mkdirSync('assets');
}

// Write the PNG files
fs.writeFileSync('assets/icon.png', whitePNG);
fs.writeFileSync('assets/adaptive-icon.png', whitePNG);
fs.writeFileSync('assets/splash.png', whitePNG);
fs.writeFileSync('assets/favicon.png', whitePNG);

console.log('Created blank PNG images for all assets'); 