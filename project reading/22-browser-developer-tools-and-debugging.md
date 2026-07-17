# 22 - Browser Developer Tools and Debugging

## 1. DevTools versus Playwright

DevTools is primarily an interactive human inspection environment. Playwright automates browser actions and assertions. They complement each other.

## 2. Main panels

### Elements

Inspect DOM structure, classes, attributes, box model, applied CSS, overridden rules, and computed styles.

### Console

Shows JavaScript errors and permits controlled expressions. Do not paste unknown code into it.

### Network

Shows requests, status codes, sizes, timings, headers, and cache behavior.

### Sources

Shows loaded scripts and supports breakpoints and step-by-step debugging.

### Application

Inspects localStorage, cookies, cache, and service-worker state.

### Lighthouse and accessibility tools

Provide automated signals. They do not replace keyboard and screen-reader testing.

## 3. Debugging workflow

~~~text
Reproduce
  |
Inspect console and network
  |
Select affected element
  |
Compare DOM, computed CSS, geometry, state
  |
Test one hypothesis temporarily
  |
Fix source file
  |
Reload and regression-test
~~~

Temporary DevTools edits disappear on reload; make the real fix in project files.

## 4. Finding horizontal overflow

In Console:

~~~js
document.documentElement.scrollWidth >
  document.documentElement.clientWidth
~~~

If true, inspect elements whose right boundary exceeds the viewport. Remember that the mobile section link row is intentionally locally scrollable; the whole document should not be.

## 5. Debugging dark mode

1. Inspect document.documentElement.dataset.theme.
2. Inspect computed color variables.
3. Check saved localStorage key.
4. Emulate prefers-color-scheme in Rendering tools.
5. Test with storage cleared or blocked.

## 6. Debugging missing resources

Open Network, reload, filter for red/failed requests, inspect status and exact case-sensitive URL. A 404 often means filename, path, case, or deployment mismatch.

## 7. Mobile device mode

Device mode can approximate viewport, user agent, orientation, CPU, and network conditions. It is not a physical device. Chrome's [official Device Mode guide](https://developer.chrome.com/docs/devtools/device-mode) explicitly describes it as an approximation.

## 8. Accessibility inspection

Use the accessibility tree to inspect roles, names, properties, and source order. Then manually:

- Navigate with keyboard.
- Confirm focus visibility.
- Use a screen reader for important flows.
- Test zoom and reflow.

See the [Chrome DevTools accessibility reference](https://developer.chrome.com/docs/devtools/accessibility/reference).

## 9. Debugging map

~~~text
Symptom
|
+-- Visual -> Elements, Styles, Computed, box model
+-- Script -> Console, Sources, breakpoints
+-- Missing file -> Network
+-- Saved state -> Application
+-- Mobile -> Device Mode + physical device
+-- Accessibility -> accessibility tree + manual assistive test
+-- Performance -> Lighthouse, Performance, Network
~~~

## 10. Sanity check

Panel names can move across browser versions. The workflow remains valid, but consult the current browser documentation for UI location.

