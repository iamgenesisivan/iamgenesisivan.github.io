# Genesis Ivan Aquino — Portfolio

Senior Software Developer portfolio built with Vue 3, Vite, and Tailwind CSS.

## Tech Stack

- **Vue 3** — Composition-ready component architecture
- **Vite** — Lightning-fast dev server and build tool
- **Tailwind CSS v3** — Utility-first styling
- **Vanilla JavaScript** — No TypeScript overhead
- **Static site** — No backend, no database, deployable anywhere

## Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── NavBar.vue         # Sticky nav with dark/light toggle
│   │   ├── HeroSection.vue    # Animated hero with stats
│   │   ├── AboutSection.vue   # Bio + personality
│   │   ├── SkillsSection.vue  # Categorized skill cards
│   │   ├── ProjectsSection.vue # Project showcase cards
│   │   ├── ExperienceSection.vue # Timeline journey
│   │   ├── ContactSection.vue # Contact links
│   │   └── FooterSection.vue
│   ├── App.vue                # Root component + reveal observer
│   ├── main.js                # App entry point
│   └── style.css              # Tailwind + custom CSS
├── index.html
├── vite.config.js             # GitHub Pages base path configured
├── tailwind.config.js
└── postcss.config.js
```

## Setup

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## GitHub Pages Deployment

### 1. Set the base path

In `vite.config.js`, update `base` to match your GitHub repo name:

```js
export default defineConfig({
  plugins: [vue()],
  base: '/your-repo-name/',  // ← change this
})
```

### 2. Using GitHub Actions (recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm install
      - run: npm run build
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
      - uses: actions/deploy-pages@v4
        id: deployment
```

Then in GitHub: Settings → Pages → Source → GitHub Actions

### 3. Manual deployment

```bash
npm run build
# Upload the dist/ folder contents to GitHub Pages
```

## Customization

### Update personal info
- **Hero**: `src/components/HeroSection.vue` — name, title, stats
- **About**: `src/components/AboutSection.vue` — bio text, tags
- **Contact**: `src/components/ContactSection.vue` — email, GitHub, LinkedIn URLs
- **Projects**: `src/components/ProjectsSection.vue` — add real GitHub/demo links
- **Experience**: `src/components/ExperienceSection.vue` — company names, dates

### Add resume
Place your `resume.pdf` in the `public/` folder. The download button will work automatically.

### Colors & theme
Edit `tailwind.config.js` to adjust the accent color or surface colors.

## License

MIT — use freely, attribution appreciated.
