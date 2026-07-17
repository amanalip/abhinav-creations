# Abhinav Creations Project Reading Handbook

## Purpose of this folder

This folder is a beginner-friendly handbook for the Abhinav Creations website. It explains the finished code, the decisions made while developing it, the testing performed, the limitations that remain, and a reusable process for creating similar websites.

The intended reader does not need programming experience. Technical words are defined when introduced, examples are included, and the documents distinguish facts from recommendations.

This handbook supplements the operational documents in the repository root:

- [Project plan](../project_plan.md) records the approved scope and original implementation plan.
- [Code documentation](../documentation.md) describes the current code.
- [Implementation checklist](../checklist.md) records completed and pending work.
- [UX improvements](../UX_improvements.MD) records UX proposals, changes, and lessons.
- [Repository README](../README.md) provides a concise project introduction.

## Recommended reading order

~~~text
Start
  |
  v
01 Overview and glossary
  |
  v
02 System design ------> 03 Implementation guide
  |                              |
  v                              v
04 Approach and lessons     Run and modify the site
  |
  +--> 05 UX, UI, accessibility
  +--> 06 Browser testing and Playwright
  +--> 07 Codex best practices
  +--> 08 Agentic development
  +--> 09 Codex skills
  +--> 10 New-website framework
  +--> 11 GitHub Pages deployment
  +--> 12 Maintenance and troubleshooting
  +--> 13 Content and launch governance
  +--> 14 Security, privacy, limitations
  +--> AGENTS template
~~~

## Choose a document by your goal

| Goal | Read |
|---|---|
| Understand what the project is | [01 - Project overview and glossary](01-project-overview-and-glossary.md) |
| Understand the architecture and technology choices | [02 - System design and technology stack](02-system-design-and-tech-stack.md) |
| Run, read, or change the code | [03 - Implementation guide](03-implementation-guide.md) |
| Learn how the project evolved | [04 - Development approach and lessons](04-development-approach-and-lessons.md) |
| Learn UX, UI, mobile, and accessibility thinking | [05 - UX, UI, and accessibility](05-ux-ui-and-accessibility.md) |
| Learn browser QA and Playwright basics | [06 - Browser testing and Playwright](06-browser-testing-and-playwright.md) |
| Work safely and effectively with Codex | [07 - Codex best practices](07-codex-best-practices.md) |
| Understand agentic software development | [08 - Agentic development guide](08-agentic-development-guide.md) |
| Learn what Codex skills are | [09 - Codex skills guide](09-codex-skills-guide.md) |
| Start a website for another business | [10 - New-website framework](10-new-website-framework.md) |
| Publish and diagnose GitHub Pages | [11 - GitHub Pages and deployment](11-github-pages-and-deployment.md) |
| Maintain or repair the website | [12 - Maintenance and troubleshooting](12-maintenance-and-troubleshooting.md) |
| Control business content and launch approval | [13 - Content and launch governance](13-content-and-launch-governance.md) |
| Understand security, privacy, and architectural limits | [14 - Security, privacy, and limitations](14-security-privacy-and-limitations.md) |
| Create repository instructions for an AI agent | [AGENTS template](AGENTS-template.md) |

## Current project truth in one minute

- The website is a static, multi-page site.
- It uses HTML5, CSS3, and browser-side JavaScript.
- It has no package manager, framework, database, backend, or build command.
- It is deployable to GitHub Pages through the included workflow.
- It renders responsively across narrow and wide screens.
- It includes light and dark themes, mobile navigation, breadcrumbs, a manual carousel, persistent section navigation on two long pages, and a temporary back-to-top control.
- It does not currently accept contact submissions, bookings, billing details, or payments.
- Prices, business claims, legal wording, and other launch information still require owner approval where marked.
- Browser QA was performed with Playwright tooling, but the repository does not currently contain a reusable automated Playwright test suite.
- Website-wide search was discussed and deliberately deferred.

## How to use the examples

Examples marked **Current project** describe code that exists now. Examples marked **Suggested future practice** are recommendations and do not claim that a feature is implemented.

Commands should be run from the repository root unless the document says otherwise. A command beginning with a dollar sign normally shows a terminal prompt; do not type the dollar sign.

## Handbook maintenance rule

When the website changes:

1. Update the source code.
2. Test the change.
3. Update the root checklist and relevant documentation.
4. Update affected handbook claims.
5. Recheck links, paths, and implemented-versus-planned labels.

## Sanity check

- [x] All 16 files in the agreed handbook set are listed here.
- [x] Every link uses a relative path suitable for GitHub.
- [x] Implemented, pending, and suggested features are separated.
- [x] GitHub Pages, Playwright, and architecture claims match the repository as reviewed on 17 July 2026.

