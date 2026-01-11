#!/usr/bin/env node

/**
 * OpenGraph Image Generator
 *
 * Generates og-image.jpg and og-image.png from SVG template
 * Ensures consistent, version-controlled social media preview images
 */

import sharp from 'sharp';
import { readFileSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PROJECT_ROOT = join(__dirname, '..');
const ASSETS_DIR = join(PROJECT_ROOT, 'assets');
const PUBLIC_DIR = join(PROJECT_ROOT, 'public');

const SVG_TEMPLATE = join(ASSETS_DIR, 'og-template.svg');
const OUTPUT_JPG = join(PUBLIC_DIR, 'og-image.jpg');
const OUTPUT_PNG = join(PUBLIC_DIR, 'og-image.png');

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

/**
 * Generate OpenGraph images from SVG template
 */
async function generateOGImages() {
  console.log('🎨 Generating OpenGraph images...\n');

  try {
    // Ensure public directory exists
    mkdirSync(PUBLIC_DIR, { recursive: true });

    // Read SVG template
    console.log('📖 Reading SVG template:', SVG_TEMPLATE);
    const svgBuffer = readFileSync(SVG_TEMPLATE);

    // Create sharp instance from SVG
    const image = sharp(svgBuffer, {
      density: 150, // Higher density for better quality
    })
      .resize(OG_WIDTH, OG_HEIGHT, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 1 }
      });

    // Generate JPG (primary, smaller file size)
    console.log('🖼️  Generating JPG...');
    await image
      .jpeg({
        quality: 90,
        progressive: true,
        mozjpeg: true, // Better compression
      })
      .toFile(OUTPUT_JPG);

    const jpgStats = await sharp(OUTPUT_JPG).metadata();
    console.log(`   ✅ og-image.jpg: ${jpgStats.width}x${jpgStats.height}`);

    // Generate PNG (fallback, lossless)
    console.log('🖼️  Generating PNG...');
    await image
      .png({
        compressionLevel: 9,
        palette: true, // Use palette for smaller file size
      })
      .toFile(OUTPUT_PNG);

    const pngStats = await sharp(OUTPUT_PNG).metadata();
    console.log(`   ✅ og-image.png: ${pngStats.width}x${pngStats.height}`);

    console.log('\n✨ OpenGraph images generated successfully!');
    console.log(`   📁 Output: ${PUBLIC_DIR}/og-image.{jpg,png}\n`);

  } catch (error) {
    console.error('❌ Error generating OpenGraph images:', error.message);
    console.error(error);
    process.exit(1);
  }
}

// Run generator
generateOGImages();
