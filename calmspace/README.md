# CalmSpace — Fidget Toy Stress Relief Website

This is a simple multi-page static website designed to host multiple interactive fidget toys to help users relieve stress.
It's ready to be published on **GitHub Pages**.

## Features
- Multi-page layout (one page per toy)
- 10-minute reminder timer on each toy
- Sound effects for clicks, pops, and switches (public URLs used)
- Minimal, responsive design

## How to publish on GitHub Pages
1. Create a new repository on GitHub (e.g., `calmspace`).
2. Upload the contents of this folder to the repository root (or push via git).
3. In the repository settings, enable **Pages** and select the `main` branch (or `gh-pages`) and root folder.
4. Your site will be available at `https://<your-username>.github.io/<repo-name>/`.

## Replacing sound assets
All sound URLs are grouped in `js/sound.js` between the comments:
```js
// ------------------ REPLACE_SOUND_URLS START ------------------
// ------------------ REPLACE_SOUND_URLS END ------------------
```
Change the URL strings there to replace audio files. They are intentionally isolated for easy editing.

## Files
- index.html
- css/style.css
- js/timer.js
- js/sound.js
- toys/*.html

Enjoy — and let me know if you want additional toy mechanics or a different sound set.
