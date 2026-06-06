# STEM by Sophia Website

Static multi-page website for **stembysophia.com** (served via GitHub Pages).
Tagline: *Confidence. Clarity. Advancement.*

## Pages
- `index.html` — homepage / hub (overview + links to each service page)
- `mcat.html` — MCAT prep + five packages (Accelerator, Strategy Support, Comprehensive, Intensive Summer Prep, Longterm Intensive Prep)
- `test-prep.html` — ACT & SAT test prep
- `tutoring.html` — STEM subject tutoring (math & science, high school through graduate)
- `academic-coaching.html` — academic & success coaching (incl. neurodivergent-affirming support)

## Supporting files
- `style.css` — full visual styling (original design tokens + new components)
- `main.js` — mobile menu, dropdown, and scroll-reveal animations
- `sitemap.xml` — list of pages for search engines
- `robots.txt` — crawler directives (points to the sitemap)
- `images/` — photography, headshots, and the brand logo assets
- `CNAME` — GitHub Pages custom domain (`www.stembysophia.com`)

## Logo assets (in `images/`)
- `logo-lockup.png` — flower mark + wordmark, transparent (used in header/footer)
- `logo.png` — full logo with tagline, transparent
- `logo-mark.png` — flower mark only, square
- `favicon-32.png`, `favicon-180.png` — browser/app icons

## SEO features built in
- Unique title, meta description, and canonical URL on every page
- Open Graph tags for social sharing
- JSON-LD structured data (EducationalOrganization, Service, FAQPage)
- One `<h1>` per page with a clean heading hierarchy
- Internal links between the homepage and every service page
- `sitemap.xml` + `robots.txt`

### After deploying, do these two things for SEO:
1. Submit the site and `sitemap.xml` in **Google Search Console**.
2. (Optional) Submit in **Bing Webmaster Tools**.

## GitHub Pages setup
1. Upload all files/folders to the repository root (keep `images/` as a folder).
2. **Settings → Pages → Build and deployment → Deploy from a branch.**
3. Select `main` and `/root`, then save.
4. Custom domain: `www.stembysophia.com` (already set in `CNAME`).
5. At your registrar, add a CNAME record: `www` → `YOUR-GITHUB-USERNAME.github.io`.
6. Once DNS propagates, enable **Enforce HTTPS**.

## Notes
- Headshot is the original photo; the framing effect is CSS only.
- Booking uses the existing Square Appointments widget on the homepage contact section;
  all service-page CTAs link to that section (`index.html#contact`).
- Contact email standardized to `hello@stembysophia.com` (see chat notes).
