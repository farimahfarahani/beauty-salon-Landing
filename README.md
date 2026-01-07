# Beautiful Parlors - Landing Page

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)

A modern, elegant, and fully responsive landing page for a beauty salon booking platform. Built with cutting-edge technologies to deliver an exceptional user experience.

[Live Demo](#) • [Documentation](#documentation) • [Report Bug](#) • [Request Feature](#)

</div>

---

## ✨ Features

- 🎨 **Modern Design** - Clean, elegant, and professional UI/UX
- 📱 **Fully Responsive** - Perfect experience on all devices (mobile, tablet, desktop)
- ⚡ **High Performance** - Optimized with Vite and lazy loading
- 🎭 **Smooth Animations** - Beautiful transitions powered by Framer Motion
- 🎯 **SEO Optimized** - Semantic HTML and proper meta tags
- ♿ **Accessible** - WCAG compliant with proper ARIA labels
- 🌙 **Modern Stack** - Built with React 18, TypeScript, and Tailwind CSS

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.0 or higher
- **npm**, **yarn**, or **pnpm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/beautiful-parlors-landing.git
   cd beautiful-parlors-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📦 Project Structure

```
beautiful-parlors-landing/
├── public/                 # Static assets
│   ├── favicon.ico
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── landing/       # Landing page components
│   │   │   ├── Landing.tsx
│   │   │   ├── Navbar.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── CTASection.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── UserNotRegisteredError.tsx
│   │   │   ├── types.ts
│   │   │   └── index.ts
│   │   └── ui/            # Reusable UI components
│   │       └── button.tsx
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # Application entry point
│   ├── index.css          # Global styles
│   └── vite-env.d.ts      # Vite type definitions
├── index.html             # HTML template
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── tsconfig.json          # TypeScript configuration
├── tsconfig.node.json     # TypeScript node configuration
├── package.json           # Project dependencies
└── README.md             # Project documentation
```

## 🛠️ Technologies

### Core
- **[React 18](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vitejs.dev/)** - Build tool and dev server

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library

### Development Tools
- **[ESLint](https://eslint.org/)** - Code linting
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://github.com/postcss/autoprefixer)** - CSS vendor prefixes

## 📝 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server on `http://localhost:5173` |
| `npm run build` | Build production-ready bundle in `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm run type-check` | Run TypeScript type checking |

## 🎨 Components

### Landing Page Sections

- **Navbar** - Responsive navigation with mobile menu
- **HeroSection** - Eye-catching hero with CTA buttons
- **FeaturesSection** - Feature showcase for customers and businesses
- **HowItWorks** - Step-by-step process explanation
- **TestimonialsSection** - Customer reviews and testimonials
- **CTASection** - Call-to-action section
- **Footer** - Footer with links and contact information

### UI Components

- **Button** - Reusable button component with variants

## 🔧 Configuration

### Tailwind CSS

Customize colors, fonts, and other design tokens in `tailwind.config.js`:

```javascript
export default {
  theme: {
    extend: {
      fontFamily: {
        serif: ['Georgia', 'serif'],
      },
    },
  },
}
```

### Vite

Configure build settings in `vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/beautiful-parlors-landing)

1. Push your code to GitHub
2. Import your repository on Vercel
3. Vercel will automatically detect Vite and configure the build

### Deploy to Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

### Other Platforms

The `dist` folder can be deployed to any static hosting service:
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Cloudflare Pages

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add some amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Code Style

- Follow ESLint rules
- Use TypeScript for type safety
- Write meaningful commit messages
- Add comments for complex logic

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - [@yourusername](https://github.com/yourusername)

## 🙏 Acknowledgments

- [Unsplash](https://unsplash.com/) for beautiful images
- [Tailwind CSS](https://tailwindcss.com/) for the amazing utility framework
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for the icon set

## 📞 Support

For support, email support@beautifulparlors.com or open an issue in the repository.

## 🔗 Links

- [Documentation](#)
- [API Reference](#)
- [Changelog](#)
- [Roadmap](#)

---

<div align="center">

Made with ❤️ by [Your Name](https://github.com/yourusername)

⭐ Star this repo if you find it helpful!

</div>
