# Portfolio Website - Development Continuation Prompt

**Use this prompt when starting a new Claude session to continue development**

---

## Project Context

I'm developing a professional portfolio website for **udirno.com** using Next.js 14, TypeScript, Tailwind CSS v4, and Framer Motion. The project is currently in the design phase and ready for professional-grade enhancements before deployment.

**Repository:** https://github.com/udirno/portfolio
**Local Path:** `/Users/udirno/Desktop/website/portfolio`
**Current Status:** Design foundation complete, needs professional polish and content enhancement

---

## Design Vision & Aesthetic

**Core Concept:** Minimalist, Apple-inspired design with a red/black color scheme and geometric pyramid theme

**Key Design Elements:**
1. **Hero Section:**
   - Large "UDIRNO" text with white-to-red gradient
   - Interactive hover: Crossfades to Bengali "উদীর্ণ" (my name in Bengali)
   - Corner-to-corner pyramid in background for perspective (very subtle, opacity-8)
   - Inverted pyramid pointing to scroll button
   - Solar system orbital rings with pulsing red radial gradients
   - Smooth scroll indicator at bottom

2. **Color Palette:**
   - Primary Red: `#DC2626`
   - Secondary Red: `#EF4444`
   - Background: Black (`#000000`) to Gray-900
   - Text: White with strategic red accents

3. **Geometric Theme:**
   - Pyramids create perspective and guide user flow
   - Straight edges and corners are celebrated
   - 3D depth effects without being overwhelming
   - Minimalistic but impressive

4. **Typography & Spacing:**
   - Font: System fonts (Apple-style: -apple-system, BlinkMacSystemFont)
   - Name: font-semibold (not bold - too blocky)
   - Ample whitespace, never cramped
   - Responsive sizing (text-5xl to text-9xl)

---

## Current Tech Stack

```json
{
  "framework": "Next.js 16.0.10 (App Router)",
  "language": "TypeScript 5.x",
  "styling": "Tailwind CSS 4.x",
  "animations": "Framer Motion 12.23.26",
  "content": "MDX with next-mdx-remote 5.0.0",
  "icons": "lucide-react 0.561.0"
}
```

---

## Project Structure

```
portfolio/
├── app/
│   ├── components/
│   │   ├── Hero.tsx              # Landing with pyramid & Bengali crossfade
│   │   ├── Navigation.tsx        # Fixed nav (UC logo + Projects/Contact)
│   │   ├── Projects.tsx          # Grid of project cards
│   │   ├── ProjectCard.tsx       # Individual cards with 3D tilt
│   │   ├── Contact.tsx           # Social links section
│   │   └── ThemeProvider.tsx     # Dark theme wrapper
│   ├── globals.css               # CSS variables & custom styles
│   ├── layout.tsx                # Root layout with metadata
│   └── page.tsx                  # Main page (Hero → Projects → Contact)
│
├── content/projects/             # MDX project files
│   ├── lyriclens.mdx            # Song search with RAG
│   ├── gmail-agent.mdx          # Promo code extraction
│   └── portfolio-website.mdx    # This website (meta project)
│
├── lib/
│   └── mdx.ts                   # MDX parsing utilities
│
├── PROJECT_GUIDE.md             # Complete reference guide
└── DEVELOPMENT_PROMPT.md        # This file
```

---

## What Works Well (Don't Change)

✅ **Hero pyramid design** - Subtle, corner-to-corner, creates perspective
✅ **Bengali name hover effect** - Smooth crossfade, proper diacritics padding
✅ **Three project cards** - Centered flex layout
✅ **Color scheme** - Red/black minimalism
✅ **Smooth scroll** - Navigation buttons work perfectly
✅ **Git setup** - Already pushed to GitHub
✅ **MDX system** - Easy to add projects

---

## Areas Needing Improvement

### Critical (Before Deployment)
1. **Professional Content:**
   - Projects need real descriptions (currently placeholder-ish)
   - Add project screenshots/images
   - Write compelling "why this matters" narratives
   - Add impact metrics (users, performance gains, etc.)

2. **Missing Sections:**
   - About Me section (who I am, background, skills)
   - Resume/CV download option
   - More robust Contact form or mailto links
   - Footer with copyright/links

3. **SEO & Metadata:**
   - Open Graph tags for social sharing
   - Proper meta descriptions
   - Favicon (currently default Next.js)
   - sitemap.xml and robots.txt

4. **Responsive Design Testing:**
   - Verify mobile experience (iPhone, Android)
   - Test tablet layouts (iPad)
   - Ensure pyramid doesn't break on small screens
   - Test Bengali text on different devices

### Nice-to-Have (Polish)
5. **Performance:**
   - Image optimization with Next.js `<Image>`
   - Lazy loading for below-fold content
   - Lighthouse score > 90

6. **Accessibility:**
   - Keyboard navigation testing
   - Screen reader compatibility
   - ARIA labels where needed
   - Focus states on interactive elements

7. **Enhanced Interactions:**
   - Cursor follow effects (subtle)
   - Project card hover reveals
   - Loading states/skeleton screens
   - Smooth page transitions

8. **Content Additions:**
   - Skills/technologies section
   - Blog or writing samples (optional)
   - Testimonials or recommendations (optional)

---

## Design Principles to Follow

**Do:**
- Keep it minimalistic - less is more
- Use red sparingly for emphasis
- Maintain ample whitespace
- Ensure all text is readable (high contrast)
- Use smooth, subtle animations (not jarring)
- Keep pyramid theme consistent but subtle
- Test on actual devices, not just browser resize

**Don't:**
- Add features I didn't request
- Over-engineer solutions
- Make the design "busy" or cluttered
- Use emojis (unless explicitly requested)
- Change the core pyramid/Bengali hover design
- Add dark mode toggle (removed intentionally)
- Make changes that break the minimalist aesthetic

---

## Development Workflow

**When making changes:**
1. Read existing files first (never modify code you haven't read)
2. Ask clarifying questions if approach is ambiguous
3. Use TodoWrite tool to track multi-step tasks
4. Test changes in dev server before committing
5. Commit with clear, descriptive messages
6. Push to GitHub after each logical unit of work

**Git commands:**
```bash
cd /Users/udirno/Desktop/website/portfolio
git add .
git commit -m "Clear description of changes"
git push
```

**Dev server:**
```bash
npm run dev  # Opens on localhost:3000
```

---

## Specific Requests for Improvement

I want Claude to help me:

### Phase 1: Content Enhancement (Priority)
- [ ] Write professional "About Me" section
  - Include my background (customize based on what I share)
  - Highlight skills: AI, Python, Full-stack development
  - Keep it concise (2-3 paragraphs max)
  - Match the minimalist tone

- [ ] Enhance project descriptions
  - Add "Problem → Solution → Impact" narrative structure
  - Include specific metrics where possible
  - Make them compelling but not salesy
  - Keep technical but accessible

- [ ] Add project images
  - Create placeholders or guide me on image specs
  - Optimize for web performance
  - Ensure they look good with the red/black theme

### Phase 2: Missing Sections
- [ ] Create proper footer
  - Copyright notice
  - Quick links (Projects, Contact)
  - Social links
  - "Built with..." attribution

- [ ] Add Skills/Technologies section
  - Visual representation (not just a list)
  - Categorize: Languages, Frameworks, Tools, AI/ML
  - Keep it animated and engaging
  - Match pyramid theme if possible

- [ ] Improve Contact section
  - Add email with copy-to-clipboard
  - Link to resume/CV
  - Make social icons larger/more prominent
  - Add subtle animation on hover

### Phase 3: Technical Excellence
- [ ] SEO optimization
  - Add comprehensive meta tags
  - Create proper Open Graph images
  - Generate sitemap.xml
  - Add structured data (JSON-LD)

- [ ] Performance optimization
  - Implement Next.js Image component
  - Add loading states
  - Optimize animations for 60fps
  - Reduce bundle size where possible

- [ ] Accessibility audit
  - Add ARIA labels
  - Test keyboard navigation
  - Ensure color contrast ratios
  - Add skip-to-content link

### Phase 4: Pre-Deployment
- [ ] Cross-browser testing guidance
  - Chrome, Safari, Firefox
  - Check for browser-specific issues

- [ ] Mobile responsiveness review
  - Test on real devices if possible
  - Ensure pyramid scales correctly
  - Check Bengali text rendering

- [ ] Production build testing
  - Run `npm run build`
  - Test production build locally
  - Fix any build errors/warnings

- [ ] Deployment checklist
  - Vercel setup guide
  - DNS configuration for udirno.com
  - HTTPS verification
  - Final pre-launch review

---

## Sample Usage Prompt

**Copy-paste this to start a new Claude session:**

```
I'm continuing development on my Next.js portfolio website for udirno.com.

Project location: /Users/udirno/Desktop/website/portfolio
GitHub: https://github.com/udirno/portfolio

Please read DEVELOPMENT_PROMPT.md for complete context on:
- Design vision (minimalist, Apple-inspired, red/black, pyramid theme)
- Current implementation (Hero with Bengali crossfade, 3 projects)
- Tech stack (Next.js 16, TypeScript, Tailwind 4, Framer Motion)
- What works well (don't change)
- Areas needing improvement

I want to work on: [SPECIFY WHICH PHASE OR TASK FROM THE PROMPT]

Please:
1. Confirm you understand the design aesthetic
2. Ask any clarifying questions before implementing
3. Use TodoWrite to track tasks
4. Maintain the minimalist, professional tone
5. Test changes before committing
6. Push to GitHub when done
```

---

## Important Notes

**Design Philosophy:**
This website should feel like it was crafted with care, not generated. The pyramid theme creates subtle perspective and guides users naturally. The Bengali crossfade adds personal depth without being gimmicky. Everything should feel intentional and professional.

**Technical Constraints:**
- No dark mode toggle (removed intentionally)
- No third-party analytics yet (will add later)
- Keep dependencies minimal
- Optimize for performance from the start

**Content Tone:**
- Professional but approachable
- Technical but not jargon-heavy
- Confident but not arrogant
- Show impact, not just features

**Success Criteria:**
The website is ready to deploy when:
1. All content is professional and compelling
2. Lighthouse score > 90 on all metrics
3. Works flawlessly on mobile, tablet, desktop
4. No console errors or warnings
5. Fast load times (<2s initial load)
6. Accessible to screen readers
7. SEO-optimized with proper meta tags
8. I feel proud to share it with potential employers/clients

---

## Quick Reference

**Run dev server:**
```bash
npm run dev
```

**Build for production:**
```bash
npm run build
npm start
```

**Git workflow:**
```bash
git add .
git commit -m "Description"
git push
```

**Add new project:**
Create `content/projects/project-name.mdx` with frontmatter:
```markdown
---
title: "Project Name"
description: "Brief description"
tags: ["Tech1", "Tech2"]
date: "2024-12-17"
---
Full description here...
```

**Change colors:**
Edit `app/globals.css`:
```css
:root {
  --primary-red: #DC2626;
  --secondary-red: #EF4444;
}
```

---

## Questions to Ask Me

When continuing development, Claude should ask:

1. **About Me section:**
   - What's my professional background?
   - What should I emphasize (AI, full-stack, specific achievements)?
   - Any specific skills or technologies to highlight?

2. **Projects:**
   - Do I have screenshots/images for projects?
   - Any specific metrics or impact numbers?
   - Which projects should be featured most prominently?

3. **Contact:**
   - Preferred email address for contact?
   - Which social links (GitHub, LinkedIn, Twitter, etc.)?
   - Do I have a resume PDF to link?

4. **Additional sections:**
   - Do I want a blog/writing section?
   - Should there be a skills visualization?
   - Any testimonials or recommendations to include?

5. **Deployment:**
   - When am I planning to deploy?
   - Do I already have udirno.com DNS access?
   - Preference for Vercel vs. other platforms?

---

**Last Updated:** December 17, 2024
**Status:** Design foundation complete, ready for professional enhancement
**Next Priority:** Content enhancement (About section, project details, images)
