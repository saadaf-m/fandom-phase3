# Fandom Wireframe Prototype — Phase 2

A low-fidelity wireframe prototype built with Vite + React + React Router, deployed to GitHub Pages.

**Live URL:** https://saadaf-m.github.io/fandom-wireframe-phase-2/

> ⚠️ This is a wireframe for usability testing of Fandom.com's redesigned information architecture. It is not a production application.

---

## What This Is

This prototype simulates the user experience of a redesigned Fandom.com. It contains clickable navigation, realistic content labels, and real routing — but uses placeholder imagery and minimal styling intentional to a low-fidelity wireframe.

The goal is to validate the new IA (Information Architecture) with real users before committing to high-fidelity design.

---

## Three Critical Paths

### Path 1 — Discovery from Zero
> Can a user find a specific game wiki starting from the homepage?

1. **Homepage** (`/`) — Scroll to the Games section
2. Click **Browse All** → **Games category page** (`/games`)
3. Click **See All Trending** → **Games Trending Wikis** (`/games/trending`)
   — or **See All Popular** → **Games Popular Wikis** (`/games/popular`)
4. Click **View Wiki** on any card

### Path 2 — Leave Your Mark
> Can a user navigate to posting a new fandom starting from the homepage?

1. **Homepage** (`/`) — Click **Community** in the navbar
2. **Community page** (`/community`) — Click **+ Post Something**
3. **Post a New Fandom page** (`/account/post`) — Fill in the form and submit

### Path 3 — Navigate Without a Safety Net
> Can a user find a specific anime wiki (Death Note) via Browse All?

1. **Homepage** (`/`) — Scroll to the Anime section, click **Browse All**
2. **Anime category page** (`/anime`) — Click **Browse All Anime Wikis**
3. **Anime Browse All page** (`/anime/browse`) — Locate the **Death Note Wiki** card (highlighted with a border)
4. Click **View Wiki** → **Death Note Wiki page** (`/anime/browse/death-note`)

---

## Pages

| Route | Page |
|---|---|
| `/` | Homepage |
| `/games` | Games category |
| `/games/trending` | Games Trending Wikis |
| `/games/popular` | Games Popular Wikis |
| `/games/browse` | Games Browse All |
| `/anime` | Anime category |
| `/anime/trending` | Anime Trending Wikis |
| `/anime/popular` | Anime Popular Wikis |
| `/anime/browse` | Anime Browse All |
| `/anime/browse/death-note` | Death Note Wiki |
| `/community` | Community feed |
| `/account/post` | Post a New Fandom |
| `/account` | My Account |
| `/tv` | TV category |
| `/movies` | Movies category |
| `/music` | Music category |

---

## Tech Stack

- **Vite** — build tool
- **React 18** — UI framework
- **React Router v6** with `HashRouter` — client-side routing compatible with GitHub Pages
- **Inline styles / plain CSS** — no external UI libraries
- `base: '/fandom-wireframe-phase-2/'` set in `vite.config.js`

## Local Development

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run build
# deploy the dist/ folder to GitHub Pages
```
