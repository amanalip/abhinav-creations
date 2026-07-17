# 27 - Architecture Decision Records

## 1. What is an Architecture Decision Record?

An Architecture Decision Record, usually abbreviated **ADR**, is a short, durable explanation of an important technical decision.

It answers:

- What situation forced a choice?
- What options were considered?
- What was decided?
- Why was it decided?
- What benefits and costs follow?
- When should the decision be reviewed?

An ADR does not prove that a decision is perfect. It prevents future maintainers from having to guess why the project looks the way it does.

~~~text
Problem or constraint
       |
       v
Possible options
       |
       v
Decision + reasoning
       |
       v
Consequences and review trigger
~~~

## 2. Why this project benefits from ADRs

Several choices may look “too simple” or unusual to someone arriving from a framework-heavy project:

- Plain HTML instead of a component framework.
- Repeated header/footer markup instead of generated templates.
- Small independent JavaScript initializers.
- Honest disabled transaction controls.
- No autoplay.
- Persistent anchor links instead of a mobile selection popup.

These are deliberate tradeoffs, not accidental omissions.

## 3. ADR lifecycle and status

An ADR commonly uses one of these statuses:

| Status | Meaning |
|---|---|
| Proposed | Under discussion; not yet authoritative |
| Accepted | Current decision |
| Superseded | Replaced by a newer ADR |
| Deprecated | Still present temporarily but should not guide new work |
| Rejected | Considered and deliberately not chosen |

Never rewrite history to make an old choice appear inevitable. If the context changes, add a new ADR that supersedes the old one.

## 4. Project decision summary

| ADR | Decision | Status |
|---|---|---|
| ADR-001 | Use a static multi-page site | Accepted |
| ADR-002 | Use plain HTML, CSS, and JavaScript | Accepted |
| ADR-003 | Use shared CSS/JS without a current templating build | Accepted |
| ADR-004 | Apply progressive enhancement | Accepted |
| ADR-005 | Implement responsive rendering as one site | Accepted |
| ADR-006 | Implement persistent light/dark themes | Accepted |
| ADR-007 | Use ordinary anchor buttons for long-page navigation | Accepted; supersedes the earlier select-like concept |
| ADR-008 | Use manual carousel controls with no autoplay | Accepted |
| ADR-009 | Keep transactions and data collection disabled until real services are approved | Accepted |
| ADR-010 | Use honest placeholders and content governance | Accepted |
| ADR-011 | Use GitHub Actions for current static Pages deployment | Present implementation; production policy decision unresolved |
| ADR-012 | Use Playwright-assisted browser QA without claiming a committed suite | Accepted description of current testing |
| ADR-013 | Defer website-wide search | Accepted deferral |
| ADR-014 | Prefer native browser features and minimal dependencies | Accepted |

## 5. ADR-001 - Static multi-page architecture

**Status:** Accepted  
**Decision scope:** Overall website architecture

### Context

The project needs public informational pages, audience routing, service descriptions, responsive presentation, themes, navigation enhancements, a carousel, and pathways toward future contact/booking services. It does not currently need user accounts, personalized dashboards, private database queries, or server-rendered content.

### Options considered

1. Static multi-page HTML site.
2. Single-page application using a frontend framework.
3. Server-rendered application with a backend and database.
4. Content-management system.

### Decision

Use a static multi-page site where each major destination has its own HTML file and URL.

### Reasoning

- Directly supported by browsers and static hosts.
- Each page remains linkable and understandable.
- No runtime server is needed for present requirements.
- Failure surface and maintenance burden remain small.
- A beginner can trace a URL to a file.
- Future external services can be linked or integrated at a clear boundary.

### Consequences

Benefits:

- Fast, portable delivery.
- Simple local preview.
- Small attack surface compared with a custom backend.
- No application runtime or database operations.

Costs:

- Shared header/footer markup is repeated.
- Site-wide content changes require careful multi-file edits.
- Private data workflows need a separate trusted service.
- Very large content collections could eventually need generation/search tooling.

### Review trigger

Reconsider if approved requirements add authentication, personalized/private data, complex content authoring by non-developers, hundreds of pages, or tightly integrated transactional workflows.

## 6. ADR-002 - Plain HTML, CSS, and JavaScript

**Status:** Accepted  
**Decision scope:** Frontend technology stack

### Context

The interactive surface is modest. A framework could provide component templating and state tools, but would also introduce dependencies, compilation, configuration, and upgrade work.

### Decision

Use semantic HTML5, one shared CSS design system, and one shared browser JavaScript file.

### Alternatives

- React/Next.js.
- Vue/Nuxt.
- Angular.
- Jekyll or another static-site generator.
- CSS/JavaScript frameworks.

### Reasoning

The native platform already provides the necessary capabilities. Complexity should be justified by requirements, not popularity.

### Consequences

- Source is directly inspectable.
- No dependency installation or build command is required.
- Developers must manually preserve consistency across pages.
- Advanced application state patterns are unavailable because they are unnecessary today.

### Review trigger

Reconsider when duplication, content scale, author workflow, or application behavior creates measured maintenance problems that a tool clearly solves.

## 7. ADR-003 - Shared assets without a current template build

**Status:** Accepted  
**Decision scope:** Reuse and page composition

### Context

Pages share the design system and behavior. They also repeat header and footer HTML because there is no build or server-side include system.

### Decision

Centralize styles in `assets/css/styles.css` and behaviors in `assets/js/main.js`, while keeping page structure in standalone HTML files.

### Why not dynamically inject the header/footer with JavaScript?

That would make essential navigation depend on JavaScript, create a visible loading delay, complicate relative paths, and reduce the value of directly readable HTML.

### Consequences

- Visual and behavior changes can be shared.
- Essential content and navigation work without JavaScript.
- Header/footer edits must be synchronized manually.
- Multi-file checks are part of the definition of done.

### Review trigger

If page count or shared-markup drift becomes costly, evaluate a static-site generator or build-time include mechanism. Do not add client-side injection merely to avoid a build step.

## 8. ADR-004 - Progressive enhancement

**Status:** Accepted  
**Decision scope:** Resilience and accessibility

### Context

JavaScript can fail, be blocked, or load late. Core public content should remain readable and normal links should remain usable.

### Decision

Start with meaningful HTML, use CSS for presentation, and add JavaScript enhancements only where behavior requires it.

~~~text
Meaningful HTML
      |
      +--> CSS improves presentation
      |
      +--> JavaScript improves interaction
      |
      v
Core content remains available if enhancement fails
~~~

### Examples

- Section navigation starts as ordinary anchor links.
- Primary destinations are normal links.
- JavaScript creates the Back-to-top button because it is useful only with the enhanced behavior.
- Each initializer exits safely when its component is absent.

### Consequences

- Better resilience and simpler mental model.
- More care is required to preserve a usable baseline.
- Some enhanced state, such as theme persistence, may be unavailable when storage/scripts fail.

## 9. ADR-005 - One responsive site

**Status:** Accepted  
**Decision scope:** Mobile, tablet, and desktop rendering

### Context

The owner clarified that the goal is not a separate “mobile design,” but a website that renders well on mobile.

### Decision

Serve the same pages and content to all devices. Use flexible layout, responsive media, and content-driven breakpoints.

### Rejected alternative

A separate mobile subdomain or reduced mobile page set.

### Reasoning

- One source of truth.
- No content parity problem.
- URLs remain consistent.
- Modern CSS handles layout adaptation.
- Easier maintenance and accessibility.

### Consequences

Every feature must be tested across representative widths. Desktop success does not imply mobile success.

## 10. ADR-006 - Persistent light/dark themes

**Status:** Accepted  
**Decision scope:** Appearance preference

### Context

The owner explicitly requested a dark-mode toggle. The experience should respect both the visitor's device preference and an explicit manual choice.

### Decision

- Express themes through CSS custom properties.
- Use `data-theme` on the root element for an explicit choice.
- Read/write the choice through guarded `localStorage` calls.
- Fall back to `prefers-color-scheme`.
- Restore a saved valid theme early to reduce wrong-theme flash.

### Alternatives considered

- Device preference only.
- Toggle without persistence.
- Separate stylesheets.

### Consequences

- Both themes must be tested for every component.
- Browser storage failure must not break the page.
- Repeated small inline restoration logic exists in page heads.

### Review trigger

Review if theme choices expand beyond two, if a strict Content Security Policy disallows inline scripts, or if the site adopts a build/template system.

## 11. ADR-007 - Persistent anchor-button navigation on long pages

**Status:** Accepted; supersedes the earlier select-like mobile concept  
**Decision scope:** `studio-spaces.html` and `creators-actors.html`

### Context

Visitors who jumped deep into a long page had to scroll back up to select another section. An earlier select-like control proved unreliable: active state changed during smooth scrolling and repeated selection sometimes caused small unwanted movement.

### Decision

Use a sticky row of ordinary anchor links at every width. On narrow screens the row scrolls horizontally. JavaScript:

- Scrolls the requested section into view.
- Holds the requested active state until movement settles.
- Updates `aria-current` during ordinary scrolling.
- Keeps the active link visible.
- Does not rewrite history during passive scrolling.

### Alternatives considered

- Native/select-like popup.
- Floating navigation button.
- Duplicate navigation after every section.
- Back-to-top only.

### Reasoning

Direct options are visible, repeatable, keyboard-compatible, and easier to synchronize than a transient selection popup.

### Consequences

- Horizontal overflow is intentional inside the link row, not across the page.
- Sticky offsets and repeated clicks require browser testing.
- Sitemap anchors must stay synchronized with target IDs.

### Review trigger

Reconsider if the number of sections grows beyond what a horizontal row can reasonably communicate.

## 12. ADR-008 - Manual carousel without autoplay

**Status:** Accepted  
**Decision scope:** Home portfolio/media component

### Context

The outline requested a slider, while final approved media was not yet supplied. Automatic playback was not requested.

### Decision

Provide previous/next buttons, arrow-key operation, one active slide, and a live position status. Do not autoplay.

### Reasoning

- Visitors control movement.
- Lower motion and distraction.
- No timer/pause complexity.
- Honest placeholder slides can validate layout without inventing media.

### Consequences

Final media still requires rights, optimization, alternate text, and regression testing.

## 13. ADR-009 - Disable transactions and data collection until approved

**Status:** Accepted  
**Decision scope:** Contact, booking, billing, and payment

### Context

The outline describes live booking and cashless checkout, but approved providers, rates, contact destinations, privacy handling, and final policies are absent. Static public JavaScript cannot protect secrets.

### Decision

Provide truthful informational shells and pathways, but do not collect or transmit visitor data and do not enable transaction controls.

### Alternatives considered

- Mock working form.
- Placeholder rates.
- Client-side API credentials.
- Unreviewed third-party widget.

### Reasoning

The rejected alternatives could mislead visitors, expose secrets, create privacy obligations, or publish incorrect commercial terms.

### Consequences

- The pre-launch site cannot complete its intended commercial journey yet.
- Future provider selection requires new architecture, privacy, security, legal, and QA decisions.
- Disabled status must remain visually and semantically clear.

### Review trigger

Approved service/provider selection plus complete data-flow and policy review.

## 14. ADR-010 - Honest placeholders and content governance

**Status:** Accepted  
**Decision scope:** Business claims and unfinished content

### Context

Missing information includes prices, media, contact details, GSTIN, schedules, package scope, and legal wording.

### Decision

Never invent production facts. Use explicit pending labels, pre-launch notices, and checklists until authoritative content is supplied and approved.

### Consequences

- Prototype presentation is intentionally less polished than a falsely complete launch.
- Content approval becomes a real project dependency.
- Every replacement must preserve traceability to its approver/source.

## 15. ADR-011 - Current GitHub Actions Pages deployment

**Status:** Implementation present; production decision unresolved  
**Decision scope:** Deployment

### Context

`.github/workflows/static.yml` deploys static repository content to GitHub Pages on pushes to `main` and through manual dispatch. The root README describes this flow. The plan/checklist also record a concern about current GitHub Pages commercial-use restrictions and include contradictory statements about whether the workflow exists.

### Present implementation

~~~text
Push to main or manual dispatch
          |
          v
Checkout -> Configure Pages -> Upload repository -> Deploy Pages
~~~

### Decision record

Retain this as a factual record of current configuration, not as approval that Pages is the final production host.

### Required follow-up

- Recheck current official service terms.
- Decide preview versus production role.
- Reconcile workflow, README, plan, checklist, and handbook.
- Confirm whether uploading the entire repository exposes documentation/artifacts that should not be public.
- Test the final live configuration.

### Consequences

A push to `main` can cause an external deployment. Contributors must treat `main` as deployment-sensitive until the workflow changes.

## 16. ADR-012 - Playwright-assisted QA without a committed suite

**Status:** Accepted description of current practice  
**Decision scope:** Browser verification

### Context

The project needed real-browser inspection during iterative UX work. Playwright tooling was used interactively, and artifacts exist. There is no package manifest, Playwright configuration, or committed test specification.

### Decision

Describe current evidence as “Playwright-assisted browser QA,” not “an automated Playwright test suite.” Provide a separate future setup guide.

### Consequences

- Current claims remain honest.
- Repeating the entire QA matrix requires manual/interactive work.
- A future suite can be added when repeatability justifies setup and maintenance.

## 17. ADR-013 - Defer website-wide search

**Status:** Accepted deferral  
**Decision scope:** Content discovery

### Context

The user considered website-wide text search. The current site has few pages, final content is incomplete, and navigation/sitemap improvements cover current discovery needs.

### Decision

Do not implement search now.

### Reasoning

Search requires indexing, result ranking/snippets, keyboard/accessibility design, no-result states, content synchronization, and testing. Its current value does not exceed this cost.

### Review trigger

Reconsider when page/content volume grows, visitors report difficulty, analytics/support evidence shows a discovery problem, and final content is stable.

## 18. ADR-014 - Minimal dependencies and native platform features

**Status:** Accepted  
**Decision scope:** Maintenance and supply chain

### Context

Every dependency introduces versioning, update, license, security, and build implications.

### Decision

Prefer native HTML/CSS/JavaScript when it clearly satisfies the requirement. Add a dependency only with an explicit problem statement and ownership plan.

### Dependency decision checklist

- What exact problem does it solve?
- Can the browser platform solve it adequately?
- What is its download/runtime cost?
- Who maintains updates?
- What is its license?
- What data does it transmit?
- Does it change deployment?
- Can it be removed later?
- How will it be tested?

## 19. Rejected or deferred alternatives summary

| Alternative | Current disposition | Reason |
|---|---|---|
| Jekyll | Rejected for initial architecture | No Markdown/blog generation need |
| React or another SPA framework | Rejected for current scope | Disproportionate complexity |
| Custom backend/database | Deferred | No current trusted-data need; future transactions may change this |
| Separate mobile site | Rejected | Responsive single site is more maintainable |
| Autoplay carousel | Rejected | No requirement; added motion/control burden |
| Select-like persistent navigation | Superseded | Unreliable interaction during active scroll tracking |
| Website-wide search | Deferred | Current content scale/value does not justify complexity |
| Client-side payment logic/secrets | Rejected | Unsafe trust boundary |
| Fabricated placeholder business/legal content | Rejected | Misleading and risky |
| Automated Playwright suite | Deferred, not rejected | Valuable future repeatability; setup not currently present |

## 20. ADR template for future decisions

~~~markdown
# ADR-NNN - Decision title

- Status: Proposed | Accepted | Superseded | Deprecated | Rejected
- Date:
- Decision owners:
- Supersedes:
- Superseded by:

## Context

What problem, requirement, evidence, and constraints created this decision?

## Decision drivers

- Driver one
- Driver two

## Options considered

1. Option A
2. Option B

## Decision

State the chosen direction plainly.

## Reasoning

Explain why it best fits the current context.

## Consequences

### Positive

- ...

### Negative or costly

- ...

### Risks and mitigations

- Risk -> mitigation

## Verification

How will we know the decision works?

## Review trigger

What future evidence should cause reconsideration?
~~~

## 21. How to conduct a decision review

~~~text
New requirement or pain appears
           |
           v
Does an existing ADR cover it?
    | yes                | no
    v                    v
Check review trigger   Draft proposed ADR
    |
    v
Gather evidence and alternatives
    |
    v
Keep decision OR write superseding ADR
    |
    v
Implement, test, and update traceability
~~~

Avoid “architecture by fashion.” Evidence might include page count, measured performance, defect rate, editing time, accessibility results, provider requirements, or approved business workflows.

## 22. Sanity check

- [x] Decisions are explained as context-dependent tradeoffs.
- [x] Current architecture is not presented as universally superior.
- [x] Rejected, deferred, and superseded choices are distinguished.
- [x] The Pages workflow is described as present without resolving the production-policy conflict by assumption.
- [x] Browser QA is not mislabeled as a committed automated suite.
- [x] Future booking, form, search, backend, templating, and dependency decisions have review triggers.
- [x] No confidential OpenAI or provider architecture is claimed.
