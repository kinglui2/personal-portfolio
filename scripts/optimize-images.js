import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const imageDir = path.join(__dirname, '../src/assets/images');

const optimizeImages = async () => {
  try {
    // Optimize profile image
    await sharp(path.join(imageDir, 'ME.jpeg'))
      .resize(400) // Resize to reasonable size
      .jpeg({ quality: 80, progressive: true })
      .toFile(path.join(imageDir, 'ME.optimized.jpeg'));

    // Optimize PNG
    await sharp(path.join(imageDir, 'ME-removebg-.png'))
      .resize(400)
      .png({ quality: 80, compressionLevel: 9 })
      .toFile(path.join(imageDir, 'ME-removebg-.optimized.png'));

    // Create WebP versions
    await sharp(path.join(imageDir, 'ME.jpeg'))
      .resize(400)
      .webp({ quality: 80 })
      .toFile(path.join(imageDir, 'ME.webp'));

    await sharp(path.join(imageDir, 'ME-removebg-.png'))
      .resize(400)
      .webp({ quality: 80 })
      .toFile(path.join(imageDir, 'ME-removebg-.webp'));

    console.log('Images optimized successfully!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
};

optimizeImages(); 