# Abhinav Creations Website

This repository contains the pre-launch website for Abhinav Creations. It is a static, multi-page website designed to render well on phones, tablets, and desktop screens and to be published through GitHub Pages.

The site uses ordinary HTML, CSS, and JavaScript. It does not require a database, server-side application, package installation, or website build command.

## Current project status

The website structure and core user experience are implemented. Some business information still requires owner approval before the website should be treated as a completed public launch.

The current build does **not** collect:

- Contact-form submissions.
- Booking or scheduling information.
- Billing information.
- Payments.

Controls that would require an approved external booking or payment provider remain disabled or clearly marked as pending.

See [`checklist.md`](checklist.md) for the detailed list of completed work, missing information, and launch dependencies.

## Implemented features

- Responsive layouts that render well across mobile and desktop screen sizes.
- Light and dark themes with a visitor-controlled toggle.
- Accessible mobile navigation with backdrop, outside-click closing, Escape-key support, and background scroll locking.
- Breadcrumb navigation on non-home pages.
- A back-to-top control that appears during scrolling and hides after inactivity.
- Persistent section buttons on the Studio Spaces & Gear and Creators & Actors pages.
- A visitor-facing sitemap with direct links to important page sections.
- A manual Home-page media carousel without autoplay.
- Keyboard focus styles, semantic page landmarks, and reduced-motion support.
- Optimized logo assets while preserving the original source image.
- Honest pre-launch placeholders instead of fabricated prices, policies, testimonials, or business details.

Website-wide search is intentionally reserved as a possible future enhancement. It will be more useful after the final public text has been supplied and approved.

## Start here

- [`project_plan.md`](project_plan.md) - approved scope, architecture, requirements, and GitHub Pages compliance boundaries.
- [`documentation.md`](documentation.md) - beginner-friendly explanation of the technologies, files, code flow, and interactive features.
- [`checklist.md`](checklist.md) - implemented work, pending owner inputs, and launch dependencies.
- [`UX_improvements.MD`](UX_improvements.MD) - UX recommendations, implemented improvements, and lessons learned during testing.
- [`index.html`](index.html) - website Home page.
- [`sitemap.html`](sitemap.html) - visitor-facing website map.

## Preview the website locally

Opening an HTML file directly can work for basic viewing, but using a small local web server more closely matches GitHub Pages and avoids browser restrictions associated with `file://` addresses.

### 1. Open a terminal in this repository

The terminal should be located in the folder containing `index.html`.

### 2. Start Python's built-in static server

```bash
python3 -m http.server 8000
```

### 3. Open the local website

Visit:

```text
http://127.0.0.1:8000/
```

Keep the terminal open while previewing the website. Press `Ctrl+C` in that terminal to stop the server.

No dependency installation or compilation is required.

## GitHub Pages deployment

The workflow in [`.github/workflows/static.yml`](.github/workflows/static.yml) is configured to deploy the repository as a static GitHub Pages site.

```text
Local changes
     |
     v
Commit and push to main
     |
     v
GitHub Actions uploads the static files
     |
     v
GitHub Pages publishes the successful deployment
```

Pushing a change does not make it visible instantaneously. The GitHub Actions deployment must finish successfully first. Its result and published address are available in the repository's **Actions** and **Settings > Pages** areas.

All current website functionality is compatible with static GitHub Pages hosting. Features that require secure server-side processing, such as payments or private form handling, must use a suitable external provider rather than secret credentials placed in this repository.

## Main technologies

- **HTML5** provides the content and page structure.
- **CSS3** provides layout, responsive rendering, themes, and visual styling.
- **JavaScript** provides small browser-side enhancements such as navigation behavior, theme persistence, section tracking, the carousel, and the back-to-top control.
- **GitHub Actions and GitHub Pages** publish the static files.

For a complete beginner-oriented explanation, read [`documentation.md`](documentation.md).

## Important pre-launch reminder

The repository currently contains visible pre-launch notices and pending-information panels. Before final public launch, approved contact details, business claims, prices, booking arrangements, legal text, media, and other items identified in [`checklist.md`](checklist.md) must be supplied, reviewed, implemented, and tested.
