# 09 - Codex Skills Guide

## 1. What is a Codex skill?

A skill is a reusable instruction package that teaches Codex a specialized workflow. It is more durable and structured than repeating a long prompt.

Do not confuse:

| Item | Purpose |
|---|---|
| Prompt | Request for the current conversation |
| Plan | Ordered work for a particular task |
| AGENTS.md | Repository-specific operating rules |
| Skill | Reusable workflow or specialty across suitable tasks |

## 2. Typical skill anatomy

~~~text
skill-name/
|
+-- SKILL.md          required instructions
+-- scripts/          optional reusable automation
+-- references/       optional supporting guidance
+-- assets/           optional templates or media
~~~

The precise supported format depends on the active Codex environment. Use the official skill-creation guidance available in that environment rather than copying an unverified structure blindly.

## 3. What a website skill could teach

- Inspect repository and Git status first.
- Read project requirements before editing.
- Preserve unrelated changes.
- Prefer static solutions for GitHub Pages projects.
- Keep business claims source-backed.
- Update sitemap with information architecture.
- Test mobile, desktop, keyboard, themes, and reduced motion.
- Update checklist and documentation.
- Report exact evidence.

## 4. Commenting Markdown

Visible explanations are best for beginners:

~~~md
> Why this matters: The sitemap and navigation must describe the same site.
~~~

Markdown can also contain a hidden HTML comment:

~~~md
<!-- Maintainer note: keep this rule synchronized with the QA checklist. -->
~~~

Hidden comments should not contain guidance readers need in the rendered document.

## 5. Example teaching structure

~~~md
# Static Website QA Skill

## When to use
Use for real-browser verification of static websites.

## Required workflow
1. Read the repository instructions.
2. Start the approved local server.
3. Test named viewports.
4. Capture programmatic and visual evidence.
5. Stop the server.

## Safety
- Do not publish.
- Do not submit real forms.
- Do not expose credentials.

## Completion report
List tested URLs, viewports, interactions, results, and limitations.
~~~

This is an educational illustration, not an installed skill.

## 6. Skill design checklist

- [ ] Clear trigger and non-trigger conditions.
- [ ] One coherent responsibility.
- [ ] Required inputs identified.
- [ ] Ordered workflow.
- [ ] Safety and permission boundaries.
- [ ] Preferred tools and fallback behavior.
- [ ] Verification steps.
- [ ] Completion format.
- [ ] No project-specific secret.
- [ ] Examples clearly marked.
- [ ] Tested on representative tasks.

## 7. When not to create a skill

Do not create a skill for a one-time sentence edit, information already clear in AGENTS.md, or a workflow too vague to verify. Reusability must justify maintenance.

## 8. Sanity check

No skill is claimed to be installed by this document. The sample is illustrative, and readers are directed to the active official format before creating one.

