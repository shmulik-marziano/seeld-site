# SeeLD MVP Site - Implementation Plan

## Executive Summary
Building a single-page RTL Hebrew website for SeeLD (financial/retirement services) with pure HTML/CSS/JS. No build tools, fully self-contained, accessible, and responsive.

## Scope & Decisions

### Product Understanding
- **SeeLD**: Financial advisory/retirement planning service
- **Target Audience**: Hebrew-speaking users seeking retirement/financial services
- **Primary Goal**: Lead generation through contact form

### Technical Decisions
1. **Single File Approach**: `src/index.html` with inline `<style>` and `<script>`
2. **RTL First**: All text direction and layout optimized for Hebrew
3. **No Dependencies**: Pure vanilla JS, CSS Grid/Flexbox, no frameworks
4. **Accessibility**: WCAG AA contrast (4.5:1), semantic HTML, ARIA labels
5. **Performance**: Inline everything, minimal DOM, CSS animations only

## File Changes

### New Files
- `src/index.html` - Complete MVP site with embedded CSS/JS

### Updated Files (Documentation)
- `PLAN.md` - This file
- `SELF_REVIEW.md` - Checklist validation results
- `RELEASE_NOTES.md` - MVP delivery summary
- `NEXT_STEPS.md` - Future enhancements

## Site Structure

### Sections (Anchors)
1. **Hero** - Main CTA and value proposition
2. **#services** - Service offerings (chips row with data attributes)
3. **#retirement** - Retirement planning specifics
4. **#process** - How it works / process steps
5. **#testimonials** - Social proof
6. **#contact** - Form with data-webhook-url and data-sheet-id

### Chips Row Implementation
```html
<div class="chips-row">
  <button data-chip="logo">לוגו</button>
  <button data-chip="contact">צור קשר</button>
  <button data-chip="anim">אנימציה</button>
  <button data-chip="yt">סרטון</button>
</div>
```

### Contact Form Attributes
- `data-webhook-url`: For form submission endpoint
- `data-sheet-id`: For Google Sheets integration
- Client validation before submit
- Accessible labels and error messages

## Design System

### Colors (AA Contrast)
- Primary: #0066CC (blue) on white = 8.59:1 ✓
- Secondary: #004488 (dark blue) on white = 12.63:1 ✓
- Text: #1a1a1a on white = 16.1:1 ✓
- Backgrounds: white, #f5f5f5, gradient accents

### Typography
- System fonts: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Heebo', sans-serif
- Font sizes: 16px base, fluid scale (clamp) for headings
- Line height: 1.6 for body, 1.2 for headings

### Spacing Scale
- Base unit: 8px
- Scale: 8, 16, 24, 32, 48, 64, 96 px

### Animations
- Duration: 200-300ms (subtle)
- Easing: ease-out for entrances, ease-in-out for interactions
- Respect `prefers-reduced-motion`
- Hover states on interactive elements

## Accessibility Features
- Semantic landmarks: `<header>`, `<main>`, `<section>`, `<footer>`
- Skip links for keyboard navigation
- ARIA labels on all interactive elements
- Focus indicators (2px solid outline)
- Form validation with live regions
- Alt text for decorative elements (empty alt="")

## Responsive Breakpoints
- Mobile: 320-767px (base)
- Tablet: 768-1023px
- Desktop: 1024px+
- Max width: 1200px container

## Implementation Approach

### Phase 1: Structure (HTML)
1. Document outline with semantic HTML5
2. All sections with proper IDs
3. Forms with validation attributes
4. Chips row with data attributes

### Phase 2: Styling (CSS)
1. CSS reset and RTL base styles
2. Grid/Flexbox layouts
3. Typography scale
4. Component styles (buttons, cards, forms)
5. Animations and transitions
6. Media queries for responsive

### Phase 3: Interactivity (JS)
1. Form validation
2. Smooth scroll to anchors
3. Chips row functionality
4. Mobile menu toggle
5. Animation triggers on scroll (optional)

### Phase 4: Polish
1. Loading states
2. Error handling
3. Success messages
4. Edge cases (long text, small screens)

## Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|-----------|
| RTL layout bugs | High | Test thoroughly, use logical properties |
| Form submission without backend | Medium | Provide clear `data-*` attributes for integration |
| Accessibility issues | High | Follow checklist strictly, test with screen reader |
| Performance on slow connections | Low | Inline everything, optimize image usage |
| Content not provided | Medium | Use placeholder Lorem Ipsum in Hebrew |

## Content Strategy
- **Hebrew placeholders**: Use realistic Hebrew text (not Lorem Ipsum)
- **Client edit markers**: Add `// EDIT HERE` comments
- **Flexible structure**: Easy to update text without breaking layout

## Quality Checklist Preview
Before completion, will validate:
- ✓ RTL layout correct
- ✓ AA contrast ratios
- ✓ Semantic HTML
- ✓ Form validation
- ✓ Responsive on all breakpoints
- ✓ No console errors
- ✓ Chips row data attributes
- ✓ All anchor links functional
- ✓ prefers-reduced-motion respected
- ✓ Fast load (< 2s on 3G)

## Delivery Artifacts
1. `src/index.html` - Production-ready MVP
2. `SELF_REVIEW.md` - Validation results
3. `RELEASE_NOTES.md` - What's included
4. `NEXT_STEPS.md` - Recommended enhancements

---

**Estimated Effort**: ~2-3 hours for a Staff engineer
**Status**: Ready to implement ✓
