# CleopatraTayeta_ST10533635_WEDE5020_POE
# RoboWild – WEDE5020 POE

## Project Description
RoboWild is a non-profit organisation that connects robotics and IT volunteers with wildlife conservation projects in Southern Africa. This website serves as the digital platform to showcase their projects, recruit volunteers, and process enquiries and sponsorships.

## Repository Link
https://github.com/CleopatraTayeta/RoboticForWildLife.git

## Live Website Link
https://cleopatratayeta.github.io/RoboticForWildLife/

## Pages
- **Home** – `index.html` (Includes hero section, highlights, impact stats, and dynamic lightbox gallery)
- **About** – `about.html` (Includes history, interactive Mission/Vision/Values tabs, and team profiles)
- **Our Projects** – `service.html` (Includes dynamic project cards, live search, and category filters)
- **Get Involved** – `enquiry.html` (Includes validated Volunteer and Sponsor forms)
- **Contact** – `contact.html` (Includes interactive location maps, contact details, and a validated contact form)
- **HTML Sitemap** – `sitemap.html` (A user-friendly, styled page linking to all main pages)

---

## Part 2 – CSS Styling & Responsive Design

### Changelog
- **2026-09-11:** Renamed all HTML files to lowercase so links work correctly on GitHub.
- **2026-09-11:** Created external stylesheet `css_asset/style.css` and linked it on every page.
- **2026-09-11:** Implemented CSS reset, default typography, colour scheme and base styles.
- **2026-09-11:** Applied Flexbox for header/navigation and hero section.
- **2026-09-11:** Applied CSS Grid for project cards, two-column sections and footer.
- **2026-09-11:** Added hover, focus and active pseudo-classes for interactive elements.
- **2026-09-11:** Added media queries for tablet (≤900px) and mobile (≤600px).
- **2026-09-11:** Used relative units (rem and %) throughout for responsiveness.
- **2026-09-11:** Fixed image paths and made images responsive.

### Testing
Tested using browser developer tools on:
- **Desktop\PC (>1024px)**
  <img width="1920" height="1080" alt="Screenshot 2026-09-11 111851" src="https://github.com/user-attachments/assets/a7e90768-746e-4a12-a5d6-ba1fde5d71cc" />

- **Tablet (~768–900px)**
  *(Insert Tablet Screenshot Here if available)*

- **Mobile (~375–600px)**
  <img width="720" height="1280" alt="WhatsApp Image 2026-09-11 at 12 52 03" src="https://github.com/user-attachments/assets/19e3cd1b-9aa7-401c-b577-817170473e80" />

### Part 2 References
- Google Fonts (2026) *Google Fonts*. Available at: https://fonts.google.com (Accessed: 12 August 2026).
- Unsplash (2026) *Unsplash: The internet's source of freely-usable images*. Available at: https://unsplash.com (Accessed: 12 August 2026).
- Font Awesome (2026) *Font Awesome Icons*. Available at: https://fontawesome.com (Accessed: 12 August 2026).
- W3Schools (2026) *CSS Reference*. Available at: https://www.w3schools.com/css (Accessed: 11 September 2026).
- MDN Web Docs (2026) *CSS: Cascading Style Sheets*. Available at: https://developer.mozilla.org/en-US/docs/Web/CSS (Accessed: 11 September 2026).
- Lecture slides (Week 5 & Week 6)

---

## Part 3 – Enhancing Functionality and SEO

### Changelog (Part 3 feedback implementation)
- **2026-10-28:** Fixed broken/duplicate `<img>` tags in `about.html`, `index.html` and `service.html` (Part 2 feedback).
- **2026-10-28:** Added shared `js_asset/main.js` for modal dialogs, scroll-reveal animations, and tab navigation.
- **2026-10-28:** Added accessible tab component to `about.html` (Mission / Vision / Values).
- **2026-10-28:** Replaced static project cards with dynamic JS-rendered cards in `service.html` (`js_asset/projects.js`).
- **2026-10-28:** Implemented live search + category filters for projects.
- **2026-10-28:** Added responsive lightbox gallery to `index.html` (`js_asset/gallery.js`).
- **2026-10-28:** Enhanced Google Maps iframes with "Get Directions" location-based links.
- **2026-10-28:** Added client-side validation (`js_asset/validation.js`) for contact and enquiry forms with inline error messages.
- **2026-10-28:** Added AJAX form submission (`js_asset/form-handler.js`) using Formspree for contact and enquiry forms.
- **2026-10-28:** Added radio buttons and a required terms checkbox to the volunteer enquiry form.
- **2026-10-28:** Added valid social media links (Facebook, Instagram, LinkedIn) to the footer of all pages.
- **2026-10-28:** Added `mailto:` links to all email addresses so they open the user's default email client.
- **2026-10-30:** Created a user-facing HTML Sitemap (`sitemap.html`) and styled it using CSS.
- **2026-10-30:** Created an XML Sitemap (`sitemap.xml`), added `robots.txt`, and styled the XML using `sitemap.xsl`.
- **2026-10-30:** Added comprehensive SEO meta tags (keywords, Open Graph, author, viewport) to all pages.
- **2026-10-30:** Improved accessibility with `aria-live`, `role="dialog"`, `role="tablist"` and labelled form controls.

### Testing
- Tested all forms with valid/invalid inputs on Chrome and Firefox to ensure validation and AJAX submission work correctly.
- Tested live search and category filters on `service.html`.
- Tested lightbox keyboard (Esc) and click-outside behaviour.
- Tested interactive tabs on the About page.
- Tested `mailto:` links to ensure they trigger the default mail application.
- Verified HTML and XML sitemaps are formatted correctly and accessible.
- Tested responsive layout at 375px, 768px and 1440px.

### Part 3 References
- Formspree (2026) *Formspree – Form backend for static sites*. Available at: https://formspree.io (Accessed: 28 October 2026).
- MDN Web Docs (2026) *Client-side form validation*. Available at: https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation (Accessed: 28 October 2026).
- MDN Web Docs (2026) *Intersection Observer API*. Available at: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API (Accessed: 28 October 2026).
- Google Maps Platform (2026) *Maps URLs*. Available at: https://developers.google.com/maps/documentation/urls/get-started (Accessed: 28 October 2026).
- W3Schools (2026) *JavaScript HTML DOM*. Available at: https://www.w3schools.com/js (Accessed: 28 October 2026).
- W3Schools (2026) *XML Sitemaps*. Available at: https://www.w3schools.com/xml/xml_sitemap.asp (Accessed: 30 October 2026).