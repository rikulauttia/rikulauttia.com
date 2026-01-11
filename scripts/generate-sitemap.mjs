#!/usr/bin/env node

/**
 * Sitemap Generator
 *
 * Dynamically generates sitemap.xml from:
 * - Static routes (pages/)
 * - Writing articles (src/content/writing.json)
 *
 * Runs at build time via prebuild script
 */

import { writeFileSync, mkdirSync, readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PROJECT_ROOT = join(__dirname, '..');
const PUBLIC_DIR = join(PROJECT_ROOT, 'public');
const SITEMAP_PATH = join(PUBLIC_DIR, 'sitemap.xml');
const WRITING_JSON_PATH = join(PROJECT_ROOT, 'src/content/writing.json');

// Site configuration
const SITE_URL = 'https://rikulauttia.com';
const TRAILING_SLASH = false; // Must match next.config.js

// Get current date in YYYY-MM-DD format
function getCurrentDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

// Format URL with or without trailing slash
function formatUrl(path) {
  const url = `${SITE_URL}${path}`;
  return TRAILING_SLASH && path !== '/' ? `${url}/` : url;
}

// Static pages
const staticPages = [
  { path: '/', changefreq: 'weekly', priority: '1.0' },
  { path: '/about', changefreq: 'monthly', priority: '0.9' },
  { path: '/work', changefreq: 'monthly', priority: '0.8' },
  { path: '/projects', changefreq: 'monthly', priority: '0.8' },
  { path: '/writing', changefreq: 'weekly', priority: '0.8' },
  { path: '/now', changefreq: 'weekly', priority: '0.8' },
  { path: '/contact', changefreq: 'yearly', priority: '0.7' },
];

// Read writing articles from JSON
function getWritingUrls() {
  try {
    const writingData = JSON.parse(readFileSync(WRITING_JSON_PATH, 'utf8'));
    // Generate URLs for individual article pages
    return writingData.articles.map(article => ({
      path: `/writing/${article.slug}`,
      changefreq: 'monthly',
      priority: '0.7',
    }));
  } catch (error) {
    console.warn('⚠️  Could not read writing.json, skipping article URLs');
    return [];
  }
}

/**
 * Generate sitemap XML
 */
function generateSitemap() {
  console.log('🗺️  Generating sitemap.xml...\n');

  try {
    // Ensure public directory exists
    mkdirSync(PUBLIC_DIR, { recursive: true });

    const lastmod = getCurrentDate();
    console.log(`   📅 Last modified: ${lastmod}`);
    console.log(`   🔗 Trailing slash: ${TRAILING_SLASH}`);

    // Combine all URLs
    const writingUrls = getWritingUrls();
    const allUrls = [...staticPages, ...writingUrls];

    // Generate XML
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (url) => `  <url>
    <loc>${formatUrl(url.path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

    // Write sitemap
    writeFileSync(SITEMAP_PATH, xml, 'utf8');

    console.log(`   ✅ Sitemap generated: ${SITEMAP_PATH}`);
    console.log(`   📊 Total URLs: ${allUrls.length}`);
    console.log(`      - Static pages: ${staticPages.length}`);
    console.log(`      - Writing pages: ${writingUrls.length}`);
    console.log('\n✨ Sitemap generation complete!\n');
  } catch (error) {
    console.error('❌ Error generating sitemap:', error.message);
    console.error(error);
    process.exit(1);
  }
}

// Run generator
generateSitemap();
