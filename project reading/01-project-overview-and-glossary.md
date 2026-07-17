# 01 - Project Overview and Beginner Glossary

## 1. What is this project?

Abhinav Creations is a pre-launch website for a production studio. It introduces the studio, its spaces, creator-facing services, business-facing services, pricing and booking intentions, contact information, and policy pages.

The site is deliberately honest about incomplete business information. It displays pending states rather than inventing prices, testimonials, addresses, booking links, payment systems, or legal promises.

## 2. What problem does the website solve?

A visitor may arrive with different goals:

~~~text
Visitor arrives
      |
      +--> Wants a production space
      |         |
      |         v
      |    Studio Spaces & Gear
      |
      +--> Is a creator or actor
      |         |
      |         v
      |    Creators & Actors
      |
      +--> Represents a brand
      |         |
      |         v
      |    Brands & Businesses
      |
      +--> Wants price or availability
                |
                v
          Pricing & Live Booking
~~~

The Home page works as a routing page. Other pages provide more focused information.

## 3. What exists now?

The visitor-facing pages are:

| File | Visitor purpose |
|---|---|
| index.html | Home page and primary routing |
| studio-spaces.html | Studio floor, audio suite, podcast lounge, and cooking stage |
| creators-actors.html | Creator and actor services |
| brands-businesses.html | Business-oriented services |
| pricing-booking.html | Pricing and booking status |
| contact.html | Contact-information status |
| sitemap.html | Human-readable list of website pages and important sections |
| privacy.html | Privacy placeholder/status page |
| studio-terms.html | Studio-use terms placeholder/status page |
| cancellation-refunds.html | Cancellation and refund placeholder/status page |
| talent-release.html | Talent-release placeholder/status page |
| 404.html | Helpful response for a missing address |

## 4. What does not exist yet?

The current project does not contain:

- A database.
- A private administrative dashboard.
- A contact-form processor.
- A booking engine.
- A payment processor.
- Approved public prices.
- Website-wide search.
- A full automated browser-test suite committed to the repository.
- A service worker or offline application.
- A Jekyll build.
- A Node.js package or dependency installation step.

This does not mean these features are impossible. It means they require additional requirements, approved content, external services, or a different architecture.

## 5. How the browser receives the site

~~~text
GitHub repository
  HTML + CSS + JavaScript + images
                 |
                 v
          GitHub Pages host
                 |
         sends static files
                 |
                 v
        Visitor's web browser
                 |
       +---------+----------+
       |         |          |
      HTML      CSS     JavaScript
    structure  appearance  enhancements
~~~

The browser does the final layout work. The server does not assemble custom pages for each visitor.

## 6. Beginner glossary

### Accessibility

Designing and building a website so people with different abilities can use it. Examples include keyboard navigation, readable contrast, meaningful headings, accessible button labels, and reduced motion.

### Agent

In this handbook, an AI coding agent is software that can inspect a project, reason about a request, edit files, run checks, and report results within granted permissions.

### API

An Application Programming Interface is a defined way for one system to communicate with another. A future booking provider might expose an API. Secret API credentials must not be placed in public browser code.

### Backend

Code running on a server rather than in the visitor's browser. A backend can securely process private information, communicate with databases, or use secret credentials. This project has no backend.

### Browser

Software such as Chrome, Firefox, Safari, or Edge that reads website files and displays the page.

### Browser QA

Quality-assurance work performed in a real browser. It checks whether pages look and behave correctly under realistic conditions.

### Build

A process that converts source files into files ready for publication. Jekyll and many JavaScript frameworks use builds. This project is already plain HTML, CSS, JavaScript, and images, so it has no separate build step.

### CSS

Cascading Style Sheets describe appearance: colors, spacing, layout, typography, themes, and responsive behavior. The shared stylesheet is assets/css/styles.css.

### Deployment

Publishing a tested version of the website to its host. In this repository, a GitHub Actions workflow deploys pushed changes from the main branch to GitHub Pages.

### DOM

The Document Object Model is the browser's structured representation of an HTML page. JavaScript reads and changes the DOM to provide interactions.

### Git

A version-control system. It records file changes as history, allowing collaborators to review and restore earlier versions.

### GitHub

A service that stores Git repositories and provides collaboration, automation, and hosting features.

### GitHub Actions

GitHub's automation service. The workflow in .github/workflows/static.yml checks out the repository, prepares Pages, uploads the static files, and deploys them.

### GitHub Pages

A static website host provided by GitHub. It can serve public HTML, CSS, JavaScript, images, and other static files. It does not run a custom private backend for this project.

### HTML

HyperText Markup Language describes page content and structure: headings, paragraphs, links, navigation, buttons, and sections.

### JavaScript

A programming language run by the browser. Here it enhances themes, mobile navigation, section navigation, the Home carousel, and the back-to-top button.

### Jekyll

A static-site generator supported by GitHub Pages. It can turn templates and Markdown into HTML. This project does not need Jekyll because its pages are written directly in HTML.

### Local server

A small web server running on the developer's computer. It allows the site to be previewed at an address such as http://127.0.0.1:8000 before publishing.

### Markdown

A plain-text documentation format using symbols for headings, lists, links, and code. The file extension is .md.

### Progressive enhancement

Starting with usable HTML and adding optional CSS and JavaScript improvements. The site's core links and text remain available even if JavaScript fails; enhanced controls may lose special behavior.

### Repository

The project folder tracked by Git. It contains code, assets, documentation, and deployment configuration.

### Responsive design

Rules that allow one website to adapt its layout to different screen sizes. It does not mean a separate mobile website exists.

### Static website

A site delivered as stored files. Every visitor receives the same base documents. Browser JavaScript can still provide interactions.

### Technology stack

The collection of technologies used to build and operate a system. This project's stack is primarily HTML5, CSS3, JavaScript, Git, GitHub Actions, and GitHub Pages.

### UI

User Interface: the visible controls and presentation, such as buttons, menus, colors, and cards.

### UX

User Experience: how understandable, efficient, reliable, and comfortable the whole interaction feels.

### Viewport

The visible browser area. A mobile viewport is narrow; a desktop viewport is wider. Browser testing changes viewport dimensions to evaluate responsive layouts.

## 7. Mental model for a beginner

Imagine a printed brochure with movable parts:

- HTML is the brochure's words and reading order.
- CSS is the typography, colors, and page layout.
- JavaScript is the movable tab or switch.
- Images are inserted photographs and logos.
- Git is the revision history.
- GitHub is the shared filing cabinet.
- GitHub Actions is the publishing assistant.
- GitHub Pages is the public display stand.

The analogy is imperfect, but it gives a useful starting point.

## 8. Sanity check

- The page inventory matches the repository.
- No backend or database is claimed.
- Jekyll is explained but not claimed as part of the implementation.
- Deferred search and automated-test-suite work are labeled accurately.
- Business details are not invented.

