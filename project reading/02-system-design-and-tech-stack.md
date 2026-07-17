# 02 - System Design and Technology Stack

## 1. What is system design?

System design describes how a product is divided into parts, how those parts communicate, and why particular technologies were chosen. For a static website, the design is simpler than for a banking or booking platform, but it still includes content structure, shared styling, interactive behavior, deployment, accessibility, and failure handling.

## 2. Architecture summary

The project uses a **static, multi-page, progressively enhanced architecture**.

- **Static** means the host serves stored files.
- **Multi-page** means important destinations have separate HTML files.
- **Progressively enhanced** means standard HTML provides the foundation while CSS and JavaScript improve presentation and interaction.

~~~text
SOURCE LAYER
HTML pages | shared CSS | shared JS | images | documentation
                         |
                         v
VERSION AND AUTOMATION LAYER
Git repository | GitHub | GitHub Actions workflow
                         |
                         v
HOSTING LAYER
GitHub Pages static hosting
                         |
                         v
CLIENT LAYER
Browser parses HTML -> applies CSS -> runs JavaScript
~~~

## 3. Technology stack

| Technology | Role | Why it fits |
|---|---|---|
| HTML5 | Page meaning and content | Native browser format; accessible semantics; no compilation |
| CSS3 | Layout, presentation, responsive rules, themes | Powerful enough for the full visual system without a library |
| JavaScript | Optional interactive enhancements | Small feature set; no framework overhead |
| PNG images | Logo assets | Suitable for the supplied raster logo; optimized sizes are included |
| Git | Version history | Tracks and reviews changes |
| GitHub | Repository hosting | Supports collaboration and Pages |
| YAML | Deployment-workflow configuration | GitHub Actions workflows use YAML |
| GitHub Actions | Automated deployment | Publishes pushes to main and supports manual runs |
| GitHub Pages | Static production hosting | Matches the no-backend architecture |
| Python local server | Development preview only | Common built-in way to serve static files locally |
| Playwright CLI tooling | Browser QA during development | Controls a real browser and captures evidence |

## 4. Why plain HTML, CSS, and JavaScript?

The project's initial requirements are mostly informational content and modest interactions. A framework would introduce dependencies, build configuration, upgrades, and additional concepts without solving a present requirement.

Advantages of the selected stack:

- Files are readable without a build tool.
- GitHub Pages can publish them directly.
- Browser support is broad.
- A beginner can trace content from an HTML file to the screen.
- There is little operational maintenance.
- Page failures are easier to isolate.

Trade-offs:

- Shared header and footer markup is repeated across HTML files.
- A change to shared navigation may require editing several pages.
- Large content collections would eventually become harder to manage.
- Website-wide search is not automatically provided.
- Secure private-data processing needs an external service or backend.

The choice is appropriate now, not a claim that plain HTML is best for every future size of project.

## 5. Page architecture

Each page generally follows this order:

~~~text
html
 |
 +-- head
 |    +-- metadata
 |    +-- early theme selection
 |    +-- shared stylesheet
 |
 +-- body
      +-- skip link
      +-- pre-launch notice
      +-- shared header and navigation
      +-- optional breadcrumbs
      +-- optional persistent section navigation
      +-- main content
      +-- shared footer
      +-- shared JavaScript
~~~

Semantic elements such as header, nav, main, section, and footer communicate page structure to browsers and assistive technology.

## 6. Shared CSS design system

The stylesheet assets/css/styles.css centralizes the visual system.

### Design tokens

CSS custom properties at the top define reusable values:

- Page and surface colors.
- Primary and secondary text colors.
- Gold accent colors.
- Lines and shadows.
- Corner radii.
- Maximum content width.
- Header and section-navigation heights.
- Transition timing.

Changing a token can update many components consistently.

~~~text
Color token
   |
   +--> button
   +--> heading accent
   +--> border
   +--> active navigation state
~~~

### Responsive breakpoints

The current CSS contains rules around:

- 68rem: navigation and wider-layout changes.
- 52rem: intermediate layout adjustments.
- 42rem: phone-oriented layout, shorter header, and swipeable section navigation.
- 24rem: very narrow screen refinements.

A rem is a CSS length normally based on the root text size. Using rem allows layout thresholds to relate better to text scaling than fixed device names such as “iPhone.”

### Theme architecture

The default variables define the light appearance. Dark variables apply when the root HTML element has data-theme="dark". A system preference media query provides a fallback when the visitor has not made an explicit selection.

~~~text
Saved visitor choice exists?
       | yes                  | no
       v                      v
Use saved light/dark     Read device preference
       \                      /
        \                    /
         v                  v
          Apply theme variables
~~~

## 7. Shared JavaScript architecture

The file assets/js/main.js contains independent initializers:

1. Theme toggle.
2. Mobile navigation.
3. Persistent section navigation.
4. Manual Home carousel.
5. Back-to-top button.

When the DOM is ready, each initializer runs. Every initializer first looks for the relevant elements and exits safely if a page does not contain them.

~~~text
DOMContentLoaded
      |
      +--> initializeThemeToggle()
      +--> initializeNavigation()
      +--> initializeSectionNavigation()
      +--> initializeCarousels()
      +--> initializeBackToTopButton()
~~~

This structure limits coupling: the carousel can be absent from most pages without causing an error.

### JavaScript resilience

- localStorage reads and writes are wrapped in error handling.
- Missing component markup causes an early return.
- Normal links remain links.
- Reduced-motion preference changes smooth scrolling to immediate movement.
- Scroll listeners use passive mode where appropriate.
- Repeated scroll calculations are limited through requestAnimationFrame.

## 8. Feature data flows

### Theme flow

~~~text
Page begins loading
  |
  +--> early script checks saved preference
  |
  v
CSS paints suitable theme
  |
  v
Main JavaScript labels toggle
  |
Visitor presses toggle
  |
  +--> change data-theme
  +--> save preference when allowed
  +--> update icon and accessible label
~~~

### Mobile-menu flow

~~~text
Press Menu
  |
  +--> open panel
  +--> show backdrop
  +--> set aria-expanded=true
  +--> lock background scroll
  |
Close by link, outside click, Escape, or wider viewport
  |
  +--> hide panel and backdrop
  +--> restore state and possibly focus
~~~

### Persistent section-navigation flow

Only Studio Spaces & Gear and Creators & Actors use this enhancement.

~~~text
Tap section link
  |
  +--> mark requested section active
  +--> update hash when needed
  +--> scroll target into view
  +--> temporarily lock tracking
  |
Scrolling settles
  |
  +--> release lock
  +--> derive active section from position
  +--> keep active button visible in mobile row
~~~

The lock is important. Without it, intermediate sections passed during smooth scrolling could incorrectly take the active state.

## 9. Deployment design

The workflow .github/workflows/static.yml:

1. Runs for pushes to main or a manual workflow dispatch.
2. Checks out the repository.
3. configures GitHub Pages.
4. Uploads the repository as a Pages artifact.
5. Deploys the artifact.

There is no compile or build action.

## 10. Trust boundaries

A trust boundary separates areas with different security assumptions.

~~~text
PUBLIC AND VISIBLE
HTML, CSS, JS, images, repository history
             |
             | must not contain secrets
             v
EXTERNAL SECURE SERVICE - future, not implemented
booking, payment, private form processing
~~~

Browser JavaScript is visible to visitors. It is unsuitable for storing payment credentials, private API keys, or trusted business rules.

## 11. Important technical decisions

| Decision | Reason | Consequence |
|---|---|---|
| Static Pages hosting | Matches current informational scope | Server features require external services |
| No Jekyll | Direct HTML already exists | Shared markup remains duplicated |
| No autoplay | Reduces distraction and motion | Visitor manually changes carousel items |
| JavaScript-created Top button | Avoids repeating markup | Button is absent when JS is unavailable |
| Horizontal mobile section links | More reliable than native select during tracking | Row may require sideways swiping |
| Honest pending states | Prevents fabricated claims | Site remains visibly pre-launch |
| Local theme storage | Remembers visitor preference | Preference may not persist if storage is blocked |
| Reduced-motion handling | Respects accessibility preference | Some motion becomes immediate |

## 12. When should the architecture change?

Reconsider the architecture if the project requires:

- User accounts or private dashboards.
- A custom secure booking engine.
- Server-controlled payments.
- Large structured content managed by non-developers.
- Hundreds of generated pages.
- Complex website-wide search.
- Localization across many languages.
- Frequent shared-template changes.

A change should follow confirmed requirements, not fashion.

## 13. Sanity check

- Stack claims were checked against repository files.
- The workflow contains deployment actions but no build.
- The JavaScript initializer list matches main.js.
- Breakpoints match styles.css.
- Only two pages are said to use persistent section navigation.
- No server, database, Jekyll build, or payment processor is claimed.

