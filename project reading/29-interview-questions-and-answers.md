# 29 - Interview Questions and Answers

## 1. Purpose

This guide uses the Abhinav Creations website as a concrete case study for frontend, system-design, UX, accessibility, testing, Git, deployment, security, and AI-assisted development interviews.

It is designed for learning, not memorization. A strong interview answer usually has this shape:

~~~text
Clarify the requirement
        |
        v
State the important constraints
        |
        v
Propose a suitable design
        |
        v
Explain tradeoffs and alternatives
        |
        v
Describe verification and evolution
~~~

Do not pretend every feature in a hypothetical answer exists in the repository. Say clearly:

- **Current project:** what is implemented now.
- **Future design:** what you would add if the requirement changes.

## 2. How to practice

For each question:

1. Answer aloud in 60-90 seconds.
2. Compare with the model answer.
3. Identify the decision drivers, not just named technologies.
4. Draw the diagram from memory.
5. Add one tradeoff and one test.
6. Practice a follow-up question.

For a system-design question, first ask about users, content scale, traffic, editing workflow, transactions, privacy, availability, and budget. A solution without clarified requirements is guessing.

## 3. Beginner foundations

### Question 1: What is a static website?

**Model answer:**

A static website serves prepared files such as HTML, CSS, JavaScript, and images. The server does not need to assemble each page from a private database at request time. Static sites can still be interactive because JavaScript runs in the visitor's browser.

In this project, each major destination is an HTML file, presentation comes from a shared CSS file, and interaction comes from shared JavaScript. There is no custom backend or database.

**Follow-up:** What would make you add a backend?

Authentication, private user data, trusted business rules, server-side integrations, or custom payment/booking processing could justify one.

### Question 2: What is the difference between HTML, CSS, and JavaScript?

**Model answer:**

- HTML expresses content and semantic structure.
- CSS controls presentation, layout, responsive behavior, themes, and visual states.
- JavaScript handles behavior and state that HTML/CSS cannot provide alone.

Separation lets the project share one design system and one behavior layer across multiple pages.

### Question 3: Why is this a multi-page site rather than a single-page application?

**Model answer:**

The content naturally divides into independent public destinations. Direct HTML pages give stable URLs, simple navigation, progressive rendering, and low operational complexity. The interactions are too small to justify a full client-side application runtime.

I would revisit the decision if the product evolved into a highly stateful authenticated application.

### Question 4: What does responsive design mean?

**Model answer:**

Responsive design means the same page adapts to available space and user settings. Flexible containers, Grid/Flexbox, relative sizing, responsive media, and media queries rearrange content without creating a separate mobile site.

Testing should cover representative narrow and wide viewports, but emulation is not a claim of every real device.

### Question 5: What is progressive enhancement?

**Model answer:**

Progressive enhancement begins with useful semantic HTML, applies CSS presentation, then adds JavaScript improvements. If an enhancement fails, core content and ordinary links should remain usable.

The persistent section navigation illustrates this: it starts as anchor links; JavaScript adds active tracking and reliable smooth scrolling.

### Question 6: What is semantic HTML and why does it matter?

**Model answer:**

Semantic HTML uses elements according to meaning, such as `nav`, `main`, headings, links, and buttons. This improves structure for browsers, search engines, assistive technologies, and maintainers. It also provides native behavior that a generic `div` would require developers to recreate.

### Question 7: What is a CSS custom property?

**Model answer:**

A CSS custom property is a reusable value such as `--color-background`. Components reference it with `var(...)`. The project can redefine these tokens for dark mode, allowing many components to change consistently without duplicating every rule.

### Question 8: What happens when a visitor opens this website?

**Model answer:**

~~~text
Browser requests URL
  -> host returns HTML
  -> browser parses DOM
  -> browser requests CSS, JavaScript, images
  -> CSSOM + DOM contribute to layout/paint
  -> deferred JavaScript initializes enhancements
  -> visitor interacts
~~~

The exact network/cache sequence can vary, but this is the useful high-level model.

### Question 9: Why use a local HTTP server?

**Model answer:**

It produces an `http://` origin similar to hosting and avoids differences associated with direct `file://` access. It also makes relative assets and browser automation more predictable. This site needs no build, so Python's built-in server is sufficient for local preview.

### Question 10: What is the difference between Git and GitHub?

**Model answer:**

Git records local version history through commits and branches. GitHub hosts Git repositories and adds collaboration, Actions, Pages, pull requests, and permissions. A Git commit does not automatically deploy; the repository's GitHub Actions workflow defines when deployment occurs.

## 4. Architecture and design questions

### Question 11: Walk me through the system design of this website.

**Model answer:**

I would start with requirements: two audience paths, multiple informational pages, responsive rendering, themes, navigation aids, a manual media carousel, and future booking. The current solution is a static multi-page frontend.

~~~text
Git repository
  |
  +--> HTML pages: content and landmarks
  +--> shared CSS: design tokens, layout, responsive themes
  +--> shared JS: theme, menu, section nav, carousel, Back to top
  +--> image assets
  +--> GitHub Actions deployment workflow
          |
          v
       Static host
          |
          v
       Visitor browser
~~~

The browser is an untrusted public environment, so it contains no secrets or private transaction logic. Booking and payment remain disabled pending an approved external service or backend. The design favors simplicity now and defines triggers for later architectural change.

### Question 12: Why not use React?

**Model answer:**

I would not reject React universally. Here, I would compare its benefits with requirements. The site has limited shared state and modest interactions. React would add a build pipeline, dependency updates, abstractions, and hydration/runtime cost without solving a current high-value problem. Plain browser technologies are sufficient.

If the site later became a stateful application with complex reusable UI and client data flows, I would reevaluate.

### Question 13: Why not use Jekyll?

**Model answer:**

Jekyll is useful for build-time templates and Markdown-driven content. This project began as a small custom business site, not a blog or documentation collection, and did not need a Ruby build. Repeated shared HTML is a cost, so if page count grows, a static generator could become justified.

### Question 14: How is separation of concerns applied?

**Model answer:**

Content/semantics live in HTML, visual decisions in CSS, and behavior in JavaScript. Configuration strings and thresholds are centralized in `SITE_CONFIG`; features are separated into initializer functions. Business approval remains in governance records rather than being inferred from code.

The separation is practical, not perfect: early theme restoration appears inline because timing matters before CSS paint.

### Question 15: How does the JavaScript architecture work?

**Model answer:**

`DOMContentLoaded` calls independent initializers. Each initializer queries the elements it needs and returns safely if they are absent. This allows one shared script on pages that do not all contain every component.

~~~text
DOMContentLoaded
  +--> initializeThemeToggle
  +--> initializeNavigation
  +--> initializeSectionNavigation
  +--> initializeCarousels
  +--> initializeBackToTopButton
~~~

The architecture is event-driven: clicks, key presses, scroll, resize, media-query changes, and timers update explicit UI states.

### Question 16: What design patterns are visible?

**Model answer:**

Patterns include progressive enhancement, separation of concerns, initialization functions, centralized configuration, design tokens, event-driven behavior, explicit state synchronization, observer-like scroll tracking, requestAnimationFrame throttling, timer debouncing, and fail-safe storage wrappers.

I would avoid overstating formal patterns. For example, this is not a full Observer framework; it is browser-event-driven code with observer-like behavior.

### Question 17: What are the main tradeoffs of repeated HTML headers and footers?

**Model answer:**

The benefit is zero build dependency and complete page content in each HTML file. The cost is update drift. Mitigation includes repository-wide searches, checklists, sitemap validation, and focused review. If the page count grows, a build-time templating solution may become cheaper than manual synchronization.

### Question 18: How would you scale this site to hundreds of content pages?

**Model answer:**

First clarify who authors content and how often it changes. Likely changes:

- Structured content source or CMS.
- Static generation/templates for shared layout.
- Automated link, HTML, accessibility, and browser tests.
- Search index if discovery evidence justifies it.
- Image pipeline and content approval workflow.
- Preview deployments.

I would preserve static output where possible, rather than jumping directly to a runtime backend.

### Question 19: How would you design website-wide search?

**Model answer:**

For a small static site, options include a build-generated client search index or a hosted search service. I would define indexed fields, ranking, snippets, keyboard interaction, no-result states, privacy, index freshness, and performance.

~~~text
Approved pages -> extraction/index build -> compact search index
                                         |
Visitor query -> normalize -> rank matches -> accessible results
~~~

Current project search is deferred because content scale and stability do not yet justify it.

### Question 20: How would you add a content-management system?

**Model answer:**

I would first define author roles, preview/approval, structured fields, media rights, version history, and publishing frequency. A headless CMS plus static build might preserve fast static output. The CMS preview should not publish unapproved prices/legal claims directly. Migration cost and provider lock-in must be considered.

## 5. Interaction and state questions

### Question 21: Explain the theme data flow.

**Model answer:**

~~~text
Page starts
  -> early script checks valid saved explicit theme
  -> CSS paints using explicit theme or device preference
  -> initializer synchronizes button label/icon/state
  -> visitor toggles
  -> root data attribute changes
  -> safe storage write attempts persistence
~~~

Storage errors are caught because persistence is an optional enhancement.

### Question 22: How does the mobile menu stay accessible?

**Model answer:**

It uses a native button controlling a labeled navigation element. Opening/closing synchronizes the visual class, backdrop, scroll lock, `aria-expanded`, and accessible label. Escape and outside selection close it, focus returns when appropriate, and wide-screen transition clears mobile state.

A full focus trap is not claimed here; the design should be tested against actual navigation behavior and accessibility requirements.

### Question 23: Explain the Back-to-top design.

**Model answer:**

JavaScript creates the control globally so markup is not repeated. It appears after a meaningful scroll offset, hides after inactivity to reduce text obstruction, remains available during hover/focus, respects reduced motion, and moves keyboard focus to the page heading after activation.

Tradeoff: any floating control can temporarily overlap content, so sizing, placement, visibility duration, and small-screen QA matter.

### Question 24: How did the persistent section navigation improve?

**Model answer:**

The original problem was repeated scrolling back to top. A select-like menu was then implemented but behaved unreliably because scroll tracking changed selection during programmatic movement. The improved design uses always-visible anchor buttons. It holds the requested section active until smooth scrolling settles, then resumes passive tracking.

This demonstrates iterative UX: observe real behavior, identify state conflict, simplify the interaction model, and retest repeated actions.

### Question 25: Why use `requestAnimationFrame` for scroll updates?

**Model answer:**

Scroll events can fire frequently. Scheduling one position calculation per animation frame avoids repeating layout work for every event. A boolean prevents duplicate queued updates. This is a throttling-like optimization aligned with browser painting.

### Question 26: What is debouncing in this project?

**Model answer:**

The Back-to-top inactivity hide and section-navigation settle release use timers that restart when activity continues. The operation runs only after events stop for a specified interval. That is a debounce-like pattern.

### Question 27: Why does the code not update the URL during passive section scrolling?

**Model answer:**

It avoids filling browser history with scroll-derived states or surprising URL changes. Explicit user selection may push the target hash, while passive observation only updates the accessible active indicator.

## 6. UX and accessibility questions

### Question 28: What is the difference between UI and UX?

**Model answer:**

UI is the visible interface: typography, colors, buttons, spacing, and components. UX is the broader experience of finding, understanding, and completing a task. A beautiful dropdown that navigates unreliably has attractive UI but poor UX.

### Question 29: How do you evaluate a UX improvement?

**Model answer:**

Define the friction and observable outcome, create a small prototype, test repeated real tasks at representative widths and input methods, check regressions, and document the lesson. Prefer evidence over novelty.

### Question 30: What accessibility practices does this project use?

**Model answer:**

Semantic landmarks, skip links, logical headings, native buttons/links, ARIA state where needed, visible focus styles, keyboard operation, reduced-motion handling, focus restoration, live carousel status, and responsive readable layouts.

I would explicitly say this is accessibility-minded implementation, not certification. A formal audit and broader assistive-technology testing remain separate work.

### Question 31: When should ARIA be used?

**Model answer:**

Use native semantic HTML first. Add ARIA when native semantics do not communicate necessary dynamic state, such as `aria-expanded` for a menu toggle or `aria-current` for the active section. Incorrect ARIA can make accessibility worse, so visual and semantic state must stay synchronized.

### Question 32: How would you test keyboard accessibility?

**Model answer:**

Start at the address bar or page beginning and use Tab/Shift+Tab, Enter, Space where applicable, arrow keys for explicitly supported widgets, and Escape. Check order, visible focus, reachability, operation, focus restoration, absence of hidden tabbable controls, and no keyboard traps.

### Question 33: How do you handle motion accessibility?

**Model answer:**

Detect `prefers-reduced-motion` in CSS and JavaScript. Replace smooth scrolling/long transitions with immediate behavior where appropriate. Do not add autoplay unless justified and controllable.

### Question 34: How would you test color contrast?

**Model answer:**

Check text, controls, focus indicators, disabled states, borders that convey meaning, overlays, and both themes with appropriate tools. Automated scans help find candidates, but visual/component review and correct state interpretation remain necessary. Do not claim compliance from appearance alone.

## 7. Testing and quality questions

### Question 35: What testing was done here?

**Model answer:**

The project records structural and syntax checks, internal-link/asset checks, and Playwright-assisted browser QA at representative narrow and wide views. Interactions such as themes, mobile navigation, carousel, Back to top, persistent section navigation, keyboard behavior, and reduced motion were inspected.

There is no committed reusable Playwright test suite. That distinction is important.

### Question 36: What is the testing pyramid for a small static site?

**Model answer:**

The exact shape depends on behavior, but a useful model is:

~~~text
Few end-to-end browser journeys
More component/interaction browser checks
Many fast static checks: syntax, links, IDs, content rules
~~~

This project currently relies more on static checks plus interactive browser QA than on committed automation.

### Question 37: What would you automate first with Playwright?

**Model answer:**

Choose stable high-value flows:

- Main navigation destinations load.
- Theme toggles and persists across pages.
- Mobile menu opens/closes with Escape and selection.
- Persistent section links reliably reach targets.
- No unintended narrow-screen page overflow.
- Booking remains disabled until intentionally enabled.

Avoid brittle tests tied only to pixel positions or implementation details.

### Question 38: How do you avoid flaky browser tests?

**Model answer:**

Use accessible role/label locators, assert observable states, wait for conditions rather than arbitrary sleeps, isolate state, control viewport/data, avoid depending on animation timing, capture failure artifacts, and keep each test focused. Test the behavior contract, not internal class changes where possible.

### Question 39: What is the difference between smoke, regression, and exploratory testing?

**Model answer:**

- Smoke testing quickly verifies critical paths after a build/deploy.
- Regression testing checks that existing behavior still works after change.
- Exploratory testing uses human investigation to discover unexpected problems.

They complement rather than replace each other.

### Question 40: How would you test responsive behavior?

**Model answer:**

Use representative viewport widths around content-driven breakpoints, not only named devices. Check reflow, overflow, touch target usability, text wrapping, sticky/fixed controls, images, menu state, orientation where relevant, zoom, and both themes. Add real-device checks for launch-critical paths.

### Question 41: Why are screenshots insufficient?

**Model answer:**

Screenshots show one visual moment. They do not prove keyboard order, accessible names, scroll lock, URL/history behavior, persistence, or dynamic state transitions. Combine visual evidence with semantic and behavioral assertions.

## 8. Security, privacy, and trust questions

### Question 42: What is the trust boundary in a static frontend?

**Model answer:**

Everything sent to the browser is public and modifiable by the visitor. Browser JavaScript cannot hold secrets or be trusted to enforce payment authorization. Trusted operations belong in a secure backend or approved provider environment.

~~~text
Public/untrusted: HTML + CSS + JS + visible config
---------------- trust boundary ----------------
Trusted: private credentials + validation + authorization + records
~~~

### Question 43: Is a static site secure by default?

**Model answer:**

It has a smaller custom server attack surface, but it can still expose secrets, load compromised dependencies, publish private information, use unsafe third-party widgets, suffer content injection through external services, or misconfigure domains. “Static” is not a security certification.

### Question 44: How would you add a contact form securely?

**Model answer:**

Define required fields and purpose, minimize data, choose a secure processor/backend, validate server-side, add spam/abuse controls, protect credentials, use HTTPS, design accessible success/error states, define retention/deletion, update privacy disclosures, and test failure paths.

### Question 45: How would you add booking and payments?

**Model answer:**

Prefer a mature provider unless custom requirements justify a backend. The server/provider must be the authority for price, availability, payment status, and confirmation. Use hosted checkout or tokenized patterns so sensitive payment data is not handled unnecessarily. Verify webhooks/server callbacks, idempotency, failures, cancellations, refunds, privacy, and reconciliation.

This is a future design; the current site has no active transaction capability.

### Question 46: What is data minimization?

**Model answer:**

Collect only what is necessary for a defined purpose, keep it only as long as required, restrict access, and explain handling accurately. Adding analytics or a form changes the privacy design even if the visible site remains static.

### Question 47: What would you do if a secret were committed?

**Model answer:**

Revoke or rotate it immediately; deletion from the latest file is not enough because history and caches may retain it. Assess exposure, remove it from active code/history using an approved process, review logs/impact, update secure storage, and document prevention. Do not paste the secret into tickets or chat.

## 9. Deployment and operations questions

### Question 48: Explain the current deployment workflow.

**Model answer:**

The YAML workflow triggers on pushes to `main` and manual dispatch. It checks out the repository, configures Pages, uploads the repository as a Pages artifact, and deploys it using official GitHub Actions.

I would also flag a governance issue: the plan/checklist record unresolved commercial hosting concerns and contradictory workflow statements. Configuration presence does not equal final production approval.

### Question 49: What is CI/CD?

**Model answer:**

Continuous integration automatically validates changes; continuous delivery/deployment prepares or publishes tested changes. This repository has automated Pages deployment, but it does not currently contain a separate comprehensive automated quality pipeline or Playwright suite.

### Question 50: What would you add to CI?

**Model answer:**

Start with fast stable checks: JavaScript syntax, internal links/assets, duplicate IDs/structural rules, and whitespace. Then add high-value Playwright tests. Keep deployment dependent on checks when appropriate. Pin/update actions responsibly and use least-privilege permissions.

### Question 51: How would you roll back a bad release?

**Model answer:**

Identify the last known-good commit, create a reviewed revert commit, let the standard deployment path publish it, and perform live smoke tests. Preserve history rather than rewriting a shared release branch. For exposed secrets, rotate first; rollback alone is insufficient.

### Question 52: What is a post-deployment smoke test?

**Model answer:**

It verifies the public environment, not just local code: open the live Home page, changed flow, main navigation, assets, narrow layout where relevant, themes, pending safeguards, console/network, and 404 behavior. A green deployment job proves execution, not business correctness.

### Question 53: How would you improve reliability for a business launch?

**Model answer:**

Resolve hosting role, add preview/staging, require review before main, add automated checks, define content approval, tag or record releases, create rollback/runbook ownership, test real devices and live URLs, monitor availability/errors appropriately, and schedule post-launch review.

## 10. Content governance and product questions

### Question 54: How do you prevent fabricated content in AI-assisted development?

**Model answer:**

Create a content inventory with source, owner, approval status, and review date. Mark missing values explicitly. Prompt the agent not to invent facts, inspect diffs, trace every business claim, and keep transaction/legal controls disabled until approved. Technical completion and publication approval are separate gates.

### Question 55: Why can a technically correct website still be unsafe to launch?

**Model answer:**

It may contain incorrect prices, unlicensed media, unsupported claims, incomplete privacy disclosures, invalid contact details, or misleading booking status. Quality includes business truth, legal review, accessibility, security, and operational ownership.

### Question 56: How do you prioritize UX improvements?

**Model answer:**

Prioritize by user friction, frequency, severity, accessibility impact, implementation risk, and evidence. In this project, reliable section navigation addressed a repeated task on long pages. A decorative scroll indicator was rejected as overkill because it added little functional value.

### Question 57: When should a feature be deferred?

**Model answer:**

When its user value is unproven, dependencies are missing, risk is disproportionate, or a simpler existing path works. Deferral should record a review trigger. Website-wide search is deferred until content scale and visitor evidence justify it.

## 11. Codex and AI-assisted engineering questions

### Question 58: How would you use Codex safely on this project?

**Model answer:**

Give Codex a bounded outcome, relevant source files, constraints, and permission scope. Ask it to inspect before editing, preserve unrelated changes, implement one coherent feature, run proportionate checks, show changed files, and update records. Use sandboxed workspace access by default and approve external/destructive actions deliberately.

### Question 59: What are the risks of vibe coding?

**Model answer:**

Rapid natural-language implementation can hide misunderstood requirements, fabricated facts, unreviewed dependencies, inconsistent architecture, security mistakes, inaccessible UI, and untested regressions. Mitigations are planning, small changes, source-of-truth documents, tests, diffs, least privilege, and human approval.

### Question 60: What is a context window and why does it matter?

**Model answer:**

It is the finite working material a model can consider during a response. Long projects can lose details or rely on summaries. Durable plans, checklists, ADRs, traceability, and repository inspection reduce dependence on chat memory.

### Question 61: What is context compaction?

**Model answer:**

It compresses earlier conversation into a summary so work can continue. It is useful but may omit nuance. Before consequential work, the agent should re-read authoritative files and verify current repository state.

### Question 62: How do you verify AI-generated code?

**Model answer:**

Review the diff and reasoning, run static checks, test the actual browser behavior, check edge states and accessibility, compare content with authoritative sources, and inspect deployment impact. “The agent said it worked” is not evidence.

### Question 63: When should an AI agent ask for clarification?

**Model answer:**

When a missing decision would materially change scope, business meaning, security/privacy posture, or external action. It can make safe reversible implementation assumptions within scope, but should not invent prices, choose a payment provider, publish, or delete data without appropriate authority.

### Question 64: What belongs in an agent instruction file?

**Model answer:**

Repository purpose, architecture truth, important files, commands, style, scope rules, safety boundaries, test expectations, documentation requirements, and completion reporting. Instructions should be actionable and maintained; they should not contain secrets or stale product claims.

## 12. Behavioral interview questions using this project

### Question 65: Tell me about a UX issue you diagnosed iteratively.

**Model answer framework (STAR):**

- **Situation:** Long pages needed faster section switching. An initial select-like sticky control was introduced.
- **Task:** Make repeated navigation reliable on mobile without forcing a return to the top.
- **Action:** Reproduced inconsistent selections, identified conflict between programmatic smooth scrolling and passive active-section tracking, simplified the UI to ordinary persistent anchor buttons, held requested state during scrolling, and retested repeated selections.
- **Result:** More predictable direct navigation across both affected pages, plus a documented UX learning.

State only measured or observed results; do not invent percentages.

### Question 66: Tell me about a time you managed incomplete requirements.

**Model answer:**

The project required pricing, booking, contact, and legal destinations but lacked approved operational details. Instead of inventing them, the implementation created clear non-operational shells, disabled transactions, recorded dependencies in a checklist, and separated technical readiness from owner approval. This kept structural work moving without misrepresenting business reality.

### Question 67: Tell me about a technical decision where simplicity won.

**Model answer:**

The site could have used a frontend framework, but requirements were public multi-page content plus modest interactions. Plain HTML/CSS/JS reduced build and dependency complexity while meeting the scope. The decision included a review trigger if scale or state complexity grows.

### Question 68: Tell me about a discrepancy you found.

**Model answer:**

Repository inspection showed an active Pages deployment workflow while planning/checklist text contained conflicting statements. Instead of choosing one narrative, the traceability map recorded the discrepancy, identified affected documents/configuration, and defined an owner/policy reconciliation process. This preserved accuracy and avoided making an unauthorized hosting decision.

## 13. System-design whiteboard exercise

### Prompt

“Design the next version of Abhinav Creations so customers can see live studio availability, book a slot, pay online, receive confirmation, and cancel according to policy.”

### 13.1 Clarifying questions

- Expected booking volume and locations?
- Slot duration, buffers, equipment/resources, and staff constraints?
- Guest checkout or accounts?
- Who controls the calendar?
- Payment timing: full, deposit, authorization, or later invoice?
- Currency, taxes, refunds, and cancellation rules?
- Need coupons, packages, B2B invoicing, or approvals?
- Required notifications?
- Personal data collected and retention?
- Provider preference and budget?
- Availability and support expectations?
- Jurisdictions and legal review?

### 13.2 High-level future design

~~~text
Customer browser
      |
      | public pages
      v
Static frontend/CDN
      |
      | server-authenticated API calls
      v
Booking service/backend
  +--> authoritative availability store/calendar
  +--> pricing/tax rules
  +--> booking state machine
  +--> payment provider (hosted/tokenized checkout)
  +--> notification provider
  +--> audit/operations interface
~~~

The current static site can remain the public shell. Trusted operations move behind a provider/backend boundary.

### 13.3 Example booking state machine

~~~text
Available
   |
temporary hold (expires)
   |
payment pending
   +--> failed/expired -> Available
   |
confirmed
   +--> cancellation requested
             |
             +--> cancelled / refund pending / refunded
~~~

The precise states depend on approved business rules. Idempotency is important so retries do not create duplicate bookings or payments.

### 13.4 Consistency problem

The system must avoid double booking. Possible approaches depend on provider/database capabilities:

- Atomic reservation/conditional write.
- Short-lived hold with expiration.
- Provider-owned availability and checkout.
- Idempotency key for repeated requests.
- Authoritative confirmation only after trusted server/provider response.

The browser's display is not the source of truth.

### 13.5 Failure cases

- Slot disappears during checkout.
- Payment succeeds but confirmation callback is delayed.
- Notification fails after booking succeeds.
- Visitor refreshes or submits twice.
- Provider is unavailable.
- Refund is asynchronous.
- Staff manually block a resource.
- Time-zone or daylight-saving conversion is wrong.

Separate booking success from notification success. Provide recovery and support paths.

### 13.6 Security and privacy

- Do not store card data unnecessarily.
- Protect provider secrets server-side.
- Authenticate operational changes.
- Validate all trusted inputs server-side.
- Minimize personal data.
- Log security-relevant events without exposing payment/private data.
- Define retention/deletion and access controls.
- Review abuse, rate limits, and webhook verification.

### 13.7 Testing strategy

- Unit tests for pricing/cancellation state rules.
- Integration tests with provider sandbox.
- Contract tests for API/webhooks.
- Browser tests for booking success/failure/expiry.
- Concurrency tests for two customers choosing one slot.
- Accessibility tests for errors and time-limited holds.
- Disaster/reconciliation test for payment-confirmation mismatch.

### 13.8 Observability

Measure:

- Booking attempts, confirmations, and failures.
- Payment-provider errors.
- Expired holds.
- Duplicate/idempotent requests.
- Notification failures.
- Refund backlog.
- Latency and availability.

Protect privacy in logs and analytics.

## 14. Rapid-fire comparison questions

| Question | Concise answer |
|---|---|
| Static vs dynamic? | Prepared public files versus server-computed/private-data behavior; many systems combine both |
| SPA vs MPA? | Client-routed application shell versus document navigation among pages |
| `button` vs `a`? | Action on current interface versus navigation to a destination |
| `id` vs `class`? | Unique page identifier/anchor versus reusable grouping/style hook |
| `localStorage` vs cookie? | Browser key/value storage versus values commonly sent with HTTP requests; privacy/security properties differ |
| Mobile emulation vs device testing? | Useful simulated viewport/input versus actual hardware/OS/browser behavior |
| Smoke vs regression? | Critical basic health versus broad protection of existing behavior |
| Deployment vs release? | Technical publication versus approved delivery of value |
| Authentication vs authorization? | Who are you versus what may you do |
| Client validation vs server validation? | UX assistance versus trusted enforcement; server/provider enforcement is required |
| `sitemap.html` vs `sitemap.xml`? | Human navigation versus crawler discovery format |
| `robots.txt` vs access control? | Crawler guidance versus real authorization; robots is not security |
| CI vs CD? | Automated integration checks versus delivery/deployment process |
| Rollback vs fix-forward? | Restore known-good versus deploy a new correction |
| Framework vs library? | Framework generally controls application structure/lifecycle; library is called for focused capability, though boundaries vary |
| Build-time vs runtime? | Work performed before deployment versus while serving/using the application |
| Accessibility scan vs audit? | Automated candidate detection versus broader expert/manual/assistive-tech evaluation |
| Interactive Playwright QA vs suite? | Session-driven automation versus committed repeatable tests/assertions |
| Placeholder vs fabricated fact? | Clearly marked absence versus unapproved value presented as real |
| Git commit vs deployment? | Version snapshot versus environment publication |

## 15. Questions the candidate should ask the interviewer

A strong candidate does not immediately name a framework. Ask:

- Who are the primary users and tasks?
- What is required at launch versus later?
- What content is approved and who edits it?
- Is this informational or transactional?
- What data is sensitive?
- What traffic, availability, performance, and budget targets exist?
- Which browsers/devices and accessibility standard matter?
- What existing services or organizational constraints apply?
- What is the release/rollback process?
- What evidence would show the design succeeded?

## 16. Common interview-answer mistakes

### Mistake 1: Naming tools before requirements

“Use React, Kubernetes, and microservices” is not a design. Begin with user needs, scale, trust, and constraints.

### Mistake 2: Claiming unlimited scale

Every design has limits. Explain current suitability and evolution triggers.

### Mistake 3: Ignoring content governance

Business websites fail through wrong content as well as code.

### Mistake 4: Treating the browser as trusted

Client code and validation can be inspected or changed. Trusted rules require a server/provider boundary.

### Mistake 5: Saying “fully accessible” after an automated scan

State the tested scope and remaining manual/assistive-technology work.

### Mistake 6: Confusing green CI with correct production

CI only checks what was encoded. Add approval and live verification.

### Mistake 7: Inventing project facts

Do not say this repository has a backend, database, active payments, XML sitemap, or committed Playwright suite.

### Mistake 8: Giving only benefits

Every meaningful decision has costs. Tradeoff awareness is central to system design.

### Mistake 9: Overusing jargon

Define terms and connect them to observable behavior.

### Mistake 10: No failure design

Discuss invalid input, provider outage, partial success, retries, concurrency, rollback, and support.

## 17. Self-assessment rubric

Score each area from 0 to 3.

| Area | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Requirement clarity | None | Assumed | Some questions | Prioritized constraints and success criteria |
| Architecture | Missing | Tool list | Coherent components | Coherent plus evolution path |
| Tradeoffs | None | Generic | Specific benefit/cost | Alternatives, consequences, review trigger |
| Trust/security | Ignored | Mentions HTTPS | Identifies secret/data boundary | Threat/failure-aware controls |
| UX/accessibility | Ignored | Visual only | Keyboard/responsive included | Inclusive states and test plan |
| Testing | “Test it” | One test type | Layered checks | Stable automation plus exploratory/live QA |
| Operations | Ignored | Deployment only | Rollback/smoke included | Ownership, observability, incident response |
| Accuracy | Fabricated | Ambiguous | Mostly factual | Current versus future clearly separated |
| Communication | Unstructured | Jargon-heavy | Understandable | Prioritized, diagrammed, concise when needed |

Suggested interpretation:

- 0-8: revisit fundamentals.
- 9-16: developing explanation.
- 17-22: solid project-level discussion.
- 23-27: strong, balanced interview answer.

The score is a learning aid, not a hiring standard.

## 18. Mock interview sequence

### 20-minute frontend round

1. Explain the architecture.
2. Explain theme state.
3. Diagnose mobile overflow.
4. Discuss accessible mobile navigation.
5. Propose a focused Playwright test.

### 45-minute system-design round

1. Clarify future booking requirements.
2. Draw current and target architectures.
3. Model booking states and double-booking prevention.
4. Discuss security/privacy/payment boundaries.
5. Design tests, deployment, rollback, and monitoring.
6. State what you would defer.

### Behavioral round

1. Iterative section-navigation improvement.
2. Handling missing business requirements.
3. Choosing simplicity over a framework.
4. Discovering and recording a documentation/configuration discrepancy.

## 19. Final study checklist

- [ ] Can explain static does not mean non-interactive.
- [ ] Can draw the current browser/static-host architecture.
- [ ] Can justify plain HTML/CSS/JS with tradeoffs.
- [ ] Can explain progressive enhancement.
- [ ] Can trace theme, mobile-menu, and section-navigation state.
- [ ] Can distinguish UI from UX.
- [ ] Can name accessibility practices without claiming certification.
- [ ] Can distinguish interactive QA from an automated suite.
- [ ] Can explain client/server trust boundaries.
- [ ] Can design future booking without putting secrets in the browser.
- [ ] Can explain deployment versus release and rollback.
- [ ] Can describe the current Pages workflow and its unresolved governance conflict.
- [ ] Can explain how Codex work is scoped, verified, and documented.
- [ ] Can give one positive and one negative consequence for every major choice.
- [ ] Can state current facts separately from future proposals.

## 20. Sanity check

- [x] The answers match the repository architecture reviewed on 17 July 2026.
- [x] Current and hypothetical future systems are labeled separately.
- [x] No backend, database, active form, booking, payment, XML sitemap, formal audit, monitoring system, staging environment, or committed Playwright suite is claimed as current.
- [x] The current Pages workflow is described factually while the production-policy discrepancy remains unresolved.
- [x] Security, privacy, legal, accessibility, and payment material is educational engineering guidance, not certification or professional legal advice.
- [x] Tradeoffs and review triggers are included so answers do not present one architecture as universally best.
