# Contributing to Nürburgring Analytics

Thank you for your interest in contributing to Nürburgring Analytics! This document provides guidelines and instructions for contributing to the project.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- Git
- Code editor (VS Code recommended)
- Basic knowledge of React, TypeScript, and Tailwind CSS

### Development Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/nurburgring-analytics.git
   cd nurburgring-analytics
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## 📝 Code Style Guidelines

### TypeScript
- Use TypeScript for all new components
- Define proper interfaces for props and data structures
- Avoid `any` types - use proper typing
- Use meaningful variable and function names

### React Components
- Use functional components with hooks
- Keep components small and focused on single responsibility
- Use proper prop destructuring
- Include proper JSDoc comments for complex functions

### CSS & Styling
- Use Tailwind CSS utility classes
- Create custom CSS classes in `src/index.css` for reusable styles
- Follow mobile-first responsive design principles
- Use CSS variables for consistent theming

### File Structure
```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   └── [Feature]        # Feature-specific components
├── styles/              # Global styles
└── types/               # TypeScript type definitions
```

## 🎯 Types of Contributions

### 🐛 Bug Fixes
- Check existing issues before creating new ones
- Include steps to reproduce the bug
- Provide screenshots for UI-related bugs
- Test your fix thoroughly

### ✨ New Features
- Discuss major features in issues first
- Keep features focused and atomic
- Include proper documentation
- Add tests when applicable

### 📚 Documentation
- Improve README instructions
- Add code comments for complex logic
- Update API documentation
- Create tutorials or guides

### 🎨 UI/UX Improvements
- Follow the existing design system
- Maintain consistency with current styling
- Test on multiple screen sizes
- Consider accessibility guidelines

## 🔄 Pull Request Process

### Before Submitting
1. **Test your changes** thoroughly
2. **Check for TypeScript errors**: `npm run type-check`
3. **Build successfully**: `npm run build`
4. **Follow commit message conventions** (see below)
5. **Update documentation** if needed

### Pull Request Requirements
- Clear, descriptive title
- Detailed description of changes
- Reference related issues (`Fixes #123`)
- Include screenshots for UI changes
- Ensure all checks pass

### Commit Message Convention
Follow the conventional commit format:

```
type(scope): brief description

- feat: new feature
- fix: bug fix
- docs: documentation changes
- style: formatting, no code change
- refactor: code restructuring
- test: adding tests
- chore: maintenance tasks

Examples:
feat(cars): add electric vehicle category
fix(navigation): resolve mobile menu toggle issue
docs(readme): update installation instructions
```

## 🧪 Testing Guidelines

### Manual Testing Checklist
- [ ] Desktop responsiveness (1920x1080, 1366x768)
- [ ] Mobile responsiveness (375x667, 414x896)
- [ ] Tablet responsiveness (768x1024)
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)
- [ ] Navigation functionality
- [ ] Animation performance
- [ ] Loading states

### Code Quality
- Ensure no console errors in browser
- Check for accessibility improvements
- Validate TypeScript compilation
- Test component re-rendering performance

## 🎯 Specific Contribution Areas

### 🚗 Car Database
```typescript
// Adding new vehicles to categories
interface Vehicle {
  name: string;
  year: string;
  lapTime: string;
  power: string;
  price: string;
  highlights: string[];
  country: string;
  brand: string;
  image: string;
}
```

### 📊 Data Visualization
- Extend chart components with new visualization types
- Improve animation performance
- Add interactive features

### 🎨 UI Components
- Create reusable component patterns
- Improve accessibility (ARIA labels, keyboard navigation)
- Add loading states and error boundaries

### ⚡ Performance
- Optimize bundle size
- Improve loading times
- Enhance animation smoothness
- Implement code splitting

## 📋 Issue Templates

### Bug Report
```markdown
**Describe the Bug**
A clear description of what the bug is.

**To Reproduce**
Steps to reproduce the behavior:
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected Behavior**
What you expected to happen.

**Screenshots**
If applicable, add screenshots.

**Environment:**
- OS: [e.g. Windows, macOS, Linux]
- Browser: [e.g. Chrome, Safari]
- Version: [e.g. 22]
```

### Feature Request
```markdown
**Is your feature request related to a problem?**
A clear description of what the problem is.

**Describe the solution you'd like**
A clear description of what you want to happen.

**Additional context**
Add any other context or screenshots about the feature request.
```

## 🏆 Recognition

Contributors will be recognized in:
- README.md contributors section
- GitHub contributors graph
- Release notes for significant contributions

## 📞 Getting Help

### Communication Channels
- **GitHub Issues**: For bugs and feature requests
- **GitHub Discussions**: For questions and general discussion
- **Email**: cark98@gmail.com for sensitive issues

### Resources
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

## 📜 Code of Conduct

### Our Standards
- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other community members

### Unacceptable Behavior
- Harassment or discrimination
- Trolling or inflammatory comments
- Spam or off-topic discussions
- Sharing private information without permission

## 🔒 Security

If you discover a security vulnerability, please email cark98@gmail.com directly instead of creating a public issue.

---

Thank you for contributing to Nürburgring Analytics! Your efforts help make this project better for everyone. 🏁