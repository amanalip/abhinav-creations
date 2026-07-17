# AGENTS.md Template for a Static Business Website

> This is an educational, ready-to-adapt template. To make it operational, review every instruction, remove teaching notes, rename the approved copy to AGENTS.md, and place it at the repository root. An AGENTS file inside this reading folder does not automatically govern the whole repository.

## Project objective

Build and maintain a truthful, accessible, responsive static business website that can be hosted on GitHub Pages.

## Source of truth

- Read the approved project plan before broad changes.
- Use owner-approved content for business claims, prices, contacts, media, and legal text.
- Treat placeholders and pending labels as intentional until approval is documented.
- Do not fabricate missing information.

## Architecture constraints

- Prefer HTML5, CSS3, and browser JavaScript unless an approved requirement justifies another technology.
- Keep the site compatible with static GitHub Pages.
- Do not place secrets or private API credentials in HTML, CSS, JavaScript, documentation, or Git history.
- Secure booking, payment, and private-data processing must use an approved external provider or backend.
- Preserve progressive enhancement: core information and ordinary links should remain usable when JavaScript is unavailable.

## Working rules

1. Inspect relevant files and Git status before editing.
2. Preserve unrelated user changes.
3. Plan changes that affect multiple systems or pages.
4. Implement the smallest coherent solution.
5. Use existing design tokens and component patterns.
6. Comment non-obvious functions and behavior.
7. Keep shared navigation consistent across pages.
8. Update the visitor sitemap whenever public information architecture changes.
9. Update the checklist and relevant documentation after implementation.
10. Do not publish, push, submit forms, or change external systems unless explicitly authorized.

## Accessibility and UX requirements

- Use semantic landmarks and one clear h1 per page.
- Keep keyboard focus visible.
- Provide meaningful control labels.
- Support keyboard operation and Escape for dismissible overlays.
- Respect prefers-reduced-motion.
- Test light and dark themes.
- Avoid page-wide horizontal overflow.
- Ensure floating or sticky controls do not block reading.
- Do not add autoplay unless explicitly approved and accessible controls exist.

## Testing requirements

For relevant changes:

- Run language syntax and diff checks.
- Preview through a local HTTP server.
- Test a narrow phone viewport and a wide desktop viewport.
- Test keyboard interaction.
- Test light and dark themes.
- Test first and repeated interactions.
- Check console errors and page-wide overflow.
- Use screenshots plus DOM/state evidence when visual behavior matters.
- Clearly distinguish manual QA from an automated test suite.

## File-editing safety

- Use focused patches.
- Do not delete or rewrite unrelated files.
- Avoid destructive Git commands.
- Review exact targets before deletion.
- Never commit credentials or private personal information.

## Completion report

Report:

- Outcome.
- Files changed.
- Checks performed and results.
- Content or owner dependencies.
- GitHub Pages limitations.
- Remaining risks or deferred work.

## Beginner notes

The template uses firm language because agent instructions must be unambiguous. Explanations belong in project documentation; operational rules should stay concise enough that the agent can follow all of them consistently.

## Template sanity check

Before activation:

- [ ] Replace generic project wording.
- [ ] Confirm actual stack and commands.
- [ ] Confirm hosting branch and workflow.
- [ ] Confirm documentation filenames.
- [ ] Remove rules that conflict with the repository.
- [ ] Add repository-specific test commands.
- [ ] Have the project owner approve the final instructions.

