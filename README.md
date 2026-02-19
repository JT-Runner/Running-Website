# Running Website

A lightweight, single-page website for showcasing Jonah Tildesley’s running journey, training philosophy, and weekly training schedule.

## Project Structure

- `index.html` – Main page markup and content.
- `Stylesheet.css` – Site styling and responsive layout rules.
- `Javascript.js` – Interactive training-week day selector.

## Run Locally

Because this is a static website, you can run it with any web server.

### Option 1: Python

```bash
python3 -m http.server 8000
```

Then open: `http://localhost:8000`

### Option 2: Open directly

You can also open `index.html` directly in your browser.

## What Was Improved

- Split concerns cleanly across HTML/CSS/JS files.
- Added semantic structure and accessibility improvements (skip link, nav labels, live region).
- Fixed invalid markup and broken section links.
- Improved responsive behavior for smaller screens.
- Made JS rendering safer by avoiding `innerHTML` for dynamic content.
