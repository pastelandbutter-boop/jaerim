# Learn Korean with Jaerim

A focused one-page landing page for Jaerim's personalized 1:1 Korean lessons.
It follows the copy and section order of the original Notion page, with the
"Soft Seoul Memory Wall" visual identity layered onto a clean booking flow.

## Local preview

Requires Node.js 22 or newer.

```bash
npm install
npm run dev:next
```

Open `http://localhost:3000`.

## Deploy with GitHub and Netlify

1. Push this project to a GitHub repository.
2. In Netlify, select **Add new project** and import that repository.
3. Netlify reads `netlify.toml` automatically and uses:
   - Build command: `npm run build:netlify`
   - Publish directory: `.next`
4. Deploy the site.

The form buttons link to Jaerim's existing Tally application form. Replace
`public/jaerim-brand-board.png` with approved real photography before launch;
the current image is the visual-direction placeholder supplied with the brand
identity.

## Main files

- `app/page.tsx` — page copy and structure
- `app/globals.css` — Jaerim visual system and responsive styles
- `app/layout.tsx` — site metadata and favicon
- `netlify.toml` — Netlify build settings
