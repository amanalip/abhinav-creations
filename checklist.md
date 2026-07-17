# Abhinav Creations Website Implementation Checklist

**Last updated:** July 17, 2026  
**Current state:** Local pre-launch static build; not deployed  
**Legend:** `[x]` complete, `[ ]` pending

## 1. Project control files

- [x] `project_plan.md` records scope, technology, phases, fact checks, and compliance boundaries.
- [x] `documentation.md` explains the code and project flow for a beginner.
- [x] `checklist.md` tracks implemented and pending work.
- [ ] Obtain owner approval of the revised plan's production-hosting correction.

## 2. Shared website foundation

- [x] Plain HTML5 multi-page structure.
- [x] Shared CSS design system using the supplied black/gold logo direction.
- [x] Shared documented JavaScript file.
- [x] Sticky header.
- [x] Required primary navigation links.
- [x] `Book a Floor Slot` accent CTA routed to the non-operational status page.
- [x] Shared ESPL/footer structure.
- [x] Custom `404.html` error page.
- [x] Skip links and semantic page landmarks.
- [x] Visible pre-launch notice.
- [x] Visitor-facing HTML copy uses standard hyphens instead of em dashes.

## 3. Responsive rendering

- [x] Flexible containers and typography.
- [x] Responsive Grid/Flexbox layouts.
- [x] Collapsible narrow-screen navigation.
- [x] Mobile theme and menu controls align together at the far-right edge of the header.
- [x] Cards and columns stack when space is limited.
- [x] Logo and media use responsive sizing.
- [x] Home hero logo is a clean, level 1:1 square without stretching or a decorative offset border.
- [x] No separate mobile website is created.
- [x] Complete browser QA at representative narrow and wide widths; medium behavior is covered by the same flexible breakpoints and structural checks.
- [x] Correct responsive/browser defects found during QA (missing favicon request corrected).

## 4. Light/dark themes

- [x] Light theme.
- [x] Dark theme.
- [x] Header theme toggle.
- [x] Device preference detection.
- [x] Safe browser-storage persistence.
- [x] Fallback when storage is blocked.
- [x] Early theme application to minimize a wrong-theme flash.
- [x] Reduced-motion preference support.
- [x] Complete visual browser QA in both themes.

## 5. Required pages from the Word outline

- [x] Home.
- [x] Studio Spaces & Gear.
- [x] For Creators & Actors.
- [x] For Brands & Businesses.
- [x] Pricing & Live Booking page shell.
- [x] Contact Us page shell.
- [x] Privacy Policy page shell.
- [x] Terms of Studio Usage page shell.
- [x] Cancellation & Refund Policies page shell.
- [x] Digital Talent Release Terms page shell.
- [x] Visitor-facing Sitemap.

## 6. Home page sections

- [x] Hero heading and sub-heading from the outline.
- [x] Explore Spaces CTA.
- [x] Book Live Calendar pathway.
- [x] B2C/B2B segment splitter.
- [x] Infrastructure highlights.
- [x] “Inside Abhinav Creations” manual carousel.
- [x] Honest carousel placeholders instead of fabricated media.
- [ ] Replace placeholders with approved portfolio, showreel, and corporate podcast media.

## 7. Studio, B2C, and B2B content

- [x] Four Studio Spaces & Gear sections.
- [x] Three For Creators & Actors sections.
- [x] Two For Brands & Businesses sections.
- [x] No invented package prices or inclusions.
- [ ] Owner confirms every facility/equipment/service claim listed in `project_plan.md` Section 15.2.
- [ ] Supply approved media for the four studio areas.
- [ ] Supply approved portfolio service examples.
- [ ] Supply approved masterclass schedule, instructor, curriculum, capacity, and pricing information if it will be published.
- [ ] Supply approved B2B package and retainer details.

## 8. Pricing, booking, and payment

- [x] Required page headings and descriptions are present.
- [x] Transaction controls are visibly disabled.
- [x] No sample rates, tax amounts, discounts, or production tracks are invented.
- [x] No billing fields are present.
- [x] No secret keys or credentials are present.
- [ ] Supply approved hourly and session rates.
- [ ] Supply approved production-track names and inclusions.
- [ ] Confirm “No surprise taxes at checkout” with the business/accounting reviewer.
- [ ] Select a compliant scheduling provider.
- [ ] Select a compliant cashless payment provider or combined booking system.
- [ ] Supply approved cancellation/refund policy before enabling transactions.
- [ ] Integrate and test real availability, billing, payment, and confirmation outside public static code.

## 9. Contact and data collection

- [x] Contact page exists.
- [x] No fake phone number, email address, hours, social account, or form is displayed.
- [x] No visitor data is collected by the current site.
- [ ] Supply approved public email address.
- [ ] Supply approved public phone number if it should be displayed.
- [ ] Supply any approved additional contact/location/hours/social details.
- [ ] Decide whether a contact form is needed.
- [ ] If needed, select a compliant form processor and approve fields, retention, destination, consent, and privacy wording.

## 10. Corporate and legal information

- [x] ESPL relationship wording from the source outline is displayed.
- [x] Registered-address wording from the source outline is displayed.
- [x] GSTIN is clearly marked pending; no fake value is shown.
- [x] All four required legal page links exist.
- [x] Legal pages clearly state that their text is pending and not legally operative.
- [ ] Owner confirms ESPL relationship wording.
- [ ] Owner confirms registered-address wording.
- [ ] Supply approved Corporate GSTIN.
- [ ] Supply professionally reviewed Privacy Policy.
- [ ] Supply professionally reviewed Terms of Studio Usage.
- [ ] Supply professionally reviewed Cancellation & Refund Policies.
- [ ] Supply professionally reviewed Digital Talent Release Terms.

## 11. Sitemaps and search discovery

- [x] Visitor-facing `sitemap.html` exists and links every public content page.
- [x] Visitor-facing Sitemap links the same four Studio section anchors shown by the Studio jump navigation.
- [x] Visitor-facing Sitemap links the same three creator-service anchors shown by the Creators & Actors navigation.
- [ ] Select the final production host and public domain.
- [ ] Create `sitemap.xml` using final absolute public URLs.
- [ ] Create `robots.txt` with the final absolute sitemap URL.
- [ ] Verify every sitemap URL after production deployment.
- [ ] Optionally submit the final XML sitemap through the appropriate search-engine console after launch.

## 12. Hosting and GitHub Pages compliance

- [x] Code is stored as portable static files in the GitHub repository.
- [x] No GitHub Pages deployment workflow is included.
- [x] No sensitive transaction is attempted in GitHub Pages-compatible browser code.
- [x] Current GitHub Pages commercial-use restriction is documented.
- [ ] Select a production host whose current terms permit this commercial website.
- [ ] Review the chosen host's cost, terms, limits, media behavior, HTTPS, custom-domain, and support requirements.
- [ ] Configure the approved host only after owner approval.
- [ ] Recheck hosting-provider terms immediately before launch.

## 13. Testing and quality assurance

- [x] Validate all HTML files structurally (required landmarks/headings, unique IDs, ARIA targets, and browser parsing).
- [x] Check JavaScript syntax.
- [x] Check internal file links and asset targets.
- [x] Run the site through a local HTTP server.
- [x] Test Home page at desktop width.
- [x] Test Home page at narrow phone width.
- [x] Test representative Studio, legal, pricing, Contact, Sitemap, and 404 pages.
- [x] Test light and dark themes.
- [x] Test theme persistence between pages.
- [x] Test mobile menu open and Escape behavior; link navigation was also tested.
- [x] Test carousel previous/next buttons and arrow keys.
- [x] Check for unintended horizontal scrolling at a representative narrow width.
- [x] Check keyboard-operable controls, focus handling, labels, landmarks, and heading semantics.
- [x] Test the new back-to-top control's reveal, inactivity auto-hide, reduced-motion behavior, and heading-focus return.
- [x] Test mobile-menu backdrop, outside selection, Escape closing, focus restoration, and background scroll lock.
- [x] Verify the Studio jump navigation and visitor Sitemap use the same four valid section anchors.
- [x] Verify the Creators & Actors navigation and visitor Sitemap use the same three valid service anchors.
- [x] Test sticky section-button rows, mobile horizontal swiping, repeated destination taps, current-section tracking, and unobstructed anchor landing positions on both long pages.
- [x] Check light/dark contrast and correct the light-theme gold used for small text and controls.
- [x] Verify 44 px mobile control targets and narrow-screen/high-zoom reflow at 320 px without horizontal overflow.
- [x] Correct all defects found during the implemented-scope QA.

## 14. Deployment status

- [x] Local build created.
- [ ] Production host approved.
- [ ] Final content approved.
- [ ] Final integrations approved and tested.
- [ ] Final compliance review complete.
- [ ] Production deployment complete.

## 15. Approved UX improvement batch

- [x] UX item 1: reading-friendly back-to-top button appears only after substantial scrolling and auto-hides during reading inactivity.
- [x] UX item 1: hidden Top button is removed from keyboard navigation and activation moves focus to the page heading.
- [x] UX item 2: mobile navigation has a light/dark compatible shaded backdrop.
- [x] UX item 3: selecting outside the open mobile navigation closes it.
- [x] UX item 4: background page scrolling locks while the mobile navigation is open.
- [x] UX item 5: excessive hero and section spacing is moderately reduced.
- [x] UX item 6: Studio Spaces and Creators & Actors have persistent, responsive section-button navigation with matching Sitemap anchors.
- [x] Removed visible decimal section prefixes such as `2.1`, `3.2`, and `4.1` while retaining circular card numbers such as `01` and `02`.
- [x] UX item 9: every non-home public page has an accessible breadcrumb.
- [x] UX item 11: original logo is preserved and optimized 160 px/800 px delivery assets are used.
- [x] UX item 12: expanded post-change accessibility review completed and defects found were corrected.
