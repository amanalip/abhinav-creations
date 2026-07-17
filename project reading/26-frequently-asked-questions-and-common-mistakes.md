# 26 - Frequently Asked Questions and Common Mistakes

## 1. How to use this guide

This guide is a practical first stop when something is confusing. Each answer separates:

- What is true for websites generally.
- What is true for this repository now.
- What action a beginner should take next.

The questions are grouped by topic. Use your editor's search function to find a word such as `mobile`, `theme`, `Git`, `Playwright`, or `booking`.

## 2. Website and architecture questions

### Q1. What kind of website is this?

It is a static, multi-page website. Each major page is an HTML file. A shared CSS file controls presentation, and a shared JavaScript file adds small interactive enhancements.

Static does not mean visually frozen. Menus, theme switching, a carousel, scrolling controls, and persistent section navigation can all work in the browser.

### Q2. Is this a Jekyll website?

No. There is no Jekyll configuration, Liquid template system, Ruby dependency setup, or Jekyll build step in this repository. GitHub Pages can host plain static files without the project itself using Jekyll.

### Q3. Is this a React, Vue, Angular, or Next.js project?

No. It uses plain HTML, CSS, and JavaScript. Do not run framework commands or add a framework merely because many tutorials use one.

### Q4. Does the website need to be “built” before I can view it?

No compilation or bundling step is required. Start a small local web server and open the site in a browser.

~~~bash
python3 -m http.server 8000
~~~

Then visit `http://127.0.0.1:8000/`.

### Q5. Why use a local server instead of double-clicking `index.html`?

Double-clicking produces a `file://` URL. Some browser behaviors, paths, security rules, and tools behave differently there. A local `http://` server more closely resembles real hosting.

### Q6. Does static mean there can be no booking or payment?

The public interface can link to or embed an approved external service. However, secret credentials, trusted payment decisions, and private data processing cannot safely live in downloadable browser JavaScript. The current booking page is intentionally non-operational.

### Q7. Where is the database?

There is no database. The current site does not store accounts, bookings, messages, or payments.

### Q8. Where is the backend?

There is no custom backend. All current behavior runs in the browser. A future contact, booking, or payment workflow may need a trustworthy external provider or a secure backend.

### Q9. Why not add a framework now?

The current scope does not require one. A framework would introduce dependencies, a build tool, update obligations, and more abstraction. Architecture should change only when a real requirement justifies the cost.

### Q10. Is plain JavaScript unprofessional?

No. Professional engineering means choosing a suitable, maintainable solution. Plain JavaScript is appropriate for this site's modest interactions.

## 3. Files and editing questions

### Q11. Which files should I read first?

Read in this order:

1. Root `README.md` for a short introduction.
2. `project reading/01-project-overview-and-glossary.md` for concepts.
3. `project reading/03-implementation-guide.md` to run and modify the site.
4. `assets/css/styles.css` for appearance.
5. `assets/js/main.js` for interactive behavior.

### Q12. Where do I change visible text?

Usually in the corresponding `.html` file. For example, Home content is in `index.html`. Search for the exact sentence before editing.

### Q13. Where do I change colors?

Start with CSS custom properties near the top of `assets/css/styles.css`. Those variables act as design tokens. Check both light and dark theme values before changing a shared color.

### Q14. Where do I change interactive behavior?

In `assets/js/main.js`. Features are separated into initializer functions such as `initializeNavigation()` and `initializeThemeToggle()`.

### Q15. Why is some HTML formatted compactly on one line?

Some pages were authored compactly, while others are more expanded. Browsers do not care about most source whitespace. A maintainer may reformat carefully, but should avoid combining formatting with unrelated behavior changes because that makes review difficult.

### Q16. Can I rename an HTML file?

Yes, but every link to it must change. Search the repository, update navigation, footers, breadcrumbs, the human sitemap, documentation, and deployment assumptions. Then test old and new URLs. An established public URL may also need a redirect, which static hosting must support appropriately.

### Q17. Can I copy an existing page to make a new page?

Yes, as a starting point. Immediately update the title, description, `aria-current` navigation state, breadcrumb, `h1`, content, IDs, and links. Add the page to the sitemap if it is public.

### Q18. What is a relative link?

`studio-spaces.html` is relative: it is resolved from the current site location. A full link such as `https://example.com/studio-spaces.html` is absolute. This project mostly uses relative internal links for portability.

### Q19. Why should every `id` be unique on a page?

An ID identifies one element. Duplicate IDs make anchor navigation, labels, CSS, JavaScript, and assistive technology ambiguous.

### Q20. Why do comments not appear on the website?

HTML, CSS, JavaScript, and Markdown comments are intended for people reading source. HTML comments can still be downloaded and inspected by visitors, so comments must never contain secrets or private information.

## 4. Mobile and responsive design questions

### Q21. Is “mobile-friendly” different from “renders well on mobile”?

In everyday speech they overlap. “Renders well” is more precise here: the same content should remain readable, usable, and visually coherent at narrow widths without creating a separate mobile site.

### Q22. Is there a separate mobile version?

No. The same HTML is served to all devices. CSS changes arrangement and sizing based on available space.

### Q23. Does browser mobile emulation prove it works on every phone?

No. Emulation is fast and useful, but it does not reproduce every browser chrome, keyboard, touch behavior, safe area, font, performance limit, or operating-system difference. Test representative real devices before launch when possible.

### Q24. Why does a page sometimes scroll sideways on a phone?

A child element may be wider than the viewport. Common causes include fixed pixel widths, long unbroken text, oversized images, wide tables, transforms, and padding added to `width: 100%`. Use DevTools to identify the overflowing element rather than hiding all overflow blindly.

### Q25. Why are mobile menu controls on the right?

That placement was explicitly requested and keeps the theme and menu actions together. Layout rules in the shared stylesheet handle it at narrow widths.

### Q26. Why does the section-navigation row scroll horizontally?

The long Studio and Creators pages need persistent access to several destinations. A horizontally scrollable button row keeps each destination directly selectable without reopening an unreliable native selection popup.

### Q27. Why not use a dropdown for the long-page sections?

The earlier dropdown-like experience was unreliable during smooth scrolling and active-state updates. The current ordinary anchor-button row is more transparent, repeatable, and consistent across mobile and desktop.

### Q28. What is a breakpoint?

A breakpoint is a CSS condition at which layout rules change because available space has crossed a threshold. It should respond to content needs, not imitate one specific phone model.

## 5. Theme and appearance questions

### Q29. How does dark mode work?

CSS custom properties define theme colors. JavaScript reads a saved choice when available, otherwise considers the device preference. Pressing the theme button updates the page and saves the explicit selection.

### Q30. What if browser storage is blocked?

The theme can still change on the current page. The safe storage helpers catch errors, but the selection may not persist across pages or later visits.

### Q31. Why is there a tiny inline theme script in every page head?

It restores a valid saved theme before the full stylesheet paints. This reduces an avoidable flash of the wrong theme.

### Q32. Can I remove the visible focus outline because it looks unattractive?

Do not remove it without supplying an equally clear accessible focus style. Keyboard users need to see where focus is.

### Q33. Why should both themes be tested after a color change?

A color may have good contrast in one theme and poor contrast in the other. Shared components, disabled states, borders, focus rings, and overlays all need review in both.

### Q34. Why is the logo stored at more than one size?

Using an appropriately sized asset avoids sending unnecessary pixels for small display contexts while retaining a larger source for prominent use. The original asset is preserved separately.

## 6. Navigation and accessibility questions

### Q35. What does accessibility mean here?

It means reducing barriers for people with different visual, motor, hearing, cognitive, and situational needs. Relevant practices include semantic HTML, keyboard operation, visible focus, labels, contrast, reduced motion, and predictable navigation.

### Q36. Is the website officially accessibility-certified?

No. The project includes accessibility-minded implementation and sampled QA, but no formal certification or comprehensive audit is claimed.

### Q37. What is a skip link?

It lets a keyboard user bypass repeated header/navigation content and move directly to the main page content.

### Q38. What does `aria-expanded` do?

It tells assistive technology whether a controlled expandable component, such as the mobile menu, is currently open or closed. JavaScript must keep it synchronized with the visual state.

### Q39. What does `aria-current` do?

It identifies the current page or current in-page location. It is not merely a styling hook; it communicates state.

### Q40. Why does focus move after using Back to top?

If the button hides near the top while focus remains on it, a keyboard user can lose their visible position. Moving focus to the main heading establishes a logical destination.

### Q41. Why is carousel autoplay disabled?

The source requested a slider, not automatic motion. Manual controls are calmer, easier to understand, and avoid unwanted movement. Autoplay would add accessibility and usability obligations without a demonstrated need.

### Q42. Why support reduced motion?

Some visitors experience discomfort from animation, and others simply prefer less motion. The site selects immediate scrolling or reduced transitions where the system preference requests it.

## 7. Content, legal, booking, and privacy questions

### Q43. Why are there so many “pending” notices?

They prevent the pre-launch prototype from presenting invented prices, policies, claims, contact routes, or transaction capability as real. Honest incompleteness is safer than polished fabrication.

### Q44. Can Codex write the final privacy policy?

Codex can help structure questions or draft material for qualified review, but the final policy must match actual data practices, providers, jurisdiction, retention, and business decisions. Do not present generated text as approved legal advice.

### Q45. Can I put an API secret in `main.js` if I obfuscate it?

No. Visitors can download browser code. Obfuscation changes readability, not trust. Store secrets only in an appropriate server-side or provider-controlled environment.

### Q46. Why is the booking button disabled?

No approved rates, scheduling provider, payment workflow, billing handling, or final policies have been supplied. Enabling it would mislead visitors and could create security/privacy risks.

### Q47. Can I add a contact form with only HTML?

HTML can display fields, but it cannot securely deliver and manage submissions by itself. A form processor or backend is required, along with spam protection, validation, privacy decisions, and tested success/failure states.

### Q48. Can I invent placeholder contact details and replace them later?

No. Placeholder email addresses and phone numbers can confuse users, be indexed, or accidentally remain at launch. Keep the absence explicit until approved details are available.

### Q49. Can I publish a testimonial without written permission?

Do not assume so. Confirm authenticity, wording, attribution, and permission. Record evidence without exposing private documents in a public repository.

### Q50. Does a static site collect no data automatically?

The current custom code does not submit visitor data, but hosting infrastructure receives network requests. Future analytics, embedded media, maps, booking widgets, and forms may transmit additional data. Privacy claims must match the complete deployed system.

## 8. Sitemap, search, and SEO questions

### Q51. What is the difference between `sitemap.html` and `sitemap.xml`?

The HTML sitemap is a normal page for people. An XML sitemap is a machine-readable discovery file for search engines. This project currently has the human sitemap; the XML file remains pending until final production URLs are known.

### Q52. Does a sitemap guarantee Google indexing or ranking?

No. It helps discovery. Search engines decide whether and how to index eligible content.

### Q53. Is `robots.txt` a security file?

No. It gives cooperative crawlers instructions. It does not prevent unauthorized access and must never protect secrets.

### Q54. Why was website-wide search deferred?

The site is currently small and the final public content is incomplete. Navigation and the sitemap provide more value now. Search can be reconsidered when content volume and visitor evidence justify its complexity.

### Q55. Can browser Find replace website search?

Browser Find searches only the current rendered page. Website-wide search must index or inspect content across pages and provide useful results and accessibility behavior.

### Q56. Does good SEO mean repeating keywords many times?

No. Useful content, clear headings, descriptive titles/links, sound performance, mobile rendering, and truthful structured information are better foundations. Keyword stuffing damages clarity.

## 9. Git, GitHub, and deployment questions

### Q57. What is the difference between Git and GitHub?

Git is version-control software that records changes. GitHub is a hosted collaboration platform that stores Git repositories and provides pull requests, Actions, Pages, issues, and other services.

### Q58. What is a commit?

A commit is a named snapshot of selected changes plus history metadata. It is not the same as saving a file, and it does not automatically publish the site.

### Q59. What is a push?

A push sends local commits to a remote repository. In this project, a push to `main` can trigger the configured Pages workflow.

### Q60. Does pushing mean the website is instantly updated?

No. The workflow must start and complete successfully, and caches may delay what a browser displays. Check the Actions result and published URL.

### Q61. Is GitHub Pages definitely the approved production host?

The repository contains a Pages workflow and the root README describes deployment, but the plan/checklist also record a commercial-hosting policy concern and unresolved hosting decision. Treat this as a documented discrepancy that must be resolved before production launch.

### Q62. What is `.github/workflows/static.yml`?

It is a GitHub Actions workflow. On a push to `main` or manual dispatch, it checks out the repository, configures Pages, uploads the static content, and deploys it.

### Q63. Can I edit directly on `main`?

Technically possible, but a feature branch and review are safer for meaningful changes. Direct pushes can immediately trigger deployment.

### Q64. What does `git diff` show?

It shows content changes that have not yet been committed, depending on options. Review it before committing so accidental edits do not travel with intended work.

### Q65. What if `git status` shows files I did not create?

Do not delete or overwrite them automatically. They may be the owner's work. Determine ownership and scope before acting.

## 10. Testing and Playwright questions

### Q66. Was Playwright used on this project?

Yes, Playwright-assisted browser QA was used interactively and artifacts exist under `.playwright-cli/`. However, the repository does not currently contain a reusable automated Playwright test project with package configuration and committed test specifications.

### Q67. Is interactive Playwright QA the same as an automated test suite?

No. Interactive QA can automate a browser during one development session. A reusable suite defines repeatable assertions in committed test files and can run locally or in CI.

### Q68. Why test in a real browser if the code looks correct?

Source inspection cannot fully prove layout, focus, scrolling, browser state, link behavior, responsive presentation, or visual interactions. The browser executes the combined system.

### Q69. Does one successful test prove there are no bugs?

No. A test proves only that its checked behavior passed in that environment at that time. Good testing combines focused automated checks, manual exploration, representative environments, and honest scope statements.

### Q70. What should be tested after a text-only change?

Check spelling, approved meaning, wrapping at narrow widths, headings, links, and both themes if the text changes layout. Even text can cause overflow or accessibility problems.

### Q71. What should be tested after JavaScript changes?

At minimum: syntax, console errors, the changed flow, keyboard behavior, mobile/wide layouts if relevant, reduced motion if movement is involved, and unaffected nearby features.

### Q72. What is a regression?

A regression occurs when a new change breaks behavior that previously worked. For example, changing menu focus handling could accidentally make the Back-to-top button tabbable behind the open menu.

### Q73. Why save screenshots or snapshots?

They provide review evidence and help compare states. A screenshot alone does not prove keyboard semantics or internal state, so pair it with behavioral checks.

### Q74. Should generated Playwright artifacts be committed?

Usually not all transient logs/screenshots. Decide deliberately. Commit stable tests and useful approved baselines; ignore disposable output to avoid repository noise or accidental sensitive data.

## 11. Codex and agentic-development questions

### Q75. What should I ask Codex before coding?

Explain the desired user outcome, relevant files or source material, constraints, what must not change, and whether Codex may implement or should only advise. For larger work, ask for a plan first.

### Q76. Why work feature by feature?

Small coherent changes are easier to review, test, explain, and revert. Large mixed changes make it difficult to locate the cause of a failure.

### Q77. What is a context window?

It is the finite amount of conversation, instructions, and retrieved material a model can actively consider at one time. Long work benefits from durable repository documentation and concise summaries.

### Q78. What is context compaction?

It summarizes earlier context so work can continue within limits. Important facts should live in files and verification evidence rather than only in chat memory.

### Q79. Should Codex be given unrestricted access for convenience?

Use the least authority needed. Read-only inspection and workspace-scoped edits are safer defaults. Approve broader network, credential, deployment, or destructive operations only when required and understood.

### Q80. Can Codex make factual mistakes?

Yes. Generative models can misunderstand context or produce plausible but incorrect claims. Require repository inspection, official sources for unstable platform facts, tests, diffs, and explicit uncertainty.

### Q81. What is `AGENTS.md`?

It is a repository instruction file that can guide coding agents about structure, commands, safety, style, and completion criteria. This handbook provides `AGENTS-template.md`; it is a template, not currently an active root instruction file.

### Q82. What is a Codex skill?

A skill is a packaged instruction/workflow resource for a repeatable domain task. It should add specialized procedure or tooling, not merely restate a prompt.

## 12. Common mistakes and corrections

| Mistake | Why it causes trouble | Better action |
|---|---|---|
| Editing several unrelated features at once | Review and regression diagnosis become difficult | Make one coherent change, then test |
| Trusting documentation without inspecting code | Documentation can become stale | Compare current files and running behavior |
| Trusting code without checking approved source | Correct code can publish wrong claims | Trace content to approval evidence |
| Opening only through `file://` | Environment differs from hosting | Use a local HTTP server |
| Testing only one screen width | Responsive defects remain hidden | Test narrow, medium where needed, and wide |
| Calling emulation “real mobile testing” | Hardware/OS/browser differences remain | State scope honestly and add real-device QA |
| Hiding horizontal overflow globally | Masks the symptom and clips content | Find and fix the oversized element |
| Removing focus outlines | Keyboard position becomes invisible | Provide a clear alternative focus style |
| Using clickable `div` elements | Loses native keyboard/semantic behavior | Use a real `button` or `a` element |
| Adding ARIA before native HTML | Can create conflicting semantics | Prefer correct native elements first |
| Putting a secret in JavaScript | Every visitor can inspect it | Keep secrets server-side/provider-side |
| Inventing placeholder business data | May be mistaken for real content | Use explicit pending states |
| Enabling a fake booking button | Misleads users | Keep it disabled until the workflow is real |
| Assuming a sitemap guarantees ranking | Search engines retain control | Treat it as discovery assistance only |
| Updating a page but not the sitemap | Navigation sources drift | Include sitemap in change impact review |
| Changing an anchor ID casually | Existing links break | Search all references and retest hashes |
| Adding autoplay because it looks dynamic | Creates motion and control problems | Prefer visitor-controlled movement |
| Claiming an automated suite exists | Interactive artifacts are not reusable tests | Verify configs/specs and state truthfully |
| Pushing without checking Actions | A failed deploy may leave old content live | Review workflow status and public smoke tests |
| Deleting unfamiliar untracked files | May destroy someone else's work | Inspect and ask when ownership is unclear |
| Running destructive Git recovery commands | Can irreversibly discard work | Use status/diff, commit/stash carefully, ask first |
| Treating generated legal wording as approved | May not match actual obligations | Obtain qualified review and approval |
| Adding dependencies for tiny tasks | Increases supply-chain and maintenance burden | Prefer platform features when sufficient |
| Optimizing only for a score | Can damage real usability | Measure user outcomes and verify quality |
| Declaring “works everywhere” | Evidence is never universal | Name tested environments and limitations |

## 13. A beginner troubleshooting decision tree

~~~text
Something looks or behaves incorrectly
                |
                v
Can you reproduce it after a normal refresh?
     | yes                         | no
     v                             v
Check console + exact steps     Record intermittent conditions
     |
     v
Is it content, style, behavior, or deployment?
     |
     +--> Content: inspect relevant HTML and approved wording
     +--> Style: inspect element, computed CSS, viewport, both themes
     +--> Behavior: inspect console, DOM state, listeners, keyboard flow
     +--> Deployment: inspect workflow, URL, cache, filename case
     |
     v
Make the smallest plausible fix
     |
     v
Retest the failure + nearby regression risks
     |
     v
Update checklist/docs when status or behavior changed
~~~

## 14. Before asking for help

Capture:

- Page URL.
- Browser and device/viewport size.
- Light or dark theme.
- Exact steps.
- Expected result.
- Actual result.
- Whether it happens consistently.
- Console error text, if any.
- Screenshot when the issue is visual.
- Recent files changed.

Do not include passwords, private tokens, payment data, or personal information.

## 15. Sanity check

- [x] This guide describes the current site as static and multi-page.
- [x] It does not claim a backend, database, active form, booking, or payment system exists.
- [x] It distinguishes Playwright-assisted QA from a committed automated Playwright suite.
- [x] It distinguishes mobile emulation from real-device coverage.
- [x] It records the deployment-documentation discrepancy instead of guessing a resolution.
- [x] It treats legal, privacy, security, hosting-policy, and accessibility claims conservatively.
- [x] Commands and file paths match the repository reviewed on 17 July 2026.
