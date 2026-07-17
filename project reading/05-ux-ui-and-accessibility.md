# 05 - UX, UI, Mobile Rendering, and Accessibility

## 1. Four related ideas

- **UI** is what a visitor sees and operates.
- **UX** is how understandable and reliable the experience feels.
- **Responsive rendering** is how layout adapts to available space.
- **Accessibility** is whether people with diverse abilities and tools can use it.

A visually attractive button can still have poor UX if it is unreliable, and poor accessibility if it cannot be operated by keyboard.

## 2. Current UX system

The site includes:

- Consistent header, footer, colors, typography, cards, and buttons.
- Responsive layouts rather than a separate mobile site.
- Visitor-controlled light/dark theme.
- Mobile menu with backdrop, outside-click close, Escape close, and scroll lock.
- Skip link.
- Breadcrumbs on non-home pages.
- Persistent section navigation on two long pages.
- Temporary back-to-top control.
- Manual carousel without autoplay.
- Visible focus styles.
- Reduced-motion behavior.
- Human-readable sitemap.

## 3. Mobile rendering principles

“Mobile friendly” and “renders well on mobile” overlap, but the second phrase emphasizes the observable result:

- Text is readable without zooming.
- Content does not spill beyond the screen.
- Controls have practical touch areas.
- Navigation remains reachable.
- Headings wrap sensibly.
- Floating controls do not block content.
- Horizontal scrolling is used only for an intentional local component, not the whole page.

### Mobile section row

The section row is intentionally horizontally swipeable. The document itself should not have horizontal overflow.

## 4. Accessibility model

~~~text
Perceivable
  text, contrast, labels, alternatives
        |
Operable
  keyboard, touch targets, Escape, focus
        |
Understandable
  consistent navigation, clear states
        |
Robust
  semantic HTML, progressive enhancement
~~~

These four categories resemble the widely used POUR accessibility principles.

## 5. Specific design decisions

### Themes

Theme colors are tokens so components change consistently. The toggle label describes the next action. The visitor preference is saved when storage is available.

### Motion

The site checks prefers-reduced-motion. Smooth scrolling and transitions are reduced for visitors who request it.

### Back to top

It appears after 700 pixels of scrolling and hides 2.5 seconds after movement stops. Hover or focus pauses hiding. After activation, focus moves to the h1 so keyboard focus does not remain on a hidden control.

### Navigation

The mobile menu exposes aria-expanded, supports Escape, closes after link selection, and restores state when the layout becomes wide.

### Carousel

It does not autoplay. Buttons and arrow keys change items, and a status describes the current position.

## 6. UX evaluation questions

For every feature ask:

1. Can a new visitor discover it?
2. Does its label explain the action?
3. Does it work on first and repeated use?
4. Does it work by keyboard?
5. Does its state remain truthful?
6. Does it obstruct reading?
7. Does it work in light and dark themes?
8. Does it work at narrow and wide widths?
9. What happens if JavaScript or storage fails?
10. Is the feature worth its visual and maintenance cost?

## 7. Accessibility test checklist

- [ ] One h1 identifies each page.
- [ ] Heading levels form a meaningful outline.
- [ ] Main content has a main landmark.
- [ ] Skip link reaches main content.
- [ ] Links have meaningful text.
- [ ] Buttons describe actions.
- [ ] Current page or location is communicated programmatically.
- [ ] All controls work with Tab, Shift+Tab, Enter, Space, and relevant arrow keys.
- [ ] Focus is visible in both themes.
- [ ] Escape closes overlays.
- [ ] Opening an overlay does not leave the background freely scrolling.
- [ ] Images have appropriate alternative text.
- [ ] Text contrast is reviewed.
- [ ] Zoom and text enlargement do not destroy layout.
- [ ] Reduced-motion preference is respected.
- [ ] No information depends on color alone.

## 8. Remaining UX dependencies

Final UX cannot be fully assessed until approved:

- Studio photographs.
- Prices and packages.
- Contact routes.
- Booking provider and journey.
- Legal policies.
- Testimonials and trust claims.

Real content changes card height, scan patterns, choices, and visitor confidence.

## 9. Sanity check

Current-feature claims match styles.css, main.js, checklist.md, and UX_improvements.MD. This guide does not claim formal accessibility certification or a complete assistive-technology audit.

