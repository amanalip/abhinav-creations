# 10 - Framework for Starting Websites for New Businesses

## 1. Purpose

This is a reusable decision framework, not a software framework. It helps a business move from idea to maintainable website without choosing technology too early.

## 2. Full lifecycle

~~~text
Discover -> Define -> Approve content -> Design architecture
   -> Implement -> Test -> Launch -> Measure -> Maintain
~~~

## 3. Discovery

Answer:

- What does the business do?
- Who are the visitor groups?
- What must each group accomplish?
- What builds trust?
- What information is legally sensitive?
- Who owns content approval?
- Who maintains the site?

Output: a one-page business brief and list of unknowns.

## 4. User journeys

For each audience:

~~~text
Arrival source -> question -> supporting evidence -> action -> confirmation
~~~

Avoid designing pages before defining the visitor's decision.

## 5. Content inventory

Classify every item:

| State | Meaning |
|---|---|
| Approved | May be public |
| Draft | May be designed but not presented as final |
| Missing | Owner must supply |
| Restricted | Must not enter public repository |
| External | Owned by booking, payment, map, video, or other provider |

## 6. Choose architecture

~~~text
Mostly public information?
  yes
   |
Needs private accounts or server secrets?
  no -> static site may fit
  yes -> backend or managed service needed

Frequent nontechnical editing?
  yes -> consider a CMS

Large generated content?
  yes -> consider a static-site generator or framework
~~~

Choose the simplest architecture that meets confirmed requirements.

## 7. Define foundations

- Sitemap.
- Page templates.
- Design tokens.
- Typography and color accessibility.
- Mobile behavior.
- Navigation.
- Image policy.
- Editorial style.
- Analytics/privacy decision.
- Hosting and domain.
- Error and empty states.

## 8. Implementation phases

1. Repository controls and documentation.
2. Shared HTML structure and CSS system.
3. High-priority page.
4. Remaining page groups.
5. Interactions.
6. Content integration.
7. Accessibility and browser QA.
8. Deployment rehearsal.
9. Owner approval.
10. Production launch.

Each phase must have acceptance criteria.

## 9. Minimum QA matrix

- Narrow phone, wider phone, tablet-like width, desktop.
- Chrome plus at least one browser using a different engine before launch.
- Light and dark if supported.
- Keyboard-only route.
- Reduced motion.
- Slow network and missing image behavior.
- Broken path/404.
- Live deployment.

## 10. Launch gate

Do not launch until:

- Business identity and contact route are approved.
- Prices and claims are verified.
- Image rights are confirmed.
- Legal/privacy review is complete where needed.
- Forms and external services have test submissions.
- Accessibility and browser checks are recorded.
- Rollback owner and maintenance owner are known.

## 11. Post-launch

Schedule:

- Immediate smoke test.
- First-week broken-link/content review.
- Monthly content and contact check.
- Periodic accessibility and dependency review.
- Annual policy and business-information review.

## 12. Sanity check

This framework deliberately avoids prescribing GitHub Pages for every business. Architecture follows private-data, editing, scale, and integration requirements.

