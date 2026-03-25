# Rules.md — EverHome Project

> This file MUST be read and followed for EVERY task in this project. No exceptions.

---

## 1. Style Consistency

- **ALWAYS** read and follow `Style.md` before writing any code.
- Every component, screen, and layout must use the design tokens, colors, typography, spacing, and component patterns defined in `Style.md`.
- Never introduce new colors, font sizes, shadows, or border-radius values unless they are first added to `Style.md`.
- Reuse existing components from `src/components/ui/` and `src/components/layout/`. If a component doesn't exist, create it following the patterns established in `Style.md`, then use it.
- CSS/Tailwind classes must reference the custom theme tokens defined in `tailwind.config.js`. Do not use arbitrary values (`text-[#0D3B66]`) — use the named tokens (`text-primary-dark`).

---

## 2. Engineering Standards

- You are a **senior full-stack software engineer** working on an enterprise-grade product as a sole developer.
- Write clean, maintainable, production-quality code.
- Every component must be properly structured: clear props interface, sensible defaults, separation of concerns.
- Use meaningful variable and component names. No abbreviations without context.
- Keep files focused — one component per file, one screen per file.
- Follow React best practices: proper state management, controlled components, key props on lists, no inline styles.
- Comment only when the "why" is not obvious. Self-documenting code is preferred.
- Use consistent file naming: PascalCase for components (`SeniorDashboard.jsx`), camelCase for utilities (`formatDate.js`), kebab-case for CSS files if any.

---

## 3. Error Checking & Quality Assurance

- **Before finalizing ANY task**, you MUST:
  1. Run `npm run build` and verify zero errors and zero warnings.
  2. Run `npm run dev` and verify the app loads without console errors.
  3. Check that all imports resolve correctly.
  4. Verify no unused variables or imports exist.
  5. Confirm all interactive elements (buttons, links, toggles, inputs) function correctly.
  6. Test navigation flow — every link/button that should navigate actually navigates.
- If ANY error is found, fix it before marking the task complete.
- Never leave `// TODO` comments unless explicitly agreed upon. Finish what you start.

---

## 4. Responsive Design — Desktop & Mobile

- The app is a **mobile-first** design rendered inside a phone frame for showcase purposes.
- **Mobile view (≤768px):** The phone frame fills the viewport. Screens are fully usable as a standalone mobile app.
- **Desktop view (>768px):** The phone frame is centered on the page with a decorative background. The gallery/showcase mode displays multiple frames side by side.
- **ALWAYS** verify both viewports after every change:
  1. Open at 390×844 (iPhone 14) — does the screen content fit without overflow?
  2. Open at 1440×900 (desktop) — is the frame centered? Is the gallery layout correct?
  3. Open at 768×1024 (tablet) — does the layout adapt gracefully?
- No horizontal scrolling inside the phone frame. Ever.
- Touch targets must be at least 44×44px for accessibility.
- Text must remain readable at all breakpoints — no text smaller than 12px.

---

## 5. Final Recheck Protocol

- After completing the task, perform a **full recheck**:
  1. ✅ **Build passes** — `npm run build` clean.
  2. ✅ **Visual match** — Does the output match the reference screenshots in `reference/`? Compare side by side.
  3. ✅ **Style.md compliance** — Are all design tokens used correctly? No rogue colors or sizes?
  4. ✅ **Responsiveness** — Desktop AND mobile verified.
  5. ✅ **Interactivity** — All buttons, inputs, toggles, dropdowns, navigation work.
  6. ✅ **Console clean** — No errors, no warnings in browser console.
  7. ✅ **Code quality** — No unused imports, no dead code, no commented-out blocks.
  8. ✅ **Navigation** — Bottom nav works. Screen transitions work. Back navigation works.
- Only after ALL checks pass, the task is complete.

---

## 6. Project Conventions

- **Framework:** React 18+ with Vite
- **Styling:** TailwindCSS with custom theme (tokens from `Style.md`)
- **Routing:** React Router v6
- **State:** React hooks (useState, useContext). No external state libraries unless needed.
- **Icons:** Lucide React or custom SVG components
- **Animations:** CSS transitions and keyframes only. No animation libraries.
- **Deployment target:** Static hosting (Vercel/Netlify) — the project must build to a static bundle that can be shared via a public URL.
- **No backend required** — this is a UI showcase with mock data.

---

## 7. File Organization

```
everhome_vibe_ui/
├── public/
│   └── favicon.svg
├── reference/               # Original Figma screenshots for comparison
├── src/
│   ├── components/
│   │   ├── layout/          # MobileFrame, StatusBar, BottomNav
│   │   ├── ui/              # Button, Card, Input, Toggle, etc.
│   │   └── icons/           # SVG icon components
│   ├── screens/             # One file per screen
│   ├── theme/               # tokens.js, index.css
│   ├── App.jsx              # Gallery + Interactive flow
│   ├── main.jsx
│   └── index.css            # Global styles + Tailwind directives
├── Rules.md                 # THIS FILE — read before every task
├── Style.md                 # Design system reference
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

**Remember:** Quality over speed. Every screen should look and feel like a real, polished mobile application. If something doesn't look right, fix it before moving on.
