# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern Next.js 15 blog application built with TypeScript, Tailwind CSS v4, and shadcn/ui components. The site uses static export (`output: 'export'`) and is designed to be deployed to GitHub Pages with automated CI/CD.

## Development Commands

```bash
# Development server with Turbopack
npm run dev

# Build for production (static export)
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Deploy to GitHub Pages (manual)
npm run deploy
```

## Project Architecture

### Core Structure
- **App Router**: Uses Next.js App Router (`src/app/`) with file-based routing
- **Static Export**: Configured for static site generation suitable for GitHub Pages
- **TypeScript**: Full TypeScript setup with path aliases (`@/*` → `./src/*`)
- **Styling**: Tailwind CSS v4 with PostCSS configuration

### Key Components
- **ThemeProvider** (`src/lib/theme-provider.tsx`): Handles dark/light/system theme switching
- **ThemeToggle** (`src/components/theme-toggle.tsx`): Custom animated theme switcher with circular UI
- **Blog System** (`src/lib/blog-posts.ts`): Static blog posts with TypeScript interfaces

### Layout System
The application uses a consistent layout with:
- Fixed theme toggle in top-left corner
- Responsive logo in top-right corner (hidden on mobile)
- Sticky header with backdrop blur
- Container-based responsive design using Tailwind's container classes

### Theme Implementation
Uses `next-themes` library with:
- System theme detection
- Persistent theme storage
- Hydration-safe theme switching
- Custom animated toggle component

## Build Configuration

### Next.js Config (`next.config.ts`)
- Static export enabled
- Base path conditional on environment (`/nextjs-blog` in production)
- Unoptimized images for static deployment
- Trailing slashes enabled

### GitHub Actions Deployment
Automated deployment workflow (`.github/workflows/deploy.yml`):
- Triggers on pushes to main branch
- Uses Node.js 20
- Builds and deploys to GitHub Pages
- Uploads static files from `out/` directory

## Styling Architecture

### Tailwind CSS v4
- Uses new Tailwind v4 syntax and features
- PostCSS configuration for build processing
- Custom CSS variables for theming
- Responsive design with mobile-first approach

### Design System
- 8-point grid system for consistent spacing
- shadcn/ui components for UI primitives
- Radix UI for accessible component behavior
- Lucide icons for consistent iconography

## Development Notes

- The blog posts are statically defined in `src/lib/blog-posts.ts` - modify this file to add/edit posts
- Theme toggle uses complex positioning and animation - be careful when modifying CSS transforms
- Static export means no server-side features (API routes, ISR, etc.)
- Images must be unoptimized due to static export limitations




## Session Wrap-up Workflow

At the end of each coding session, follow this standardized process to properly document and commit all work:

### 1. Create Detailed Commit Messages
Write comprehensive commit messages that clearly describe:
- **Problem**: What issue was being addressed
- **Solution**: How the issue was resolved
- **Files Modified**: List the key files that were changed
- **Impact**: What the fix accomplishes for users

Use conventional commit format:
```
fix: resolve shader compilation error in 9-Point Mesh Gradient

- Fixed extra closing parenthesis in rand_offset function
- Cleared build cache to ensure changes take effect
- Updated both main site and video generator shader files

Files modified:
- site/src/lib/video-renderer/background-effects/effects/gradients/NinePointMeshGradientShader.ts
- video-gen-and-proc/src/components/effects/ninePointMeshGradient/NinePointMeshGradientShader.ts

```

### 2. Create Development Log Entry
Create a new file for this session's log in `_docs/devlogs/`:
- **Filename**: `YYYY-MM-DD-descriptive-title.md` (use kebab-case for the title)
- **Location**: `_docs/devlogs/`

Add these fields in the entry:
- **Date**: Current date in YYYY-MM-DD format
- **Title**: Descriptive title of the work completed
- **Problem**: Clear description of the issue encountered
- **Root Cause**: Technical explanation of why the problem occurred
- **Solution**: Step-by-step breakdown of how the issue was resolved
- **Files Modified**: List of all files that were changed
- **Outcome**: Description of the final result and user impact

Include the following content in the new file:
```markdown
# YYYY-MM-DD - Descriptive Title

**Date:** YYYY-MM-DD
**Title:** Descriptive Title

**Problem:** [Clear description of the issue]

**Root Cause:** [Technical explanation of why it happened]

**Solution:**
1. [Step 1 description]
2. [Step 2 description]
3. [Step 3 description]

**Files Modified:**
- `/path/to/file1.ts`
- `/path/to/file2.tsx`

**Outcome:** [Description of final result and user impact]
```

### 3. Commit and Push Changes
Execute the complete git workflow:
```bash
# Add all changes
git add .

# Create commit with detailed message
git commit -m "[detailed commit message]"

# Push to remote repository
git push origin main
```
Make sure not to add the following to the commit message:
"🤖 Generated with Claude Code

Co-Authored-By: Claude noreply@anthropic.com"


### 4. Verification
Ensure all changes are properly committed by:
- Checking `git status` shows no uncommitted changes
- Verifying the commit appears in the remote repository
- Confirming a new dev log file exists in `_docs/devlogs/` with the correct filename format

This workflow ensures comprehensive documentation of all development work and maintains a clear history of project evolution for future reference.