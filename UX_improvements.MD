# Abhinav Creations UX/UI Improvement Checklist

**Document status:** Proposal only  
**Last updated:** July 17, 2026  
**Implementation status:** These recommendations have not been implemented unless they are separately marked complete in `checklist.md`.

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

- [ ] Add a floating button in the bottom-right corner.
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

- [ ] Add a slightly darkened layer behind the open mobile menu.
- This visually separates the menu from the page.
- It makes the currently active menu easier to understand.
- It would work in both light and dark modes.

### 3. Close the mobile menu by selecting outside it

- [ ] Allow visitors to close the menu by tapping or clicking outside the menu panel.
- The existing menu button, navigation links, and Escape key would continue working.

### 4. Lock background scrolling while the mobile menu is open

- [ ] Prevent the page behind the menu from moving.
- This avoids losing the visitor's position while they are interacting with navigation.
- Normal page scrolling returns when the menu closes.

Items 2, 3, and 4 work well as one combined mobile-menu improvement.

### 5. Reduce excessive vertical spacing

- [ ] Moderately reduce large empty spaces in page introductions and content sections.
- Visitors will reach useful content sooner.
- This is especially helpful on phones.
- The spacious visual style would remain, but the pages would feel less stretched.

### 6. Add "Jump to section" navigation

- [ ] Add section shortcuts to the Studio Spaces & Gear page.

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

- [ ] Add a small location trail near the top of internal pages.

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

- [ ] Create a smaller optimized version of the logo for website use.
- The current source image is `1254 x 1254`, which is larger than necessary for the header.
- The original high-resolution file would remain unchanged.
- The website could use appropriately sized versions for the header and hero section.

This would reduce file size and mobile data usage without visibly reducing quality.

### 12. Perform an expanded accessibility review

- [ ] Test keyboard navigation again after the UX changes.
- [ ] Check contrast in light and dark modes.
- [ ] Test browser zoom.
- [ ] Check touch-target sizes.
- [ ] Confirm screen-reader labels.
- [ ] Confirm reduced-motion behavior.
- [ ] Check for horizontal overflow.

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
