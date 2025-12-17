# Portfolio Website - Udirno Chaudhuri

A modern, minimalistic portfolio website inspired by Apple's design language with a red and black color scheme. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Apple-inspired Design**: Clean, minimalistic interface with ample whitespace and elegant transitions
- **Red & Black Theme**: Custom color scheme with smooth gradients
- **Dark Mode**: Toggle between light and dark themes using next-themes
- **Smooth Animations**: Framer Motion animations including:
  - Fade-in effects on scroll
  - Magnetic hover effects on project cards
  - Smooth page transitions
  - Interactive scroll indicators
- **Responsive Design**: Mobile-first approach with responsive grids
- **MDX Content**: Project content managed through MDX files
- **SEO Optimized**: Comprehensive metadata and Open Graph tags

## Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Contact.tsx          # Contact section with social links
│   │   ├── Hero.tsx              # Hero section with animated gradient
│   │   ├── Navigation.tsx        # Sticky nav with dark mode toggle
│   │   ├── ProjectCard.tsx       # Project card with magnetic hover
│   │   ├── Projects.tsx          # Projects grid section
│   │   └── ThemeProvider.tsx     # Dark mode provider
│   ├── globals.css               # Global styles and Tailwind config
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main page
├── content/
│   └── projects/                 # MDX project files
│       ├── cognihacks.mdx
│       ├── gmail-agent.mdx
│       └── lyriclens.mdx
├── lib/
│   └── mdx.ts                    # MDX utility functions
└── public/                       # Static assets
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Update Personal Information

1. **Name and Title**: Edit [app/components/Hero.tsx](app/components/Hero.tsx) to update your name and subtitle.

2. **Social Links**: Update [app/components/Contact.tsx](app/components/Contact.tsx) with your actual social media links:
   - LinkedIn
   - GitHub
   - LinkTree
   - Email

3. **SEO Metadata**: Update [app/layout.tsx](app/layout.tsx) with your information.

### Add Projects

Create new MDX files in [content/projects/](content/projects/) with the following frontmatter:

```mdx
---
title: "Project Title"
description: "Brief description"
date: "YYYY-MM"
tags: ["Tag1", "Tag2"]
github: "https://github.com/..."
blog: "https://..."
website: "https://..."
---

Full project description here.
```

### Customize Theme

Edit [app/globals.css](app/globals.css) to modify:
- Color scheme (CSS variables)
- Typography
- Scrollbar styles
- Global styles

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Dark Mode**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Content**: [MDX](https://mdxjs.com/) with [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)
- **Icons**: [Lucide React](https://lucide.dev/)

## Deployment

### Deploy to Vercel

1. Push your code to GitHub

2. Visit [Vercel](https://vercel.com/new)

3. Import your repository

4. Vercel will automatically detect Next.js and configure the build settings

5. Click "Deploy"

### Deploy to Other Platforms

Build the project:

```bash
npm run build
```

The static files will be in the `.next` directory. Follow your hosting provider's instructions for deploying Next.js applications.

## Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

MIT License - feel free to use this template for your own portfolio.

## Credits

Designed and developed by Udirno Chaudhuri

---

Built with precision. Crafted with passion.
