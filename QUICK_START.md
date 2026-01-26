# Quick Start Guide - Continue Development

**Use this when you want to continue working on your portfolio**

---

## TL;DR - Copy & Paste This to Claude

```
I'm continuing my portfolio website development for udirno.com.

Location: /Users/udirno/Desktop/website/portfolio
GitHub: https://github.com/udirno/portfolio

Please read these files for complete context:
1. DEVELOPMENT_PROMPT.md - Full design vision and current state
2. DEVELOPMENT_PLAN.md - Phased plan to deployment

Current priority: [Choose one below]
- Phase 1: Content (About Me, enhance projects, add images)
- Phase 2: Sections (Skills, better Contact, Footer)
- Phase 3: Technical (SEO, Performance, Accessibility)
- Phase 4: Polish (Testing, review)
- Phase 5: Deploy (Vercel + udirno.com)

Let's work on: [Specific task you want to tackle]
```

---

## What You Have Now

✅ **Design Foundation**
- Hero with pyramid background
- Bengali name crossfade hover
- 3 project cards (centered layout)
- Smooth navigation
- Red/black minimalist theme

✅ **Version Control**
- Git repository initialized
- Pushed to GitHub: https://github.com/udirno/portfolio
- All code backed up

✅ **Documentation**
- PROJECT_GUIDE.md - Complete reference
- DEVELOPMENT_PROMPT.md - Context for Claude sessions
- DEVELOPMENT_PLAN.md - Step-by-step roadmap
- This file - Quick reference

---

## What You Need Next

### Priority 1: Content
- Write About Me section
- Enhance project descriptions
- Add project images

### Priority 2: Essential Sections
- Skills/Technologies showcase
- Better Contact section
- Professional footer

### Priority 3: Technical Polish
- SEO optimization
- Performance tuning
- Accessibility compliance

### Priority 4: Deploy
- Push to Vercel
- Configure udirno.com
- Go live!

---

## File Overview

| File | Purpose | When to Use |
|------|---------|-------------|
| `DEVELOPMENT_PROMPT.md` | Full context for Claude | Every new session |
| `DEVELOPMENT_PLAN.md` | Phased roadmap | Planning which phase to tackle |
| `PROJECT_GUIDE.md` | Technical reference | Looking up tech stack, structure |
| `QUICK_START.md` | This file | Quick access to essentials |

---

## Common Commands

**Start dev server:**
```bash
npm run dev
# Opens on http://localhost:3000
```

**Commit changes:**
```bash
git add .
git commit -m "Description of what changed"
git push
```

**Build for production:**
```bash
npm run build
npm start
```

---

## Key Design Principles

✅ **Do:**
- Keep minimalist (Apple-inspired)
- Use red sparingly for emphasis
- Maintain ample whitespace
- Smooth, subtle animations

❌ **Don't:**
- Over-engineer
- Add features without asking
- Break the pyramid/Bengali theme
- Make it busy or cluttered

---

## Next Session Template

**For a focused work session:**

1. Open terminal: `cd /Users/udirno/Desktop/website/portfolio`
2. Start dev server: `npm run dev`
3. Open new Claude chat
4. Paste the TL;DR prompt (top of this file)
5. Specify which phase/task
6. Let Claude guide implementation
7. Test at http://localhost:3000
8. Commit when done

---

## Phase Recommendations

### If you have 1 hour:
→ Work on Phase 1.1 (About Me section)

### If you have 2-3 hours:
→ Complete Phase 1 (Content) or Phase 2 (Sections)

### If you have 4+ hours:
→ Do Phase 1 + Phase 2

### If you want quick wins:
→ Do Phase 2.3 (Footer) - easy and impactful

### If you're ready to deploy soon:
→ Focus on Phase 1.2 (project descriptions) - most important for first impression

---

## Current File Structure

```
portfolio/
├── app/
│   ├── components/       # UI components
│   ├── globals.css       # Styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main page
├── content/projects/     # Project MDX files
├── lib/mdx.ts           # Utilities
├── public/              # Static assets
├── DEVELOPMENT_PROMPT.md ← Full context
├── DEVELOPMENT_PLAN.md   ← Roadmap
├── PROJECT_GUIDE.md      ← Technical reference
└── QUICK_START.md        ← This file
```

---

## Success Metrics

You're ready to deploy when:
- ✅ Content is professional and compelling
- ✅ All sections complete (About, Skills, Projects, Contact, Footer)
- ✅ Lighthouse score > 90
- ✅ Works on mobile, tablet, desktop
- ✅ No console errors
- ✅ You're proud to share it

---

## Support

**If something breaks:**
1. Check console for errors
2. Restart dev server (Ctrl+C, then `npm run dev`)
3. If still broken, ask Claude with error message

**If design looks off:**
1. Hard refresh browser (Cmd+Shift+R on Mac)
2. Check if file was saved
3. Verify correct file was edited

**If git issues:**
1. `git status` - see what's uncommitted
2. `git pull` - get latest from GitHub
3. Ask Claude for help with specific git error

---

## Pro Tips

1. **Commit often** - After each logical change
2. **Test as you go** - Don't wait until end
3. **Mobile first** - Check phone view frequently
4. **Ask questions** - Claude knows the context
5. **Take breaks** - Fresh eyes catch issues

---

## Estimated Timeline

- **Phase 1:** 2-3 hours
- **Phase 2:** 2-3 hours
- **Phase 3:** 2-4 hours
- **Phase 4:** 1-2 hours
- **Phase 5:** 1 hour

**Total:** 8-13 hours across 3-5 sessions

---

**Ready to continue? Copy the TL;DR prompt at the top and start a new Claude chat!**

---

Last Updated: December 17, 2024
