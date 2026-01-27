# Portfolio Website Maintenance Workflow

**Version:** 1.0
**Last Updated:** January 27, 2026
**Repository:** https://github.com/udirno/portfolio

---

## Table of Contents

1. [Quick Start](#quick-start)
2. [Project Structure](#project-structure)
3. [Adding New Projects](#adding-new-projects)
4. [Updating Content](#updating-content)
5. [Testing Changes](#testing-changes)
6. [Deployment Process](#deployment-process)
7. [Security Guidelines](#security-guidelines)
8. [Working with Claude Code](#working-with-claude-code)

---

## Quick Start

### Prerequisites
- Node.js 18+ installed
- Git configured with GitHub access
- Repository cloned locally

### Common Commands
```bash
# Navigate to project
cd /Users/udirno/Desktop/website/portfolio

# Install dependencies (if needed)
npm install

# Start development server
npm run dev
# Visit http://localhost:3000

# Check for errors
npm run lint

# Build for production
npm run build

# Commit and push changes
git add -A
git commit -m "Your commit message"
git push
```

---

## Project Structure

```
portfolio/
├── app/
│   ├── components/          # React components
│   │   ├── About.tsx       # About section
│   │   ├── Contact.tsx     # Contact section with social links
│   │   ├── Hero.tsx        # Hero section with animations
│   │   ├── Navigation.tsx  # Top navigation
│   │   ├── ProjectCard.tsx # Individual project cards
│   │   ├── Projects.tsx    # Projects grid section
│   │   └── ThemeProvider.tsx
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main page
│   ├── globals.css         # Global styles
│   ├── error.tsx           # Error boundary
│   ├── not-found.tsx       # 404 page
│   └── loading.tsx         # Loading state
├── content/
│   └── projects/           # MDX project files (EDIT THESE!)
│       ├── gmail-agent.mdx
│       ├── lyriclens.mdx
│       ├── portfolio-website.mdx
│       └── argument-decomposer.mdx
├── public/
│   └── projects/           # Project screenshots (ADD IMAGES HERE!)
│       ├── gmail-agent.png
│       ├── lyriclens.png
│       ├── portfolio-website.png
│       └── argument-decomposer.png
├── lib/
│   └── mdx.ts             # MDX parsing utilities
└── package.json           # Dependencies
```

---

## Adding New Projects

### Step 1: Prepare Your Screenshot

1. Take a screenshot of your project (recommended: 1200x800px or similar)
2. Save it to `/public/projects/your-project-name.png`
3. Optimize if needed (keep under 1MB)

### Step 2: Create MDX File

Create a new file: `/content/projects/your-project-name.mdx`

```mdx
---
title: "Your Project Name"
description: "One-sentence description focusing on what it does and impact. Avoid buzzwords."
date: "2026-01"
tags: ["Python", "FastAPI", "TypeScript", "Next.js"]
github: "https://github.com/yourusername/repo"
blog: "https://medium.com/@yourusername/article"
image: "/projects/your-project-name.png"
---

## The Problem

Describe the specific problem you were solving. Keep it relatable.

## The Solution

Explain what you built and how it works.

### Key Features

- Feature 1 with brief explanation
- Feature 2 with brief explanation
- Feature 3 with brief explanation

### Technical Implementation

High-level overview of architecture and key technologies.

## The Impact

Quantifiable results or qualitative benefits. Make it concrete.

**One-line memorable summary.**
```

### Step 3: Test Locally

```bash
npm run dev
# Visit http://localhost:3000
# Check Projects section displays correctly
# Click project card to verify modal opens
# Test image zoom functionality
```

### Step 4: Commit and Deploy

```bash
git add content/projects/your-project-name.mdx
git add public/projects/your-project-name.png
git commit -m "Add [Project Name] to portfolio"
git push

# Then deploy (see Deployment Process section)
```

---

## Updating Content

### Updating About Section

**File:** `/app/components/About.tsx`

Edit the text within the component. Keep the casual "brain dump" tone.

```tsx
<p className="text-gray-300 leading-relaxed mb-6">
  Your updated text here...
</p>
```

### Updating Contact Information

**File:** `/app/components/Contact.tsx`

To add/remove social links, edit the `socialLinks` array:

```tsx
const socialLinks = [
  {
    name: 'Platform Name',
    icon: IconComponent,
    href: 'https://yourlink.com',
    color: 'hover:text-blue-500',
  },
  // ... more links
];
```

### Updating SEO Metadata

**File:** `/app/layout.tsx`

Update the `metadata` object:

```tsx
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your updated description...",
  // ... other fields
};
```

### Updating Project Content

**Files:** `/content/projects/*.mdx`

Edit MDX files directly. Changes will be reflected after rebuild.

**Important:**
- Keep descriptions concise (one sentence)
- Avoid buzzwords like "AI", "cutting-edge", etc.
- Focus on impact, not implementation details (in descriptions)
- Use Problem → Solution → Impact structure in body

---

## Testing Changes

### Local Testing Checklist

Before committing any changes:

```bash
# 1. Start dev server
npm run dev

# 2. Check these pages
# - Home page (http://localhost:3000)
# - Click all project cards
# - Test image zoom functionality
# - Check mobile responsiveness (browser DevTools)
# - Test dark mode toggle (if implemented)
# - Click hero text to verify green theme Easter egg

# 3. Check for errors
npm run lint

# 4. Build for production (catches build-time errors)
npm run build
```

### Browser Testing

Test in at least:
- Chrome/Edge (Chromium)
- Safari
- Firefox

### Mobile Testing

Use browser DevTools responsive mode or test on actual device:
- Scroll behavior
- Navigation menu
- Project cards layout
- Contact section buttons

---

## Deployment Process

### First-Time Deployment (Vercel)

```bash
# 1. Install Vercel CLI (if not already installed)
npm install -g vercel

# 2. Deploy
cd /Users/udirno/Desktop/website/portfolio
vercel

# Follow prompts:
# - Link to existing project or create new
# - Select "portfolio" directory
# - Use default settings

# 3. Deploy to production
vercel --prod
```

### Updating Deployed Site

After making changes and pushing to GitHub:

```bash
# Option A: Automatic (if Vercel GitHub integration is set up)
git push
# Vercel will auto-deploy on push to main branch

# Option B: Manual
vercel --prod
```

### Custom Domain Setup (udirno.com)

1. Go to Vercel Dashboard → Your Project → Settings → Domains
2. Add `udirno.com` and `www.udirno.com`
3. Update DNS records at your domain registrar (Vercel will provide instructions)
4. Wait for DNS propagation (5-60 minutes)

### Verification After Deployment

```bash
# Check deployed site
open https://udirno.com  # or your Vercel URL

# Test:
# - All pages load correctly
# - Images display
# - Links work (GitHub, Medium, social links)
# - No console errors (browser DevTools)
# - Mobile responsiveness
```

---

## Security Guidelines

### What's Safe to Include

✅ **Safe:**
- Public GitHub repository links
- Published Medium articles
- Public social media profiles (LinkedIn, Twitter)
- Professional email (already public)
- Location (city/region level - "San Francisco Bay Area")
- Project descriptions and code snippets
- Screenshots of your own projects

### What to NEVER Include

❌ **Dangerous:**
- API keys or tokens
- Database credentials
- Private repository access tokens
- Personal phone number
- Home address
- Authentication secrets
- Environment variables with sensitive data
- Private email addresses not meant for public use

### Current Security Status

✅ **This portfolio is secure:**
- No user input (no forms, no database)
- No API calls from client
- No authentication system
- No cookies or tracking
- No environment variables
- All external links use `rel="noopener noreferrer"`
- HTTPS enforced by Vercel
- No personal sensitive data

### Safe Development Practices

1. **Never commit `.env` files** - Already in `.gitignore`
2. **Review before pushing** - Use `git diff` before committing
3. **Keep dependencies updated** - Run `npm audit` occasionally
4. **Use public repos only** - For open source projects
5. **Sanitize screenshots** - Remove any sensitive info before adding to `/public/projects/`

### When Adding Features

If you plan to add:
- **Contact form:** Use serverless functions, validate input, add rate limiting
- **Analytics:** Use privacy-focused tools (Plausible, Fathom), not Google Analytics
- **Comments:** Use moderated third-party service (Disqus, Giscus)
- **CMS:** Use headless CMS with preview mode only

---

## Working with Claude Code

### Starting a New Chat Session

When opening a new Claude Code session to work on your portfolio, provide this context:

```
I need help updating my Next.js portfolio website.

Repository: https://github.com/udirno/portfolio
Location: /Users/udirno/Desktop/website/portfolio

Please read /WORKFLOW.md for the complete workflow.

[Then specify your task, e.g.:]
- "Add a new project called [name]"
- "Update the About section with [details]"
- "Fix [specific issue]"
```

### Efficient Commands for Claude

**Adding a new project:**
```
Add a new project to my portfolio:
- Name: [Project Name]
- Description: [One sentence]
- Tags: [Tech stack]
- GitHub: [URL]
- Blog: [URL or # if none]
- Screenshot: [Provide file path or attach image]

Follow the structure in /content/projects/ for reference.
```

**Updating existing content:**
```
Update [filename] by changing [specific detail].

Read the file first, then make the edit maintaining the existing style.
```

**Testing before deployment:**
```
Run the full test checklist:
1. npm run lint
2. npm run build
3. Verify no errors

Then commit and push if clean.
```

### What Claude Needs to Know

Share this document (`WORKFLOW.md`) at the start of any session. It contains:
- Project structure
- Content patterns
- Security guidelines
- Your preferences (casual tone, no buzzwords, Problem→Solution→Impact structure)

### Common Tasks

#### Task 1: Add New Project
```
1. Read WORKFLOW.md
2. Create /content/projects/[name].mdx
3. Copy screenshot to /public/projects/[name].png
4. Test locally
5. Commit and push
```

#### Task 2: Update Project Description
```
1. Read current /content/projects/[name].mdx
2. Edit description or body content
3. Maintain existing structure and tone
4. Test build
5. Commit and push
```

#### Task 3: Update About Section
```
1. Read /app/components/About.tsx
2. Edit text while maintaining casual "brain dump" tone
3. Test locally
4. Commit and push
```

#### Task 4: Add Social Link
```
1. Read /app/components/Contact.tsx
2. Add new object to socialLinks array
3. Import icon if needed
4. Test locally
5. Commit and push
```

---

## Troubleshooting

### Build Errors

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

### Git Issues

```bash
# Check status
git status

# See what changed
git diff

# Undo uncommitted changes
git checkout -- [filename]

# Undo last commit (keep changes)
git reset --soft HEAD~1
```

### Port Already in Use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

---

## Maintenance Schedule

### Weekly
- Check for new Medium articles to link
- Review portfolio for any outdated info

### Monthly
- Run `npm audit` to check for vulnerabilities
- Update dependencies: `npm update`
- Test site on different devices/browsers

### Per Project Completion
- Add new project within 1 week of completion
- Write accompanying Medium article if applicable
- Update resume with portfolio URL

---

## Changelog

Track your updates here:

### 2026-01-27
- Initial deployment with 4 projects (Gmail Agent, LyricLens, Portfolio Website, Argument Decomposer)
- Next.js 16.1.5, React 19, TypeScript
- SEO metadata optimized
- Security audit completed ✅

---

## Quick Reference

### File Locations
- **Projects:** `/content/projects/*.mdx`
- **Images:** `/public/projects/*.png`
- **About:** `/app/components/About.tsx`
- **Contact:** `/app/components/Contact.tsx`
- **SEO:** `/app/layout.tsx`

### Important Links
- **GitHub:** https://github.com/udirno/portfolio
- **Vercel Dashboard:** https://vercel.com/dashboard
- **Domain Management:** [Your domain registrar]

### Key Principles
1. **Content first** - Update MDX files for projects
2. **Test locally** - Always run dev server before pushing
3. **Security aware** - Never commit sensitive data
4. **Stay casual** - Maintain "brain dump" personality
5. **Show, don't tell** - Focus on impact, not buzzwords

---

**Questions?** Open an issue on GitHub or start a new Claude Code session with this workflow document.
