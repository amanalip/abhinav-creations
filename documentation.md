# Abhinav Creations Website Code Documentation

## 1. Who this document is for

This guide is written for someone who is new to programming.

You do not need to understand every symbol in the code immediately. Start with the diagrams and file map, then use the later sections when you want to change a page, color, or interaction.

The business requirements and approved scope are maintained separately in [`project_plan.md`](project_plan.md). The implementation status is maintained in [`checklist.md`](checklist.md).

## 2. What has been built

This repository contains a static, multi-page website.

```text
Visitor opens a page
        |
        v
HTML supplies the content and structure
        |
        +---- CSS controls appearance and responsive layout
        |
        `---- JavaScript adds menus, section tracking, theme, carousel, and Top button
        |
        v
Browser displays the finished page
```

“Static” does not mean visually motionless. It means the public website files are prepared in advance. There is no private application server or database in this repository.

## 3. Technologies used

### HTML5

HTML files contain the words, headings, links, sections, buttons, header, and footer.

Example:

```html
<h1>Studio Spaces &amp; Gear</h1>
```

- `<h1>` opens the main heading.
- The text is the visible heading.
- `</h1>` closes the heading.
- `&amp;` is the safe HTML representation of an ampersand (`&`).

### CSS3

CSS controls color, spacing, typography, grids, cards, responsive behavior, and themes.

Example:

```css
.card {
  border: 1px solid var(--color-line);
  border-radius: var(--radius-medium);
}
```

This tells the browser that an element with `class="card"` receives a border and rounded corners.

### JavaScript

JavaScript provides the interactive behavior:

1. Light/dark-mode toggle
2. Narrow-screen navigation menu with a backdrop and page-scroll lock
3. Persistent section navigation on the two long comparison pages
4. Manual Home page carousel
5. Reading-friendly back-to-top button

The site does not use React, Jekyll, a JavaScript framework, or a package manager.

## 4. File and folder map

```text
abhinav-creations/
|
|-- index.html                  Home page
|-- studio-spaces.html          Studio Spaces & Gear
|-- creators-actors.html        B2C services
|-- brands-businesses.html      B2B services
|-- pricing-booking.html        Disabled pre-launch transaction pathway
|-- contact.html                Non-collecting Contact Us placeholder
|-- privacy.html                Privacy Policy placeholder
|-- studio-terms.html           Studio terms placeholder
|-- cancellation-refunds.html   Cancellation/refund placeholder
|-- talent-release.html         Talent release placeholder
|-- sitemap.html                Human-readable directory
|-- 404.html                    Unknown-address error page
|
|-- assets/
|   |-- css/
|   |   `-- styles.css          All visual and responsive rules
|   |-- images/
|   |   |-- logo-160.png        Optimized header and favicon logo
|   |   `-- logo-800.png        Optimized Home hero logo
|   `-- js/
|       `-- main.js             All interactive behavior
|
|-- logo.png                    Original supplied high-resolution logo
|-- project_plan.md             Approved scope and plan
|-- UX_improvements.MD          UX proposals and implementation record
|-- documentation.md            This beginner code guide
|-- checklist.md                Completed and pending work
`-- readme.md                   Short project entry point
```

There is intentionally no deployment workflow, `sitemap.xml`, or `robots.txt` yet. See the compliance and pending-work sections below.

## 5. How every page is organized

Most pages follow this structure:

```text
<!doctype html>
<html>
  <head>    page title, description, theme preparation, CSS, JavaScript
  <body>
    skip link
    pre-launch notice
    shared sticky header
    <main>  breadcrumb on internal pages, then page-specific content
    shared footer
```

### The `<head>`

The head is not the visible page content. It provides browser instructions:

- UTF-8 character support
- Responsive viewport behavior
- Search-description text
- Page title
- Light/dark browser support
- Link to `styles.css`
- Link to `main.js`

### The early theme script

Each page contains a small script before the stylesheet:

```text
Read saved theme
      |
      +-- saved light --> mark page light
      |
      +-- saved dark --> mark page dark
      |
      `-- nothing saved --> let CSS follow the device preference
```

It runs early to minimize a flash of the wrong theme while loading.

### The skip link

The first link lets a keyboard user jump past repeated navigation directly to the main content.

### The development notice

The notice explains that the site is a pre-launch build. It must remain until pending business claims, prices, contact details, policies, GSTIN, and integrations are approved.

### The shared header

```text
Desktop/wide layout

LOGO | page links | theme button | Book a Floor Slot

Narrow layout

LOGO | theme button | menu button
                         |
                         v
                  expandable page links
```

`aria-current="page"` identifies the current page. The menu button uses `aria-expanded` so assistive technology can tell whether the menu is open.

On a narrow screen, opening the menu also:

- Places a shaded backdrop behind the menu.
- Prevents the page underneath from scrolling.
- Allows a pointer selection outside the panel to close it.
- Continues to support the Escape key and ordinary link selection.

### The main content

Each page has exactly one `<main>` element and one primary `<h1>` heading. Sections use `<h2>` and `<h3>` in hierarchical order.

Every non-home page begins its main content with a breadcrumb. The breadcrumb is an ordered list inside a navigation landmark, for example:

```text
Home / Studio Spaces & Gear
```

Studio Spaces & Gear and Creators & Actors have persistent in-page navigation. Desktop and mobile both use ordinary anchor buttons; on a narrow screen the button row can be swiped sideways. The visible section is highlighted automatically, every destination matches a section `id`, and the visitor-facing Sitemap contains the same destinations.

### The shared footer

The footer contains:

- Source-provided ESPL relationship wording
- Source-provided registered-address wording
- A pending GSTIN label
- Main page links
- Required legal links
- Human Sitemap link

The footer is repeated in the HTML files because this project does not use a build system or template engine. When footer content changes, every copy must be updated and checked.

## 6. CSS architecture

Open [`assets/css/styles.css`](assets/css/styles.css). It is organized into numbered comment blocks:

1. Light-theme tokens
2. Dark-theme tokens
3. Reset and document defaults
4. Accessibility/layout helpers
5. Pre-launch notice
6. Header/navigation/theme controls
7. Buttons
8. Hero sections
9. Cards and grids
10. Carousel
11. Pending/legal/Sitemap components
12. Footer
13. Responsive rules
14. Reduced-motion support

The shared component rules now also include:

- Breadcrumb appearance.
- Mobile-menu backdrop and document scroll lock.
- Back-to-top button states.
- Persistent Studio and creator-service section navigation.
- Moderately reduced page and section spacing.

### Design tokens

Tokens are named reusable values:

```css
--color-gold: #a87816;
--radius-medium: 1.15rem;
```

A component uses a token like this:

```css
border-color: var(--color-gold);
```

Changing the token changes every component using it. This is safer than searching for many duplicated color values.

### Theme flow

```text
Light tokens are the normal default
          |
          +-- device asks for dark and visitor has no override
          |       `-- CSS dark preference block applies
          |
          `-- visitor explicitly chooses a theme
                  `-- data-theme attribute applies matching tokens
```

The browser `color-scheme` setting also helps native controls match the chosen theme.

### Responsive flow

The same HTML is used at every width.

```text
Wide screen                     Narrow screen

[Card] [Card] [Card]     -->    [Card]
                                [Card]
                                [Card]
```

CSS Grid and Flexbox provide flexible layouts. Media queries change the arrangement only where content no longer fits comfortably.

Breakpoints currently occur at approximately:

- 68rem: navigation becomes collapsible and four-column grids reduce
- 52rem: hero/footer/three-column areas become single-column
- 42rem: two-column grids become single-column
- 24rem: brand text hides to preserve header space

These are content breakpoints, not promises about specific phone models.

### Reduced motion

When a visitor's device requests reduced motion, smooth scrolling and transitions are minimized.

## 7. JavaScript code flow

Open [`assets/js/main.js`](assets/js/main.js). It is deliberately small and documented with multiline JSDoc comments.

When the HTML has loaded:

```text
DOMContentLoaded
      |
      +-- initializeThemeToggle()
      +-- initializeNavigation()
      +-- initializeSectionNavigation()
      +-- initializeCarousels()
      `-- initializeBackToTopButton()
```

Each function first checks whether its required element exists. If the component is absent, it safely stops. This allows one JavaScript file to be shared by every page.

### Theme feature

```text
initializeThemeToggle()
      |
      +-- safely read saved theme
      +-- resolve active theme
      +-- update icon and accessible label
      `-- wait for button click
                |
                v
         apply opposite theme
                |
                v
         attempt to save choice
```

Browser storage can be blocked. `safelyReadStorage()` and `safelyWriteStorage()` use `try/catch`, so a storage error never breaks the page.

### Navigation feature

```text
Menu button click   --> open menu + backdrop + page-scroll lock
Link selected       --> close menu
Outside press       --> close menu and return focus to button
Escape pressed      --> close menu and return focus to button
Screen becomes wide --> reset menu, backdrop, and scroll lock
```

### Persistent section-navigation feature

The two long comparison pages contain ordinary anchor buttons at every screen size. On mobile the row scrolls horizontally when all destinations do not fit. This is deliberately simpler and more reliable than a native selection menu: the visitor can tap any destination directly, and tapping the currently selected destination still performs the navigation. If JavaScript is unavailable, the buttons remain normal usable links.

```text
Visitor scrolls through a long comparison page
                  |
                  v
JavaScript finds the last section crossing the sticky row
                  |
                  `-- mark its button aria-current="location"

Visitor taps or clicks a section button
                  |
                  v
JavaScript holds that button as current while scrolling
                  |
                  v
URL receives the matching #section-id and the section scrolls into place
                  |
                  v
CSS scroll padding keeps the heading below both sticky rows
```

Ordinary scrolling updates the highlighted button without rewriting the URL or adding passive movements to browser history. During a button-triggered smooth scroll, temporary destination locking prevents intermediate sections from taking over the highlighted state. Repeated taps work even when the same hash is already present in the address bar.

### Carousel feature

The carousel is manual; it does not autoplay.

```text
Previous button or Left Arrow --> show previous item
Next button or Right Arrow    --> show next item
                                  |
                                  v
                        update "Item X of Y" status
```

Only one slide has the `is-active` class at a time. The JavaScript also updates `aria-hidden` for assistive technology.

### Back-to-top feature

The Top button is created by JavaScript so identical markup does not have to be copied into every HTML file.

```text
Page is above 700 pixels scrolled --> button is hidden
Page scrolls below that point      --> button appears temporarily
No movement for 2.5 seconds        --> button hides so text is unobstructed
Button is hovered or focused       --> hiding pauses
Button is selected                 --> page returns to top
```

The button is removed from keyboard navigation whenever it is visually hidden. After activation, focus moves to the page's main heading instead of remaining on an invisible control. Smooth scrolling is disabled when the visitor requests reduced motion.

## 8. Image optimization

The original `logo.png` remains unchanged as the supplied high-resolution source. Two smaller derivatives are used by the website:

- `assets/images/logo-160.png` for headers and favicons.
- `assets/images/logo-800.png` for the large Home hero card.

This avoids sending the original 1254-pixel, approximately 820 KB image every time the small header logo is displayed. The HTML width and height attributes match each optimized file, which also helps the browser reserve the correct square space before the image finishes loading.

## 9. Content and anti-fabrication rules

The supplied Word outline controls the service structure and wording. Missing facts are never replaced with realistic-looking samples.

Examples:

- No sample price is shown.
- No sample GSTIN is shown.
- No fake contact details are shown.
- No fake portfolio images or videos are shown.
- No invented legal terms are shown.
- No fake booking availability is shown.
- No payment fields are shown.

Placeholder panels explain exactly what is missing.

## 10. Compliance boundary

The project is stored in a GitHub repository, but no GitHub Pages deployment workflow is included.

GitHub's current Pages documentation says the free hosting service is not intended or allowed for an online business/e-commerce site or another site primarily facilitating commercial transactions. This outline includes pricing, billing, live booking, and cashless checkout.

Therefore:

```text
Code repository on GitHub                    ALLOWED PROJECT WORKFLOW
Local development and testing                ALLOWED
Static HTML/CSS/JS implementation             ALLOWED
Production GitHub Pages deployment here       NOT PLANNED
Private payment logic in browser files        NOT ALLOWED/NOT SAFE
Live booking without approved provider        NOT IMPLEMENTED
```

A compliant commercial production host must be selected before launch. The static code remains portable.

## 11. Why booking and contact are disabled

### Booking

The booking page needs approved rates, production tracks, a scheduling provider, payment provider, billing workflow, policies, and credentials.

Secret credentials must never be stored in public JavaScript.

### Contact

A contact form needs approved fields, a delivery/processing service, privacy wording, retention rules, and a destination. None were supplied, so the page collects no information.

## 12. Why `sitemap.xml` and `robots.txt` are pending

The human-facing [`sitemap.html`](sitemap.html) exists and works locally.

The XML sitemap must contain full final public addresses:

```xml
<loc>https://approved-domain.example/studio-spaces.html</loc>
```

The final domain and production host are not selected, so inserting an invented domain would be technically wrong. `sitemap.xml` and its `robots.txt` reference will be created after the final public URL is known.

## 13. How to preview the website locally

Opening `index.html` directly may work for basic viewing, but a local web server more closely matches real hosting and provides predictable browser storage behavior.

If Python 3 is installed:

```bash
cd /path/to/abhinav-creations
python3 -m http.server 8000
```

Then open:

```text
http://127.0.0.1:8000/
```

Stop the server by returning to the terminal and pressing `Ctrl+C`.

## 14. How to make common changes

### Change a page sentence

1. Open the relevant `.html` file.
2. Find the existing sentence.
3. Change only the text between the HTML tags.
4. Preserve surrounding tags unless the structure must change.
5. Preview and test the page.

### Change a shared color

1. Open `assets/css/styles.css`.
2. Find the light-theme or dark-theme token.
3. Change the token value.
4. Test both themes and verify readable contrast.

### Add approved portfolio media

1. Confirm rights to publish the media.
2. Optimize the file for the web or select an approved video host.
3. Replace a clearly marked carousel placeholder.
4. Add descriptive accessible text.
5. Test loading, controls, narrow screens, and reduced-motion behavior.

### Add approved contact details

1. Update `contact.html` only after public details are approved.
2. If adding a form, first select a compliant processor and finalize privacy wording.
3. Do not put secrets in HTML or JavaScript.
4. Update the Privacy Policy and checklist.

### Update shared header or footer content

Because the shared markup is repeated:

1. Update every HTML page.
2. Search the repository for the old text to ensure no copy remains.
3. Test links and layout on representative pages.

## 15. Testing expectations

Before launch, verify:

- Every internal link
- Every page title and primary heading
- Wide and narrow navigation
- Light and dark themes
- Theme persistence and storage fallback
- Carousel buttons and arrow keys
- Keyboard focus
- Reduced-motion behavior
- Responsive layout without horizontal overflow
- Actual booking provider flow
- Approved contact path
- Approved policies and business details
- Final sitemap URLs
- Final production-host rules

Current implementation status and remaining inputs are tracked in [`checklist.md`](checklist.md).
