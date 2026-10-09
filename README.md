# 🏎 The Victorian Paddock — Portfolio

> *"Where aerodynamic telemetry meets the ornate romance of Victorian fine art."*

An interactive single-page scrolling portfolio built for **Aarushi Patidar** — a fusion of **F1 racing, Victorian gallery aesthetics, and modern software engineering**.

---

## 🚀 Getting Started

```bash
npm install
npm run dev         # http://localhost:5173
npm run build       # Production build → dist/
```

---

## 📂 Project Structure

```
src/
├── data/
│   └── portfolioData.js       ← ✏️  ALL EDITABLE CONTENT HERE
├── components/
│   ├── LoadingScreen.jsx      ← F1 5-light start sequence
│   ├── Navbar.jsx             ← Telemetry HUD navbar
│   ├── CustomCursor.jsx       ← Ferrari arrow / racing glove cursor
│   ├── HeroSection.jsx        ← Introduction with animated F1 car
│   ├── AboutSection.jsx       ← Interactive rotating 3D racing driver
│   ├── PortfolioDetailsSection.jsx ← Education, certificates, and skills
│   ├── ExperienceSection.jsx  ← Scroll-driven car on racetrack wall
│   ├── ProjectsSection.jsx    ← Salon gallery wall of paintings
│   ├── HobbiesSection.jsx     ← Fun facts on a Grand Prix circuit
│   ├── WrittenWorksSection.jsx← 3-tier Victorian mahogany bookshelf
│   ├── ContactSection.jsx     ← P1 victory podium + telemetry form
│   ├── ui/
│   │   └── VictorianFrame.jsx ← GildedFrame, CrimsonLaceFrame, CarbonRacingFrame
│   └── modals/
│       ├── FlagExperienceModal.jsx
│       ├── ProjectFrameModal.jsx
│       ├── HobbyCarModal.jsx
│       └── BookSpreadModal.jsx
├── hooks/
│   └── useSoundEffects.js     ← Sound toggle state & API
├── utils/
│   └── audioSynthesizer.js    ← Web Audio API sound engine (no external files)
├── index.css                  ← Tailwind v4 + Victorian theme classes
└── App.jsx                    ← Root with Lenis smooth scroll + sound
```

---

## ✏️ Customising Your Content

**Everything** is controlled via [`src/data/portfolioData.js`](./src/data/portfolioData.js).

| Section | Key to Edit |
|---|---|
| Name, bio, contact | `personal` |
| About info cards | `about.services[]` |
| Experience timeline | `experience[]` |
| Education | `education[]` |
| Certificates | `certificates[]` |
| Skills | `skills[]` |
| Projects gallery | `projects[]` |
| Fun facts / off-track interests | `hobbies.cars[]` |
| Books & bookshelf | `writtenWorks.books[]` |
| Contact details | `contact` |

---

## 🎨 Replacing the 3D Model

1. Place your `.glb` or `.gltf` model at `public/assets/model.glb`
2. Open [`src/components/AboutSection.jsx`](./src/components/AboutSection.jsx)
3. Import `GLTFLoader` from `three/examples/jsm/loaders/GLTFLoader.js`
4. Replace the procedural bust geometry with `loader.load('/assets/model.glb', ...)`

---

## 🖼️ Replacing Project Images

Update the `image` URL in each project entry in `portfolioData.js`. Use:
- Local assets: place in `public/assets/` and reference as `/assets/filename.jpg`
- External URLs: any HTTPS image URL

---

## 🔊 Sound Design

All sounds are **synthesized on-the-fly** using the Web Audio API via [`audioSynthesizer.js`](./src/utils/audioSynthesizer.js). No external audio files needed. Available effects:

| Method | Trigger |
|---|---|
| `playLightBeep()` | Each start light arm |
| `playLightsOut()` | All 5 lights extinguish |
| `playEngineRev()` | Car hover, throttle button, scroll burst |
| `playClink()` | Frame/card open |
| `playFlagFlutter()` | Checkered flag click |
| `playPageTurn()` | Book open/close |
| `playFanfare()` | Victory trophy click |

Sound starts **muted** per browser autoplay policy — the user enables it via the navbar toggle or loading screen button.

---

## 🏁 Sections Overview

| # | Section | Key Feature |
|---|---|---|
| 1 | **Loading** | Interactive 5-light F1 start sequence + RPM throttle |
| 2 | **Hero (Paddock)** | Victorian lace frame, animated F1 car SVG |
| 3 | **About Me** | Interactive Three.js racing driver with drag-to-rotate service cards |
| 4 | **Experience (Circuit)** | Scroll-driven car along painted wall racetrack + flag modals |
| 5 | **Projects (Gallery)** | Salon cluster with 3 themed frames, horizontal panel modal |
| 6 | **Education** | Integrated M.Tech and high-school records |
| 7 | **Certificates** | Editable certificate list; no certificate details have been supplied yet |
| 8 | **Skills** | Product, growth, web, AI research, and content skills |
| 9 | **Fun Facts About Me** | Off-track interests with real F1 car imagery |
| 10 | **Written Works** | Bookshelf and interactive folio modal |
| 11 | **Contact** | Contact links and email-prepared message form |

---

## 🛠 Tech Stack

- **React 19** + **Vite 8**
- **Tailwind CSS v4** (via `@tailwindcss/vite`)
- **Framer Motion** — scroll animations, spring transitions
- **Lenis** — buttery smooth scrolling
- **Three.js** — interactive 3D model pedestal
- **Web Audio API** — zero-dependency sound synthesis
- **canvas-confetti** — victory podium celebration
- **Google Fonts** — Cinzel, Playfair Display, Cormorant Garamond, Rajdhani, Space Grotesk, Alex Brush

---

## 📄 License

Personal portfolio — all rights reserved © 2026 Aarushi Patidar.
