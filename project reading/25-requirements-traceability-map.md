# 25 - Requirements Traceability Map

## 1. Purpose

A requirements traceability map answers five questions:

1. What did someone ask the project to provide?
2. Where was that request recorded?
3. Where was it implemented?
4. How was it checked?
5. Is it complete, pending, deferred, or blocked?

For a beginner, think of this document as a chain of evidence rather than a second project plan.

~~~text
Request
  |
  v
Approved requirement
  |
  v
Design decision
  |
  v
Code or content
  |
  v
Test evidence
  |
  v
Current status
~~~

If a link in this chain is missing, the team should not assume the requirement is finished.

## 2. Why traceability matters

Without traceability, a project can fail in several quiet ways:

- A requested feature may never reach the code.
- Code may exist even though nobody approved the feature.
- A feature may be implemented but never tested.
- A test may pass against an obsolete requirement.
- Documentation may say “complete” while the public page still contains a placeholder.
- A later maintainer may remove behavior without realizing why it was added.

Traceability is especially useful here because the project began with a Word outline, gained approved additions through conversation, and still has business and legal inputs pending.

## 3. Sources of truth and their roles

The project has several sources. They do not all have the same authority.

| Source | What it should answer | What it should not be used for |
|---|---|---|
| Supplied Word outline | Original business structure, audiences, pages, services, and requested language | Inventing details absent from the outline |
| `project_plan.md` | Approved scope, architecture, phases, constraints, and pending inputs | Proving that code actually works |
| Conversation-approved changes | Later owner decisions such as responsive rendering, dark mode, sitemap, and UX changes | Replacing a stable written record forever |
| HTML, CSS, and JavaScript | What the current website actually renders and does | Proving business claims are approved |
| `checklist.md` | Implementation and launch status | Acting as the only technical test record |
| `UX_improvements.MD` | UX proposals, implemented UX changes, and lessons | Defining every original business requirement |
| Browser QA artifacts | Evidence of behavior at tested times and sizes | Guaranteeing every browser/device forever |
| This handbook | Teaching and explaining the project | Overriding the owner or approved source material |

### 3.1 Precedence rule

When two records disagree, do not choose the most convenient one. Investigate.

~~~text
Conflict found
    |
    +--> Is it a business/content question?
    |       |
    |       +--> Ask the authorized owner and preserve approval evidence
    |
    +--> Is it a current-code question?
    |       |
    |       +--> Inspect the repository and test the running site
    |
    +--> Is it a policy or platform question?
            |
            +--> Recheck the current official policy/documentation
~~~

## 4. Status vocabulary

This map uses precise status labels.

| Status | Meaning |
|---|---|
| Implemented | The code/content exists in the repository |
| Verified | The implementation was checked with appropriate evidence |
| Pending owner input | Work cannot be truthfully completed until the owner supplies or approves information |
| Deferred | Deliberately postponed; not a defect in the current agreed scope |
| Disabled by design | Visible pathway exists but cannot safely operate yet |
| Recommended future work | Useful idea that was not approved as a current requirement |
| Discrepancy | Two project records or configuration facts conflict and need reconciliation |
| Not applicable | Requirement does not apply to this architecture |

“Implemented” and “verified” are separate. A feature can exist without having enough test evidence.

## 5. Requirement identifier system

Stable identifiers make discussion easier.

- `BUS` - business purpose or audience
- `PAGE` - page or content structure
- `TECH` - technology or architecture
- `RESP` - responsive/mobile rendering
- `THEME` - light/dark theme
- `NAV` - navigation and wayfinding
- `UX` - interaction improvement
- `A11Y` - accessibility
- `CONTENT` - claims, media, or editorial content
- `BOOK` - pricing, booking, billing, or payment
- `LEGAL` - corporate or legal information
- `SEO` - sitemap and search discoverability
- `DEPLOY` - hosting and deployment
- `QA` - verification and quality assurance
- `DOC` - project documentation

Identifiers describe requirements, not code line numbers. Line numbers move; requirement IDs should remain stable.

## 6. Executive traceability matrix

### 6.1 Business goals and audience routing

| ID | Requirement | Origin/evidence | Implementation | Verification | Status |
|---|---|---|---|---|---|
| BUS-01 | Present Abhinav Creations as a premium production studio | Word outline; project plan Sections 1-2 | `index.html` hero and supporting sections | Visual/content review | Implemented; business claims still require approval where marked |
| BUS-02 | Serve creative B2C visitors | Word outline | `creators-actors.html`; Home audience path | Link and page review | Implemented |
| BUS-03 | Serve corporate B2B visitors | Word outline | `brands-businesses.html`; Home audience path | Link and page review | Implemented |
| BUS-04 | Route both audiences toward pricing/booking | Word outline | CTAs to `pricing-booking.html` | Internal-link and browser QA | Implemented, transaction flow disabled by design |
| BUS-05 | Do not fabricate missing business details | Approved project rule | Pending panels, development notices, disabled controls | Content audit against checklist | Implemented as a governance rule |

### 6.2 Pages and content architecture

| ID | Requirement | Implementation evidence | Verification | Status |
|---|---|---|---|---|
| PAGE-01 | Home page | `index.html` | Browser QA and landmark checks | Verified |
| PAGE-02 | Studio Spaces & Gear | `studio-spaces.html` | Browser QA, anchor validation | Verified |
| PAGE-03 | Creators & Actors | `creators-actors.html` | Browser QA, anchor validation | Verified |
| PAGE-04 | Brands & Businesses | `brands-businesses.html` | Browser and content review | Verified |
| PAGE-05 | Pricing & Live Booking | `pricing-booking.html` | Disabled-state and link review | Shell verified; real service pending |
| PAGE-06 | Contact Us | `contact.html` | Content review confirms no invented contact data | Shell verified; approved details pending |
| PAGE-07 | Privacy Policy | `privacy.html` | Pending-state review | Shell verified; legal text pending |
| PAGE-08 | Terms of Studio Usage | `studio-terms.html` | Pending-state review | Shell verified; legal text pending |
| PAGE-09 | Cancellation & Refund Policies | `cancellation-refunds.html` | Pending-state review | Shell verified; legal text pending |
| PAGE-10 | Digital Talent Release Terms | `talent-release.html` | Pending-state review | Shell verified; legal text pending |
| PAGE-11 | Visitor-facing sitemap | `sitemap.html` | Link and anchor checks | Verified |
| PAGE-12 | Custom missing-page response | `404.html` | Representative browser QA | Verified |

### 6.3 Technology and architecture

| ID | Requirement/decision | Evidence | Why | Status |
|---|---|---|---|---|
| TECH-01 | Use a static multi-page architecture | HTML pages plus shared assets | Matches scope and static hosting | Implemented |
| TECH-02 | Use HTML5 for structure | All `.html` pages | Native browser semantics and portability | Implemented |
| TECH-03 | Use CSS3 for layout/themes | `assets/css/styles.css` | Shared responsive design system | Implemented |
| TECH-04 | Use browser JavaScript for enhancements | `assets/js/main.js` | Small interactive features without a framework | Implemented |
| TECH-05 | Avoid a runtime backend/database | Repository contains neither | Not needed for current public read-only behavior | Implemented architectural boundary |
| TECH-06 | Avoid React/Jekyll/build tooling initially | No corresponding config or dependencies | Lower complexity for this custom static site | Implemented decision |
| TECH-07 | Keep secrets out of browser code | Public files contain no service credentials | Browser code is inspectable | Verified by repository review; repeat before launch |
| TECH-08 | Preserve readable, heavily documented code | Comments in HTML/JS and `documentation.md` | Beginner maintainability | Implemented; readability remains a review judgment |

### 6.4 Responsive rendering and themes

| ID | Requirement | Implementation | Verification | Status |
|---|---|---|---|---|
| RESP-01 | One website must render well on mobile, tablet, and desktop | Flexible CSS grids, containers, typography, and media queries | Representative narrow/wide browser QA | Verified at sampled sizes, not every device |
| RESP-02 | Do not create a separate mobile website | Same URLs and HTML serve all widths | Architecture inspection | Verified |
| RESP-03 | Mobile header controls must sit at the far right | Header flex/layout rules in `styles.css` | Mobile screenshot and browser QA | Verified |
| RESP-04 | Avoid horizontal page overflow | Responsive CSS and constrained media | Representative narrow-width check | Verified at tested width |
| RESP-05 | Cards/columns stack where necessary | Responsive Grid/Flexbox rules | Visual QA | Verified |
| THEME-01 | Provide light and dark modes | CSS custom properties and `data-theme` | Both-theme browser QA | Verified |
| THEME-02 | Provide a theme toggle on pages | `[data-theme-toggle]`; `initializeThemeToggle()` | Interaction QA | Verified |
| THEME-03 | Remember explicit visitor choice | Safe `localStorage` helpers | Cross-page theme QA | Verified where browser storage is available |
| THEME-04 | Respect device preference without explicit choice | `prefers-color-scheme` query | Logic/interaction review | Implemented |
| THEME-05 | Minimize wrong-theme flash | Early inline theme restoration in each page | Visual review | Implemented, not an absolute zero-flash guarantee |

### 6.5 Navigation, UX, and accessibility

| ID | Requirement | Implementation | Verification | Status |
|---|---|---|---|---|
| NAV-01 | Shared primary navigation | Page headers | Internal-link/browser review | Verified |
| NAV-02 | Collapsible mobile navigation | `initializeNavigation()` and mobile CSS | Open/close, Escape, outside-click, link-selection QA | Verified |
| NAV-03 | Prevent background scrolling while mobile menu is open | `menu-is-open` classes and CSS | Mobile interaction QA | Verified |
| NAV-04 | Breadcrumbs on non-home pages | `.breadcrumbs` markup | Page review | Implemented |
| NAV-05 | Persistent in-page navigation on Studio page | `data-section-navigation` in `studio-spaces.html` | Repeated selection, active state, anchor QA | Verified after iterative fix |
| NAV-06 | Persistent in-page navigation on Creators page | `data-section-navigation` in `creators-actors.html` | Repeated selection, active state, anchor QA | Verified after iterative fix |
| NAV-07 | Sitemap anchors must match long-page controls | `sitemap.html` and target IDs | Cross-file anchor check | Verified |
| UX-01 | Back-to-top control on every page | Dynamically created by `initializeBackToTopButton()` | Reveal, auto-hide, focus-return, reduced-motion QA | Verified |
| UX-02 | Back-to-top must not cover reading content indefinitely | Inactivity timer and visibility threshold | Behavior QA | Verified; any floating control can temporarily overlap a small area |
| UX-03 | Home media carousel must be manual | `initializeCarousels()`; no autoplay | Button and arrow-key QA | Verified |
| UX-04 | Remove editorial section numbering such as 2.1/4.1 | Visible copy edited across pages | Text search and visual review | Implemented |
| UX-05 | Use normal hyphens instead of em dashes in visitor-facing text | HTML content edits | Repository text check | Implemented for website copy; technical docs may use other punctuation |
| UX-06 | Keep hero logo square, level, and free of decorative duplicate border | Logo asset and hero CSS | Light/dark visual QA | Verified |
| A11Y-01 | Provide skip links and semantic landmarks | HTML page structure | Structural review | Implemented |
| A11Y-02 | Keep controls keyboard operable | Native buttons/links and keyboard handlers | Keyboard QA | Verified for sampled flows |
| A11Y-03 | Expose control state to assistive technology | ARIA labels, `aria-expanded`, `aria-current`, live carousel status | Markup and interaction review | Implemented |
| A11Y-04 | Respect reduced-motion preference | CSS/JS media query handling | Reduced-motion behavior review | Implemented |
| A11Y-05 | Restore logical focus after closing menu or returning to top | JavaScript focus handling | Keyboard QA | Verified |
| A11Y-06 | Do not claim formal accessibility certification | Handbook/checklist wording | Documentation review | Compliant statement; formal audit not performed |

### 6.6 Content, booking, legal, and privacy

| ID | Requirement | Current evidence | Status/next owner |
|---|---|---|---|
| CONTENT-01 | Show supplied studio/service descriptions | Studio, creator, and brand pages | Implemented; owner must confirm claims |
| CONTENT-02 | Use approved real portfolio media | Home carousel currently uses honest placeholders | Pending owner media and rights evidence |
| CONTENT-03 | Publish only verified equipment/facility claims | Checklist Section 7 | Pending owner confirmation |
| BOOK-01 | Show pricing and booking pathway | `pricing-booking.html` | Page shell implemented |
| BOOK-02 | Publish approved rates and packages | No rates intentionally published | Pending owner/finance approval |
| BOOK-03 | Provide live scheduling | Disabled status page | Pending compliant provider selection/configuration |
| BOOK-04 | Provide cashless payment | No payment fields or secrets | Pending suitable external service or backend |
| BOOK-05 | Never imply a live transaction when none exists | Notices and disabled button | Implemented and verified |
| LEGAL-01 | Display ESPL relationship wording | Shared footer | Implemented; owner confirmation pending |
| LEGAL-02 | Display registered address | Shared footer | Implemented from source; owner confirmation pending |
| LEGAL-03 | Display Corporate GSTIN | Marked “Pending approved value” | Pending owner-approved value |
| LEGAL-04 | Publish operative legal policies | Legal page shells only | Pending qualified review and approval |
| LEGAL-05 | Obtain talent-release wording | Placeholder explicitly grants no consent | Pending qualified review/approval |
| CONTENT-04 | Publish approved contact details | Contact page refuses to invent them | Pending owner input |
| CONTENT-05 | Decide whether to collect contact-form data | No form exists | Pending business/privacy decision |

### 6.7 Search discovery, deployment, QA, and documentation

| ID | Requirement | Evidence | Status |
|---|---|---|---|
| SEO-01 | Visitor-facing sitemap | `sitemap.html` | Verified |
| SEO-02 | XML sitemap using production URLs | No `sitemap.xml` | Pending final domain/host |
| SEO-03 | `robots.txt` referencing XML sitemap | No `robots.txt` | Pending final domain/host |
| SEO-04 | Website-wide search | No search implementation | Deliberately deferred |
| SEO-05 | Useful titles/descriptions/headings | Metadata and semantic headings in HTML | Implemented; final content review pending |
| DEPLOY-01 | Keep site technically compatible with static hosting | Plain files, relative links, no build | Verified |
| DEPLOY-02 | Automate GitHub Pages deployment | `.github/workflows/static.yml` | Implemented in repository |
| DEPLOY-03 | Decide whether GitHub Pages is an approved production host for this commercial use | Project records conflict with current workflow/published intent | Discrepancy; owner must reconcile policy and deployment decision |
| DEPLOY-04 | Use HTTPS/custom domain appropriately | Host/domain not finalized in project records | Pending production decision |
| QA-01 | Validate JavaScript syntax | `node --check` cited in checklist/docs | Previously completed; repeat per JS change |
| QA-02 | Check internal links/assets/anchors | Checklist and prior QA | Previously completed; repeat per navigation change |
| QA-03 | Test narrow and wide layouts | Playwright-assisted browser QA artifacts | Completed at representative widths |
| QA-04 | Maintain reusable automated Playwright suite | No `package.json`, config, or committed tests | Not currently implemented; future option |
| QA-05 | Test final production site | Final public configuration/content unavailable | Pending launch |
| DOC-01 | Maintain project plan | `project_plan.md` | Implemented; contains items needing reconciliation |
| DOC-02 | Maintain code documentation | `documentation.md` | Implemented |
| DOC-03 | Maintain implementation checklist | `checklist.md` | Implemented; contains deployment discrepancy |
| DOC-04 | Maintain UX record | `UX_improvements.MD` | Implemented |
| DOC-05 | Maintain beginner handbook | `project reading/` | Implemented and expanded |

## 7. Detailed example: tracing dark mode

~~~text
Owner request
  “Add a dark mode toggle”
        |
        v
Project requirement
  THEME-01 through THEME-05
        |
        +--> HTML: theme button + early restoration script
        +--> CSS: light/dark custom-property values
        +--> JS: resolve, toggle, label, and store theme
        |
        v
Verification
  light view + dark view + cross-page persistence
  + storage failure fallback + accessible label
        |
        v
Result
  Verified at tested browser configurations
~~~

The final wording is deliberately “verified at tested configurations,” not “works perfectly in every browser forever.”

## 8. Detailed example: tracing booking

Booking illustrates why a requirement can be partially implemented.

~~~text
Business request: live booking and cashless checkout
                    |
                    v
Static site can provide the public pathway and explanation
                    |
                    +--> pricing-booking.html exists
                    +--> CTAs reach it
                    +--> unavailable state is truthful
                    |
                    v
Secure transaction capability requires more
                    |
                    +--> approved prices and rules
                    +--> provider/backend decision
                    +--> protected credentials
                    +--> privacy/legal review
                    +--> failure and confirmation testing
                    |
                    v
Current state: shell verified; transaction disabled by design
~~~

Marking BOOK-03 or BOOK-04 “complete” today would be inaccurate even though the page exists.

## 9. Known discrepancy register

### DIS-01 - GitHub Pages workflow versus planning/checklist statements

Observed on 17 July 2026:

- `.github/workflows/static.yml` exists and deploys the repository on pushes to `main`.
- The root `README.md` describes GitHub Pages publication.
- `project_plan.md` and `checklist.md` contain statements that GitHub Pages should not be treated as the commercial production host and, in places, that no Pages workflow is included.

These claims cannot all describe the same intended deployment state.

Required resolution:

1. Recheck the current applicable GitHub Pages terms from the official source.
2. Decide whether the Pages deployment is a preview, a temporary pre-launch environment, or an approved public production deployment.
3. Obtain the owner's hosting decision.
4. Update the workflow, root README, project plan, checklist, and handbook together.
5. Retest the selected deployment path.

This map records the discrepancy; it does not make the business/policy decision.

## 10. Change-impact map

Use this before editing a feature.

| If changing... | Inspect/update... | Retest... |
|---|---|---|
| Primary navigation | Every HTML header, footer where relevant, `sitemap.html` | Desktop/mobile nav, keyboard, active-page state, links |
| Studio or creator anchors | Target page, persistent section row, `sitemap.html` | Repeated click, hash URL, sticky offset, active state |
| Theme | Early scripts, CSS tokens, `main.js` | Both themes, persistence, system preference, blocked storage |
| Mobile menu | Header markup, navigation CSS, `initializeNavigation()` | Outside click, Escape, focus, scroll lock, resize |
| Back-to-top | `SITE_CONFIG`, initializer, CSS | Threshold, inactivity, overlap, keyboard, reduced motion |
| Carousel | Home markup, initializer, carousel CSS | Buttons, arrow keys, status announcement, no autoplay |
| Contact/booking | Pages, policies, privacy statements, checklist | Data flow, validation, provider failure, security, consent |
| New public page | Header/footer links, breadcrumbs, sitemap, 404 assumptions | Links, title, headings, narrow/wide layout |
| Production domain | Deployment, canonical URLs, XML sitemap, robots, social metadata | Live URLs, redirects, HTTPS, 404, cache |

## 11. How to maintain this map

For every approved requirement change:

1. Give it a stable ID or revise an existing requirement.
2. Record the authoritative source and approval date.
3. Name the affected files/components.
4. Define observable acceptance criteria before coding.
5. Implement the smallest coherent change.
6. Record test evidence and limitations.
7. Update status only after reviewing both code and evidence.
8. Link any unresolved dependency to a named owner or decision.

Do not delete a historical requirement merely because it was rejected. Mark it superseded or deferred and explain why.

## 12. Acceptance-criteria template

~~~markdown
### REQ-ID - Short requirement name

- Source:
- Owner/approver:
- User need:
- Scope included:
- Scope excluded:
- Acceptance criteria:
  - [ ] Observable result one
  - [ ] Observable result two
- Implementation files:
- Test evidence:
- Dependencies:
- Status:
- Last reviewed:
~~~

## 13. Traceability review checklist

- [ ] Every active requirement has an ID.
- [ ] Every ID names an authoritative origin.
- [ ] Business approval and technical implementation are not confused.
- [ ] Every implemented interaction has observable acceptance criteria.
- [ ] Test evidence matches the current implementation.
- [ ] Pending owner inputs remain pending in both UI and documentation.
- [ ] Deferred ideas are not described as defects.
- [ ] Sitemap and navigation destinations match.
- [ ] Deployment documentation matches the actual workflow.
- [ ] No automated test suite is claimed unless test files exist and run.
- [ ] Dates are attached to policy/platform checks that may become stale.
- [ ] Production validation is not claimed from local-only testing.

## 14. Sanity check

This traceability map was derived from the repository state reviewed on 17 July 2026. It distinguishes implemented files, prior browser QA, pending owner inputs, deferred features, and future recommendations. It does not claim that missing legal text, pricing, booking, payments, contact details, XML sitemap, production-domain configuration, formal accessibility certification, formal security audit, or a committed automated Playwright suite exists.

The deployment discrepancy in Section 9 is intentionally visible. A traceability document must reveal contradictions, not smooth them over.
