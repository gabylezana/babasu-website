# Babasu Site Design Context

## Project

Redesign/refinement of the `babasu-site` marketing website.

Goal: improve the existing public Babasu Ventures site without losing its strengths.

Current emphasis:
- stronger visual polish
- better hero composition
- more cohesive header/footer language
- cleaner internal page heroes
- less visual noise

## Current Design Direction

The site is moving toward:
- large photographic hero on home
- editorial but restrained typography
- translucent green/teal header
- softer glass surfaces instead of heavy boxed UI
- cleaner, more premium composition

Important constraint:
- "Less is more" is preferred
- avoid over-designed UI
- avoid too many effects or decorative elements

## What Has Been Changed Already

### Home hero
- Uses panoramic Tucavaca image:
  `public/assets/editorial/Valle-de-Tucavaca-Bolivia-3.png`
- Hero copy is centered
- Copy currently says:
  - Title: `The seeds that will become the forest`
  - Supporting line about innovation/technology transforming society in Latin America
- CTA pair exists:
  - `Our philosophy`
  - `Explore our investments`
- A subtle image-wide overlay was reintroduced for readability
- Image framing was adjusted to hide the embedded text at the bottom of the source image

### Header
- Header was redesigned into a translucent green/teal bar
- Uses white Babasu logo:
  `public/assets/editorial/babasu-Logo-blanco.png`
- This header style is now used on home and internal pages

### Internal pages
The following now use the same general hero language:
- `/philosophy`
- `/portfolio`
- `/team`
- `/contact-us`
- `/terms-and-conditions`

### Footer
- Footer was redesigned globally in the shared component
- It now includes:
  - brand
  - contact message
  - email
  - region/investment thesis text
  - navigation
  - Linkedin

## Files That Matter Most

### Core design system
- `src/app/globals.css`

### Shared UI
- `src/components/site/navbar.tsx`
- `src/components/site/site-footer.tsx`
- `src/components/site/section-header.tsx`
- `src/components/site/reveal.tsx`

### Home
- `src/app/page.tsx`
- `src/content/site.ts`

### Internal pages
- `src/app/philosophy/page.tsx`
- `src/app/portfolio/page.tsx`
- `src/app/team/page.tsx`
- `src/app/contact-us/page.tsx`
- `src/app/terms-and-conditions/page.tsx`

## Assets In Use

- Home hero image:
  `public/assets/editorial/Valle-de-Tucavaca-Bolivia-3.png`
- Main white logo:
  `public/assets/editorial/babasu-Logo-blanco.png`

## Things The User Still Cares About

These are recurring concerns from feedback:

- hero text must feel truly centered, not only technically centered
- the hero should feel premium, calm, and legible
- the green family must feel harmonious across header, stats, and footer
- footer should feel more like the previous site structure, but better designed
- internal pages should inherit the home language, not feel like a different site
- avoid heavy overlays, heavy panels, or overly flashy motion

## Known Sensitive Areas

### Home hero
This is the most sensitive area in the project.

User feedback has repeatedly focused on:
- title placement
- CTA contrast
- readability on the sky background
- stat bar color and alignment
- how much of the image is visible

Any redesign proposal should treat the home hero as the main priority.

### Footer
The footer should preserve this informational logic:
- contact/inquiry invitation
- email visibility
- brief investment thesis / region focus
- navigation
- Linkedin

## What Claude Should Help With

Useful help would be:
- improving visual harmony across hero/header/footer
- making the home hero feel more premium and balanced
- refining CTA hierarchy and contrast
- improving spacing and alignment on desktop and mobile
- proposing cleaner internal page hero variations using the same system
- reducing any remaining "patched together" feeling

## What To Avoid

- generic startup-site look
- overly dark UI
- purple accents
- too many glass cards
- excessive animation
- verbose copy blocks in the hero
- large visual changes that ignore the current direction

## Short Summary

This is not a greenfield design.
It is an iterative redesign of a Babasu Ventures site already in progress.

The best outcome is:
- more elegant than the current local version
- more coherent than the original public site
- cleaner, calmer, and more premium
- still rooted in the current Babasu visual identity
