# Portfolio Website - Udirno Chaudhuri

A minimal, text-first personal research notebook showcasing projects and travels. Built with Next.js 16, TypeScript, and Tailwind CSS.

**Live Site:** [udirno.com](https://udirno.com)

---

## Design Philosophy

This site is intentionally **minimal and calm**—a research notebook, not a flashy portfolio. Key principles:

- **Text-first**: No decorative elements, no heavy animations
- **Readable**: Max-width 768px, generous line-height, left-aligned text
- **Fast**: Instant page loads, no animation delays
- **Human feel**: Raw dates, monospace timestamps, intentional asymmetry
- **May feel unfinished**: This is acceptable and intentional

---

## Features

- **Blog Posts**: Text-first project entries grouped by year, linking to Medium articles
- **Theme Toggle**: Manual dark/light mode switching (green accent in dark, red in light)
- **Travel Timeline**: Visual ASCII timeline showing recent international travels
- **Bengali Name**: Hover over "Udirno" to see উদীর্ণ in Bengali
- **Responsive Design**: Adapts smoothly from mobile to desktop
- **MDX Content**: Blog posts managed through MDX files

---

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Dark Mode**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Content**: [MDX](https://mdxjs.com/) with [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote)
- **Icons**: [Lucide React](https://lucide.dev/)

**Deliberately excluded:** No animation libraries (previously used Framer Motion)

---

## Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Header.tsx           # Name with Bengali hover
│   │   ├── PostFeed.tsx         # Blog posts grouped by year
│   │   ├── Journey.tsx          # Travel timeline visualization
│   │   ├── ThemeToggle.tsx      # Dark/light mode toggle button
│   │   ├── Footer.tsx           # Social links (GitHub, LinkedIn, Linktree, Email)
│   │   ├── ThemeProvider.tsx    # Theme context provider
│   │   └── Timeline.tsx         # (Unused) Writing log concept
│   ├── globals.css              # Minimal CSS (53 lines, down from 140)
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Main page structure
│   ├── error.tsx                # Error boundary
│   ├── not-found.tsx            # 404 page
│   └── loading.tsx              # Loading state
├── content/
│   └── posts/                   # MDX blog post files
│       ├── argument-decomposer.mdx
│       ├── gmail-agent.mdx
│       ├── lyriclens.mdx
│       └── portfolio-website.mdx
├── lib/
│   └── mdx.ts                   # MDX parsing utilities
└── public/                      # Static assets (favicon, images)
```

---

## Hosting & Deployment Setup

### **Domain**: Squarespace
- Domain name: `udirno.com`
- Purchased and managed through Squarespace
- DNS configured to point to Vercel

### **Hosting**: Vercel
- Repository: [github.com/udirno/portfolio](https://github.com/udirno/portfolio)
- **Auto-deployment enabled**: Pushes to `main` branch automatically deploy to production
- Build command: `npm run build`
- Output directory: `.next`

### **How Deployment Works**
1. You push code to GitHub (`git push origin main`)
2. Vercel detects the push via webhook
3. Vercel automatically builds and deploys
4. Live site updates at `udirno.com` within ~2 minutes

**Check deployment status:** [vercel.com/dashboard](https://vercel.com/dashboard)

---

## Development Workflow

### **1. Set Up Locally**

```bash
# Clone the repository
git clone https://github.com/udirno/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

---

### **2. Make Changes**

Edit files in your code editor (VS Code, Cursor, etc.). Common tasks:

#### **Add a New Blog Post**

1. Create a new MDX file in `content/posts/`:
   ```mdx
   ---
   title: "Your Post Title"
   description: "Brief description of the post"
   date: "2026-02-15"
   tags: ["Tag1", "Tag2", "Tag3"]
   excerpt: "Short summary for the post list"
   mediumUrl: "https://medium.com/@udirno/your-article-slug"
   ---

   Full post content here...
   ```

2. The post will automatically appear on the homepage grouped by year

#### **Update Travel Timeline**

Edit `app/components/Journey.tsx` and add new entries to the positioning (requires understanding of the layout).

**Simpler approach:** Ask an AI agent or developer to add the location with proper spacing.

#### **Change Theme Colors**

Edit `app/globals.css`:
- Light mode accent: `--accent: #DC2626` (red)
- Dark mode accent: `--accent: #10b981` (emerald green)

---

### **3. Test Locally**

```bash
# Run development server
npm run dev

# Build production version to test
npm run build
npm start
```

Test both light and dark modes. Resize browser window to test responsiveness.

---

### **4. Commit and Push to GitHub**

```bash
# Stage all changes
git add -A

# Commit with descriptive message
git commit -m "Add new blog post about [topic]"

# Push to GitHub
git push origin main
```

---

### **5. Automatic Deployment**

**Vercel automatically deploys your changes.** No manual action needed!

1. Within ~30 seconds of pushing, Vercel starts building
2. Build takes ~1-2 minutes
3. Site automatically updates at `udirno.com`

**Monitor deployment:**
- Check [vercel.com/dashboard](https://vercel.com/dashboard)
- Look for build logs and status
- If build fails, you'll get an email notification

---

## Common Maintenance Tasks

### **Update Footer Links**

Edit `app/components/Footer.tsx` to change GitHub, LinkedIn, Linktree, or Email URLs.

### **Change Default Theme**

Edit `app/components/ThemeProvider.tsx`:
```tsx
<NextThemesProvider
  attribute="class"
  defaultTheme="dark"  // Change to "light" for light mode default
  enableSystem={false}
  storageKey="portfolio-theme"
>
```

### **Add New Social Link**

Add to `app/components/Footer.tsx`:
```tsx
<a
  href="https://yourlink.com"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-emerald-500 transition-colors"
>
  Platform Name
</a>
```

### **Update SEO Metadata**

Edit `app/layout.tsx` to change the site title, description, and Open Graph tags.

---

## Build Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Build for production (checks for errors)
npm start        # Run production build locally
npm run lint     # Run ESLint to check code quality
```

---

## Troubleshooting

### **Deployment Failed on Vercel**
1. Check [Vercel dashboard](https://vercel.com/dashboard) for error logs
2. Run `npm run build` locally to reproduce the error
3. Fix the error and push again

### **Theme Toggle Not Working**
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Clear localStorage: Open browser console (F12) and run `localStorage.clear()`

### **Site Not Updating After Push**
- Check Vercel dashboard to confirm deployment succeeded
- Wait 2-3 minutes for CDN cache to clear
- Try visiting `udirno.com` in incognito/private mode

### **MDX Post Not Showing**
- Check frontmatter format is correct
- Ensure `date` is in `YYYY-MM-DD` format
- Verify file is in `content/posts/` directory
- Check for `draft: true` in frontmatter (will hide post)

---

## For Collaborators / AI Agents

### **Key Files to Modify**

| Task | File(s) to Edit |
|------|-----------------|
| Add blog post | `content/posts/*.mdx` |
| Update footer links | `app/components/Footer.tsx` |
| Change theme colors | `app/globals.css` |
| Update travel timeline | `app/components/Journey.tsx` |
| Modify header | `app/components/Header.tsx` |
| Change metadata/SEO | `app/layout.tsx` |

### **Design Constraints**

- **Keep it minimal**: Don't add decorative elements
- **Text-first**: Prioritize readability over visual flair
- **No animations**: Simple CSS transitions only
- **Left-aligned**: Don't center-align body text
- **Max-width 768px**: Keep content readable

### **Testing Checklist**

Before pushing:
- [ ] Site builds without errors (`npm run build`)
- [ ] Theme toggle switches colors properly
- [ ] Responsive design works (resize browser window)
- [ ] All links work (Medium, GitHub, LinkedIn, Linktree, Email)
- [ ] Blog posts display correctly with proper dates

---

## Architecture Decisions

### **Why No Animations?**
Framer Motion was removed to achieve instant page loads and a calm, focused reading experience. Simple CSS transitions are used sparingly.

### **Why Text-First?**
The goal is a research notebook aesthetic—legible, fast, and timeless. Visual complexity was intentionally removed.

### **Why Inline Styles for Theme?**
Some components use inline styles (`style={{ color }}`) because Tailwind's `dark:` variant had specificity issues with certain elements.

### **Why ASCII Timeline?**
The travel timeline uses ASCII art for a technical, minimal aesthetic that fits the notebook theme.

---

## License

MIT License - feel free to use this template for your own site.

---

## Credits

**Designed & Developed by:** Udirno Chaudhuri
**Built with:** Next.js, TypeScript, Tailwind CSS
**Assisted by:** Claude Sonnet 4.5

---

**Questions?** Open an issue on [GitHub](https://github.com/udirno/portfolio/issues) or email hello@udirno.com
