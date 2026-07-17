# 06 - Browser Testing and Playwright

## 1. Why browser QA matters

Code can be syntactically valid and still produce a poor website. Browser QA checks the result the visitor actually experiences.

~~~text
Source code correct?
        |
        v
Browser interprets HTML, CSS, JavaScript
        |
        +--> viewport differences
        +--> browser behavior
        +--> touch/keyboard differences
        +--> timing and scrolling
        +--> saved preferences
        |
        v
Only real interaction reveals the final experience
~~~

## 2. Types of website testing

| Test type | Question |
|---|---|
| Syntax | Can the language be parsed? |
| Functional | Does the interaction perform the requested action? |
| Responsive | Does layout adapt to width and height? |
| Visual | Does the rendered result look correct? |
| Accessibility | Can diverse users and tools operate it? |
| Regression | Did a change break something that worked earlier? |
| Content | Are words, links, and claims correct? |
| Deployment | Does the published site match the verified local version? |

## 3. What is Playwright?

Playwright is browser-automation tooling. It can open a browser, navigate, resize the viewport, click controls, evaluate page state, and capture screenshots.

It does not automatically know what “good UX” means. A human or test author must define expectations.

## 4. What was done in this project

Playwright CLI tooling was used during development to:

- Open locally served pages.
- Resize to a 390 by 844 mobile viewport.
- Inspect Studio and Creators section navigation.
- Click destinations repeatedly.
- Verify the active aria-current state.
- Measure heading, sticky navigation, and header positions.
- Detect page-wide horizontal overflow.
- Test a 1440 by 900 desktop viewport.
- Capture screenshots and snapshots.

The QA exposed a JavaScript scope error involving reducedMotionQuery. It was fixed, syntax-checked, and browser flows were rerun.

## 5. Important accuracy boundary

The repository contains .playwright-cli artifacts from interactive QA. It does **not** currently contain:

- package.json with Playwright dependency.
- playwright.config file.
- tests directory with repeatable specifications.
- A GitHub Actions job that runs browser tests.

Therefore say “Playwright-assisted browser QA was performed,” not “the project has a complete automated Playwright suite.”

## 6. Browser QA workflow

~~~text
Define acceptance criteria
        |
Start local HTTP server
        |
Open page in controlled browser
        |
Set viewport and initial state
        |
Perform interaction
        |
Measure DOM state + inspect screenshot
        |
Pass? ---- yes ---> record result
  |
  no
  v
Diagnose source -> fix -> static checks -> rerun exact flow
~~~

## 7. Example acceptance criteria

For persistent mobile section navigation:

- Row remains below the sticky site header.
- Selecting Audio Suite reaches its heading.
- Audio Suite becomes aria-current.
- Selecting it again remains reliable.
- Moving to the final section works.
- Active button remains visible in the local swipe row.
- The full page has no unintended horizontal overflow.

For the mobile menu:

- Button is at the right side of the header.
- Pressing it opens the panel and backdrop.
- aria-expanded becomes true.
- Background does not scroll.
- Link selection, outside click, and Escape close it.
- Focus remains understandable.

## 8. Viewports versus devices

A viewport test reproduces dimensions, not every property of a physical phone. A real device may add:

- Browser chrome.
- Safe areas and notches.
- Different font rendering.
- Touch gesture behavior.
- Operating-system native controls.
- Performance limitations.

Use both emulated viewport QA and selected real-device checks before launch.

## 9. Visual and programmatic evidence

A screenshot can reveal clipping, spacing, overlap, and color problems. A DOM measurement can reveal exact state.

~~~text
Screenshot says: “looks aligned”
DOM says: header bottom = 81px
          sticky nav top = 80px

Together they provide stronger evidence than either alone.
~~~

Useful programmatic checks include:

- document.documentElement.scrollWidth > clientWidth
- element.getBoundingClientRect()
- getAttribute("aria-current")
- getAttribute("aria-expanded")
- document.activeElement
- computed styles

## 10. Mobile QA primer

Test:

1. Initial page load at top.
2. Scroll with menu closed.
3. Open/close menu by every supported route.
4. Rotate or resize while menu is open.
5. Use the theme toggle.
6. Navigate to long-page sections.
7. Repeat the same selection.
8. Reach the last section.
9. Wait for the Top control to hide.
10. Zoom or increase text size.
11. Check landscape orientation.
12. Inspect the narrowest supported width.

## 11. Desktop QA primer

Check:

- Header items fit without overlap.
- Hover is not required to discover essential content.
- Content does not become excessively wide.
- Sticky components align.
- Keyboard order follows visual order.
- Focus indicators are visible.
- Large blank areas are intentional.
- Dark mode preserves hierarchy and contrast.

## 12. Suggested future automated suite

This is a recommendation, not current implementation.

~~~text
tests/
  smoke.spec.js
  navigation.spec.js
  theme.spec.js
  accessibility-basics.spec.js
  responsive.spec.js
~~~

High-value automated checks:

- Every main page returns successfully.
- Navigation links point to existing pages.
- Mobile menu opens and closes.
- Theme persists across navigation.
- Section links activate correct sections.
- No tested viewport has page-wide overflow.
- 404 page is served for missing paths where hosting behavior permits.

Automation should complement, not replace, human visual review.

## 13. Testing mind map

~~~text
Browser QA
|
+-- Layout
|   +-- mobile
|   +-- tablet
|   +-- desktop
|
+-- Interaction
|   +-- mouse/touch
|   +-- keyboard
|   +-- repeated actions
|
+-- State
|   +-- light/dark
|   +-- menu open/closed
|   +-- scroll position
|
+-- Access
|   +-- focus
|   +-- labels
|   +-- reduced motion
|
+-- Evidence
    +-- screenshot
    +-- DOM measurement
    +-- console
    +-- written result
~~~

## 14. Sanity check

- QA claims match recorded project checks.
- Playwright is spelled correctly.
- Interactive CLI use is not misrepresented as a committed suite.
- Viewport emulation is not misrepresented as complete physical-device coverage.
- Suggested tests are labeled future work.

