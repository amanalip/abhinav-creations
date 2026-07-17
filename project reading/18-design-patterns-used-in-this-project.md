# 18 - Design Patterns Used in This Project

## 1. Pattern versus practice

A design pattern is a reusable solution shape for a recurring problem. Not every good choice is a formal “Gang of Four” pattern. This guide uses honest categories.

## 2. Separation of concerns

~~~text
HTML -> meaning/content
CSS  -> visual presentation
JS   -> interactive enhancement
~~~

Benefit: each concern is easier to locate. Trade-off: class names and data attributes become contracts across files.

## 3. Progressive enhancement

Ordinary HTML provides text and links; JavaScript enhances theme, menu, carousel, Top button, and section tracking.

Benefit: core content survives script failure. Limitation: enhanced controls do not all exist or behave fully without JavaScript.

## 4. Initialization-function pattern

main.js defines independent functions and calls them after DOMContentLoaded.

~~~text
DOMContentLoaded
 +--> theme
 +--> navigation
 +--> section navigation
 +--> carousel
 +--> back to top
~~~

Each initializer uses a guard clause when required markup is absent. This avoids errors on pages without that component.

## 5. Configuration object

SITE_CONFIG centralizes theme keys, media query, and Top-button thresholds.

Benefit: important constants are not scattered. Trade-off: it is not a complete configuration system; HTML and CSS still contain related values.

## 6. Design tokens

CSS custom properties hold colors, radii, shadows, widths, heights, and transitions.

~~~text
token --color-gold
  +--> links
  +--> borders
  +--> active states
  +--> buttons
~~~

This creates a single visual source of truth and makes theme override practical.

## 7. Event-driven architecture

JavaScript reacts to click, keydown, scroll, resize, media-query change, focus, blur, and pointer events.

The browser is the event source; handlers update small pieces of state.

## 8. Explicit state synchronization

The mobile menu synchronizes:

- Visible class.
- Backdrop.
- aria-expanded.
- Accessible label.
- Page-scroll lock.
- Top-button availability.
- Focus restoration.

This resembles a small state machine:

~~~text
CLOSED --menu click--> OPEN
OPEN --Escape/link/outside/wide--> CLOSED
~~~

Centralizing transitions in setMenuState prevents partial states.

## 9. Observer-like scroll tracking

Section navigation observes scroll position and derives the active section. It is “observer-like,” but it does not use the browser IntersectionObserver API.

Accuracy matters: name the behavior, not an API that is absent.

## 10. Throttling and debouncing concepts

- requestAnimationFrame limits position calculation to approximately one update per paint frame: throttling-like behavior.
- A 180 ms settle timer restarts during programmatic scrolling: debouncing-like behavior.
- A 2.5 second Top-button timer hides after inactivity: debounce/idle behavior.

## 11. Strategy-like motion choice

The same navigation action selects smooth or immediate scrolling based on prefers-reduced-motion.

~~~text
Reduced motion requested?
 yes -> auto
 no  -> smooth
~~~

This resembles selecting a strategy, though no formal class hierarchy is needed.

## 12. Fail-safe wrapper

Storage helpers catch localStorage errors. Theme switching remains available for the current page even if persistence fails.

This is graceful degradation and defensive programming.

## 13. Multi-page application pattern

Separate HTML documents provide clear URLs and simple static hosting.

Benefit: direct navigation and low runtime complexity. Trade-off: shared markup is duplicated.

## 14. Patterns deliberately absent

- No MVC framework.
- No component framework.
- No dependency injection container.
- No repository/data-access pattern.
- No backend service layer.
- No publish-subscribe library.
- No formal automated Page Object Model.

Avoid naming patterns merely to make architecture sound complex.

## 15. Pattern selection checklist

1. Is the problem recurring?
2. Does the pattern reduce or add complexity?
3. Can a simpler function solve it?
4. Does the team understand it?
5. How will it be tested?
6. What coupling does it introduce?

## 16. Sanity check

Every claimed project pattern was checked against styles.css and main.js. Formal and informal patterns are explicitly distinguished.

