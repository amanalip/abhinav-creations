# 03 - End-to-End Implementation Guide

## 1. What this guide teaches

This guide shows a beginner how to locate the project, run it, understand its files, make a controlled change, test that change, and prepare it for publication.

## 2. Prerequisites

For basic reading and previewing:

- A text editor.
- A modern web browser.
- Python 3 for the recommended local preview command.

For version control and publication:

- Git.
- Access to the GitHub repository.
- Permission to push or open a pull request.

No npm install, package manager, framework CLI, or compilation is required.

## 3. Project map

~~~text
abhinav-creations/
|
+-- index.html                    Home
+-- studio-spaces.html            Studio detail
+-- creators-actors.html          Creator services
+-- brands-businesses.html        Business services
+-- pricing-booking.html          Pricing/booking status
+-- contact.html                  Contact status
+-- sitemap.html                  Visitor sitemap
+-- privacy.html                  Policy status
+-- studio-terms.html             Policy status
+-- cancellation-refunds.html     Policy status
+-- talent-release.html           Policy status
+-- 404.html                      Missing-page response
|
+-- assets/
|   +-- css/styles.css            All shared visual rules
|   +-- js/main.js                All shared interactions
|   +-- images/logo-160.png       Small optimized logo
|   +-- images/logo-800.png       Large optimized logo
|
+-- .github/workflows/static.yml  GitHub Pages deployment
+-- README.md                     Concise repository guide
+-- project_plan.md               Scope and decisions
+-- documentation.md              Code documentation
+-- checklist.md                  Status and dependencies
+-- UX_improvements.MD            UX record
+-- project reading/              This handbook
+-- logo.png                      Original supplied logo source
~~~

The .playwright-cli directory contains artifacts from browser QA. These are testing records, not website pages.

## 4. Run the website locally

### Step 1: open a terminal

Move into the repository root, the directory containing index.html.

### Step 2: start the server

~~~bash
python3 -m http.server 8000
~~~

Meaning:

- python3 starts Python.
- -m asks Python to run a module.
- http.server is a small static web server.
- 8000 is the local port.

### Step 3: open the site

Visit:

~~~text
http://127.0.0.1:8000/
~~~

127.0.0.1 means “this computer.” The website is not publicly published by this command.

### Step 4: stop the server

Return to the terminal and press Ctrl+C.

### Why not only double-click index.html?

Double-clicking uses a file address. Basic pages may work, but browser security behavior and relative addressing can differ from a hosted website. A local HTTP server more closely matches GitHub Pages.

## 5. Understand an HTML page

Open index.html in a text editor. Major concepts are:

### Document declaration

The doctype tells the browser to use modern HTML behavior.

### Head

The head contains information about the page rather than its visible body:

- Character encoding.
- Viewport configuration.
- Page title.
- Description.
- Theme initialization.
- Stylesheet link.

### Body

The body contains visitor-facing structure:

- Skip link.
- Notice.
- Header and navigation.
- Main content.
- Footer.
- Script reference.

### Classes and data attributes

A class such as card lets CSS select and style an element. A data attribute such as data-theme-toggle lets JavaScript find an interactive component without relying only on its appearance.

## 6. Trace content to appearance and behavior

Suppose an HTML button has:

~~~html
<button class="theme-toggle" data-theme-toggle>
~~~

The flow is:

~~~text
HTML creates the button
        |
        +--> CSS selects .theme-toggle and styles it
        |
        +--> JavaScript selects [data-theme-toggle]
                              and adds click behavior
~~~

When debugging, inspect all three layers.

## 7. Understand the shared stylesheet

Read assets/css/styles.css from top to bottom:

1. File description.
2. Design tokens.
3. Dark-theme overrides.
4. Reset and base element rules.
5. Accessibility helpers.
6. Header and navigation.
7. Shared components.
8. Page-specific layouts.
9. Responsive media queries.
10. Reduced-motion rules.

Begin with the most specific question possible. For example, search for .back-to-top rather than reading all 1,000-plus lines for a Top-button problem.

## 8. Understand the shared JavaScript

Read assets/js/main.js in this order:

1. SITE_CONFIG constants.
2. Storage helper functions.
3. One initializer at a time.
4. The DOMContentLoaded block at the bottom.

Each function has a block comment explaining its responsibility. The five initializers are intentionally independent.

## 9. Make a safe text change

Example goal: change an approved sentence on the Contact page.

1. Open contact.html.
2. Find the exact existing sentence.
3. Confirm the new sentence is owner-approved.
4. Change only that text.
5. Save.
6. Refresh the local browser.
7. Check light and dark mode.
8. Check a narrow and wide viewport.
9. Confirm no navigation or link changed accidentally.
10. Update documentation or checklist if project status changed.

## 10. Add a new page safely

Do not start from a blank document. Use an existing simple page as a structural reference, while changing page-specific content.

Checklist:

1. Choose a lowercase hyphenated filename.
2. Add a unique title and description.
3. Preserve the early theme script.
4. Preserve the skip link, shared header, and footer.
5. Mark the correct navigation link as current when applicable.
6. Add breadcrumbs if it is not Home.
7. Add one main element and one h1.
8. Use meaningful headings in order.
9. Include the shared main.js script.
10. Add links from the appropriate navigation or content.
11. Add the page to sitemap.html.
12. Check the 404 behavior for mistyped variants.
13. Test keyboard, mobile, desktop, light, and dark experiences.
14. Update documentation and checklist.

## 11. Change shared navigation

Because this is direct multi-page HTML, header and footer markup is repeated.

~~~text
Change one shared navigation item
              |
              v
Find every copy in all HTML pages
              |
              v
Edit consistently
              |
              v
Update sitemap if information architecture changed
              |
              v
Test every affected link
~~~

Use a project-wide search before and after editing. Missing one page causes inconsistent navigation.

## 12. Add a section-navigation destination

For Studio or Creators pages:

1. Give the target section a unique id.
2. Add an ordinary anchor link whose href is # followed by that id.
3. Keep the order of links and sections the same.
4. Ensure no id is duplicated.
5. Update sitemap.html if the section is exposed there.
6. Test first tap, repeated tap, long-distance movement, scroll tracking, and the final section.

The JavaScript deliberately exits if link and section counts do not match. That prevents partial enhancement from behaving unpredictably.

## 13. Replace an image

Before adding media:

- Confirm ownership or publication permission.
- Remove sensitive metadata if appropriate.
- Choose suitable dimensions.
- Compress the file.
- Use a meaningful filename.
- Write truthful alternative text for informative images.
- Use empty alternative text only for genuinely decorative images.
- Test layout at narrow and wide sizes.

Do not overwrite the original logo source unless replacement was explicitly approved. Optimized variants belong in assets/images.

## 14. Basic technical checks

### Check JavaScript syntax

~~~bash
node --check assets/js/main.js
~~~

This requires Node.js but does not install anything.

### Find Markdown files

~~~bash
rg --files -g '*.md' -g '*.MD'
~~~

### Inspect changed files

~~~bash
git status --short
~~~

### Review content differences

~~~bash
git diff
~~~

### Check whitespace errors

~~~bash
git diff --check
~~~

These checks do not replace browser QA.

## 15. Browser test matrix

For a meaningful change, check:

| Dimension | Minimum examples |
|---|---|
| Width | Narrow phone and wide desktop |
| Theme | Light and dark |
| Input | Pointer/touch assumption and keyboard |
| Motion | Normal and reduced motion when relevant |
| Navigation | Direct load, menu use, Back, repeated interaction |
| Content | First, middle, and last sections |
| Overflow | No unintended page-wide horizontal scrolling |

## 16. Publishing flow

~~~text
Edit locally
   |
Run syntax and diff checks
   |
Preview in browser
   |
Review mobile and desktop
   |
Obtain content approval where needed
   |
Commit the intended files
   |
Push to main or merge approved work
   |
GitHub Actions deploys
   |
Verify live URL
~~~

Do not assume a successful local preview guarantees a successful deployment.

## 17. Common beginner mistakes

- Editing a generated or optimized asset instead of the source.
- Changing one copy of repeated navigation but not the others.
- Forgetting sitemap updates.
- Putting secret keys in JavaScript.
- Treating placeholder business text as approved.
- Testing only one screen size.
- Testing only while logged into a familiar browser.
- confusing a browser refresh with a redeployment.
- committing testing artifacts or unrelated files without reviewing them.
- Claiming a feature works before testing the exact interaction.

## 18. Implementation completion checklist

- [ ] Requirement is explicit.
- [ ] Relevant source and documentation were inspected.
- [ ] Change is small enough to review.
- [ ] HTML remains meaningful without JavaScript where practical.
- [ ] CSS works in both themes.
- [ ] Narrow and wide layouts were checked.
- [ ] Keyboard behavior was checked.
- [ ] Sitemap was updated if structure changed.
- [ ] Pending business information was not fabricated.
- [ ] Syntax and diff checks passed.
- [ ] Documentation reflects the actual result.

## 19. Sanity check

- Commands match the repository's no-build design.
- File paths were checked against the project.
- The guide does not instruct npm installation.
- The deployment description matches static.yml.
- The guide does not imply that local preview publishes the site.
- The addition procedures include sitemap, accessibility, and documentation synchronization.

