# ORA — The Midnight Reset

A scroll-driven skincare concept with an animated 3D cream jar, expanding campaign image, ingredient compositions, word-by-word reading reveal, horizontal ritual and demo shopping bag.

## Run

Install Node.js 20 or later. Extract the ZIP, open a terminal in its folder, then run:

```
npm ci
npm run dev
```

Open http://localhost:4173 (or the address printed in the terminal). Use a web server, not a double-clicked HTML file.

## Edit

- src/index.html: page content
- src/midnight.js: scroll choreography, Three.js jar and shopping bag
- dist/midnight.css: responsive styles
- dist/assets/midnight-campaign.png: original campaign imagery

Run `npm run build` after source changes. The build copies src/index.html into dist and bundles the JavaScript. Deploy the contents of dist to any static host.

Routes: /, /#formula, /#ritual, /#collection.

The footer offers a reduced-motion layout. Short screens and landscape phones use natural scrolling to keep all content reachable. Phones and tablets use stacked ingredient cards, while wider screens use a three-column composition. Expanded product details grow with their content. Google Fonts requires internet access. Brand, formula and price are concept content. Payments and orders are not connected. API keys and hosting credentials are excluded from the download.

Responsive styling is in `dist/responsive.css` and is included automatically by the build. For a different local port, run `npm run dev -- -p 4175` and open http://localhost:4175.
