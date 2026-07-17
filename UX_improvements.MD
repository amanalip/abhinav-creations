# Abhinav Creations UX/UI Improvement Checklist

**Document status:** Living UX checklist and implementation record
**Last updated:** July 17, 2026  
**Implementation status:** Approved items are marked complete below and summarized in the final "Already implemented" section. `checklist.md` remains the project-wide source of truth.

## How to use this checklist

Every improvement has a number. The owner can approve selected improvements by referring to their numbers, for example:

```text
Implement 1, 2, 3, and 5.
```

Items are separated into:

1. Improvements that can be implemented now.
2. Improvements that need owner information or approval.
3. Final production work.

## Improvements that can be implemented now

### 1. Back-to-top button

- [x] Add a floating button in the bottom-right corner.
- It appears after the visitor scrolls approximately 600 to 800 pixels.
- Selecting it returns the visitor to the top.
- It disappears again near the top.
- It supports keyboard navigation and reduced-motion preferences.

**Recommended behavior:** Keep it visible while the visitor is down the page. Hiding it immediately when scrolling stops can make it difficult to select.

If inactivity-based auto-hide is required, the button should:

- Wait approximately three seconds before hiding.
- Remain visible while hovered.
- Remain visible while it has keyboard focus.
- Remain visible while the visitor is touching or pressing it.
- Reappear after new scrolling activity.

Suggested flow:

```text
Visitor is near the top
          |
          v
Button remains hidden
          |
Visitor scrolls 600 to 800 pixels
          |
          v
Button becomes visible
          |
Visitor selects the button
          |
          v
Page returns to the top
          |
          v
Button hides again
```

### 2. Mobile menu backdrop

- [x] Add a slightly darkened layer behind the open mobile menu.
- This visually separates the menu from the page.
- It makes the currently active menu easier to understand.
- It would work in both light and dark modes.

### 3. Close the mobile menu by selecting outside it

- [x] Allow visitors to close the menu by tapping or clicking outside the menu panel.
- The existing menu button, navigation links, and Escape key would continue working.

### 4. Lock background scrolling while the mobile menu is open

- [x] Prevent the page behind the menu from moving.
- This avoids losing the visitor's position while they are interacting with navigation.
- Normal page scrolling returns when the menu closes.

Items 2, 3, and 4 work well as one combined mobile-menu improvement.

### 5. Reduce excessive vertical spacing

- [x] Moderately reduce large empty spaces in page introductions and content sections.
- Visitors will reach useful content sooner.
- This is especially helpful on phones.
- The spacious visual style would remain, but the pages would feel less stretched.

### 6. Add "Jump to section" navigation

- [x] Add section shortcuts to the Studio Spaces & Gear page.
- [x] Extend the persistent section-navigation pattern to the Creators & Actors page.

Example sections:

- Studio Floor.
- Audio Suite.
- Podcast Lounge.
- Cooking Stage.

On desktop, these could appear as a horizontal row. On mobile, they could appear as a compact dropdown or horizontally scrollable row.

The sticky header height must be considered so the selected section heading is not hidden after navigation.

### 7. Improve the pre-launch notice

- [ ] Make the notice less intrusive on mobile.

Possible implementation:

- Use shorter text on phones.
- Add a dismiss button.
- Remember dismissal until the browser tab or session is closed.
- Keep the full information available for reviewers.

The notice would still remain present by default because the website is not production-ready.

### 8. Change booking CTA wording during pre-launch

- [ ] Replace `Book a Floor Slot` with wording that reflects the current state.

Possible wording:

- `Booking Status`.
- `View Booking Information`.
- `Booking Coming Soon`.

This prevents visitors from expecting an active booking system. The original text can return when booking becomes operational.

### 9. Add breadcrumbs

- [x] Add a small location trail near the top of internal pages.

Example:

```text
Home > Studio Spaces & Gear
```

This helps visitors understand where they are. It is useful but not essential while the website remains relatively small.

### 10. Improve carousel controls

- [ ] Add pagination dots to show the number of carousel items.
- [ ] Add touchscreen swipe navigation.
- [ ] Improve the visible selected-item indicator.
- [ ] Preserve the current previous and next buttons.

The carousel would continue avoiding autoplay. Real captions and video controls should wait for approved media.

### 11. Optimize the logo asset

- [x] Create a smaller optimized version of the logo for website use.
- The current source image is `1254 x 1254`, which is larger than necessary for the header.
- The original high-resolution file would remain unchanged.
- The website could use appropriately sized versions for the header and hero section.

This would reduce file size and mobile data usage without visibly reducing quality.

### 12. Perform an expanded accessibility review

- [x] Test keyboard navigation again after the UX changes.
- [x] Check contrast in light and dark modes.
- [x] Test browser zoom and narrow-screen reflow.
- [x] Check touch-target sizes.
- [x] Confirm screen-reader labels.
- [x] Confirm reduced-motion behavior.
- [x] Check for horizontal overflow.

This is most useful after the selected UX improvements are implemented.

## Improvements that need owner information or approval

### 13. Add real studio photographs

- [ ] Add photographs for each studio space.
- Visitors would see what each room actually looks like.
- Images could include wide room views, equipment close-ups, and alternate setups.

**Needed from the owner:**

- Approved photographs.
- Identification of each room.
- Approval for public use.
- Helpful captions, if available.

### 14. Add detailed studio information

- [ ] Add structured information to each studio section.

Possible details:

- Room dimensions.
- Recommended capacity.
- Equipment included.
- Suitable production types.
- Optional add-ons.
- Setup requirements.
- Accessibility.
- Parking or arrival instructions.

**Needed from the owner:** Confirmed and approved specifications.

### 15. Improve creator and business service cards

- [ ] Give every service a consistent, scannable format.

Each card could show:

- Who the service is for.
- What is included.
- Session duration.
- Delivery time.
- Starting or fixed price.
- Relevant example.
- Next action.

**Needed from the owner:** Approved service inclusions, timelines, and prices.

### 16. Add real pricing cards or comparison tables

- [ ] Present approved packages in a clear comparison layout.

Visitors should be able to quickly understand:

- What they receive.
- What it costs.
- How long it takes.
- Which add-ons are available.
- How to book.

**Needed from the owner:**

- Approved prices.
- Package names.
- Inclusions.
- Taxes and fees.
- Add-ons.
- Cancellation conditions.

### 17. Implement the booking journey

- [ ] Connect the website to a compliant scheduling and payment provider.

Proposed flow:

```text
Choose service
      |
      v
Choose date and time
      |
      v
Review price and inclusions
      |
      v
Enter customer details
      |
      v
Accept applicable policies
      |
      v
Pay securely
      |
      v
Receive confirmation
```

**Needed first:**

- Approved booking provider.
- Approved payment provider.
- Prices and availability.
- Cancellation and refund policy.
- Customer information requirements.

The final integration must remain compatible with the selected static hosting environment and must not expose secret credentials in public files.

### 18. Add contact shortcuts

- [ ] Add direct contact actions to the Contact page.

Possible actions:

- Call.
- Email.
- WhatsApp.
- Open in maps.
- View business hours.
- Read arrival instructions.

**Needed from the owner:**

- Approved phone number.
- Approved email address.
- Official WhatsApp number, if applicable.
- Address or map location.
- Business hours.
- Expected response time.

### 19. Add a contact form

- [ ] Add a visitor enquiry form.

Possible fields:

- Name.
- Email or phone.
- Enquiry type.
- Preferred date.
- Message.

**Needed first:**

- Approved form fields.
- Form-processing provider.
- Destination email.
- Privacy wording.
- Data-retention decision.
- Consent requirements.

### 20. Add trust-building content

- [ ] Add verified material that helps visitors trust the studio.

Possible material:

- Testimonials.
- Client logos.
- Portfolio examples.
- Production statistics.
- Team information.
- Safety information.
- Accessibility details.
- Location and parking guidance.

**Needed from the owner:** Approved, authentic content and permission to publish it.

No testimonial, client, partnership, result, or statistic should be invented.

## Final production work

### 21. Remove development-only language

- [ ] Remove internal review wording before production launch.

Examples include:

- `Owner verification pending`.
- `Media pending`.
- `Source-provided specification`.
- `Read the code documentation`.
- Pre-launch notices.
- Technical explanations intended for reviewers.

This should happen only after missing information has been supplied and approved. Development language should be replaced with approved public content rather than simply hidden while information is still missing.

### 22. Complete final performance testing

- [ ] Test loading speed and image sizes.
- [ ] Add lazy loading to approved below-the-fold photographs.
- [ ] Confirm that the first visible content loads promptly.
- [ ] Check the website on slower mobile connections.

This is best completed after real media has been added.

### 23. Complete final browser and device testing

- [ ] Test representative phone widths.
- [ ] Test tablets.
- [ ] Test desktop screens.
- [ ] Test light and dark modes.
- [ ] Test navigation and booking.
- [ ] Test current major browsers.
- [ ] Correct any defects found.

## Recommended first group

The most useful improvements that require no additional business information are:

- **1** - Back-to-top button.
- **2, 3, and 4** - Complete mobile-menu improvement.
- **5** - Reduce excessive spacing.
- **6** - Studio section navigation.
- **7** - Improve the pre-launch notice.
- **8** - Correct pre-launch CTA wording.
- **11** - Optimize the logo.
- **12** - Accessibility review after implementation.

These changes would improve the experience immediately without inventing content, prices, contact details, or business policies.

## Approval note

This is a recommendation checklist. It does not authorize implementation by itself. Selected items should be approved by number, implemented, tested, and then recorded in `checklist.md`.

## Already implemented

The following UX/UI work is present in the current local build:

1. **Back-to-top control (item 1):** Appears only after substantial scrolling, stays away from the main reading column, and auto-hides after approximately 2.5 seconds without scrolling so it does not continue covering page content. It reappears on new scrolling, remains visible during hover or keyboard focus, respects reduced-motion preferences, and returns keyboard focus to the page heading.
2. **Mobile menu backdrop (item 2):** A shaded backdrop separates the open menu from the page in both themes.
3. **Outside-click closing (item 3):** Tapping or clicking outside the mobile menu closes it and returns focus to the menu button.
4. **Background scroll lock (item 4):** The page cannot move behind an open mobile menu, and the visitor's position is preserved when it closes.
5. **Reduced vertical spacing (item 5):** Hero and content-section spacing is more compact while retaining the spacious visual design.
6. **Persistent section navigation (item 6):** Studio Spaces & Gear and Creators & Actors retain section navigation while visitors scroll. Desktop and mobile use dependable anchor buttons, the mobile row can be swiped sideways, and the visitor sitemap contains all seven matching anchors.
7. **Breadcrumbs (item 9):** Every public page except Home has a small, accessible path back to Home.
8. **Optimized logos (item 11):** The original 1254 px source remains unchanged. A 160 px asset serves header and favicon use, while an 800 px asset serves the Home hero.
9. **Expanded accessibility review (item 12):** Keyboard operation, focus restoration, accessible labels, light/dark contrast, narrow-screen/high-zoom reflow, 44 px mobile targets, reduced motion, and horizontal overflow were checked after implementation. A light-theme gold contrast issue and a menu scroll-lock/sticky-header conflict found during testing were corrected.
10. **Responsive rendering:** The same website adapts to desktop and mobile widths with flexible layouts, stacking content, and far-right mobile theme/menu controls.
11. **Theme support:** Light and dark modes follow the device preference initially and remember the visitor's selection when browser storage is available.
12. **Accessible navigation foundation:** Skip links, semantic landmarks, active-page states, visible keyboard focus, Escape-key menu closing, and a sticky header are implemented.
13. **Level square logo presentation:** The Home hero logo is displayed as a clean 1:1 square without stretching, tilt, or an extra decorative offset border.
14. **Manual media carousel:** Previous, next, and keyboard controls are available without autoplay; placeholders remain clearly identified until approved media is supplied.
15. **Visitor sitemap:** Every public page is listed, including four Studio anchors and three creator-service anchors.
16. **Public copy cleanup:** Em dashes were replaced with standard hyphens throughout the visitor-facing HTML.

## Learnings

### In-page navigation must remain available on long pages

The first Studio jump navigation solved the initial problem of reaching a distant section quickly, but it introduced a second problem: after a visitor selects a section such as Podcast Lounge, the navigation itself remains near the top of the page and scrolls out of reach. The visitor must then scroll back up before choosing another Studio section.

The implemented improvement is:

- On mobile, use a compact, one-line sticky row of ordinary section buttons below the main header. The row can be swiped sideways when its buttons do not fit.
- On desktop, retain the horizontal section links but make their row sticky below the main header.
- Highlight the section currently visible on screen so the navigation also communicates the visitor's location.
- Keep all four Studio destinations and all three creator-service destinations identical to the anchors recorded in the visitor sitemap.
- Account for the combined height of the main header and section navigator when scrolling to an anchor. The selected heading must remain visible and should not be separated from the controls by an unnecessarily large blank area.
- Keep the control compact, keyboard operable, screen-reader labelled, and at least 44 pixels high on touch screens.
- Ensure the section navigator does not cover reading content and does not compete with the mobile menu or back-to-top control.

Suggested behavior:

```text
Visitor opens Studio Spaces & Gear
                |
                v
Desktop: horizontal section row
Mobile: horizontally swipeable section buttons
                |
Visitor selects Podcast Lounge
                |
                v
Podcast Lounge heading remains visible
Navigator remains available below the header
Current section changes to Podcast Lounge
                |
Visitor can immediately choose another section
```

### Apply persistent navigation selectively

Persistent section navigation is valuable when a page has several long, clearly named sections and visitors are likely to compare them. Adding it everywhere would consume mobile screen space and create unnecessary controls.

Current page assessment:

1. **Studio Spaces & Gear:** Persistent navigation is implemented for its four long, comparable sections.
2. **Creators & Actors:** Persistent navigation is implemented for its three distinct service sections.
3. **Brands & Businesses and Pricing & Live Booking:** Do not add it now. Each currently has only two primary sections and remains reasonably easy to scan.
4. **Home:** Do not add it. Home is a guided landing-page journey, and persistent section controls would compete with its primary calls to action.
5. **Contact, legal pages, Sitemap, and 404:** Do not add it. These pages are short or already function as navigation destinations.

The broader lesson is that a shortcut should be tested from the visitor's destination, not only from its starting position. A control that successfully moves the visitor somewhere must also leave them with an obvious and convenient next action.

### Native selection menus can conflict with live section tracking

The first mobile version used a native selection menu. Testing on an Android browser revealed three reliability problems:

- Scroll tracking could change the selected menu item while the browser's native menu was open.
- Intermediate sections could briefly take over the selected state during smooth scrolling.
- Choosing an option that was already selected did not reliably create another navigation event.

The implemented correction replaces that menu with ordinary anchor buttons. Every tap is handled explicitly, including a repeated tap on the current destination. While a button-triggered scroll is in progress, JavaScript temporarily keeps that requested button active; normal position tracking resumes after scrolling settles. This produces the same predictable interaction on mobile and desktop while preserving functional links when JavaScript is unavailable.

### Visible outline numbering is not always useful website copy

Decimal prefixes such as `2.1`, `3.2`, and `4.1` originated as document-outline references. On the finished interface they looked like internal document numbering rather than helpful navigation. They have been removed from visitor-facing section labels across the website. Circular card identifiers such as `01`, `02`, and `03` remain because they are a separate visual device for distinguishing related cards.
