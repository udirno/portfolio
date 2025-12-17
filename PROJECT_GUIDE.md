# Udirno.com Portfolio - Complete Project Guide

**Last Updated:** December 17, 2024
**Domain:** udirno.com (owned, not yet deployed)
**Status:** Design phase complete, ready for version control

---

## 📁 Project Structure

```
portfolio/
├── app/                          # Next.js App Router directory
│   ├── components/              # React components
│   │   ├── Hero.tsx            # Landing section with name & pyramids
│   │   ├── Navigation.tsx      # Top navigation bar (UC logo + links)
│   │   ├── Projects.tsx        # Projects grid section
│   │   ├── ProjectCard.tsx     # Individual project cards with 3D effects
│   │   ├── Contact.tsx         # Contact section with social links
│   │   └── ThemeProvider.tsx   # Dark theme wrapper
│   ├── globals.css             # Global styles & CSS variables
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Main page combining all sections
│   └── favicon.ico             # Site icon
│
├── content/                     # MDX content files
│   └── projects/               # Project markdown files
│       ├── lyriclens.mdx       # LyricLens project
│       └── gmail-agent.mdx     # Gmail Agent project
│
├── lib/                         # Utility functions
│   └── mdx.ts                  # MDX file parsing utilities
│
├── public/                      # Static assets
│   └── *.svg                   # Default Next.js icons
│
├── .git/                        # Git repository (already initialized)
├── .gitignore                  # Git ignore rules
├── package.json                # Dependencies & scripts
├── tsconfig.json               # TypeScript configuration
├── next.config.ts              # Next.js configuration
└── tailwind.config.ts          # Tailwind CSS configuration

```

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **Next.js** | 16.0.10 | React framework with App Router |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 4.x | Utility-first styling |
| **Framer Motion** | 12.23.26 | Animations & transitions |
| **React** | 19.2.1 | UI library |
| **MDX** | 5.0.0 (next-mdx-remote) | Markdown content with React |
| **gray-matter** | 4.0.3 | Parse MDX frontmatter |
| **lucide-react** | 0.561.0 | Icon library |

---

## 🎨 Design Features

### Current Implementation

1. **Hero Section** ([Hero.tsx](app/components/Hero.tsx))
   - Large "UDIRNO" text with gradient (white → red)
   - Hover effect: crossfades to Bengali "উদীর্ণ"
   - Corner-to-corner pyramid in background (very subtle)
   - Inverted pyramid above scroll button
   - Solar system orbital rings
   - Pulsing red radial gradient core
   - Scroll indicator button

2. **Navigation** ([Navigation.tsx](app/components/Navigation.tsx))
   - Fixed top bar with "UC" logo
   - Smooth scroll to Projects & Contact sections
   - Background blur on scroll
   - Hover animations on buttons

3. **Projects Section** ([Projects.tsx](app/components/Projects.tsx))
   - Centered flex layout for 2 project cards
   - 3D tilt effects on hover
   - Modal popup with full project details
   - Staggered fade-in animations

4. **Contact Section** ([Contact.tsx](app/components/Contact.tsx))
   - Social links: GitHub, LinkedIn, Email
   - Minimalist footer

### Color Scheme
- **Primary Red**: `#DC2626`
- **Secondary Red**: `#EF4444`
- **Background**: Black (`#000000`) to Gray-900
- **Text**: White with red accents

---

## 🚀 Next Steps & Recommendations

### Immediate: Version Control with GitHub

**Why GitHub?**
- ✅ Industry standard for web projects
- ✅ Free hosting for private/public repos
- ✅ Integrates seamlessly with deployment platforms (Vercel, Netlify)
- ✅ Provides backup & version history
- ✅ Enables collaboration and code review
- ✅ Required for most deployment workflows

**Current Git Status:**
- Git is already initialized (`.git/` folder exists)
- No remote repository configured yet
- Files are modified but not committed

### Step-by-Step: Push to GitHub

#### 1. Create GitHub Repository
```bash
# Go to github.com and:
# 1. Click "New Repository"
# 2. Name it "portfolio" or "udirno-portfolio"
# 3. Make it PRIVATE (you're not ready to publish yet)
# 4. DON'T initialize with README (you already have one)
# 5. Click "Create repository"
```

#### 2. Commit Your Current Work
```bash
cd /Users/udirno/Desktop/website/portfolio

# Stage all changes
git add .

# Create your first commit
git commit -m "Initial portfolio design with pyramids and Bengali name hover effect"
```

#### 3. Connect to GitHub & Push
```bash
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### 4. Verify
- Go to your GitHub repository URL
- You should see all your files there
- Branch should show "main" with your commit

---

## 🌐 Deployment Options for udirno.com

When you're ready to publish, here are the best options:

### Option 1: Vercel (Recommended for Next.js)

**Why Vercel?**
- Created by the Next.js team
- Zero-config deployment for Next.js
- Free tier includes custom domains
- Automatic HTTPS
- Global CDN
- Preview deployments for every git push

**Steps:**
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your `portfolio` repository
4. Vercel auto-detects Next.js settings
5. Click "Deploy"
6. Add custom domain `udirno.com` in project settings
7. Update DNS records at your domain registrar:
   - Add A record: `76.76.21.21`
   - Add CNAME record: `cname.vercel-dns.com`

**Cost:** Free for personal projects

---

### Option 2: Netlify

**Why Netlify?**
- Simple deployment process
- Great for static sites
- Free tier with custom domains
- Form handling & serverless functions

**Steps:**
1. Go to [netlify.com](https://netlify.com)
2. "New site from Git" → Connect GitHub
3. Select your repository
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Deploy
7. Add custom domain in site settings

**Cost:** Free for personal projects

---

### Option 3: GitHub Pages + Cloudflare

**Why This?**
- Completely free
- Full control over DNS
- Cloudflare provides CDN & HTTPS

**Limitation:** GitHub Pages is best for static sites. Next.js requires a build process, so you'd need to export as static HTML.

**Steps:**
1. Modify `next.config.ts` to add:
   ```typescript
   output: 'export'
   ```
2. Build: `npm run build`
3. Push `out/` directory to `gh-pages` branch
4. Configure GitHub Pages to serve from that branch
5. Point `udirno.com` DNS to GitHub Pages IP
6. Use Cloudflare for SSL

---

## 📋 Current Development Workflow

### Running Locally
```bash
# Navigate to project
cd /Users/udirno/Desktop/website/portfolio

# Install dependencies (if needed)
npm install

# Start development server
npm run dev

# Open browser to http://localhost:3000
```

### Making Changes
```bash
# 1. Edit files in VS Code or your editor
# 2. Save changes (dev server auto-reloads)
# 3. Test in browser
# 4. Commit changes:
git add .
git commit -m "Description of what you changed"
git push
```

### Building for Production
```bash
# Test production build locally
npm run build
npm start

# This runs the optimized version
# Open http://localhost:3000 to verify
```

---

## 🔑 Key Files Explained

### `app/page.tsx`
The main page that combines all sections. Fetches project data from MDX files and renders Hero → Projects → Contact.

### `app/layout.tsx`
Root layout wrapper. Sets page title, description (for SEO), and wraps everything in ThemeProvider.

### `app/globals.css`
Global CSS variables for colors, custom scrollbar styling, and smooth scroll behavior.

### `lib/mdx.ts`
Utility functions to read `.mdx` files from `content/projects/`, parse frontmatter (title, description, tags), and return project data.

### `content/projects/*.mdx`
Project files with frontmatter metadata and markdown content. Easy to add new projects by creating new `.mdx` files.

### `.gitignore`
Tells git to ignore:
- `node_modules/` (dependencies, don't commit these)
- `.next/` (build files)
- `.env*.local` (environment secrets)

---

## 🎯 Recommended Next Steps (Priority Order)

### Phase 1: Backup & Version Control (Do This Now)
1. ✅ Push to GitHub (see instructions above)
2. ✅ Create a private repository
3. ✅ Make initial commit with current state

### Phase 2: Content Enhancement (Before Publishing)
1. Add real project images to `public/projects/`
2. Update MDX files with project screenshots
3. Add more projects (3-5 total recommended)
4. Write an "About Me" section
5. Add resume/CV download link
6. Create a blog section (optional)

### Phase 3: SEO & Metadata
1. Add Open Graph meta tags for social sharing
2. Create `robots.txt` and `sitemap.xml`
3. Add Google Analytics (optional)
4. Optimize images with Next.js `<Image>` component
5. Add descriptive alt text to all images

### Phase 4: Testing & Polish
1. Test on mobile devices (responsive design)
2. Test in different browsers (Chrome, Safari, Firefox)
3. Check accessibility (keyboard navigation, screen readers)
4. Test page load speed with Lighthouse
5. Fix any console errors or warnings

### Phase 5: Deploy to udirno.com
1. Choose deployment platform (Vercel recommended)
2. Deploy to staging URL first
3. Test thoroughly
4. Configure custom domain
5. Update DNS records
6. Verify HTTPS is working
7. Test final live site

---

## 💡 Tips for Future Development

### Adding a New Project
1. Create new file: `content/projects/project-name.mdx`
2. Add frontmatter:
   ```markdown
   ---
   title: "Project Name"
   description: "Brief description"
   tags: ["Tech1", "Tech2"]
   date: "2024-12-17"
   ---
   Full project description here...
   ```
3. File automatically appears on site (restart dev server if needed)

### Changing Colors
Edit `app/globals.css`:
```css
:root {
  --primary-red: #DC2626;     /* Change this */
  --secondary-red: #EF4444;   /* And this */
}
```

### Modifying Animations
All animations use Framer Motion. Find the component in `app/components/` and adjust:
- `transition={{ duration: 0.6 }}` - Speed
- `animate={{ opacity: 1 }}` - End state
- `initial={{ opacity: 0 }}` - Start state

---

## 🆘 Troubleshooting

### "Module not found" error
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Changes not showing
```bash
# Hard refresh browser: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)
# Or restart dev server:
# Press Ctrl+C to stop, then:
npm run dev
```

### Git push rejected
```bash
# Pull latest changes first
git pull origin main
# Then push again
git push
```

### Build fails
```bash
# Check for TypeScript errors
npm run build

# Fix any errors shown in terminal
# Common issues: missing imports, type errors
```

---

## 📞 Domain Configuration (When Ready)

### Where did you buy udirno.com?
You'll need to update DNS records at your domain registrar (GoDaddy, Namecheap, Google Domains, etc.)

### DNS Records for Vercel:
```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

### DNS Records for Netlify:
```
Type    Name    Value
A       @       75.2.60.5
CNAME   www     [your-site].netlify.app
```

**Note:** DNS changes can take 24-48 hours to propagate globally.

---

## 📝 Starting a Fresh Session

When you come back to this project later, here's what to tell Claude (or any AI assistant):

```
I'm working on a Next.js 14 portfolio website for udirno.com.
The project is located at /Users/udirno/Desktop/website/portfolio

Current design features:
- Hero section with "UDIRNO" text that crossfades to Bengali "উদীর্ণ" on hover
- Large corner-to-corner pyramid background for perspective
- Inverted pyramid above scroll button
- Solar system orbital rings and pulsing red gradients
- Projects section with 2 MDX project cards (LyricLens, Gmail Agent)
- Red/black color scheme inspired by Apple's minimalism
- All code uses TypeScript, Tailwind CSS v4, and Framer Motion

Tech stack: Next.js 16.0.10, React 19, TypeScript 5, Tailwind 4, Framer Motion 12

The git repository is initialized but [not yet pushed to GitHub / already on GitHub at github.com/YOUR_USERNAME/portfolio].

I want to [describe what you want to do next].
```

---

## ✅ Pre-Deployment Checklist

Before making the site live on udirno.com:

- [ ] All projects have real content (not placeholder text)
- [ ] Project images are added and optimized
- [ ] About section written
- [ ] Contact info is correct
- [ ] Tested on mobile (iPhone, Android)
- [ ] Tested on tablets (iPad)
- [ ] Tested on desktop (Mac, Windows)
- [ ] Tested in Chrome, Safari, Firefox
- [ ] No console errors
- [ ] Lighthouse score > 90
- [ ] SEO meta tags added
- [ ] Open Graph images for social sharing
- [ ] Favicon added
- [ ] 404 page created
- [ ] Privacy policy (if collecting analytics)
- [ ] Code pushed to GitHub
- [ ] Production build tested locally (`npm run build && npm start`)

---

## 🎓 Learning Resources

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js App Router Tutorial](https://nextjs.org/learn)

### Tailwind CSS
- [Tailwind Documentation](https://tailwindcss.com/docs)
- [Tailwind v4 Migration](https://tailwindcss.com/docs/v4-beta)

### Framer Motion
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Animation Examples](https://www.framer.com/motion/examples/)

### Deployment
- [Vercel Deployment Guide](https://vercel.com/docs)
- [Custom Domain Setup](https://vercel.com/docs/concepts/projects/domains)

---

## 📊 Project Status

**Design Phase:** ✅ Complete
**Version Control:** ⚠️ Ready to push to GitHub
**Content:** 🟡 In progress (2 projects, need more)
**Testing:** ⏳ Not started
**Deployment:** ⏳ Not started
**Live on udirno.com:** ❌ Not yet

---

**Questions or issues?** Refer back to this guide or start a new session with the context above!
