# 🚀 Deployment Guide

This guide covers various deployment options for Nürburgring Analytics.

## 🌐 Deployment Platforms

### 1. Vercel (Recommended) ⚡

Vercel provides the best experience for React/Vite applications with automatic deployments.

#### Quick Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/ARK650/nurburgring-analytics)

#### Manual Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (first time)
vercel

# Follow the prompts:
# ? Set up and deploy "nurburgring-analytics"? Y
# ? Which scope? (your-username)
# ? Link to existing project? N
# ? What's your project's name? nurburgring-analytics
# ? In which directory is your code located? ./

# Deploy updates
vercel --prod
```

#### Custom Domain Setup
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Domains
4. Add your custom domain
5. Follow DNS configuration instructions

### 2. Netlify 🌊

Great alternative with easy drag-and-drop deployment.

#### Build Settings
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node.js version**: `18` (set in Environment Variables)

#### Deploy Steps
```bash
# Build the project locally
npm run build

# Option 1: Drag and drop 'dist' folder to Netlify
# Option 2: Connect GitHub repository

# For GitHub integration:
# 1. Connect your GitHub account
# 2. Select the repository
# 3. Set build settings above
# 4. Deploy
```

#### Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify init
netlify build
netlify deploy --prod
```

### 3. GitHub Pages 📄

Free hosting for public repositories.

#### Setup GitHub Actions (Recommended)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

#### Manual GitHub Pages Deployment
```bash
# Install gh-pages
npm install --save-dev gh-pages

# Update vite.config.ts for GitHub Pages
# Add base: '/nurburgring-analytics/' to config

# Deploy
npm run deploy
```

### 4. Firebase Hosting 🔥

Google's hosting platform with CDN.

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login to Firebase
firebase login

# Initialize project
firebase init hosting

# Configuration:
# ? What do you want to use as your public directory? dist
# ? Configure as a single-page app? Yes
# ? Set up automatic builds? No

# Build and deploy
npm run build
firebase deploy
```

### 5. AWS S3 + CloudFront ☁️

Enterprise-grade hosting with global CDN.

```bash
# Build the project
npm run build

# Upload to S3 bucket
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## ⚙️ Build Configuration

### Environment Variables
Create different `.env` files for different environments:

#### `.env.production`
```env
VITE_API_BASE_URL=https://api.your-domain.com
VITE_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
VITE_APP_VERSION=1.1.0
```

#### `.env.staging`
```env
VITE_API_BASE_URL=https://staging-api.your-domain.com
VITE_GOOGLE_ANALYTICS_ID=GA_STAGING_ID
VITE_APP_VERSION=1.1.0-staging
```

### Build Optimization

#### Vite Configuration Updates
```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  base: process.env.NODE_ENV === 'production' ? '/nurburgring-analytics/' : '/',
})
```

## 🔧 CI/CD Setup

### GitHub Actions Workflow
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    - run: npm ci
    - run: npm run type-check
    - run: npm run build

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    - run: npm ci
    - run: npm run build
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

## 📊 Performance Monitoring

### Setup Analytics

#### Google Analytics 4
```typescript
// Add to index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

#### Web Vitals Monitoring
```bash
npm install web-vitals

# Add to main.tsx
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

### Lighthouse CI
```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [push]
jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci && npm run build
      - run: npm install -g @lhci/cli@0.12.x
      - run: lhci autorun
```

## 🔒 Security Considerations

### Headers Configuration
```typescript
// Add to vite.config.ts
export default defineConfig({
  preview: {
    headers: {
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'",
    },
  },
})
```

### HTTPS Enforcement
```typescript
// Add redirect for production
if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
  location.replace('https:' + window.location.href.substring(window.location.protocol.length));
}
```

## 🌍 Custom Domain Setup

### DNS Configuration
For custom domains, add these DNS records:

#### For Vercel
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.19.61
```

#### For Netlify
```
Type: CNAME
Name: www
Value: your-site.netlify.app

Type: A
Name: @
Value: 75.2.60.5
```

## 📱 PWA Configuration

### Add PWA Support
```bash
npm install vite-plugin-pwa

# Add to vite.config.ts
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      },
      manifest: {
        name: 'Nürburgring Analytics',
        short_name: 'Nürburgring',
        description: 'The Ultimate Proving Ground - Nürburgring Analytics',
        theme_color: '#10b981',
        icons: [
          {
            src: 'icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
```

## 🚀 Deployment Checklist

Before deploying to production:

- [ ] Run `npm run build` successfully
- [ ] Test production build locally with `npm run preview`
- [ ] Verify all environment variables are set
- [ ] Test on different browsers and devices
- [ ] Check Lighthouse performance scores
- [ ] Verify all links work correctly
- [ ] Test 404 error handling
- [ ] Confirm analytics are working
- [ ] Check mobile responsiveness
- [ ] Verify HTTPS is working
- [ ] Test loading performance

## 📞 Support

For deployment issues:

- **Vercel**: [Vercel Documentation](https://vercel.com/docs)
- **Netlify**: [Netlify Documentation](https://docs.netlify.com/)
- **GitHub Pages**: [GitHub Pages Documentation](https://docs.github.com/en/pages)
- **Project Issues**: [GitHub Issues](https://github.com/ARK650/nurburgring-analytics/issues)

---

**Happy Deploying!** 🚀