# 15 - Setting Up Playwright from the Beginning

## 1. Purpose and current-project boundary

This guide explains how a future maintainer could add a repeatable Playwright Test suite to this static website. It does not claim that the setup already exists, and creating this document does not install Node.js packages or browsers.

Playwright Test combines browser control, a test runner, assertions, isolation, parallel execution, and debugging tools. Confirm current prerequisites in the [official installation guide](https://playwright.dev/docs/intro) before installation.

## 2. Mental model

~~~text
Website source
     |
Local HTTP server
     |
     v
Playwright Test runner
     |
     +--> Chromium project
     +--> Firefox project
     +--> WebKit project
     +--> Mobile emulation projects
     |
     v
Assertions + screenshots + traces + report
~~~

The test runner starts tests. A browser engine renders the site. A locator finds an element. An assertion checks an expected result.

## 3. Before installing

1. Confirm that automated browser testing is approved.
2. Review Git status and preserve unrelated work.
3. Install a currently supported Node.js release.
4. Confirm Node and npm:

~~~bash
node --version
npm --version
~~~

5. Read current Playwright system requirements.
6. Decide whether to use JavaScript or TypeScript. TypeScript provides stronger editor checking; JavaScript is initially simpler.
7. Decide which browser and mobile projects provide meaningful coverage.

## 4. Scaffold the test project

From the repository root:

~~~bash
npm init playwright@latest
~~~

The official initializer normally asks about language, test folder, GitHub Actions, and browser installation. Review every generated file before committing it.

Expected additions resemble:

~~~text
package.json
package-lock.json
playwright.config.js or playwright.config.ts
tests/
  example.spec.js or example.spec.ts
possibly .github/workflows/playwright.yml
~~~

Do not edit the existing static deployment workflow merely to make testing work. A separate test workflow is easier to reason about.

## 5. What npm and npx mean

- npm installs and records JavaScript packages.
- package.json describes scripts and dependencies.
- package-lock.json records exact resolved versions for repeatable installation.
- npx runs a package command from the project environment.
- @playwright/test is the test framework package.
- Browser binaries are separate downloads controlled by Playwright.

## 6. Suggested configuration for this site

This is a teaching example and must be reviewed against the installed version:

~~~js
import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",

  use: {
    baseURL: "http://127.0.0.1:4173",
    trace: "on-first-retry",
  },

  webServer: {
    command: "python3 -m http.server 4173",
    url: "http://127.0.0.1:4173",
    reuseExistingServer: !process.env.CI,
  },

  projects: [
    { name: "chromium", use: { ...devices["Desktop Chrome"] } },
    { name: "firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "webkit", use: { ...devices["Desktop Safari"] } },
    { name: "mobile-chrome", use: { ...devices["Pixel 5"] } },
    { name: "mobile-safari", use: { ...devices["iPhone 12"] } },
  ],
});
~~~

Playwright projects allow the same tests to run with different browsers or device settings. See [official project configuration](https://playwright.dev/docs/test-projects).

## 7. First smoke test

~~~js
import { test, expect } from "@playwright/test";

test("Home page exposes its main heading", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Abhinav Creations/);
  await expect(
    page.getByRole("heading", { level: 1 })
  ).toBeVisible();
});
~~~

This test:

1. Opens Home.
2. Checks the document title.
3. Finds the semantic level-one heading.
4. Confirms it is visible.

Role-based locators are preferable to fragile CSS paths when they reflect how a user or assistive technology understands the page.

## 8. High-value tests for this project

### Mobile menu

~~~js
test("mobile menu opens and closes with Escape", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const menu = page.getByRole("button", { name: /open navigation menu/i });
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");

  await page.keyboard.press("Escape");
  await expect(menu).toHaveAttribute("aria-expanded", "false");
});
~~~

### Theme

Test the control label, data-theme state, persistence after navigation, and behavior when storage is unavailable.

### Persistent section navigation

Test first click, repeated click, long-distance click, active aria-current, last section, and absence of page-wide overflow.

### Back to top

Scroll beyond the threshold, confirm temporary visibility, activate it, and confirm focus reaches the h1.

## 9. Running tests

~~~bash
npx playwright test
npx playwright test --project=chromium
npx playwright test tests/navigation.spec.js
npx playwright test --headed
npx playwright test --ui
npx playwright test --debug
npx playwright show-report
~~~

Command options can change; consult the [official CLI reference](https://playwright.dev/docs/test-cli).

## 10. Debugging tools

### UI mode

Interactive test exploration, filtering, and step inspection.

### Inspector

Pauses and steps through browser actions.

### Trace Viewer

Shows action timeline, DOM snapshots, network activity, and errors. Official best practices recommend collecting traces strategically, such as on the first retry, because tracing every run can be expensive. See [Playwright debugging](https://playwright.dev/docs/debug) and [best practices](https://playwright.dev/docs/best-practices).

## 11. Avoiding flaky tests

A flaky test sometimes passes and sometimes fails without a relevant code change.

~~~text
Flakiness sources
|
+-- arbitrary sleep
+-- unstable selector
+-- animation/timing
+-- shared test state
+-- dependence on test order
+-- uncontrolled network
+-- checking too early
~~~

Prefer:

- Web-first assertions that wait for the expected state.
- Semantic locators.
- Independent tests.
- Controlled data and viewport.
- Condition-based waits rather than fixed delays.
- Traces for diagnosis.

Retries can reveal instability, but they do not repair a bad test.

## 12. GitHub Actions design

Suggested future pipeline:

~~~text
Pull request
  |
  +--> install locked dependencies with npm ci
  +--> install Playwright browsers and OS dependencies
  +--> run tests
  +--> upload report when appropriate
  |
  v
Human review and merge
  |
  v
Existing Pages deployment
~~~

The [official CI guide](https://playwright.dev/docs/ci) provides current workflow examples. Test reports and traces may contain sensitive data; restrict artifact access and retention.

## 13. Suggested repository test structure

~~~text
tests/
  smoke.spec.js
  navigation.spec.js
  theme.spec.js
  section-navigation.spec.js
  responsive.spec.js
  accessibility-basics.spec.js
~~~

Keep tests organized by visitor behavior, not by internal function name.

## 14. Setup completion checklist

- [ ] Current Node and Playwright requirements checked.
- [ ] Generated files reviewed.
- [ ] Lockfile committed.
- [ ] Browsers installed.
- [ ] Local webServer configuration works.
- [ ] At least one smoke test passes.
- [ ] Mobile and desktop projects run.
- [ ] Reports and traces are ignored or retained intentionally.
- [ ] CI does not expose secrets.
- [ ] Existing Pages deployment remains understandable.
- [ ] README and handbook updated to say a suite now exists.

## 15. Sanity check

All examples are proposed future setup. No package or browser was installed while writing this guide. Commands and concepts were checked against official Playwright documentation on 17 July 2026.

