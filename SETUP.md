# Nürburgring Analytics - Development Setup Guide

A comprehensive data visualization application for Nürburgring Nordschleife lap times, records, and automotive history.

## 🚀 Quick Start

### Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v8.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git** for version control

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/ARK650/nurburgring-analytics.git
   cd nurburgring-analytics
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` (or the port shown in terminal)

## 📁 Project Structure

```
nurburgring-analytics/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components (shadcn/ui)
│   │   └── ...             # Feature-specific components
│   ├── styles/             # Global styles and CSS
│   └── types/              # TypeScript type definitions
├── public/                 # Static assets
├── build/                  # Production build output
├── .github/               # GitHub Actions and templates
├── tsconfig.json          # TypeScript configuration
├── tsconfig.node.json     # TypeScript config for Vite
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── vite.config.ts         # Vite bundler configuration
└── package.json           # Dependencies and scripts
```

## 🛠️ Configuration Files

### Required Configuration Files

The following configuration files are essential and should be present in the root directory:

#### 1. **tsconfig.json**

TypeScript configuration for the main project:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

#### 2. **tsconfig.node.json**

TypeScript configuration for Vite:

```json
{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true
  },
  "include": ["vite.config.ts"]
}
```

#### 3. **tailwind.config.js**

Tailwind CSS configuration with custom theme:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Custom colors, animations, and design tokens
    },
  },
  plugins: [],
};
```

#### 4. **postcss.config.js**

PostCSS configuration for processing CSS:

```javascript
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};
```

## 📦 Dependencies

### Core Dependencies

- **React 18.3.1** - UI library
- **TypeScript 5.9.2** - Type safety
- **Vite 6.3.5** - Build tool and dev server
- **Tailwind CSS 4.1.13** - Utility-first CSS framework
- **Framer Motion** - Animation library (as "motion" package)
- **Lucide React** - Icon library
- **Radix UI** - Headless UI components

### Key Development Dependencies

- **@types/react** & **@types/react-dom** - React type definitions
- **@tailwindcss/postcss** - Modern Tailwind PostCSS integration
- **PostCSS** & **Autoprefixer** - CSS processing
- **@vitejs/plugin-react-swc** - Fast React refresh

## 🚨 Common Setup Issues & Solutions

### Issue 1: TypeScript Errors about JSX

**Problem:** `JSX element implicitly has type 'any'`
**Solution:** Ensure `@types/react` and `@types/react-dom` are installed:

```bash
npm install --save-dev @types/react @types/react-dom typescript
```

### Issue 2: PostCSS Configuration Errors

**Problem:** `Failed to load PostCSS config` or `Unexpected token 'export'`
**Solution:** Ensure `postcss.config.js` uses CommonJS syntax:

```javascript
module.exports = {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
};
```

### Issue 3: Tailwind CSS Not Working

**Problem:** Styles not applying or build errors
**Solution:** Install the modern Tailwind PostCSS plugin:

```bash
npm install --save-dev @tailwindcss/postcss tailwindcss autoprefixer
```

### Issue 4: Motion Library Import Errors

**Problem:** Cannot resolve 'motion/react'
**Solution:** Ensure the motion package is properly installed:

```bash
npm install motion
```

## 🧪 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Deploy to GitHub Pages
npm run deploy
```

## 🏗️ Build & Deployment

### Production Build

```bash
npm run build
```

This creates optimized files in the `build/` directory.

### GitHub Pages Deployment

The project is configured for GitHub Pages deployment:

```bash
npm run deploy
```

## 🎨 Styling Architecture

- **Tailwind CSS** for utility classes
- **CSS Custom Properties** for theme variables
- **Responsive Design** with mobile-first approach
- **Dark Theme** optimized for motorsport aesthetics
- **Custom Animations** for enhanced user experience

## 🔧 Development Guidelines

### Code Organization

- Use TypeScript for all new files
- Follow React functional components pattern
- Implement proper error boundaries
- Use custom hooks for shared logic

### Styling Conventions

- Prefer Tailwind utilities over custom CSS
- Use semantic color variables
- Implement consistent spacing system
- Ensure accessibility compliance

### Performance Considerations

- Implement code splitting where appropriate
- Optimize images and assets
- Use React.memo for expensive components
- Monitor bundle size

## 📋 Environment Variables

Create a `.env.local` file for local environment variables:

```env
# Add any environment-specific variables here
VITE_API_URL=your_api_url_here
```

## 🐛 Troubleshooting

### Fresh Installation Issues

If you encounter issues after cloning:

1. **Delete node_modules and reinstall:**

   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Clear Vite cache:**

   ```bash
   rm -rf node_modules/.vite
   npm run dev
   ```

3. **Verify Node.js version:**
   ```bash
   node --version  # Should be v18.0.0 or higher
   ```

### Build Issues

1. Check TypeScript compilation: `npx tsc --noEmit`
2. Verify all config files are present
3. Ensure all dependencies are installed

## 📞 Support

For issues related to this project:

1. Check existing GitHub issues
2. Create a new issue with detailed description
3. Include system information and error messages

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure tests pass and build succeeds
5. Submit a pull request

---

**Note:** This setup guide ensures the project works correctly after cloning from GitHub. All necessary configuration files and dependencies are included to provide a seamless development experience.
