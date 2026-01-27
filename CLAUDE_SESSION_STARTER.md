# Claude Code Session Starter

Copy and paste this into a new Claude Code session when working on your portfolio:

---

## Context for New Session

I need help updating my Next.js portfolio website.

**Repository:** https://github.com/udirno/portfolio
**Local Path:** `/Users/udirno/Desktop/website/portfolio`

**Important:** Please read `/WORKFLOW.md` first - it contains the complete workflow, security guidelines, and project structure.

---

## My Preferences

- **Tone:** Casual "brain dump" style, not formal resume language
- **Buzzwords:** Avoid overusing "AI", "cutting-edge", etc.
- **Structure:** Problem → Solution → Impact for project descriptions
- **Security:** Never commit API keys, credentials, or sensitive data
- **Testing:** Always run `npm run lint` and `npm run build` before pushing

---

## Current Task

[Describe what you want to work on:]

**Example tasks:**
- Add a new project called [name]
- Update the About section with [details]
- Fix [specific issue]
- Add a new social link to Contact section
- Update SEO metadata

---

## Project Overview

This is a Next.js 16 portfolio with:
- 4 projects (MDX-based in `/content/projects/`)
- Static site generation
- Dark theme with red accents
- Easter egg: Click hero text for green theme
- Deployed on Vercel at [your-url]

**Key Files:**
- `/content/projects/*.mdx` - Project content (edit these)
- `/public/projects/*.png` - Project screenshots
- `/app/components/About.tsx` - About section
- `/app/components/Contact.tsx` - Contact section
- `/app/layout.tsx` - SEO metadata

---

## After Making Changes

1. Test locally: `npm run dev`
2. Check for errors: `npm run lint`
3. Build: `npm run build`
4. Commit and push: `git add -A && git commit -m "message" && git push`
5. Deploy: Auto-deploy via Vercel GitHub integration (or `vercel --prod`)

---
