# Quick Deployment Guide

## ⚡ Quick Deploy

```bash
npm run deploy
```

That's it! Wait 1-2 minutes and check https://rikulauttia.com

## 📋 Pre-Deployment Checklist

Before running `npm run deploy`, verify:

```bash
# 1. Check CNAME file exists
cat public/CNAME
# Should output: rikulauttia.com

# 2. Build locally to test
npm run build

# 3. Verify build output
ls -la out/.nojekyll out/CNAME
# Both files should exist

# 4. Check git status
git status
# Commit any uncommitted changes first

# 5. Deploy
npm run deploy
```

## 🔧 What Happens During Deploy

```
npm run deploy
  ↓
predeploy (auto)
  ↓
prebuild (auto)
  ↓
gen:og → Generate OpenGraph images (og-image.jpg, og-image.png)
  ↓
gen:sitemap → Generate sitemap.xml from routes + writing.json
  ↓
build → Next.js production build
  ↓
postbuild (auto) → Create .nojekyll file
  ↓
gh-pages → Deploy out/ directory to gh-pages branch
  ↓
GitHub Pages → Build and serve from gh-pages branch
```

## 🌐 GitHub Pages Settings

**Repository**: https://github.com/rikulauttia/rikulauttia.com

**Settings → Pages:**
- Source: Deploy from a branch
- Branch: `gh-pages`
- Folder: `/ (root)`
- Custom domain: `rikulauttia.com`
- Enforce HTTPS: ✓ (enabled after DNS verification)

## 🔄 Regular Deployment Workflow

### Method 1: Quick Update

```bash
# Make changes, commit, and deploy
git add .
git commit -m "Update content"
git push origin main
npm run deploy
```

### Method 2: Full Workflow

```bash
# 1. Make changes
vim src/content/writing.json

# 2. Test locally
npm run dev
# Visit http://localhost:3000

# 3. Build and verify
npm run build
open out/index.html

# 4. Commit to main branch
git add .
git commit -m "Add new article"
git push origin main

# 5. Deploy to GitHub Pages
npm run deploy

# 6. Verify (wait 1-2 minutes)
open https://rikulauttia.com
```

## 🆘 Common Issues

### Deploy Fails

```bash
# Clean build and retry
rm -rf out .next
npm run deploy
```

### Custom Domain Not Working

1. Check GitHub Pages settings show `rikulauttia.com`
2. Verify DNS records at domain provider
3. Check `out/CNAME` contains domain name
4. Wait up to 48 hours for DNS propagation

### 404 Errors

```bash
# Ensure .nojekyll exists
ls out/.nojekyll

# If missing, rebuild
npm run build

# Check gh-pages branch
git checkout gh-pages
ls .nojekyll
git checkout main
```

### Old Content Showing

1. Wait 2-3 minutes after deploy
2. Hard refresh browser (Cmd+Shift+R or Ctrl+Shift+R)
3. Clear browser cache
4. Check in incognito/private window

## 📊 Deployment Verification

After deploying, check:

```bash
# 1. Check deployment status on GitHub
open https://github.com/rikulauttia/rikulauttia.com/deployments

# 2. Verify site is live
curl -I https://rikulauttia.com
# Should return 200 OK

# 3. Check CNAME is working
curl -I https://rikulauttia.com
# Should redirect to HTTPS if needed

# 4. Test specific pages
open https://rikulauttia.com
open https://rikulauttia.com/about
open https://rikulauttia.com/writing
open https://rikulauttia.com/now

# 5. Check sitemap
open https://rikulauttia.com/sitemap.xml

# 6. Check robots.txt
open https://rikulauttia.com/robots.txt

# 7. Check LLM-friendly assets
open https://rikulauttia.com/llms.txt
```

## 🔐 Security Notes

- HTTPS is enforced by GitHub Pages
- X-Powered-By header is removed (security)
- Console logs are stripped in production
- No sensitive data in public repository
- CNAME file should only contain domain name

## 📈 Performance Monitoring

After deployment, run:

```bash
# Lighthouse audit
open https://pagespeed.web.dev
# Enter: https://rikulauttia.com

# Check bundle sizes
du -h out/_next/static/chunks/*.{js,css}

# Verify image optimization
ls -lh out/*.{jpg,png}
```

## 🎯 Best Practices

1. **Always commit to main before deploying**
   - Deploy from a clean working directory
   - Keep main branch in sync with deployment

2. **Test locally before deploying**
   - Run `npm run build` to catch errors
   - Check `out/` directory contents

3. **Deploy during low-traffic times**
   - Minimize impact if issues occur

4. **Keep deployment logs**
   - Save output of `npm run deploy`
   - Useful for troubleshooting

5. **Monitor after deployment**
   - Check site within 2-3 minutes
   - Verify all pages load correctly
   - Test navigation and links

## 📞 Support

If deployment fails consistently:

1. Check GitHub Pages status: https://www.githubstatus.com
2. Review repository settings
3. Check gh-pages branch exists
4. Verify CNAME and .nojekyll files
5. Try manual deployment with `npx gh-pages`

---

**Last Updated**: January 2026
