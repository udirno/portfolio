# Quick Start Guide

## Get Your Portfolio Running in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio.

### 3. Customize Your Content

#### Update Your Information
- **Hero Section**: Edit `app/components/Hero.tsx`
  - Change "UDIRNO CHAUDHURI" to your name
  - Update the subtitle to match your role

#### Add Your Social Links
Edit `app/components/Contact.tsx` and update these URLs:
```typescript
const socialLinks = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/your-profile/', // UPDATE THIS
  },
  {
    name: 'GitHub',
    href: 'https://github.com/yourusername', // UPDATE THIS
  },
  {
    name: 'LinkTree',
    href: 'https://linktr.ee/yourprofile', // UPDATE THIS
  },
  {
    name: 'Email',
    href: 'mailto:your.email@example.com', // UPDATE THIS
  },
];
```

#### Add/Edit Projects
1. Create MDX files in `content/projects/`
2. Use this template:

```mdx
---
title: "Your Project Title"
description: "Brief description of your project"
date: "2025-12"
tags: ["React", "TypeScript", "Your", "Tags"]
github: "https://github.com/yourusername/project"
blog: "https://yourblog.com/article"
website: "https://yourproject.com"
---

Detailed description of your project. This will appear when users click to expand the project card.
```

## Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

That's it! Your portfolio is now live.

## Common Customizations

### Change Colors
Edit `app/globals.css` - update the CSS variables:
```css
:root {
  --primary-red: #DC2626;    /* Change to your primary color */
  --secondary-red: #EF4444;  /* Change to your secondary color */
}
```

### Modify Typography
Edit `app/layout.tsx` to change the font from Inter to another Google Font.

### Add More Sections
Create new components in `app/components/` and import them in `app/page.tsx`.

## Need Help?

Check the full [README.md](README.md) for detailed documentation.
