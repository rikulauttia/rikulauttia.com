# Riku Lauttia - Personal Website

A modern, high-performance personal website showcasing my work as an AI Engineer, serial co-founder, and technology innovator. Built with Next.js and featuring a premium design system optimized for SEO and performance.

## 🌐 Live Site

**https://rikulauttia.com**

## ✨ Features

- **Premium Design**: Typography-first design with Inter font, dark mode default
- **SEO Optimized**: JSON-LD structured data, Open Graph, Twitter Cards, dynamic sitemap
- **High Performance**: Lighthouse 90+ scores, optimized images, minimal JavaScript
- **Content-Driven**: JSON-based content model for easy updates
- **Static Export**: Pre-rendered HTML for GitHub Pages deployment
- **Writing Section**: Individual article pages with canonical SEO
- **GEO Assets**: LLM-friendly content (llms.txt, /now page, FAQ sections)

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.1 (Pages Router, Static Export)
- **Styling**: Tailwind CSS 3.4.11 + @tailwindcss/typography
- **Animations**: Framer Motion 11.17.0
- **Icons**: React Icons 5.4.0
- **Build Tools**: Sharp (image optimization), PostCSS, Autoprefixer
- **Deployment**: gh-pages to GitHub Pages

## 📦 Installation

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Git

### Clone and Setup

```bash
# Clone the repository
git clone https://github.com/rikulauttia/rikulauttia.com.git
cd rikulauttia.com

# Install dependencies
npm install
```

## 🚀 Local Development

### Start Development Server

```bash
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000)

### Available Commands

```bash
# Development
npm run dev              # Start Next.js dev server (hot reload)

# Asset Generation
npm run gen:og           # Generate OpenGraph images
npm run gen:sitemap      # Generate sitemap.xml

# Build
npm run build            # Production build (runs prebuild automatically)
npm run prebuild         # Generate OG images + sitemap (auto-runs before build)
npm run postbuild        # Create .nojekyll file (auto-runs after build)

# Deployment
npm run predeploy        # Build before deploy (auto-runs before deploy)
npm run deploy           # Deploy to GitHub Pages
```

### Build Output

Static files are exported to the `out/` directory:

```
out/
├── .nojekyll           # Tells GitHub Pages to skip Jekyll processing
├── CNAME               # Custom domain configuration
├── index.html          # Homepage
├── about.html          # About page
├── work.html           # Work experience
├── projects.html       # Projects
├── writing.html        # Writing index
├── writing/            # Individual article pages
├── now.html            # Current focus
├── contact.html        # Contact
├── llms.txt            # LLM-friendly site map
├── sitemap.xml         # Search engine sitemap
├── robots.txt          # Robots.txt
├── og-image.{jpg,png}  # Social media images
└── _next/              # Next.js assets
```

## 📤 Deployment to GitHub Pages

### One-Command Deploy

```bash
npm run deploy
```

This command:
1. Runs `prebuild` → Generates OG images and sitemap
2. Runs `build` → Creates production build in `out/`
3. Runs `postbuild` → Creates `.nojekyll` file
4. Deploys `out/` directory to `gh-pages` branch
5. Preserves `.nojekyll` and `CNAME` files

### Manual Deployment (if needed)

```bash
# Build the site
npm run build

# Deploy to GitHub Pages
npx gh-pages -d out -t true
```

The `-t true` flag preserves dotfiles like `.nojekyll`.

### First-Time Setup: GitHub Pages Configuration

#### 1. Push to GitHub

```bash
# Ensure you're on the main branch
git checkout main

# Commit your changes
git add .
git commit -m "Initial commit"

# Push to GitHub
git push origin main
```

#### 2. Configure GitHub Pages

1. Go to your repository on GitHub:
   ```
   https://github.com/rikulauttia/rikulauttia.com
   ```

2. Click **Settings** → **Pages** (left sidebar)

3. Configure Source:
   - **Source**: Deploy from a branch
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
   - Click **Save**

4. Wait 2-3 minutes for deployment

5. Your site will be live at:
   ```
   https://rikulauttia.github.io/rikulauttia.com/
   ```

#### 3. Configure Custom Domain

1. In GitHub **Settings** → **Pages**:
   - Under **Custom domain**, enter: `rikulauttia.com`
   - Click **Save**
   - Wait for DNS check (✓ DNS check successful)

2. Enable **Enforce HTTPS** (wait for certificate provisioning)

#### 4. Configure DNS (at your domain provider)

Add these DNS records:

**Option A: CNAME (Recommended for www)**
```
Type:  CNAME
Name:  www
Value: rikulauttia.github.io
TTL:   3600
```

**Option B: A Records (For apex domain)**
```
Type:  A
Name:  @
Value: 185.199.108.153
TTL:   3600

Type:  A
Name:  @
Value: 185.199.109.153
TTL:   3600

Type:  A
Name:  @
Value: 185.199.110.153
TTL:   3600

Type:  A
Name:  @
Value: 185.199.111.153
TTL:   3600
```

**CNAME for www → apex**
```
Type:  CNAME
Name:  www
Value: rikulauttia.com
TTL:   3600
```

Wait 24-48 hours for DNS propagation (usually faster).

## 🔄 Deployment Workflow

### Regular Updates

```bash
# 1. Make your changes
vim src/content/writing.json  # Example: add new article

# 2. Test locally
npm run dev

# 3. Build and verify
npm run build
open out/index.html  # Check build output

# 4. Commit changes
git add .
git commit -m "Add new article"
git push origin main

# 5. Deploy to GitHub Pages
npm run deploy

# 6. Verify deployment (wait 1-2 minutes)
open https://rikulauttia.com
```

### Deployment Checklist

- [ ] All changes committed to `main` branch
- [ ] Build completes without errors (`npm run build`)
- [ ] `out/` directory contains expected files
- [ ] `out/CNAME` contains `rikulauttia.com`
- [ ] `out/.nojekyll` exists
- [ ] `npm run deploy` completes successfully
- [ ] Check GitHub Actions tab for deployment status
- [ ] Verify live site updates (may take 1-2 minutes)

## 🗂️ Content Management

### Update Content

All content is stored in JSON files under `src/content/`:

```
src/content/
├── profile.json      # Personal info, bio, skills, education
├── roles.json        # Work experience
├── projects.json     # Projects and ventures
└── writing.json      # Articles and blog posts
```

See `src/content/SCHEMA.md` for detailed schema documentation.

### Add New Article

```json
// src/content/writing.json
{
  "articles": [
    {
      "id": "my-new-article",
      "title": "My New Article Title",
      "slug": "my-new-article-slug",
      "excerpt": "Brief description of the article",
      "url": "https://substack.com/...",
      "platform": "Substack",
      "publishedDate": "2026-01-15",
      "featured": true,
      "category": "AI Strategy",
      "tags": ["AI", "Strategy"],
      "readingTime": "5 min read",
      "image": "TODO"
    }
  ]
}
```

Then rebuild and deploy:

```bash
npm run deploy
```

## 🐛 Troubleshooting

### Deployment Issues

**Problem: Deploy fails with "Permission denied"**

```bash
# Re-authenticate with GitHub
gh auth login

# Try deploying again
npm run deploy
```

**Problem: Custom domain not working**

1. Check `out/CNAME` contains your domain
2. Verify GitHub Pages settings show your domain
3. Check DNS records at your domain provider
4. Wait for DNS propagation (up to 48 hours)
5. Clear browser cache

**Problem: 404 errors on routes**

- Ensure `.nojekyll` exists in `out/` directory
- Check `gh-pages` branch contains `.nojekyll`
- GitHub Pages requires `.nojekyll` for Next.js routing

**Problem: Old content still showing**

```bash
# Clear GitHub Pages cache
# 1. Push a new commit
# 2. Wait 2-3 minutes
# 3. Hard refresh browser (Cmd+Shift+R)
```

### Build Issues

**Problem: Build fails with TypeScript errors**

```bash
# Skip type checking (not recommended for production)
npm run build -- --no-type-check
```

**Problem: Out of memory during build**

```bash
# Increase Node memory limit
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

**Problem: Images not optimized**

```bash
# Ensure Sharp is installed
npm install sharp --save-dev
npm run gen:og
```

### Local Development Issues

**Problem: Port 3000 already in use**

```bash
# Use different port
npm run dev -- -p 3001
```

**Problem: Hot reload not working**

```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

## 📁 Project Structure

```
rikulauttia.com/
├── components/          # React components
│   ├── layout/         # Header, Footer, Layout
│   ├── ui/             # Buttons, Cards, Badges
│   └── SEO.js          # SEO component with JSON-LD
├── pages/              # Next.js pages (routes)
│   ├── _app.js         # App wrapper
│   ├── _document.js    # HTML document structure
│   ├── index.js        # Homepage
│   ├── about.js        # About page
│   ├── work.js         # Work experience
│   ├── projects.js     # Projects
│   ├── writing/        # Writing section
│   │   ├── index.js    # Writing index
│   │   └── [slug].js   # Individual articles (dynamic)
│   ├── now.js          # Current focus page
│   └── contact.js      # Contact page
├── public/             # Static assets
│   ├── CNAME           # Custom domain (rikulauttia.com)
│   ├── robots.txt      # Search engine instructions
│   ├── llms.txt        # LLM-friendly site map
│   ├── sitemap.xml     # Generated at build time
│   └── og-image.*      # Social media images
├── scripts/            # Build scripts
│   ├── generate-og.mjs      # OpenGraph image generator
│   └── generate-sitemap.mjs # Sitemap generator
├── src/
│   ├── content/        # Content JSON files
│   │   ├── profile.json
│   │   ├── roles.json
│   │   ├── projects.json
│   │   ├── writing.json
│   │   └── SCHEMA.md   # Content schema documentation
│   └── lib/
│       └── content.js  # Content utility functions
├── styles/
│   └── globals.css     # Global styles + Tailwind
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind configuration
└── package.json        # Dependencies and scripts
```

## 🔗 Links

- **Website**: [rikulauttia.com](https://rikulauttia.com)
- **Repository**: [github.com/rikulauttia/rikulauttia.com](https://github.com/rikulauttia/rikulauttia.com)
- **Email**: [riku@lauttia.com](mailto:riku@lauttia.com)
- **LinkedIn**: [linkedin.com/in/rikulauttia](https://linkedin.com/in/rikulauttia)
- **GitHub**: [@rikulauttia](https://github.com/rikulauttia)
- **X (Twitter)**: [@rikulauttia](https://x.com/rikulauttia)
- **Substack**: [@rikulauttia](https://substack.com/@rikulauttia)

## 📄 License

© 2026 Riku Lauttia. All rights reserved.

---

**Last Updated**: January 2026
