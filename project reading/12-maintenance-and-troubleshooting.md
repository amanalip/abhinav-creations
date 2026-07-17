# 12 - Maintenance and Troubleshooting

## 1. Maintenance principle

A website is not finished at launch. Business details, browsers, links, external providers, and visitor needs change.

## 2. Routine schedule

### Monthly

- Open every primary page.
- Test navigation and sitemap links.
- Confirm contact and booking routes.
- Check visible pending notices.
- Review mobile and desktop quickly.

### Quarterly

- Review content accuracy.
- Check image rights and outdated claims.
- Run accessibility basics.
- Inspect GitHub Actions history.
- Review external-service changes.

### Annually

- Review policies with qualified owners/advisers.
- Reassess architecture and hosting.
- Check domain renewal and access ownership.
- Test recovery and handoff documentation.

## 3. Troubleshooting ladder

~~~text
Observe -> Reproduce -> Narrow scope -> Inspect console/DOM/source
   -> Form hypothesis -> Small fix -> Exact retest -> Regression test
~~~

Do not start by changing several unrelated files.

## 4. Common problems

### Styling did not change

- Confirm the correct selector.
- Check browser cache.
- Inspect whether a later CSS rule overrides it.
- Check light versus dark variables.
- Check media-query width.

### Button does nothing

- Check browser console.
- Confirm main.js loaded.
- Confirm data attribute matches JavaScript selector.
- Confirm the initializer did not safely exit because markup is incomplete.

### Link opens 404

- Check exact filename and case.
- Check relative directory.
- Confirm file was committed and deployed.
- Update sitemap if the intended destination changed.

### Mobile page scrolls sideways

- Compare document scrollWidth with clientWidth.
- Inspect wide fixed-size children.
- Check long unbroken text.
- Distinguish intentional local section-row scrolling from full-page overflow.

### Theme flashes or resets

- Inspect early theme script.
- Check saved localStorage value.
- Test with storage blocked.
- Confirm CSS system preference fallback.

## 5. Safe content maintenance

For text, image, navigation, or page additions, follow the procedures in the implementation guide. Always synchronize navigation, sitemap, checklist, and handbook claims when applicable.

## 6. Incident response

If the live website is materially broken:

1. Record live URL, time, screenshot, and affected pages.
2. Identify last successful deployment.
3. Decide whether a focused revert is safer than a forward fix.
4. Make the smallest repair.
5. Test locally.
6. Deploy.
7. Verify live.
8. Document cause and prevention.

## 7. Handoff checklist

- Repository owner and maintainers known.
- Domain ownership known.
- GitHub Pages settings documented.
- Approved business source available.
- No secrets in repository.
- Local-run instructions tested.
- Pending items visible in checklist.
- Recovery procedure understood.

## 8. Sanity check

Advice avoids destructive Git commands and distinguishes browser cache from deployment failure. External providers are not assumed to exist.

