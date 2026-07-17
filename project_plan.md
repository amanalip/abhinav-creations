# Abhinav Creations Website Project Plan

**Plan status:** Implementation authorized; local compliant static build completed, with owner inputs and production hosting still pending  
**Last technical review:** July 17, 2026  
**Intended reader:** A beginner should be able to understand what will be built, why each technology is used, what information is still missing, and what happens in each phase.

## 0. How to read this plan

You do not need programming knowledge to follow this document.

The plan uses four labels:

- **Source requirement:** Comes directly from the supplied Word outline.
- **Approved addition:** Added later by the website owner.
- **Implementation decision:** A technical method proposed to make the approved requirement work.
- **Pending:** Information or a business decision that has not been supplied and must not be guessed.

The entire project can be understood as this simple flow:

```text
WORD OUTLINE + APPROVED ADDITIONS
                 |
                 v
       PROJECT PLAN (this file)
                 |
          owner approves plan
                 |
                 v
      HTML + CSS + JAVASCRIPT FILES
                 |
          testing and approval
                 |
                 v
     APPROVED PRODUCTION STATIC HOST
                 |
                 v
        VISITORS OPEN THE WEBSITE
```

What this plan does **not** do:

- It does not begin programming.
- It does not invent missing prices, contact details, policies, or claims.
- It does not select a booking/payment provider without approval.
- It does not promise that a search engine will rank or index the site.
- It does not create a separate mobile website.

## 1. Purpose and source of truth

This file is the working plan for the Abhinav Creations website.

The primary source of truth is the Word document:

`website outline Abhinav creations.docx`

The website must follow that document's navigation, audience split, page structure, headings, claims, services, calls to action, corporate identity, and legal links.

Only the following requirements have been added after the Word document was supplied:

1. The same website must render correctly on desktop, tablet, and mobile screens through responsive design. It will not be a separate or reduced mobile website.
2. The website must include a light/dark-mode toggle.
3. The website must include a visitor-facing sitemap, an XML sitemap for search engines, and a `robots.txt` file that references the XML sitemap.
4. The owner originally requested eventual GitHub Pages publication. The code will remain portable static code, but the July 17, 2026 fact check found that GitHub Pages currently disallows using its free hosting primarily to run an online business or facilitate commercial transactions. Because this outline includes pricing, booking, billing, and cashless checkout, a compliant production host must be selected before launch.

No additional services, facilities, specifications, prices, testimonials, guarantees, client names, business claims, or legal terms may be invented. Missing content will be marked as pending and added only after it is supplied or approved.

## 2. Website objective

The website must serve two distinct audiences and direct each audience into the appropriate path immediately:

- Creative B2C visitors: actors, models, and podcasters.
- Corporate B2B visitors: brands, agencies, and corporate firms.

The structure must remain clean, professional, and simple to navigate, as required by the source outline.

### 2.1 Visitor-routing concept

The home page is the central traffic controller. Its main job is to help each visitor choose the correct path.

```text
                         HOME PAGE
                             |
              "How Can We Help You Create Today?"
                             |
               +-------------+-------------+
               |                           |
               v                           v
     ACTOR / MODEL / PODCASTER     BRAND / AGENCY / CORPORATE
               |                           |
               v                           v
      View Talent Packages        View Enterprise Retainers
               |                           |
               v                           v
   FOR CREATORS & ACTORS PAGE    FOR BRANDS & BUSINESSES PAGE
               |                           |
               +-------------+-------------+
                             |
                             v
                 PRICING & LIVE BOOKING
```

This diagram explains the intended direction only. It does not add services beyond the Word outline.

## 3. Recommended technology

The website will be a static, multi-page website.

### 3.0 What "static, multi-page website" means

**Static** does not mean that the website cannot move or respond. It can still have menus, theme switching, a carousel, video, and an external booking interface.

Static means the public web server sends already-prepared files to the visitor's browser. A static host does not create each page from a private database when the visitor asks for it.

**Multi-page** means that Home, Studio Spaces & Gear, For Creators & Actors, and the other planned pages have their own addresses.

```text
Visitor requests a page
          |
          v
    Static web host
          |
          +---- sends HTML (content and structure)
          +---- sends CSS  (appearance and responsive layout)
          +---- sends JS   (interactive behavior)
          +---- sends public images/media when hosted in the site
          |
          v
Visitor's browser combines the files and displays the page
```

The three main website languages work together like this:

```text
HTML = the building's rooms and walls
CSS  = the paint, spacing, lighting, and furniture arrangement
JS   = the switches, controls, and moving parts
```

This analogy is only for explanation. All three are ordinary files read by a web browser.

### 3.1 HTML5

HTML5 will define the structure and content of every page, including:

- Header and navigation
- Headings and text
- B2C and B2B paths
- Studio and service sections
- Pricing and booking areas
- Video carousel structure
- Footer and legal links
- Visitor-facing sitemap

Why HTML5:

- Browsers support it directly.
- It works reliably on static web hosts.
- It provides a strong foundation for accessibility and search engines.
- It does not require a framework to display the website.

### 3.2 CSS3

CSS3 will control the appearance and responsive behavior of the website, including:

- Layout and spacing
- Typography and colors
- Bold accent treatment for booking calls to action
- Sticky header
- Desktop, tablet, and mobile rendering
- Light and dark themes
- Buttons, cards, forms, and media presentation
- Restrained transitions and visual states

Why CSS3:

- It gives direct control over the design.
- It allows one website to adapt to different screen sizes.
- CSS custom properties can define consistent light and dark theme colors.
- It avoids adding a heavy styling framework.

### 3.3 JavaScript

JavaScript will provide only the interactive behavior that the site requires, including:

- Collapsible navigation on narrow screens
- Light/dark-mode toggle
- Device theme preference detection
- Remembering the visitor's selected theme
- Video slider carousel
- Booking and checkout integration
- Form behavior and validation where required

Why JavaScript:

- HTML and CSS alone cannot manage all interactive behavior.
- It can remember the selected theme across pages.
- It can control the video slider and responsive navigation.
- It can connect the static website to an approved external booking system.

### 3.4 YAML - conditional deployment configuration

YAML will be used only if the selected production host is deployed through GitHub Actions or another YAML-based workflow. Some hosts can connect directly to the GitHub repository and may not require a custom workflow file.

Why YAML may be used:

- GitHub Actions uses YAML for automation instructions.
- It can test and publish approved website changes automatically.
- It is deployment configuration and not part of the visible website.

HTML, CSS, and JavaScript are definite technology choices. YAML is conditional on the approved hosting/deployment method.

### 3.5 Technologies not planned for the initial build

Jekyll is not planned because the outlined website is a custom commercial website rather than a Markdown-focused blog or documentation site.

React is not planned because the outlined functionality does not require a complex browser application. Plain HTML, CSS, and JavaScript will keep the website lightweight and easier to maintain.

These decisions can only be changed if a later approved requirement makes a different tool necessary.

### 3.6 Beginner glossary

- **Browser:** The application used to open a website, such as Chrome, Firefox, Edge, or Safari.
- **Web page:** One document on the website, such as Home or Contact Us.
- **Website:** The complete collection of pages and shared assets.
- **Static website:** A site made from prepared public files rather than pages created on demand by a private server.
- **Responsive design:** One website whose layout adapts to the available screen width.
- **Header:** The top area containing the logo, navigation, booking button, and theme toggle.
- **Footer:** The bottom area containing corporate information and legal links.
- **Navigation:** The links visitors use to move between pages.
- **CTA:** “Call to action”; a prominent button or link asking the visitor to do something, such as `Book a Floor Slot`.
- **Carousel:** A component that shows media items one at a time and lets the visitor move between them.
- **Theme:** The coordinated colors used by the interface; this project has light and dark themes.
- **External service:** A separately hosted system used for capabilities the static website itself cannot safely provide, such as real-time booking or payment processing.
- **Deployment:** Publishing tested website files so visitors can access them online.
- **Repository:** The GitHub project folder containing the website files and their change history.
- **GitHub Actions:** GitHub's automation system; it can test or publish approved files when the selected hosting workflow supports it.
- **Domain:** A website address owned or configured by the business.
- **HTTPS:** Encrypted communication between a visitor's browser and the website.
- **Sitemap:** A list of public website pages. The project will have one version for visitors and one XML version for search engines.
- **Placeholder:** A clearly marked temporary value used until approved real content is supplied.

## 4. Production hosting and external-service boundary

### 4.1 Important GitHub Pages policy finding

GitHub Pages can technically publish HTML, CSS, JavaScript, images, and other static assets. However, GitHub's current official limits say Pages is not intended or allowed to be used as free hosting for an online business, e-commerce site, or another site primarily directed at facilitating commercial transactions.

This project explicitly includes:

- Pricing
- Live booking
- Billing information
- Cashless checkout
- Commercial B2B retainers

Therefore, GitHub Pages must **not** be treated as the production host under the current rule. The code can remain in GitHub and stay portable, but a business-appropriate production host must be selected and its current terms reviewed before launch.

```text
GitHub repository                     Production hosting
(stores code/history)                 (serves the business website)
        |                                      ^
        | approved change                      |
        +--------------------------------------+
                  deployment connection
```

Cloudflare Pages is one technically viable static-hosting candidate because its official documentation supports connecting a GitHub repository and automatically deploying static files. This is **not yet a final provider selection** and is not a statement about pricing or contractual suitability. Provider terms, features, support, cost, and business requirements must be reviewed before approval.

### 4.2 Static host versus secure transaction service

Whichever production static host is selected, the public website itself will not contain a private booking database, payment server, or secret API credentials. The real-time scheduling and cashless checkout required by the Word outline will need an approved external booking/payment service or separately authorized secure backend.

The exact transaction provider is not specified in the Word document and remains to be selected. No provider will be assumed without approval.

The website will never expose private keys or secret payment credentials in client-side code.

The production static host will do this:

```text
PRODUCTION STATIC HOST
    |
    +-- publish the public website pages
    +-- publish CSS and JavaScript
    +-- publish public images and suitable media assets
    +-- provide a temporary/default website address
    +-- support the approved custom domain when configured
    +-- support HTTPS when correctly configured
```

The static browser files will not do this:

```text
PUBLIC STATIC FILES ARE NOT A PRIVATE APPLICATION SERVER
    |
    +-- no private booking database
    +-- no private payment processing code
    +-- no safe storage for secret keys inside browser files
    +-- no custom server-side billing logic
```

This is not a defect in the plan. It is the normal boundary of static hosting.

### 4.3 Technically viable booking arrangement

The approved static website will present the service and send the visitor into an approved secure booking/payment system.

```text
ABHINAV CREATIONS WEBSITE                 EXTERNAL SECURE SERVICE

Choose production track
          |
          v
Open booking interface ----------------> Show live availability
                                               |
                                               v
                                        Select date and time
                                               |
                                               v
                                        Collect billing details
                                               |
                                               v
                                        Process cashless payment
                                               |
                                               v
                                        Send confirmation
```

The exact screens and handoff depend on the provider selected later. The website cannot claim real-time availability or instant confirmation until the chosen provider is successfully integrated and tested.

### 4.4 Video-hosting caution

The outline requires a video slider carousel, which is technically possible. The final media-delivery method remains pending.

```text
Provided video files
        |
        +--> small/optimized enough? --> possibly serve as public site assets
        |
        +--> large or numerous? ------> use an approved video-hosting/streaming service
```

This decision will be made after the actual video files are available. It avoids assuming that large production videos should be stored directly with the website files.

## 5. Responsive rendering requirement

The project will use one responsive website and one content structure for all devices.

The requirement is not to create a separate mobile design. The requirement is for the complete website to render correctly and remain usable at different screen widths.

Responsive behavior will include:

- Content reflowing without clipping or horizontal page scrolling
- Navigation remaining usable on narrow screens
- Images and videos preserving their proportions
- Multi-column sections reorganizing when space is limited
- Text remaining readable without requiring zoom
- Buttons and interactive controls remaining usable by touch
- Pricing and booking interfaces fitting the available width
- The light/dark-mode toggle remaining available on every supported screen size

Representative phone, tablet, laptop, and desktop widths will be tested during quality assurance.

### 5.1 What changes and what stays the same

The content and destination remain the same. Only the arrangement changes when space becomes limited.

```text
WIDE SCREEN

+----------------+  +----------------+  +----------------+
| Studio Floor   |  | Podcast Lounge |  | Kitchen Stage  |
+----------------+  +----------------+  +----------------+

NARROW SCREEN

+----------------+
| Studio Floor   |
+----------------+
        |
+----------------+
| Podcast Lounge |
+----------------+
        |
+----------------+
| Kitchen Stage  |
+----------------+
```

The narrow version is not a separate website. The browser applies CSS rules that fit the same content into the available space.

### 5.2 How responsive rendering will be implemented

```text
HTML viewport setting
        +
flexible CSS widths
        +
CSS Grid / Flexbox
        +
media queries where the content needs a layout change
        +
responsive images and media
        =
one website that adapts to its available width
```

Breakpoints will be based on where the content stops fitting comfortably, not on assumptions about a particular phone brand.

## 6. Light and dark themes

The website will include a theme toggle in the shared header interface.

The theme system will:

- Support both light and dark appearances
- Use the visitor's device preference on the first visit
- Allow the visitor to override that preference
- Remember the visitor's choice across pages
- Avoid a noticeable flash of the incorrect theme during page loading
- Preserve readable color contrast in both modes
- Provide an accessible name and keyboard operation

Dark mode will be deliberately styled using the same brand system. It will not be produced by simply inverting all colors.

### 6.1 Theme-selection flow

```text
Visitor opens a page
        |
        v
Is a saved theme choice available?
        |
     +--+--+
     |     |
    YES    NO
     |     |
     v     v
Use saved  Check the device/browser preference
choice              |
                    +------ light preference --> use light
                    |
                    +------ dark preference ---> use dark

Visitor presses theme toggle
        |
        v
Apply the other theme immediately
        |
        v
Attempt to remember the choice for later pages/visits
```

The device preference can be detected with the standard `prefers-color-scheme` media feature. The visitor's override can be stored with `localStorage`.

Some visitors block persistent browser storage or use private browsing. Therefore, theme storage will be treated as an enhancement:

```text
Storage works     --> remember the visitor's override
Storage unavailable --> theme still works now, but may return to the
                        device/default preference on a later visit
```

An early theme-setting step and the browser `color-scheme` declaration will be used to minimize a flash of the wrong theme. “Minimize” is accurate; the plan does not guarantee identical loading behavior in every browser and network condition.

## 7. Primary navigation and shared header

The top navigation bar will remain sticky while the visitor scrolls.

The header will contain:

- Corporate brand logo on the left
- Home
- Studio Spaces & Gear
- For Creators & Actors (B2C)
- For Brands & Businesses (B2B)
- Pricing & Live Booking
- Contact Us
- `Book a Floor Slot` call-to-action button in a bold accent color
- Light/dark-mode toggle

The visitor-facing Sitemap page will be linked from the footer so the primary navigation remains faithful to the Word document.

### 7.1 Header concept diagram

Wide-screen arrangement:

```text
+--------------------------------------------------------------------------------+
| LOGO | Home | Spaces & Gear | Creators | Brands | Pricing | Contact | Theme | BOOK |
+--------------------------------------------------------------------------------+
        sticky: this bar remains available while the visitor scrolls
```

Narrow-screen arrangement:

```text
+--------------------------------------+
| LOGO              Theme     Menu     |
+--------------------------------------+
                              |
                    visitor opens menu
                              |
                              v
                    +------------------+
                    | Home             |
                    | Spaces & Gear    |
                    | Creators         |
                    | Brands           |
                    | Pricing          |
                    | Contact          |
                    | Book Floor Slot  |
                    +------------------+
```

The labels may be visually shortened only where needed for the narrow-screen control, while accessible names and destination pages remain clear. The final header must be tested to ensure the sticky behavior does not cover page content.

### 7.2 Shared-page concept

Every public page will use the same overall frame:

```text
+--------------------------------------+
| Shared sticky header                 |
+--------------------------------------+
|                                      |
| Page-specific content                |
|                                      |
+--------------------------------------+
| Shared corporate and legal footer    |
+--------------------------------------+
```

## 8. Page and section plan

### 8.0 Website map at a glance

```text
Home
|-- Hero Header
|-- B2C / B2B Segment Splitter
|-- Infrastructure Highlights
`-- Social Proof / Video Slider

Studio Spaces & Gear
|-- Visual Master Floor
|-- Acoustic Audio Hub
|-- Podcast Lounge
`-- Commercial Kitchen Setup

For Creators & Actors
|-- Express Services
|-- Premium Portfolio Services
`-- Educational Frameworks

For Brands & Businesses
|-- E-Commerce & Commercial Cataloging
`-- Monthly Content Retainers

Pricing & Live Booking
|-- Standard Hourly & Session Rates
`-- Real-Time Scheduling Engine

Contact Us
`-- Internal content: PENDING

Footer pages
|-- Privacy Policy: legal text PENDING
|-- Terms of Studio Usage: legal text PENDING
|-- Cancellation & Refund Policies: legal text PENDING
|-- Digital Talent Release Terms: legal text PENDING
`-- Visitor-facing Sitemap: approved addition
```

This map preserves the Word outline. `PENDING` means that the source document names the page but does not provide its contents.

### 8.1 Home - The Central Traffic Controller

#### 8.1.1 Hero Header Section

Heading:

> Hyderabad’s Premium, Solar-Powered Production Studio.

Sub-heading:

> A state-of-the-art visual and audio facility in Alwal, Secunderabad, built for zero-latency workflows, immaculate acoustics, and high-production content.

Calls to action:

- Explore Spaces
- Book Live Calendar

#### 8.1.2 Segment Splitter - The Quick Choice

Heading:

> How Can We Help You Create Today?

The section will present two clear choices:

- I am an Actor, Model, or Podcaster ➔ View Talent Packages
- I am a Brand, Agency, or Corporate Firm ➔ View Enterprise Retainers

#### 8.1.3 Infrastructure Highlights

Heading:

> Designed for Uncompromised High-End Production.

Highlights:

- Acoustically Decoupled Rooms (Zero Study Hall Interference).
- 12.55 kW Solar Power Grid & 0-ms Online UPS Failsafe.
- Overhead Motorized Grip & Green-Screen Cyclorama Wall.

#### 8.1.4 Social Proof Grid

Heading:

> Inside Abhinav Creations.

Sub-heading:

> Recent portfolios, showreels, and corporate podcasts cut right on our Alwal floor.

Presentation requirement:

- Video slider carousel

Beginner concept:

```text
Previous button     Current portfolio/showreel video      Next button
      [ < ]       [            VIDEO 1              ]        [ > ]
                              1 of N
```

The source requires a slider but does not require automatic playback. Manual controls will be the safe baseline. Autoplay will not be added unless separately approved, and any approved motion must include appropriate controls.

### 8.2 Studio Spaces & Gear - The Technical Proof

#### 8.2.1 Visual Master Floor

Heading:

> The Modular Studio Floor & Cyclorama.

Sub-heading:

> 16x7ft active feedback mirror wall, motorized background rollers, and permanent multi-axis camera tracking.

#### 8.2.2 Acoustic Audio Hub

Heading:

> The Voice Isolation & Dubbing Suite.

Sub-heading:

> Pristine, dry vocal capture environment optimized for Tollywood auditions, voiceovers, and ad localized syncs.

#### 8.2.3 Podcast Lounge

Heading:

> The Multi-Cam Broadcast Lounge.

Sub-heading:

> Turnkey setup with Shure dynamic mics, RØDECaster processing, and multi-cam video switching for seamless corporate talk shows.

#### 8.2.4 Commercial Kitchen Setup

Heading:

> The Mobile SME Food & Cooking Stage.

Sub-heading:

> Fully integrated induction cooking island beneath custom overhead lighting arrays—built specifically for local restaurants and food creators.

### 8.3 For Creators & Actors - The B2C Funnel

#### 8.3.1 Express Services

Heading:

> Express Audition Slates.

Sub-heading:

> Quick-turnaround, professionally lit 60-second casting self-tapes delivered straight to your email in under 2 hours.

#### 8.3.2 Premium Portfolio Services

Heading:

> The Actor's Launchpad Look-Book.

Sub-heading:

> Cinematic headshots, industry-standard composite prints, and fully color-graded multi-cam acting showreels.

#### 8.3.3 Educational Frameworks

Heading:

> Creative Weekend Masterclasses.

Sub-heading:

> Intensive, in-person training programs led by guest industry professionals on the studio floor.

### 8.4 For Brands & Businesses - The B2B Retainer Funnel

#### 8.4.1 E-Commerce & Commercial Cataloging

Heading:

> High-Throughput Product Look-Books.

Sub-heading:

> Uniformly lit cataloging arrays and seamless backdrop changes for apparel, jewelry, and local D2C brands.

#### 8.4.2 Monthly Content Retainers

Heading:

> Scalable Video & Social Media Subscriptions.

Sub-heading:

> Outsource your monthly content needs. 100% advance-pay subscription brackets covering scripting, raw studio capture, editing, and prompt delivery.

### 8.5 Pricing & Live Booking - The Automation Core

The navigation label will be `Pricing & Live Booking`. The source outline describes the page function as transparent pricing and checkout.

#### 8.5.1 Standard Hourly & Session Rates

Heading:

> Simple, All-Inclusive Flat Pricing.

Sub-heading:

> No surprise taxes at checkout. Select your required production track.

The actual prices and production tracks are not supplied in the Word document and remain pending.

#### 8.5.2 Real-Time Scheduling Engine

Heading:

> Lock Your Floor Slot Automatically.

Sub-heading:

> Choose an available date, select your time slot, fill out your billing information, and secure instant booking confirmation via our cashless portal.

Implementation requires selection of the external scheduling and cashless checkout service.

### 8.6 Contact Us

`Contact Us` is required by the primary navigation in the Word document. The document does not specify the page's internal sections or contact details.

The page will be created, but its exact content must be supplied or separately approved before finalization. No phone number, email address, contact form fields, map, operating hours, or social links will be invented.

### 8.7 Legal pages

The footer must link to these pages:

- Privacy Policy
- Terms of Studio Usage
- Cancellation & Refund Policies
- Digital Talent Release Terms

The Word document provides the page/link names but does not provide the legal text. Legal content remains pending and will not be invented.

### 8.8 Visitor-facing Sitemap

A visitor-facing Sitemap page will group and link all public pages in a simple, accessible directory.

This page is an approved addition made after the Word outline. It will be linked from the footer and will not replace or alter the required primary navigation.

The two sitemap types have different readers:

```text
                        PUBLIC PAGES
                             |
                 +-----------+-----------+
                 |                       |
                 v                       v
        Visitor-facing Sitemap       sitemap.xml
        (ordinary HTML page)      (machine-readable file)
                 |                       |
                 v                       v
        Helps people browse       Helps search engines
                                 discover public URLs
```

Important limitation: `sitemap.xml` helps discovery, but it does not guarantee that a search engine will crawl, index, or rank every page.

## 9. Shared footer

### 9.1 Corporate Identity

Heading:

> Ennef Spectra Private Limited (ESPL)

Sub-heading:

> Abhinav Creations is a wholly-owned digital studio media division of ESPL.

### 9.2 Operational and Legal Fine Print

The footer will include links to:

- Privacy Policy
- Terms of Studio Usage
- Cancellation & Refund Policies
- Digital Talent Release Terms
- Sitemap

The footer will display:

- Registered Address: Alwal, Secunderabad, TG, India.
- Corporate GSTIN once the actual value is supplied.

## 10. Website file/page inventory

The planned public pages are:

1. Home
2. Studio Spaces & Gear
3. For Creators & Actors
4. For Brands & Businesses
5. Pricing & Live Booking
6. Contact Us
7. Privacy Policy
8. Terms of Studio Usage
9. Cancellation & Refund Policies
10. Digital Talent Release Terms
11. Sitemap

Search-engine support files will include:

- `sitemap.xml` - machine-readable list of public pages
- `robots.txt` - crawler instructions and XML sitemap reference

The exact URL filenames will be finalized before implementation and kept portable across ordinary static hosts.

### 10.1 Beginner-friendly file map

The following is a proposed organization, not permission to begin creating the website files yet:

```text
abhinav-creations/
|
|-- index.html                         Home
|-- studio-spaces.html                 Studio Spaces & Gear
|-- creators-actors.html               For Creators & Actors
|-- brands-businesses.html             For Brands & Businesses
|-- pricing-booking.html                Pricing & Live Booking
|-- contact.html                       Contact Us
|-- privacy.html                       Privacy Policy
|-- studio-terms.html                  Terms of Studio Usage
|-- cancellation-refunds.html          Cancellation & Refund Policies
|-- talent-release.html                Digital Talent Release Terms
|-- sitemap.html                       visitor-facing Sitemap
|-- sitemap.xml                        search-engine Sitemap
|-- robots.txt                         crawler instructions
|-- 404.html                           page shown for an unknown address
|
|-- assets/
|   |-- css/
|   |   `-- styles.css                 layout, colors, themes, responsiveness
|   |-- js/
|   |   `-- main.js                    menu, theme, carousel, integration glue
|   |-- images/                        approved public images
|   `-- media/                         approved optimized media, if suitable
|
`-- .github/
    `-- workflows/
        `-- deploy-site.yml            conditional deployment instructions
```

The workflow file is needed only if the approved production deployment uses GitHub Actions. A host with direct GitHub integration may not require this file.

The final names may be adjusted before implementation. Once published, page addresses should remain stable where practical so that bookmarks and search-engine records are not unnecessarily broken.

### 10.2 How a page finds its styling and behavior

```text
studio-spaces.html
        |
        +---- links to assets/css/styles.css
        |
        +---- loads assets/js/main.js
        |
        +---- references approved images/media
        |
        v
Browser displays one complete styled, interactive page
```

If JavaScript fails or is disabled, core page content and normal links should still remain readable wherever practical. JavaScript-dependent features such as the theme toggle and carousel controls cannot fully operate without JavaScript.

## 11. Content and assets still required

Only items necessary to complete the approved outline are listed here:

- Final logo usage preference if multiple logo variants exist
- Studio media for the homepage video slider carousel
- Media needed to present the four studio areas
- Actual hourly and session rates
- Available production tracks
- Selected real-time scheduling and cashless checkout provider
- Selected production hosting provider whose current terms permit the business use
- Contact Us page content and contact details
- Corporate GSTIN
- Complete approved text for the four legal pages

Items may remain clearly marked as pending during development. They must not be guessed.

### 11.1 Why these items matter

| Pending item | Why it is needed | What happens until supplied |
|---|---|---|
| Logo preference | Confirms which approved logo variant is used | Existing repository logo can be reviewed, but no alternative is invented |
| Homepage carousel media | Required for “Inside Abhinav Creations” | Use an obvious development placeholder |
| Studio-area media | Visually supports the four specified spaces | Use an obvious development placeholder |
| Rates | Required for transparent pricing | Show `Pending approved pricing`; do not publish a made-up amount |
| Production tracks | Required by the pricing-page instruction | Do not invent package names or inclusions |
| Booking/payment provider | Required for real-time scheduling and cashless checkout | Build only a non-operational placeholder/handoff until selected |
| Production hosting provider | GitHub Pages currently restricts this commercial use | Keep the code portable; do not launch the business site until a compliant host is approved |
| Contact content | The Word outline names the page but supplies no internal content | Create no unapproved address fields, form fields, or claims |
| Corporate GSTIN | Required in the footer | Do not display a sample GSTIN |
| Legal text | Required for the four legal links | Do not generate legal terms and present them as approved business policy |

### 11.2 Dependency diagram

```text
Can the visual page shell be built before all content arrives?  YES

Can final pricing be published without approved rates?          NO
Can real-time booking be completed without a provider?          NO
Can the commercial site launch without a compliant host?        NO
Can the GSTIN be displayed without the real value?              NO
Can legal pages be finalized without approved legal text?       NO
Can the final carousel be tested without actual media?          NO
```

This distinction allows visible design work to proceed after plan approval while preventing fabricated business information from reaching the final site.

## 12. Implementation phases

Programming begins only after this plan is approved.

```text
PHASE 1   Confirm scope and available content
   |
   v
PHASE 2   Define reusable visual rules
   |
   v
PHASE 3   Build shared header/footer/theme behavior
   |
   v
PHASE 4   Build and review Home
   |
   v
PHASE 5   Build Studio + B2C + B2B pages
   |
   v
PHASE 6   Build Pricing/Booking shell and integration
   |
   v
PHASE 7   Build Contact and legal pages with approved content
   |
   v
PHASE 8   Add human and search-engine sitemaps
   |
   v
PHASE 9   Verify responsive and theme behavior
   |
   v
PHASE 10  Complete quality assurance
   |
   v
PHASE 11  Publish to the approved production host
```

### Phase 1 - Scope and content preparation

- Treat this plan and the Word outline as the scope baseline.
- Inventory supplied assets.
- Confirm missing content without inventing it.
- Establish final page filenames and internal links.

### Phase 2 - Shared design system

- Define the clean, professional visual system.
- Define the bold accent treatment for calls to action.
- Define light and dark theme color tokens.
- Define responsive typography, spacing, and layout rules.
- Define shared buttons, cards, media, header, and footer behavior.

The visual system will support the source outline without adding unapproved claims or content.

### Phase 3 - Shared website structure

- Build the sticky header with the exact required navigation.
- Add the logo on the left.
- Add the `Book a Floor Slot` accent button.
- Add the accessible theme toggle.
- Build the shared corporate/legal footer.
- Ensure the structure responds correctly across screen sizes.

### Phase 4 - Homepage

- Build the Hero Header Section.
- Build the Segment Splitter.
- Build the Infrastructure Highlights.
- Build the Social Proof Grid and video slider carousel.
- Connect the specified calls to action.
- Review the complete homepage before extending the visual system to the remaining pages.

### Phase 5 - Audience and studio pages

- Build Studio Spaces & Gear with its four specified sections.
- Build For Creators & Actors with its three specified sections.
- Build For Brands & Businesses with its two specified sections.
- Preserve the supplied headings, sub-headings, and service boundaries.

### Phase 6 - Pricing and live booking

- Build the standard hourly/session rates section.
- Build the real-time scheduling section.
- Insert approved prices and production tracks when supplied.
- Integrate the approved external scheduling and cashless checkout service.
- Test the booking path without exposing private credentials.

### Phase 7 - Contact and legal pages

- Build the Contact Us page using separately supplied or approved content.
- Build the four required legal pages using approved legal text.
- Connect all required footer links.

### Phase 8 - Sitemap and search-engine discovery

- Build the visitor-facing Sitemap page.
- Generate `sitemap.xml` containing every public page.
- Create `robots.txt` and reference `sitemap.xml`.
- Check that all public pages are reachable through navigation, footer links, or the visitor sitemap.

### Phase 9 - Responsive and theme behavior

- Confirm that every page reflows correctly on narrow, medium, and wide screens.
- Confirm that no page has unintended horizontal scrolling or clipped content.
- Confirm that navigation, videos, pricing, booking, and legal content remain usable.
- Confirm correct light/dark theme selection, switching, and persistence across pages.

### Phase 10 - Quality assurance

- Check all headings and wording against the approved source.
- Check all internal and external links.
- Check keyboard navigation and visible focus states.
- Check accessible labels and semantic page structure.
- Check readable contrast in both themes.
- Check video carousel controls.
- Check booking and checkout behavior.
- Check responsive rendering on representative phone, tablet, laptop, and desktop widths.
- Check for missing content, placeholders, broken assets, and exposed credentials.

### Phase 11 - Production hosting preparation and deployment

- Select and approve a production host whose current terms permit this commercial website.
- Configure direct Git integration or add a GitHub Actions workflow, depending on the selected host.
- Ensure all asset and page paths work from the host's preview and final public URLs.
- Add a suitable static `404.html` page.
- Verify `sitemap.xml` and `robots.txt` using the final public URL.
- Configure HTTPS and the approved custom domain when ready.
- Publish only after approval and final testing.

Beginner deployment explanation:

```text
Approved files in GitHub repository
                |
                v
Approved host integration or workflow starts
                |
                v
Static public files are collected
                |
                v
Production host deploys the files
                |
                v
Website becomes available at its public address
                |
                v
Run post-deployment link, theme, booking, and layout checks
```

For this plain static website, there is no application compilation requirement. The approved host can publish the prepared public files directly. If the publishing method changes later, the plan must be updated first.

## 13. Approval sequence

1. Approve this project plan.
2. Supply any immediately available content or assets from Section 11.
3. Build the shared structure and responsive homepage with light/dark modes.
4. Review and approve the homepage direction.
5. Build the studio, B2C, and B2B pages.
6. Build pricing, booking, Contact Us, and legal pages using approved content.
7. Add the visitor and search-engine sitemaps.
8. Complete responsive, theme, accessibility, content, and integration testing.
9. Prepare and publish through the approved commercial production host after final approval.

```text
PLAN APPROVAL
     |
     v
HOMEPAGE + SHARED SYSTEM REVIEW
     |
     +-- changes requested --> revise and review again
     |
     `-- approved
           |
           v
REMAINING PAGE BUILD
           |
           v
CONTENT + INTEGRATION COMPLETION
           |
           v
FINAL QUALITY REVIEW
           |
           +-- issues found --> correct and retest
           |
           `-- approved
                 |
                 v
              PUBLISH
```

## 14. Technical feasibility and fact-check record

The approach was reviewed against current official documentation on July 17, 2026.

| Plan statement | Result | Qualification |
|---|---|---|
| GitHub Pages can publish a plain static site | Verified | GitHub documents publishing static files and using either prepared files or a static-site generator. |
| GitHub Actions can deploy to GitHub Pages | Verified | GitHub provides a supported custom-workflow path for configuring, uploading, and deploying a Pages artifact. Exact action versions will be selected from current GitHub documentation during implementation. |
| GitHub Pages is permitted as this site's production host | **No under the current published rule** | GitHub says Pages is not intended or allowed as free hosting for an online business/e-commerce site or a site primarily facilitating commercial transactions. This site includes pricing, live booking, billing, and cashless checkout. |
| The code can stay in a GitHub repository while another host publishes it | Verified | Static-hosting providers can connect to GitHub. Cloudflare Pages is one documented technical example; final provider approval remains pending. |
| A custom domain can be added later | Verified conditionally | The selected host must support it, the domain must be owned, and DNS must be correctly configured. These are operational steps, not page code. |
| HTTPS is possible | Verified conditionally | The selected host must support and correctly configure HTTPS for the final domain. |
| One site can render across phones, tablets, and desktops | Verified | Responsive web design uses flexible layouts, responsive media, and media queries where needed. It is one website, not a second mobile site. |
| The device's light/dark preference can be detected | Verified | Browsers expose the standard `prefers-color-scheme` media feature. |
| A manual theme choice can be remembered | Verified with fallback | `localStorage` normally persists across browser sessions, but it may be unavailable or temporary because of browser policy or private browsing. The site must keep working without persistence. |
| An XML sitemap can be hosted as a static file | Verified | This small site can maintain the XML manually. The sitemap must use final absolute public URLs. |
| `robots.txt` can reference the XML sitemap | Verified | Search engines can discover the sitemap through a `Sitemap:` line containing its absolute URL. |
| A sitemap guarantees indexing/ranking | False; not claimed | A sitemap is a discovery hint. Search engines decide whether to crawl, index, or rank a URL. |
| A static site can directly run private booking/payment logic | Not supported by this architecture | The required real-time scheduling and cashless portal must be supplied by an approved external system or another separately authorized backend. |
| The video carousel is possible | Verified conditionally | The browser interface is straightforward. Final performance depends on the supplied media sizes and chosen hosting method. |

### 14.1 Official references used for the technical review

- [GitHub Docs: Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [GitHub Docs: Using custom workflows with GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [GitHub Docs: About custom domains and GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)
- [GitHub Docs: GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)
- [Cloudflare Docs: Pages Git integration](https://developers.cloudflare.com/pages/configuration/git-integration/)
- [MDN: Responsive web design](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
- [MDN: `prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/%40media/prefers-color-scheme)
- [MDN: `localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Google Search Central: Learn about sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Google Search Central: Build and submit a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)

### 14.2 Hosting and media-capacity caution

Every hosting provider has service terms and technical limits. GitHub's Pages limits also show why production video size and bandwidth must be considered separately from ordinary HTML, CSS, JavaScript, and images. Therefore:

```text
Do not assume all original production video belongs in the repository.
        |
        v
Measure and optimize the supplied media.
        |
        v
Choose direct hosting or an external video service based on real file sizes.
```

The selected provider's current terms, file limits, bandwidth limits, media behavior, and commercial-use rules must be checked before launch because services can change.

## 15. Sanity check and anti-fabrication audit

### 15.1 Source-content audit

The following were checked against the supplied Word outline:

- Required sticky navigation and its six page links
- `Book a Floor Slot` accent CTA
- All four Home page sections
- Both Home page audience choices
- All three infrastructure claims
- Video slider carousel requirement
- All four Studio Spaces & Gear sections and descriptions
- All three For Creators & Actors sections and descriptions
- Both For Brands & Businesses sections and descriptions
- Both Pricing & Live Booking sections and descriptions
- ESPL corporate identity wording
- Alwal, Secunderabad, TG, India registered-address wording
- Corporate GSTIN display requirement
- All four legal link names

### 15.2 Business claims that require owner confirmation before publication

The Word document is authoritative for project scope, but it is not independent evidence that every private business fact is current or legally safe to publish. The following source-provided claims must be confirmed by the business owner before launch:

- `Hyderabad's Premium` positioning and all other subjective marketing language
- 12.55 kW solar-power capacity
- 0-ms online UPS failsafe
- Zero-latency workflow statement
- Immaculate-acoustics statement
- Acoustically decoupled rooms and zero study-hall interference
- Overhead motorized grip and green-screen cyclorama wall
- 16x7ft active feedback mirror wall
- Motorized background rollers
- Permanent multi-axis camera tracking
- Voice-isolation/dubbing environment claims
- Shure dynamic microphones
- RØDECaster processing
- Multi-camera video switching
- Integrated induction cooking island and custom overhead lighting arrays
- Self-tape email delivery in under two hours
- Headshot, composite-print, showreel, and masterclass deliverables
- Guest industry-professional involvement in masterclasses
- 100% advance-pay subscription structure
- Scripting, capture, editing, and prompt-delivery inclusions
- “No surprise taxes at checkout” statement
- Real-time availability and instant booking confirmation
- Abhinav Creations being a wholly-owned digital studio media division of ESPL
- Registered-address wording
- GSTIN value when supplied

```text
Claim appears in Word outline
            |
            v
Business owner confirms it is accurate and current
            |
       +----+----+
       |         |
      YES        NO / CHANGED
       |         |
       v         v
Publish it     Correct the plan and approved copy first
```

Tax, refund, privacy, usage, and talent-release wording should also receive appropriate legal/accounting review. The website implementation can display approved text, but website code cannot validate legal compliance.

### 15.3 Items deliberately not fabricated

The source document does not supply the following, so the plan keeps them pending:

- Actual prices
- Names and contents of production tracks
- Booking/payment provider
- Contact Us page details
- GSTIN value
- Legal-policy text
- Actual portfolio/showreel files
- Actual studio media files

### 15.4 Requirements added after the Word outline

Only these owner-approved additions are included:

- Responsive rendering of the same site across screen sizes
- Light/dark-mode toggle
- Visitor-facing Sitemap page
- `sitemap.xml`
- `robots.txt` sitemap reference
- Original GitHub Pages publishing request, now corrected by the current commercial-use policy finding

Accessibility, safe credential handling, testing, and deployment checks are implementation quality controls. They do not change the business offerings or claims in the Word outline.

### 15.5 Feasibility conclusion

The planned public website is technically viable as a static HTML/CSS/JavaScript site. It is **not currently suitable for production hosting on GitHub Pages under GitHub's published commercial-use restriction**.

```text
STATIC CONTENT + RESPONSIVE LAYOUT + THEME + CAROUSEL  --> technically feasible

REAL-TIME BOOKING + BILLING + CASHLESS PAYMENT         --> feasible only after
                                                           an external service
                                                           or authorized backend
                                                           is selected

COMMERCIAL PRODUCTION HOSTING                          --> feasible only after
                                                           a compliant provider
                                                           is selected and approved
```

No technical blocker has been identified for building the public website shell. Final launch depends on the pending business content, external booking/payment decision, and compliant production-host selection listed in this plan.

## 16. Scope-control rule

Before implementing any material feature or content not listed in this plan, the plan must first be updated and approved.

This rule prevents the project from drifting away from the Word outline and preserves this file as the current, trackable source for implementation.
