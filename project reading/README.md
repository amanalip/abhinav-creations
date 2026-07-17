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
  +--> 15 Setting up Playwright
  +--> 16 Codex + Playwright architecture
  +--> 17 Generative AI and Codex
  +--> 18 Project design patterns
  +--> 19 Codex across operating systems
  +--> 20 Web and browser fundamentals
  +--> 21 Git and GitHub
  +--> 22 Browser DevTools
  +--> 23 CI/CD and quality checks
  +--> 24 Performance, SEO, discoverability
  +--> 25 Requirements traceability map
  +--> 26 FAQs and common mistakes
  +--> 27 Architecture decision records
  +--> 28 Release and change management
  +--> 29 Interview questions and answers
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
| Add a real Playwright suite in the future | [15 - Setting up Playwright](15-setting-up-playwright.md) |
| Prepare for a Codex/browser system-design discussion | [16 - Codex and Playwright architecture](16-codex-and-playwright-testing-architecture.md) |
| Learn generative AI, context, models, and Codex | [17 - Generative AI and Codex basics](17-generative-ai-and-openai-codex-basics.md) |
| Understand patterns in the code | [18 - Design patterns](18-design-patterns-used-in-this-project.md) |
| Compare Codex across operating systems | [19 - Codex on Linux, macOS, and Windows](19-codex-on-linux-macos-and-windows.md) |
| Learn how the Web and browsers work | [20 - Web and browser fundamentals](20-web-and-browser-fundamentals.md) |
| Learn safe version control | [21 - Git and GitHub](21-git-and-github-for-beginners.md) |
| Debug a page manually | [22 - Browser DevTools](22-browser-developer-tools-and-debugging.md) |
| Understand automated checks and delivery | [23 - CI/CD and quality checks](23-ci-cd-and-automated-quality-checks.md) |
| Prepare performance and search discovery | [24 - Performance, SEO, and discoverability](24-performance-seo-and-discoverability.md) |
| Trace requirements from request through implementation and verification | [25 - Requirements traceability map](25-requirements-traceability-map.md) |
| Find beginner answers and avoid recurring errors | [26 - Frequently asked questions and common mistakes](26-frequently-asked-questions-and-common-mistakes.md) |
| Understand why major architecture choices were made | [27 - Architecture decision records](27-architecture-decision-records.md) |
| Plan, approve, publish, verify, and roll back changes | [28 - Release and change management](28-release-and-change-management.md) |
| Prepare for frontend, system-design, QA, and Codex interviews | [29 - Interview questions and answers](29-interview-questions-and-answers.md) |
| Create repository instructions for an AI agent | [AGENTS template](AGENTS-template.md) |

## Suggested learning paths

### Website beginner

~~~text
01 Glossary -> 20 Web fundamentals -> 02 System design
 -> 03 Implementation -> 05 UX/accessibility -> 21 Git
~~~

### Testing beginner

~~~text
20 Browser fundamentals -> 22 DevTools -> 06 Browser QA
 -> 15 Playwright setup -> 23 CI/CD
~~~

### Codex beginner

~~~text
17 Generative AI/Codex -> 07 Best practices
 -> 08 Agentic development -> 09 Skills -> AGENTS template
~~~

### System-design interview preparation

~~~text
02 Website architecture -> 18 Design patterns
 -> 16 Codex/Playwright architecture -> 19 Platforms
 -> 23 CI/CD -> 14 Security boundaries
 -> 27 Architecture decisions -> 29 Interview practice
~~~

### Project owner or maintainer

~~~text
01 Overview -> 25 Requirements traceability
 -> 27 Architecture decisions -> 28 Release/change management
 -> 13 Content governance -> 12 Maintenance/troubleshooting
~~~

### Quick problem-solving path

~~~text
26 FAQs/common mistakes -> 12 Troubleshooting
 -> 22 Browser DevTools -> 06 Browser QA
~~~

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
- A GitHub Pages workflow currently exists, while parts of the root plan/checklist record a conflicting production-hosting decision; [the traceability map](25-requirements-traceability-map.md) records this discrepancy for owner resolution.

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

- [x] All 30 companion documents are linked from this README; together with this README, the expanded handbook contains 31 Markdown files.
- [x] Every link uses a relative path suitable for GitHub.
- [x] Implemented, pending, and suggested features are separated.
- [x] GitHub Pages, Playwright, and architecture claims match the repository as reviewed on 17 July 2026, including the explicitly recorded hosting-documentation discrepancy.
