# 24 - Performance, SEO, and Discoverability

## 1. Different goals

- Performance: how quickly and smoothly visitors receive and use the site.
- SEO: practices helping search engines understand eligible public content.
- Discoverability: how people find and navigate content.

SEO cannot guarantee ranking.

## 2. Performance flow

~~~text
Server response
  |
HTML discovered
  |
CSS/JS/images requested
  |
Layout and paint
  |
Interaction ready
~~~

Improve the slowest meaningful visitor step, not a score in isolation.

## 3. Current strengths

- No application framework or build bundle.
- Small shared JavaScript.
- Optimized logo variants.
- Static Pages hosting.
- No autoplay video.
- Progressive enhancement.

Actual production measurements are still needed after final media and content.

## 4. Images

- Use suitable dimensions.
- Compress responsibly.
- Avoid sending an 800-pixel image when a 160-pixel asset is sufficient.
- Include width and height where practical to reduce layout movement.
- Use modern formats when compatible with the asset workflow.
- Lazy-load below-the-fold media when beneficial.
- Preserve meaningful alternative text.

## 5. Core Web Vitals primer

Common user-centered measurements cover:

- Loading of the main visible content.
- Responsiveness to interaction.
- Unexpected layout movement.

Thresholds and tooling evolve; check current [web.dev guidance](https://web.dev/vitals/) before making formal claims.

## 6. On-page discoverability

- Unique descriptive title.
- Useful description metadata.
- One clear h1.
- Logical headings.
- Descriptive links.
- Semantic HTML.
- Useful public text, not keyword stuffing.
- Accessible images.
- Fast, mobile-rendering pages.

## 7. Sitemap types

- sitemap.html helps human visitors and currently exists.
- sitemap.xml helps search crawlers discover canonical public URLs and is currently pending.

An XML sitemap does not force indexing.

## 8. robots.txt

robots.txt gives crawler directives. It is not an access-control mechanism and must not protect secrets. The current project intentionally keeps it pending until the final public URL and launch structure are known.

## 9. Canonical and social metadata

After the production domain is approved, consider:

- Canonical URLs.
- Open Graph metadata.
- Social preview image.
- Appropriate structured data backed by real business facts.

Do not add unverified address, ratings, opening hours, or prices to structured data.

## 10. Measurement plan

~~~text
Baseline local/staging measurement
  |
Add final approved media
  |
Measure mobile and desktop
  |
Identify bottleneck
  |
Make one change
  |
Remeasure
  |
Verify visual/accessibility quality
~~~

Lab tools approximate controlled conditions. Real-user measurements describe actual visitors, but analytics introduces privacy decisions.

## 11. Launch checklist

- [ ] Titles and descriptions approved.
- [ ] Heading structure checked.
- [ ] Images optimized and rights confirmed.
- [ ] Broken links checked.
- [ ] Production domain known.
- [ ] sitemap.xml and robots.txt decision completed.
- [ ] Canonical and social metadata reviewed.
- [ ] Mobile performance tested.
- [ ] No fabricated structured data.
- [ ] Privacy implications of analytics reviewed.

## 12. Sanity check

This guide does not claim current search ranking, Core Web Vitals results, analytics, XML sitemap, robots.txt, or structured data. Those remain measurement- or launch-dependent.

