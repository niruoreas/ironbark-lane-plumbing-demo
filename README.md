# Ironbark Lane Plumbing (demo site)

**Live demo:** https://ironbark-lane-plumbing-demo.vercel.app

A one-page website for a **fictional** Ballarat plumbing business, built as a portfolio piece. The business, owner, phone number, review and job details are all made up.

## What's in it

- **Hero** with the trade and the place up front ("Ballarat plumbing, sorted the same day"), a quote button and the phone number
- **Day / night split:** "Fixed by lunch." and "Hot shower tonight.", two full-height photos that sell the two most common urgent jobs
- **Services** as an editorial grid: hot water, leaks and taps, blocked drains, bathrooms, gas fitting. Each link pre-picks that service in the quote form.
- **Before / after slider** you can drag
- **About** section in the owner's voice
- **How it works** shown as phone lock-screen notifications that arrive one by one
- **Review** card (clearly labelled as sample content)
- **Suburb check** that highlights the matching suburb as you type
- **FAQ** with plain answers
- **Contact** with a text-message thread and a short quote form (demo only, nothing is sent)
- Sticky **Call / Get a quote** bar on phones

Plain HTML, CSS and JavaScript. No framework and no build step. Tested from 320px phones to 1920px desktops with no sideways scrolling, and motion is turned off for people who prefer reduced motion.

## Run it

Open `index.html`, or serve the folder:

```
python -m http.server 8000
```

## Credits

- Photos: [Unsplash](https://unsplash.com), used under the Unsplash License
- Fonts: Instrument Serif and Inter from Google Fonts
- The phone number 0491 570 156 is from the range the ACMA sets aside for use in fiction
