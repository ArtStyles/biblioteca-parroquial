// Script para generar iconos de la aplicación
// Este script requiere sharp: npm install sharp

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const iconSizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'icon-192x192.png' },
  { size: 512, name: 'icon-512x512.png' }
];

// Función para crear un icono simple con texto
async function createIcon(size, filename) {
  const text = 'BP'; // Biblioteca Parroquial
  const fontSize = Math.floor(size * 0.4);
  
  const svg = `
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#5bbad5"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${fontSize}" 
            font-weight="bold" text-anchor="middle" dominant-baseline="middle" 
            fill="white">${text}</text>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(path.join(__dirname, '../public', filename));
  
  console.log(`✅ Generated ${filename} (${size}x${size})`);
}

// Función para crear el favicon.ico
async function createFavicon() {
  const svg = `
    <svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#5bbad5"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="12" 
            font-weight="bold" text-anchor="middle" dominant-baseline="middle" 
            fill="white">BP</text>
    </svg>
  `;

  await sharp(Buffer.from(svg))
    .png()
    .toFile(path.join(__dirname, '../public/favicon.ico'));
  
  console.log('✅ Generated favicon.ico');
}

// Función para crear safari-pinned-tab.svg
async function createSafariIcon() {
  const svg = `
    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#5bbad5"/>
      <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="6" 
            font-weight="bold" text-anchor="middle" dominant-baseline="middle" 
            fill="white">BP</text>
    </svg>
  `;

  fs.writeFileSync(path.join(__dirname, '../public/safari-pinned-tab.svg'), svg);
  console.log('✅ Generated safari-pinned-tab.svg');
}

// Ejecutar la generación de iconos
async function generateIcons() {
  try {
    console.log('🎨 Generating application icons...');
    
    // Crear directorio public si no existe
    const publicDir = path.join(__dirname, '../public');
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }
    
    // Generar todos los iconos
    for (const icon of iconSizes) {
      await createIcon(icon.size, icon.name);
    }
    
    await createFavicon();
    await createSafariIcon();
    
    console.log('🎉 All icons generated successfully!');
  } catch (error) {
    console.error('❌ Error generating icons:', error);
  }
}

// Ejecutar solo si se llama directamente
if (require.main === module) {
  generateIcons();
}

module.exports = { generateIcons };
