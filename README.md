# rikulauttia.com

The personal website of Riku Lauttia — an ultra-minimal, single-page site covering
work at the intersection of AI engineering, software engineering, product
development, and technology and commercial strategy.

## Stack

- **Framework:** Next.js (Pages Router), static export (`output: 'export'`)
- **Styling:** Tailwind CSS (light, system font stack, no external fonts)
- **Hosting:** GitHub Pages (custom domain via `CNAME`)
- **Images:** Optimized at build time with `sharp`

No client-side animation libraries or icon packs — the site ships minimal JavaScript.

## Structure

```
pages/
  index.js          # Single-page homepage: intro, work, writing, about, contact
  writing.js        # Writing archive
  writing/[slug].js # Minimal article page (links to the source article)
  about|work|projects|contact|now.js  # Redirect stubs to homepage anchors
components/
  layout/           # Header, Footer, Container, Section, Layout
  SEO.js            # Metadata + JSON-LD helpers
  Redirect.js       # Client + meta-refresh redirect to an anchor
src/content/        # Content as JSON (profile, roles/work, writing)
scripts/            # OG image + sitemap generators (run on prebuild)
public/             # Static assets (favicons, og images, portrait, llms.txt)
```

## Routing & redirects

The homepage is a single page with anchored sections: `#work`, `#writing`,
`#about`, `#contact`. The legacy routes redirect to the homepage:

| Route        | Redirects to |
| ------------ | ------------ |
| `/about`     | `/#about`    |
| `/work`      | `/#work`     |
| `/projects`  | `/#work`     |
| `/contact`   | `/#contact`  |
| `/now`       | `/#about`    |

Because the site is a static export on GitHub Pages, redirects use a `meta refresh`
(plus a client-side fallback) rather than server redirects.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build & deploy

```bash
npm run build    # prebuild generates og-image.* and sitemap.xml, then exports to out/
npm run deploy   # publishes out/ to the gh-pages branch
```

See `DEPLOYMENT.md` for details.

## Editing content

Content lives in `src/content/`:

- `profile.json` — name, intro, about text, focus areas, education, links
- `roles.json` — the “Selected work” list
- `writing.json` — articles shown on the homepage and `/writing`
