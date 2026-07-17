# 28 - Release and Change Management

## 1. Purpose

Change management is the disciplined process for deciding, implementing, reviewing, publishing, and learning from a change. Release management focuses on moving an approved collection of changes into a public environment safely.

For a small static website, the process can be lightweight, but it should not be absent.

~~~text
Idea -> Requirement -> Change -> Review -> Test -> Approval
                                                |
                                                v
                                      Release -> Verify -> Observe
                                                |
                                                v
                                          Learn or roll back
~~~

## 2. Why a static website still needs release control

A one-line HTML change can:

- Publish an incorrect price.
- Break a navigation link.
- Make a legal statement operative by accident.
- Create mobile overflow.
- Expose private information.
- Trigger an automatic deployment.
- Remove an accessible label.
- Send visitors to the wrong booking destination.

“No backend” reduces some technical complexity. It does not remove business, content, accessibility, or deployment risk.

## 3. Current project release reality

As reviewed on 17 July 2026:

- The source is a static HTML/CSS/JavaScript repository.
- `.github/workflows/static.yml` triggers a GitHub Pages deployment on pushes to `main` and on manual dispatch.
- The workflow uploads the repository as the Pages artifact.
- The root README describes this deployment.
- The project plan/checklist also contain unresolved statements about commercial hosting policy and whether Pages should be production.
- Final contact, pricing, booking, payment, media, GSTIN, and legal content remain pending.

Therefore:

1. Treat a push to `main` as a potentially public release action.
2. Do not treat the current deployment configuration as final production approval.
3. Resolve the hosting-policy/documentation discrepancy before launch.

## 4. Definitions

### Change

Any modification to code, content, configuration, assets, documentation, or external-service setup.

### Release

A version intentionally made available in a target environment.

### Deployment

The technical act of transferring or activating a release. A deployment can succeed technically while the release is still wrong from a business perspective.

### Environment

A place where the site runs, such as local development, preview/staging, or production.

### Rollback

Restoring a previously known-good version after a problem.

### Hotfix

An urgent, narrowly scoped correction to a serious live issue.

### Smoke test

A short set of high-value checks verifying that a deployment is reachable and its core paths still work.

## 5. Environment model

### Recommended future model

~~~text
Local development
  - private machine
  - fast iteration
        |
        v
Preview/staging
  - deployment-like environment
  - owner and QA review
        |
        v
Production
  - public business website
  - approved content and services only
~~~

The current repository may deploy `main` directly to Pages. If Pages is retained, decide explicitly whether that URL is preview or production. A pre-launch notice does not by itself make a public URL private.

## 6. Change categories and risk levels

### 6.1 Low-risk examples

- Fixing a typo without changing meaning.
- Improving a code comment.
- Updating handbook navigation.
- Adjusting non-critical spacing with no layout impact.

Expected control: focused review plus relevant local check.

### 6.2 Medium-risk examples

- Changing responsive layout.
- Modifying theme colors.
- Adding a page or navigation destination.
- Changing JavaScript interaction.
- Replacing a logo/media asset.
- Changing deployment documentation.

Expected control: acceptance criteria, browser QA, regression checks, documentation update, reviewed diff.

### 6.3 High-risk examples

- Publishing prices, taxes, legal terms, contact information, or business claims.
- Enabling a form, booking, payment, analytics, or external widget.
- Changing production host/domain/DNS.
- Adding secrets or third-party credentials.
- Modifying the deployment workflow or repository permissions.
- Removing pre-launch safeguards.

Expected control: named owner approval, technical/security/privacy review, staging test, rollback plan, and post-deployment verification.

### 6.4 Emergency examples

- Exposed secret or private information.
- Broken production home page.
- Misleading active transaction path.
- Malicious external link or compromised content.
- Material legal/commercial error.

Expected control: contain first, communicate clearly, preserve evidence, apply smallest safe correction, rotate secrets where relevant, and conduct a retrospective.

## 7. Change request template

~~~markdown
# Change request: short title

- Requester:
- Date:
- Requirement ID(s):
- Business/user problem:
- Proposed outcome:
- Included:
- Excluded:
- Files/components likely affected:
- Content approver (if applicable):
- Risk level:
- Privacy/security/legal impact:
- Acceptance criteria:
  - [ ] ...
- Test plan:
- Rollback approach:
- Documentation to update:
- Target environment/release:
~~~

## 8. End-to-end change workflow

### Step 1 - Clarify the outcome

Describe the user-visible problem. “Change the JavaScript” is not a requirement; “make repeated section selections reliable without unwanted page movement” is.

Questions:

- Who experiences the problem?
- What do they do now?
- What should happen?
- What must remain unchanged?
- Is content approval required?

### Step 2 - Trace the requirement

Assign or reference an ID from the requirements traceability map. Confirm whether it is original scope, an approved addition, or a proposed enhancement.

### Step 3 - Assess impact and risk

~~~text
Change request
    |
    +--> Content impact?
    +--> Navigation/sitemap impact?
    +--> Mobile/theme impact?
    +--> Accessibility impact?
    +--> Data/privacy/security impact?
    +--> Hosting/deployment impact?
    +--> Documentation impact?
~~~

### Step 4 - Define acceptance criteria

Criteria must be observable.

Weak:

> Improve the menu.

Strong:

- On a 390-pixel viewport, pressing the menu button opens the panel.
- The page behind it cannot scroll.
- Pressing Escape closes it and returns focus to the menu button.
- Selecting a link closes it and opens the correct page.
- Resizing to the wide navigation state clears the mobile-open state.

### Step 5 - Establish a clean working baseline

Before editing:

~~~bash
git status --short
git diff
~~~

Understand existing changes. Do not overwrite unrelated work. Start the local server and reproduce the existing behavior.

### Step 6 - Make one coherent implementation

- Prefer the smallest change that satisfies the criteria.
- Keep formatting-only edits separate from behavior when practical.
- Comment the reason behind non-obvious logic.
- Do not expand authority into unrelated refactoring.

### Step 7 - Perform layered verification

~~~text
Static checks
  syntax, links, IDs, whitespace
        |
        v
Focused browser check
  exact changed behavior
        |
        v
Regression checks
  nearby and shared behavior
        |
        v
Representative matrix
  narrow/wide, light/dark, keyboard where relevant
~~~

### Step 8 - Review the diff

Check:

- Only intended files changed.
- No secrets/private data entered.
- No approved wording changed accidentally.
- Comments/documentation match behavior.
- Generated logs or screenshots are not accidentally included.

### Step 9 - Update records

Depending on the change, update:

- `checklist.md`.
- `UX_improvements.MD`.
- `documentation.md`.
- `project_plan.md` if approved scope/architecture changed.
- `sitemap.html` for public navigation changes.
- Handbook guides and traceability status.
- ADRs for material technical decisions.

### Step 10 - Obtain approval

Technical approval cannot substitute for content, finance, legal, or owner approval.

| Change | Minimum suggested approval |
|---|---|
| Code behavior | Technical reviewer/owner |
| Business wording | Business owner |
| Prices/taxes | Owner/finance |
| Legal policy | Authorized owner and qualified reviewer |
| Privacy/data collection | Business/privacy/security reviewers |
| Deployment/host | Owner and technical operator |
| Media/testimonial | Rights/consent owner plus business owner |

### Step 11 - Release deliberately

Prefer a feature branch and reviewed pull request for meaningful changes. If merging/pushing to `main` triggers deployment, confirm the release is intended before that action.

### Step 12 - Verify after deployment

Do not stop at a green workflow.

- Open the public URL.
- Confirm the expected version is visible.
- Check Home, changed page, and critical navigation.
- Check a narrow and wide viewport for layout-sensitive work.
- Check console/network failures where relevant.
- Verify no pending safeguard disappeared accidentally.

### Step 13 - Observe and close

Record outcome, residual risk, and follow-up work. A change is complete only when required documentation and public smoke checks are complete.

## 9. Suggested branch and commit workflow

~~~text
main (release-sensitive)
  |
  +--> create feature branch
         |
         +--> implement small change
         +--> test
         +--> commit with clear message
         +--> review/pull request
         |
         v
       merge after approval
         |
         v
       deployment + smoke test
~~~

Example branch names:

- `fix/mobile-section-navigation`
- `docs/add-release-guide`
- `feature/approved-contact-details`

Example commit messages:

- `Fix repeated section navigation on mobile`
- `Document production release checks`
- `Add owner-approved contact details`

Avoid messages such as `changes`, `stuff`, or `final final`.

## 10. Release versioning

This project does not currently define formal version tags. A simple future convention could use semantic-looking release labels:

- `v1.0.0` - first approved production launch.
- `v1.1.0` - backward-compatible feature/content expansion.
- `v1.1.1` - small correction.

However, semantic versioning is most meaningful when a project exposes a versioned interface or communicates releases consistently. Do not add version numbers without agreeing how they will be used.

At minimum, every release can be identified by its Git commit hash and deployment record.

## 11. Release notes template

~~~markdown
# Release YYYY-MM-DD / version

## Summary

One paragraph describing the user outcome.

## Included changes

- Requirement ID - user-visible change

## Approved content

- Content item - approver - approval date/source reference

## Verification completed

- Browser/viewport/theme/keyboard checks
- Static checks
- Public smoke test

## Known limitations

- Clearly state unfinished or environment-specific items

## Deployment

- Environment:
- Commit:
- Workflow/result:
- Public URL checked:

## Rollback point

- Last known-good commit/release:
~~~

## 12. Release readiness gate

### 12.1 Technical gate

- [ ] Intended files only.
- [ ] HTML structure/links/IDs checked.
- [ ] JavaScript syntax checked when changed.
- [ ] Console reviewed for changed flows.
- [ ] Responsive layout checked when affected.
- [ ] Light/dark themes checked when affected.
- [ ] Keyboard/focus/reduced-motion behavior checked when affected.
- [ ] No unwanted horizontal page overflow.
- [ ] 404 and relative paths checked for new pages.
- [ ] Workflow/config reviewed when deployment changes.

### 12.2 Content and business gate

- [ ] Claims trace to approved evidence.
- [ ] Contact details tested and approved.
- [ ] Prices/taxes/packages approved.
- [ ] Media rights confirmed.
- [ ] Pending labels remain wherever dependencies remain.
- [ ] No placeholder appears as real information.

### 12.3 Security and privacy gate

- [ ] No credentials or private data in repository/diff/history.
- [ ] External services reviewed.
- [ ] Data flow documented.
- [ ] Consent/retention/deletion decisions complete where applicable.
- [ ] Legal/privacy text matches actual behavior.
- [ ] HTTPS and domain behavior checked.

### 12.4 Governance gate

- [ ] Required approvers recorded.
- [ ] Traceability map updated.
- [ ] Relevant ADR created/superseded if architecture changed.
- [ ] Checklist and documentation updated.
- [ ] Rollback owner and method known.
- [ ] Hosting role and current terms rechecked for production.

## 13. Post-deployment smoke-test matrix

| Area | Minimum check | Expected result |
|---|---|---|
| Availability | Open Home URL | Correct site loads through HTTPS |
| Assets | Inspect logo/styles/scripts | No missing critical asset |
| Primary navigation | Open each main destination | Correct page; no 404 |
| Changed feature | Repeat acceptance criteria | New behavior works live |
| Mobile | Narrow viewport or real device | Usable layout, menu, no page overflow |
| Theme | Toggle and change page | Correct appearance and persistence |
| Long-page nav | Select multiple sections repeatedly | Correct section and active state |
| Pending safeguards | Visit pricing/contact/legal pages | No fake active transaction or content |
| Error handling | Open a nonexistent path where host supports custom 404 | Useful missing-page experience |
| Console/network | Inspect critical pages | No unexplained critical error |

## 14. Rollback strategy

### 14.1 Principle

Rollback should restore a known-good version quickly. Fix-forward can follow after service and truthfulness are restored.

### 14.2 Safe conceptual flow

~~~text
Serious live defect detected
          |
          v
Stop additional releases
          |
          v
Identify last known-good commit
          |
          v
Create a reviewed revert commit
          |
          v
Deploy and smoke test
          |
          v
Diagnose root cause separately
~~~

Avoid destructive history rewriting on a shared release branch. A revert commit preserves an auditable record and can trigger the normal deployment path.

### 14.3 Content emergency rollback

If a price, legal term, contact detail, private datum, or unsupported claim is wrong:

1. Remove or replace it with an honest pending state.
2. Deploy the correction.
3. Verify public caches/pages.
4. Notify the business owner.
5. Revoke credentials immediately if a secret was exposed.
6. Determine whether search caches or third parties also need remediation.

## 15. Hotfix process

A hotfix is not permission to skip discipline.

~~~text
Confirm severity -> contain scope -> smallest correction
 -> focused test -> approval appropriate to incident
 -> deploy -> live verify -> retrospective
~~~

Document:

- What happened.
- When it began and was detected.
- User/business impact.
- What was changed.
- Who approved the action.
- How recurrence will be prevented.

## 16. Handling failed deployments

### Workflow fails before deployment

- Read the failing step.
- Do not repeatedly rerun without understanding it.
- Check action versions, permissions, artifact paths, and platform status.
- Preserve the previously published version.

### Workflow succeeds but content is wrong

- Confirm deployed commit and URL.
- Check case-sensitive filenames and relative paths.
- Refresh without stale cache where appropriate.
- Inspect the public network requests.
- Roll back if impact is material.

### Deployment is correct but requirement is wrong

This is not a deployment failure. Return to requirement/content approval, correct it through the normal controlled process, and improve the approval gate.

## 17. External-service change management

Future booking, forms, analytics, maps, or payments require a separate checklist:

- Provider owner and contract/terms.
- Data categories and recipients.
- Credential storage and rotation.
- Test versus production accounts.
- Domain allowlists/webhooks where applicable.
- Accessible failure/loading/success states.
- Service outage behavior.
- Privacy/cookie/legal updates.
- Data export/deletion and provider exit plan.
- Monitoring and support owner.

Never enable a provider directly in production merely because a widget renders locally.

## 18. Change calendar and freeze windows

For a small business, avoid risky changes immediately before:

- A major campaign.
- A booked event.
- A press/public announcement.
- A period when nobody can monitor or roll back.

A brief content freeze before a major launch lets the team complete QA on a stable candidate. Emergency corrections remain possible through the hotfix process.

## 19. Roles and separation of responsibilities

One person may hold multiple roles in a small project, but the decisions remain distinct.

| Role | Responsibility |
|---|---|
| Requester | Explains desired outcome |
| Business owner | Approves business truth and release priority |
| Content owner | Supplies verified wording/media |
| Implementer | Changes code/content |
| Reviewer | Checks logic, risk, and scope |
| QA tester | Verifies behavior against criteria |
| Release operator | Performs/monitors deployment |
| Incident owner | Coordinates recovery and communication |

When the implementer is also the reviewer and release operator, use checklists and evidence to reduce blind spots.

## 20. Metrics that can improve the process

Useful lightweight measures include:

- Change lead time.
- Deployment success/failure rate.
- Number of regressions found after publication.
- Time to restore a serious defect.
- Percentage of releases with complete acceptance criteria.
- Number of stale documentation discrepancies.

Do not optimize metrics at the expense of user or business outcomes. A high deployment count is not inherently good.

## 21. Retrospective questions

After a meaningful release or incident:

1. What outcome did we expect?
2. What actually happened?
3. Which evidence was useful?
4. Which assumption was wrong?
5. Did scope remain controlled?
6. Did a user, accessibility, content, or policy risk escape review?
7. Which checklist or test should change?
8. Was rollback practical?
9. What should we repeat?
10. What is the single highest-value process improvement?

## 22. Beginner release runbook

~~~text
BEFORE
[ ] Requirement and approval clear
[ ] git status/diff understood
[ ] Acceptance criteria written
[ ] Risk classified

IMPLEMENT
[ ] One coherent change
[ ] No secrets or invented facts
[ ] Comments explain non-obvious reason

VERIFY
[ ] Focused behavior
[ ] Relevant responsive/theme/keyboard checks
[ ] Nearby regressions
[ ] Documentation and sitemap where affected

RELEASE
[ ] Reviewed change/commit
[ ] Intentional main-branch action
[ ] Workflow result checked

AFTER
[ ] Public smoke test
[ ] Known limitations recorded
[ ] Roll back if material failure
~~~

## 23. Sanity check

- [x] This guide distinguishes a technical deployment from business release approval.
- [x] It treats pushes to `main` as deployment-sensitive because the workflow exists.
- [x] It preserves the unresolved GitHub Pages production-policy decision.
- [x] It does not imply current staging, version tags, monitoring, contact forms, payments, or automated suites exist.
- [x] It includes content, accessibility, privacy, security, and rollback controls in addition to code checks.
- [x] Destructive Git history rewriting is not recommended as a normal rollback.
- [x] Final production testing remains pending until the host, domain, services, and content are approved.
