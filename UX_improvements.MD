# Abhinav Creations Website UX/UI Improvement Recommendations

**Document status:** Proposal only  
**Last updated:** July 17, 2026  
**Implementation status:** None of the recommendations in this document have been implemented unless they are separately marked complete in `checklist.md`.

## 1. Purpose of this document

This document records possible user experience (UX) and user interface (UI) improvements for the Abhinav Creations website.

The recommendations are based on a review of the current website at desktop and phone widths, including:

- The Home page.
- The Studio Spaces & Gear page.
- The mobile navigation menu.
- The Pricing & Live Booking page.
- The Contact page.
- Light and dark themes.
- Long-page scrolling behavior.

The current website already has a strong foundation, including:

- Responsive layouts that adapt to different screen widths.
- A light and dark mode toggle.
- A collapsible mobile navigation menu.
- Visible keyboard focus styles.
- A skip-to-content link.
- Active navigation indicators.
- Large touch-friendly controls.
- A manual carousel without automatic playback.
- Reduced-motion preference support.

The recommendations below are intended to make the website faster to navigate, easier to understand, and more helpful to prospective customers.

## 2. Back-to-top button

A back-to-top button would be useful because several pages are long.

### Recommended behavior

- Keep the button hidden while the visitor is near the top of the page.
- Show it after the visitor scrolls approximately 600 to 800 pixels.
- Keep it visible while the visitor remains farther down the page.
- Hide it again after the visitor returns near the top.
- Place it in the bottom-right corner of the screen.
- Give it an accessible name such as `Back to top`.
- Make it usable with a mouse, keyboard, touchscreen, and assistive technology.
- Use smooth scrolling when the visitor has not requested reduced motion.
- Use immediate scrolling when the visitor has enabled reduced-motion preferences.

### Important usability consideration

Automatically hiding the button immediately after scrolling stops may be frustrating. A visitor may stop scrolling specifically because they are preparing to select the button.

If an inactivity-based auto-hide behavior is required, the safer version would be:

- Wait approximately three seconds after movement stops.
- Do not hide the button while it is hovered.
- Do not hide it while it has keyboard focus.
- Do not hide it while the visitor is touching or pressing it.
- Show it again after any new scrolling activity.

### Suggested behavior flow

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

## 3. Highest-priority improvements

### 3.1 Add section navigation to long pages

The Studio Spaces & Gear page contains four major production environments. Visitors currently need to scroll through each section sequentially.

A small `Jump to` navigation could include:

- Studio Floor.
- Audio Suite.
- Podcast Lounge.
- Cooking Stage.

Possible presentation:

- A horizontal row of section links on desktop.
- A compact dropdown or horizontally scrollable link row on narrow screens.
- Each link would move the visitor directly to the corresponding section.
- The sticky header height must be considered so the section heading is not hidden after navigation.

This improvement could also be used on other long pages if their content expands.

### 3.2 Reduce excessive vertical spacing

The generous spacing gives the website an elegant appearance, but some page introductions and content sections occupy most of a screen by themselves.

This is especially noticeable on:

- Internal page introduction sections.
- Long service pages.
- Phone-sized screens.

The vertical padding could be reduced moderately without making the design feel crowded. The objective is to let visitors see the start of the next useful section sooner.

### 3.3 Improve the mobile menu

The existing mobile menu is clear and functional. It already:

- Opens and closes through the menu button.
- Closes after a navigation link is selected.
- Supports the Escape key.
- Updates its accessible expanded state.

Possible improvements:

- Add a subtle darkened backdrop behind the open menu.
- Prevent the page behind the menu from scrolling while it is open.
- Close the menu when the visitor taps or clicks outside it.
- Return keyboard focus to the menu button after closing.
- Ensure the current page remains visibly highlighted.

### 3.4 Make CTA wording match actual availability

The `Book a Floor Slot` call to action currently leads to a page where booking is unavailable.

During pre-launch, clearer wording could include:

- `Booking Status`.
- `View Booking Information`.
- `Booking Coming Soon`.

When real booking becomes operational, the original `Book a Floor Slot` wording can return.

This avoids creating an expectation that a transaction can already be completed.

### 3.5 Compress or dismiss the pre-launch notice

The pre-launch notice is important during review because it prevents the website from appearing transaction-ready. However, it occupies substantial vertical space on a phone.

Possible improvements during development:

- Add a dismiss button.
- Use shorter wording on narrow screens.
- Show the full explanation on a dedicated status page.
- Remember dismissal only for the current browser session.

The notice should be removed entirely from the approved production website.

## 4. Content and decision-making improvements

### 4.1 Add real photographs to studio sections

Each production space would benefit from approved real media, such as:

- A wide photograph of the room.
- Equipment close-ups.
- Alternate room configurations.
- Example lighting setups.
- Approved behind-the-scenes production photographs.

Each studio section should eventually explain:

- Room dimensions.
- Recommended capacity.
- Suitable production types.
- Equipment included as standard.
- Optional equipment or add-ons.
- Accessibility information.
- Setup and changeover expectations.

This will help visitors understand the studio faster than text alone.

### 4.2 Make service information easier to compare

Creator and business services could use consistent information cards showing:

- Who the service is for.
- What is included.
- Expected session duration.
- Expected delivery time.
- Starting price or fixed price.
- A relevant approved example.
- A clear next action.

Consistent cards reduce the amount of effort required to compare services.

### 4.3 Add a clearer pricing structure

After approved pricing is supplied, it should be presented using readable package cards or comparison tables rather than long paragraphs.

Visitors should be able to answer these questions quickly:

1. What do I receive?
2. How much does it cost?
3. How do I book it?

Pricing displays should clearly explain:

- Base price.
- Included session duration.
- Included equipment or staff.
- Deliverables.
- Optional add-ons.
- Taxes or fees.
- Cancellation conditions.
- Whether the price is fixed or starting from a minimum amount.

No pricing should be published until it has been supplied and approved by the business owner.

### 4.4 Improve the booking journey

After a compliant scheduling and payment provider is selected, the booking journey could follow this structure:

```text
Choose a service
       |
       v
Choose an available date and time
       |
       v
Review inclusions and total price
       |
       v
Enter customer details
       |
       v
Review and accept applicable policies
       |
       v
Pay through the approved secure provider
       |
       v
Receive booking confirmation
```

The visitor should always know which step they are on. They should also be able to return to an earlier step without losing previously entered information whenever the selected provider supports it.

The booking journey should include clear:

- Loading states.
- Availability messages.
- Validation messages.
- Payment failure messages.
- Success confirmation.
- Booking reference information.
- Instructions for changing or cancelling a booking.

### 4.5 Add useful contact shortcuts

After approved business details are provided, the Contact page could include:

- A tap-to-call phone number.
- A tap-to-email address.
- An official WhatsApp link, if the business uses WhatsApp.
- An open-in-maps button.
- Approved business hours.
- Expected response time.
- Parking information.
- Arrival and entrance instructions.
- Nearby landmark or public transport information.

These actions are especially valuable for phone visitors.

If a contact form is added, it should include clear validation, success and failure feedback, privacy wording, and a compliant form-processing service.

## 5. Navigation and trust improvements

### 5.1 Add breadcrumbs where useful

Example:

```text
Home > Studio Spaces & Gear > Podcast Lounge
```

Breadcrumbs would become most useful if individual studio spaces or services receive their own pages. They are a lower priority while the website remains small.

### 5.2 Add approved trust-building information

Possible trust elements include:

- Approved customer testimonials.
- Approved client or partner logos.
- Real portfolio examples.
- Verified production statistics.
- Safety information.
- Accessibility information.
- Parking and location guidance.
- Clear policy summaries.
- Approved team or studio contact information.

No client, testimonial, result, partnership, or statistic should be invented.

### 5.3 Improve the media carousel when real content arrives

The current carousel intentionally avoids autoplay, which is a good usability and accessibility choice.

When approved media is available, possible enhancements include:

- Swipe gestures on touchscreens.
- Pagination dots or thumbnail navigation.
- Visible video duration.
- Descriptive captions.
- Play and pause controls.
- Links to the service used in each example.
- Poster images so videos do not appear as blank areas before playback.

Automatic playback with sound should not be used.

## 6. Final production cleanup

### 6.1 Remove development-facing language before launch

The current review build appropriately contains status and verification language. The production website should not display internal wording such as:

- `Source-provided specification`.
- `Owner verification pending`.
- `Media pending`.
- `Read the code documentation`.
- Technical explanations about static credentials.
- Pre-launch build notices.

These items should remain until the relevant information has been approved. They should then be replaced with approved public content rather than simply hidden while information is still missing.

### 6.2 Optimize images and loading performance

The supplied logo is larger than the dimensions at which it normally appears. Before production launch:

- Create appropriately sized logo files.
- Compress photographs without unacceptable quality loss.
- Use responsive image sizes for different screens.
- Use modern browser-supported image formats where appropriate.
- Preserve width and height information to reduce layout movement.
- Lazy-load images that begin below the first visible screen.
- Avoid lazy-loading the primary first-screen image.
- Add useful alternative text to meaningful images.

These measures can improve loading speed and reduce mobile data usage.

### 6.3 Complete final accessibility and usability checks

Before production launch, repeat checks for:

- Keyboard navigation.
- Visible focus indicators.
- Text and interface contrast in both themes.
- Touch target sizes.
- Screen-reader labels.
- Heading order.
- Form error identification.
- Reduced-motion behavior.
- Zoom up to at least 200 percent.
- Narrow-screen horizontal overflow.
- Major pages on multiple current browsers.

## 7. Recommended implementation order

The suggested order is:

1. Add the back-to-top button.
2. Add the mobile menu backdrop, outside-click behavior, and background scroll locking.
3. Reduce excessive vertical spacing.
4. Add jump navigation to long pages.
5. Improve the pre-launch notice.
6. Update CTA wording so it matches current availability.
7. Add approved studio photographs and detailed room information.
8. Add approved pricing and implement the booking experience.
9. Add approved contact shortcuts and location guidance.
10. Complete final production cleanup, image optimization, and accessibility testing.

## 8. Summary flow

```text
Current responsive website foundation
                 |
                 v
Improve scrolling and mobile navigation
                 |
                 v
Make long pages faster to explore
                 |
                 v
Add approved media and service details
                 |
                 v
Add approved pricing, booking, and contact journeys
                 |
                 v
Remove development-only content
                 |
                 v
Complete production accessibility and performance QA
                 |
                 v
Approved production website
```

## 9. Approval note

This file is a recommendation document. It does not authorize implementation by itself. Each improvement can be discussed, approved, implemented, tested, and then recorded separately in `checklist.md`.
