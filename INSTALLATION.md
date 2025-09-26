# 🚀 Installation Guide

This guide provides step-by-step instructions for setting up Nürburgring Analytics on your local machine.

## 📋 System Requirements

### Minimum Requirements
- **Operating System**: Windows 10+, macOS 10.15+, or Linux (Ubuntu 18.04+)
- **Node.js**: Version 18.0.0 or higher
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 1GB free space for dependencies
- **Internet**: Required for initial setup and package downloads

### Recommended Development Environment
- **Code Editor**: [Visual Studio Code](https://code.visualstudio.com/) with React/TypeScript extensions
- **Terminal**: PowerShell (Windows), Terminal (macOS), or Bash (Linux)
- **Browser**: Chrome or Edge with React DevTools extension

## 🛠️ Step-by-Step Installation

### 1. Install Prerequisites

#### Install Node.js
1. Visit [nodejs.org](https://nodejs.org/)
2. Download the LTS version for your operating system
3. Run the installer and follow the setup wizard
4. Verify installation:
   ```bash
   node --version
   npm --version
   ```

#### Install Git
1. Visit [git-scm.com](https://git-scm.com/)
2. Download Git for your operating system
3. Run the installer with default settings
4. Verify installation:
   ```bash
   git --version
   ```

### 2. Clone the Repository

#### Option A: Using Git Command Line
```bash
# Navigate to your desired directory
cd /path/to/your/projects

# Clone the repository
git clone https://github.com/ARK650/nurburgring-analytics.git

# Navigate to project directory
cd nurburgring-analytics
```

#### Option B: Using GitHub Desktop
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Click "Clone a repository from the Internet"
3. Enter: `ARK650/nurburgring-analytics`
4. Choose your local path and click "Clone"

#### Option C: Download ZIP
1. Visit the [GitHub repository](https://github.com/ARK650/nurburgring-analytics)
2. Click the green "Code" button
3. Select "Download ZIP"
4. Extract the ZIP file to your desired location

### 3. Install Project Dependencies

```bash
# Make sure you're in the project directory
cd nurburgring-analytics

# Install all required packages (this may take 2-5 minutes)
npm install
```

#### Alternative Package Managers
```bash
# Using Yarn (if preferred)
yarn install

# Using pnpm (faster alternative)
pnpm install
```

### 4. Start Development Server

```bash
# Start the development server
npm run dev
```

Expected output:
```
> nurburgring-analytics@1.0.0 dev
> vite

  VITE v6.3.5  ready in 322 ms

  ➜  Local:   http://localhost:3001/nurburgring-analytics/
  ➜  Network: use --host to expose
```

### 5. Open in Browser

1. Open your web browser
2. Navigate to `http://localhost:3001/nurburgring-analytics/`
3. You should see the Nürburgring Analytics homepage

## 🔧 Configuration Options

### Environment Variables
Create a `.env` file in the root directory for custom configuration:

```env
# Development settings
VITE_PORT=3001
VITE_HOST=localhost

# API settings (for future features)
VITE_API_BASE_URL=https://api.nurburgring-analytics.com

# Analytics (optional)
VITE_GOOGLE_ANALYTICS_ID=GA_MEASUREMENT_ID
```

### Vite Configuration
The project includes a pre-configured `vite.config.ts` file. You can customize it for your needs:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    host: true, // Allows access from other devices on network
  },
  build: {
    outDir: 'dist',
    sourcemap: true, // Enable source maps for debugging
  },
})
```

## 🚨 Troubleshooting

### Common Installation Issues

#### 1. Node.js Version Issues
```bash
# Check your Node.js version
node --version

# If version is below 18.0.0, update Node.js
# Download latest LTS from nodejs.org
```

#### 2. Permission Issues (macOS/Linux)
```bash
# If you get permission errors
sudo chown -R $(whoami) ~/.npm
sudo chown -R $(whoami) /usr/local/lib/node_modules
```

#### 3. Network/Firewall Issues
```bash
# If npm install fails due to network issues
npm config set registry https://registry.npmjs.org/
npm cache clean --force
npm install
```

#### 4. Port Already in Use
```bash
# If port 3001 is busy, specify a different port
npm run dev -- --port 4000
```

#### 5. TypeScript Errors
```bash
# If you see TypeScript compilation errors
npm install @types/react @types/react-dom typescript --save-dev
```

#### 6. Tailwind CSS Not Loading
```bash
# Reinstall Tailwind dependencies
npm install tailwindcss postcss autoprefixer @tailwindcss/postcss --save-dev
```

### Performance Issues

#### Slow Development Server
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### Memory Issues
```bash
# Increase Node.js memory limit
export NODE_OPTIONS="--max-old-space-size=4096"
npm run dev
```

## 📱 Mobile Development Testing

### Testing on Mobile Devices

#### 1. Enable Network Access
```bash
# Start server with network access
npm run dev -- --host
```

#### 2. Find Your Computer's IP Address

**Windows:**
```bash
ipconfig | findstr IPv4
```

**macOS/Linux:**
```bash
ifconfig | grep inet
```

#### 3. Access from Mobile
Open your mobile browser and navigate to:
`http://YOUR_IP_ADDRESS:3001/nurburgring-analytics/`

### Browser Developer Tools
1. Open Chrome DevTools (F12)
2. Click the device toggle icon (📱)
3. Select different device presets to test responsiveness

## 🎯 IDE Setup Recommendations

### Visual Studio Code Extensions
Install these extensions for the best development experience:

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "ms-vscode.vscode-typescript-next",
    "ms-vscode.vscode-eslint",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-react-refactor",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

### VS Code Settings
Add to your `settings.json`:

```json
{
  "typescript.preferences.importModuleSpecifier": "relative",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript",
    "typescriptreact": "javascript"
  }
}
```

## 🔄 Keeping Your Fork Updated

If you forked the repository, keep it updated with the latest changes:

```bash
# Add upstream remote (one-time setup)
git remote add upstream https://github.com/ARK650/nurburgring-analytics.git

# Fetch latest changes
git fetch upstream

# Merge changes into your main branch
git checkout main
git merge upstream/main

# Push updates to your fork
git push origin main
```

## 📞 Getting Help

If you encounter issues not covered in this guide:

1. **Check existing issues**: [GitHub Issues](https://github.com/ARK650/nurburgring-analytics/issues)
2. **Create a new issue**: Include your operating system, Node.js version, and error messages
3. **Email support**: cark98@gmail.com for urgent issues

## ✅ Verification Checklist

After installation, verify everything is working:

- [ ] Development server starts without errors
- [ ] Website loads at `http://localhost:3001/nurburgring-analytics/`
- [ ] Navigation menu works
- [ ] Animations are smooth
- [ ] Car categories scroll horizontally
- [ ] Charts display correctly
- [ ] Mobile responsive design works
- [ ] No console errors in browser DevTools

---

**Congratulations!** 🎉 You now have Nürburgring Analytics running locally. Happy coding!