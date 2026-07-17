# 07 - Codex Best Practices for This Project

## 1. Core principle

Treat Codex as a capable collaborator operating on explicit scope, not as an unquestioned source of truth.

~~~text
Human supplies intent, authority, and approval
                    +
Codex supplies inspection, implementation, and checks
                    =
Reviewable engineering work
~~~

## 2. Best workflow

1. State the outcome.
2. State what must not change.
3. Ask Codex to inspect relevant files.
4. Request a plan for large work.
5. Approve one coherent batch.
6. Require technical and browser checks.
7. Review the visible result.
8. Record durable decisions in project files.
9. Commit only verified changes.

## 3. Implement feature by feature

Small batches make defects attributable. “Add section navigation to two named pages and test repeated selection” is safer than “improve all UX.”

A good task includes:

- Pages in scope.
- Expected behavior.
- Mobile and desktop expectations.
- Accessibility expectation.
- Documentation to update.
- Whether Codex may implement or only diagnose.

## 4. Plan before broad changes

Use a written plan when work affects multiple files, architecture, content policy, or deployment. A plan should list decisions, dependencies, validation, and stopping conditions.

Do not use planning as a substitute for implementation. After approval, each plan step should produce evidence.

## 5. Context windows and compaction

An AI conversation has a finite active context. As it grows, the system may compact earlier detail into a summary.

~~~text
Chat details grow
      |
      v
Important decisions written only in chat?
  yes -> risk of loss or distortion
  no  -> repository documents preserve truth
~~~

Best practices:

- Keep requirements in project_plan.md.
- Keep status in checklist.md.
- Keep technical truth in documentation.md.
- Keep UX decisions in UX_improvements.MD.
- Start a focused new conversation when the current one contains much unrelated history.
- At a handoff, summarize completed work, remaining work, exact paths, and checks.
- Never rely on compaction alone as the project record.

## 6. Sandbox and permissions

A sandbox limits which files and systems an agent can access.

Grant:

- Read access required to inspect the project.
- Write access only to the intended workspace.
- Network access only when current external information or dependencies are necessary.
- Command approval only for the specific category needed.

Avoid broad permanent approval for arbitrary commands. Inspect targets before destructive actions. Never include credentials in prompts, files, screenshots, or command output.

## 7. One task at a time

“One task” may include several tightly related edits, such as code, sitemap, checklist, and documentation for one feature. Unrelated work should be separate.

This improves:

- Review clarity.
- Error isolation.
- Context quality.
- Git history.
- Ability to stop or revert.

## 8. Ask for evidence

Useful evidence:

- Files changed.
- Syntax-check result.
- git diff --check result.
- Exact viewport tested.
- Interaction performed.
- Observed aria state or layout measurement.
- Screenshot when appearance matters.
- Remaining limitation.

Avoid accepting “should work” as completion evidence.

## 9. Screenshots and bug reports

A strong visual bug report contains:

- Screenshot.
- Page address.
- Device or viewport.
- Theme.
- What was clicked.
- What happened.
- What should have happened.
- Whether it is consistent or intermittent.

The user's real-device screenshots in this project were especially valuable for finding header alignment and native select-navigation problems.

## 10. Diagnose versus implement

Say which authority you are giving:

- “Explain the cause only; do not edit.”
- “Recommend options; wait for approval.”
- “Implement the approved option and test it.”

This prevents a diagnostic question from accidentally becoming a broad code change.

## 11. Git safety

- Inspect git status before editing.
- Preserve unrelated changes.
- Review diffs before commit.
- Use focused commit messages.
- Do not use destructive reset commands casually.
- Do not commit secrets.
- Verify deployment after pushing.

## 12. What ideally could have happened earlier

- Create root AGENTS.md before development.
- Define editorial style and public numbering rules.
- Define browser matrix and acceptance criteria.
- Decide QA artifact retention.
- Add automated link validation.
- Establish owner approval fields for content.
- Use a feature template containing scope, accessibility, tests, and docs.
- Take baseline screenshots before major visual changes.

## 13. Prompt cookbook

### Inspection

~~~text
Inspect the mobile navigation implementation. Do not edit files.
Explain the current flow, likely failure points, and the files involved.
~~~

### Planned change

~~~text
Propose a plan for persistent section navigation on these two pages.
It must render well on mobile, work repeatedly, respect reduced motion,
and update the sitemap and documentation. Do not implement yet.
~~~

### Implementation

~~~text
Implement the approved plan. Preserve unrelated changes. Run syntax,
diff, mobile-browser, desktop-browser, keyboard, and overflow checks.
Report exact evidence and remaining limitations.
~~~

### Documentation

~~~text
Update the beginner documentation to match the implementation.
Separate current behavior, future recommendations, and owner-dependent work.
Fact-check paths and commands.
~~~

## 14. Decision mind map

~~~text
New request
|
+-- Is it clear?
|     no -> inspect context; ask only if decision is material
|
+-- Does it change external state?
|     yes -> confirm authority
|
+-- Is it broad?
|     yes -> plan and stage
|
+-- Does appearance matter?
|     yes -> real browser QA
|
+-- Does business truth matter?
      yes -> require owner-approved source
~~~

## 15. Sanity check

These practices describe an ideal safe workflow. They do not claim every practice was present from the first project turn. Permissions vary by environment, and Codex capabilities should be confirmed in the active interface rather than assumed.

