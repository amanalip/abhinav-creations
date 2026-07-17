# 04 - Development Approach and Lessons Learned

## 1. Approach summary

The project followed an incremental path:

~~~text
Word outline
   -> beginner project plan
   -> feasibility and GitHub Pages boundary
   -> shared design system
   -> page implementation
   -> documentation and checklist
   -> screenshot feedback
   -> incremental UX improvements
   -> real-browser QA
   -> corrections and learning record
~~~

This was not a single “generate the whole website and publish” operation. Requirements and visual feedback were incorporated in stages.

## 2. Starting from a source document

The supplied Word outline was treated as the content source. The plan separated:

- Source-provided facts.
- User-requested technical requirements.
- Reasonable design implementation.
- Information requiring owner approval.

That separation prevented a polished design from silently turning assumptions into business claims.

## 3. Planning before code

The project plan established:

- Static multi-page architecture.
- HTML, CSS, and JavaScript stack.
- GitHub Pages compliance.
- Responsive rendering.
- Dark-mode requirement.
- Page inventory and sitemap.
- Booking, payment, contact, and legal limitations.
- Implementation phases and sanity checks.

Lesson: planning is most valuable when it records boundaries and unknowns, not only desired features.

## 4. Shared foundation first

The implementation created shared visual tokens, header/footer patterns, page structure, theme behavior, and navigation before polishing individual pages. This reduced visual divergence.

The limitation is repeated HTML markup. In a direct static site, shared header edits still need a project-wide update.

## 5. Incremental UX improvements

Important iterations included:

### Logo presentation

The supplied logo initially appeared in a tall rectangular treatment. It was adjusted to a square presentation, outer decorative framing was removed, and tilt was eliminated. Lesson: image aspect ratio, container ratio, border, and transform are separate concerns.

### Mobile header controls

Dark-mode and menu controls were moved to the far right of the mobile header. Lesson: responsive rendering is not merely “everything fits”; priority and grouping must remain obvious.

### Text punctuation

Visitor-facing em dashes were replaced with ordinary hyphens on request. Lesson: editorial style is part of the product specification.

### Back-to-top control

The control appears after meaningful scrolling, hides after inactivity, avoids the open menu, and manages keyboard focus. Lesson: a floating control must help navigation without permanently covering reading content.

### Long-page section navigation

Persistent navigation was added to Studio Spaces & Gear and Creators & Actors. A native mobile select was initially used.

Real-device feedback exposed unreliability:

- Selecting an item did not always land reliably.
- Scroll tracking could change the select value while it was open.
- Re-selecting an active item could produce slight movement without the expected result.

The solution used ordinary anchor buttons at all widths. On mobile, the row scrolls horizontally. Programmatic scrolling temporarily locks the requested active state.

~~~text
First design: native select + live tracking
                |
                v
State competition during interaction
                |
                v
Second design: anchor row + explicit scroll + temporary lock
                |
                v
More predictable repeated interaction
~~~

### Visible numbering

Outline-style prefixes such as 2.1 and 4.2 were removed from visitor-facing headings. Circular content identifiers such as 01 and 02 were retained. Lesson: planning hierarchy is useful internally but can become visual noise in public copy.

### Deferred ideas

- A ChatGPT-like scroll-position indicator was considered overkill for the current site.
- Website-wide search was judged feasible but more useful after final content is approved.

Deferral is a valid design decision when cost exceeds current benefit.

## 6. What worked well

- Source-of-truth documentation existed.
- Unknown business information was not fabricated.
- User screenshots made visual defects concrete.
- Changes were small enough to diagnose.
- Mobile and desktop behavior were both checked.
- Accessibility behavior was considered with visual behavior.
- UX lessons were written into UX_improvements.MD.

## 7. What could improve next time

- Define a browser/device test matrix before implementation.
- Establish editorial rules, including punctuation and numbering, early.
- Create an active root AGENTS.md before agentic work begins.
- Decide which generated QA artifacts should be ignored by Git.
- Add automated link and HTML validation.
- Consider a small reusable browser-test suite for critical interactions.
- Use an approval matrix for business content from the start.
- Define acceptance criteria for each interactive feature before coding.

## 8. Reusable feature loop

~~~text
Observe problem
   |
Write expected behavior
   |
Identify affected pages and states
   |
Implement smallest coherent change
   |
Run static checks
   |
Test real interaction
   |
Compare against acceptance criteria
   |
Document outcome and lesson
~~~

## 9. Sanity check

This history is based on the project documents, current source, and recorded conversation outcomes. It does not claim that deferred search, a progress indicator, or a permanent automated test suite was implemented.

