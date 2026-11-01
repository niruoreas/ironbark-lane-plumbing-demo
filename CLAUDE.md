# CLAUDE.md

Rules for working on this repo. Read before changing anything.

## What this is

A one-page demo site for **Ironbark Lane Plumbing**, a fictional plumber in Ballarat, VIC. It's a portfolio piece, not a real business. Live at https://ironbark-lane-plumbing-demo.vercel.app.

## Stack

- Plain `index.html`, `style.css`, `script.js`. No framework, no build step, no npm.
- Photos live in `img/` (Unsplash License). Fonts are Instrument Serif and Inter from Google Fonts.
- Preview locally with `python -m http.server 8000`.
- Deploys to Vercel as a static site. `.vercelignore` keeps `README.md` and `.git` out of the deploy.

## Keep it fictional

- Never add real business names, real people, real phone numbers or real licence numbers.
- The phone number stays `0491 570 156`. It's from the ACMA range reserved for fiction.
- Reviews must stay labelled as sample content.
- Keep the demo strip at the top and the fictional note in the footer.

## Design rules

- Colours come from the logo: copper `--copper` on deep green `--green`. Add new colours as tokens in `:root`, never as one-off hex codes.
- Headlines use the serif with an italic second line (`<h2>Main line <em>second line.</em></h2>`).
- Type sits in the photo's empty space. No boxes, badges, rows of ticks or gradients on top of photos.
- The hero has to say the trade and the place ("Ballarat plumbing") so a phone visitor knows where they are in one glance.

## Copy rules

- Write like a local tradie talks: short, plain, specific. Concrete facts over slogans.
- No AI-sounding filler, no stacked taglines, no repeating the same promise in every section.
- Every section answers what the customer needs, then points to a quote or a call.
- Banned words: premium, best, leading, world-class, "Book a call".

## Behaviour (script.js)

- `.rv` fades in when on screen and `.kb` photos slowly zoom. Both are added by one IntersectionObserver.
- Notifications (`#ntStack .note`) and message bubbles (`.thread .msg`) arrive one after another.
- `[data-pick]` links pre-select the matching service chip in the quote form.
- The form is demo only. It checks name and phone, then shows the thank-you. It must never send data anywhere.
- Respect `prefers-reduced-motion`: every animation needs an off switch in CSS.

## Before you call a change done

1. Check phones first (320, 375, 390, 430px), then 768, 1024, 1280, 1440 and 1920px.
2. No sideways scrolling at any width, and exactly one `<h1>`.
3. On phones, nothing important sits behind the sticky Call / Get a quote bar.
4. Text on photos stays readable. Darken the photo or move the text if it doesn't.
5. Every image loads, and every new image has real alt text (empty alt only for decorative ones).
