# Portfolio Redesign Strategy

## Project Overview

Revisiting a 2023 fullstack developer portfolio with new skills and modern approach.

**Tech Stack:**

-   Next.js 15.5
-   Sanity CMS
-   SCSS Modules
-   Three.js

## Core Concept

The central stems from one central idea: a dynamic 3D model that flows through the content as the user scrolls.

**Header Layout:**

-   Split 50/50: headline on left, 3D model (with orbit controls) on right
-   Abstract shape that serves as both visual element and navigation guide
-   Movement of the 3D "container", has to feel snappy.

**Scroll Behavior:**

-   3D model follows user down the page
-   Alternates sides: locks to left, then right, then left again
-   Model potentially morphs/changes shape to fit content of each section
-   Content alternates sides opposite to the 3D model

## Technical Architecture

**Component Structure:**

-   **SSR Components**: Text content, sections, navigation (fast load + SEO)
-   **Client Component**: 3D container with Three.js scene (hydrates after main content)

**Animation Strategy:**

-   Use Framer Motion's `useScroll()` and `useTransform()` hooks
-   Track scroll progress and map to specific positions
-   Animate the container div (not WebGL canvas directly) for performance

**Implementation Approach:**

```jsx
const { scrollYProgress } = useScroll();
const x = useTransform(scrollYProgress, [breakpoints], [positions]);
```

## Key Considerations

-   **Performance**: Hardware-accelerated transforms, lazy loading 3D scenes
-   **Mobile Adaptation**: Simplified transitions for touch devices
-   **Shape Evolution**: Each section could have model morph to relate to content
-   **Smooth Transitions**: Balance between scroll-following and section snapping

## Content Management Strategy

**Sanity CMS Setup - Monorepo Approach:**
- Bake Sanity Studio directly into the Next.js project (not separate repos)
- Studio accessible at `/studio` route within the same deployment
- Single Vercel deployment manages both frontend and CMS
- Shared dependencies and environment variables

**Benefits of This Approach:**
- Simpler deployment - one project instead of two
- Easier local development - everything runs together
- No version mismatches between studio and frontend
- Better for personal projects - less infrastructure overhead

**Configuration Files:**
- `sanity.config.ts` - Studio configuration
- `sanity.cli.ts` - CLI tools setup
- Environment variables for both studio and frontend access

**Content Schema Planning:**

**Homepage Sections:**
- Keep everything as Sanity content for easy updates
- Simple schema: `title` + `content` (no rich text needed)
- Sections about skills and information

**Blog Content:**
- `title`, `slug`, `content` (rich text), `images`, `_publishedAt`, `category`
- `/blog` - list view with title, category, publishedAt, read more button
- `/blog/[slug]` - full blog post with embedded images in rich text
- Consider custom components for code blocks

**Projects:**
- Similar structure to blogs
- Additional field: `technologies` used
- Potentially custom sub-components for project demos/code blocks
- `/projects` and `/projects/[slug]` structure

## Performance & Browser Support

**Performance Target:**
- Maintain 100 score across all Google Lighthouse metrics (previous project benchmark)

**Browser Support:**
- All modern browsers (Three.js compatibility should be fine)

## Next Steps

-   Clean up the previous project files.
-   Start the project fresh with latest NextJS and Sanity CMS.
-   Set up Sanity with monorepo/baked-in approach
-   Define and implement content schemas (homepage, blog, projects)
-   Prototype the scroll-based positioning system
-   Define section breakpoints and corresponding 3D transformations
-   Plan shape morphing sequence for different content areas
