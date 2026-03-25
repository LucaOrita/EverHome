# Style.md — EverHome Design System

> Single source of truth for all visual decisions. Every component and screen MUST reference this file.
> When implementing any feature, use ONLY the tokens defined here. If a new token is needed, add it here first.

---

## 1. Brand Identity

- **App Name:** EverHome
- **Tagline:** "Because home is where life continues"
- **Purpose:** Smart home monitoring for seniors and their caregivers, using non-invasive sensors (no cameras)
- **Tone:** Trustworthy, warm, accessible, medical-grade reliability with a human touch
- **Target Users:** Seniors (65+) who need large text and simple UI, and Caregivers (30-60) who need detailed data

---

## 2. Color Palette

### Primary Colors
| Token                  | Hex         | Usage                                              |
|------------------------|-------------|-----------------------------------------------------|
| `primary-dark`         | `#0D3B66`   | Main brand color. Headers, primary buttons, nav, splash bg |
| `primary-medium`       | `#1A5F9E`   | Secondary accents, active states, section headers    |
| `primary-light`        | `#3A7BC8`   | Hover states, links, interactive highlights          |

### Background Colors
| Token                  | Hex         | Usage                                              |
|------------------------|-------------|-----------------------------------------------------|
| `bg-page`              | `#E8F0FE`   | Page background (light blue tint)                   |
| `bg-card`              | `#FFFFFF`   | Card backgrounds                                    |
| `bg-card-alt`          | `#F0F4F8`   | Alternative card bg (muted)                         |
| `bg-card-blue`         | `#D0DEF0`   | Blue-tinted cards (Care plan card)                  |
| `bg-input`             | `#FFFFFF`   | Input field backgrounds                             |
| `bg-info`              | `#D6E6F5`   | Info banners, FAQ sections, contact cards           |
| `bg-splash`            | `#0D3B66`   | Splash screen background                            |
| `bg-splash-gradient`   | `#0A2D4D`   | Splash screen gradient end                          |

### Status Colors
| Token                  | Hex         | Usage                                              |
|------------------------|-------------|-----------------------------------------------------|
| `status-safe`          | `#2E8B57`   | "All Safe" indicator, "Locked" text, green dots     |
| `status-warning`       | `#E8A020`   | Low battery, warning indicators, orange dots        |
| `status-error`         | `#E53935`   | Emergency button, critical alerts                   |
| `status-info`          | `#1A5F9E`   | Info indicators, blue dots on sensors               |

### Accent Colors
| Token                  | Hex         | Usage                                              |
|------------------------|-------------|-----------------------------------------------------|
| `accent-gold`          | `#C9A96E`   | HELP button, secondary CTA                          |
| `accent-gold-hover`    | `#B8944F`   | HELP button hover state                             |

### Neutral Colors
| Token                  | Hex         | Usage                                              |
|------------------------|-------------|-----------------------------------------------------|
| `text-primary`         | `#1A1A2E`   | Main body text, headings                            |
| `text-secondary`       | `#6B7280`   | Subtitles, labels, descriptions                     |
| `text-tertiary`        | `#9CA3AF`   | Timestamps, helper text                             |
| `text-white`           | `#FFFFFF`   | Text on dark backgrounds                            |
| `text-link`            | `#1A5F9E`   | "Forgot password?", clickable links                 |
| `border-light`         | `#D1D5DB`   | Input borders, card borders                         |
| `border-medium`        | `#9CA3AF`   | Active/focused borders                              |
| `divider`              | `#E5E7EB`   | Separator lines                                     |

---

## 3. Typography

### Font Stack
```css
--font-heading: 'Plus Jakarta Sans', 'SF Pro Display', -apple-system, sans-serif;
--font-body: 'Plus Jakarta Sans', 'SF Pro Text', -apple-system, sans-serif;
```

Import via Google Fonts: `Plus Jakarta Sans` weights 400, 500, 600, 700, 800.

### Type Scale
| Token           | Size   | Weight   | Line Height | Usage                                     |
|-----------------|--------|----------|-------------|-------------------------------------------|
| `text-display`  | 36px   | 800      | 1.1         | "Margaret", "SENIOR", "CAREGIVER"         |
| `text-h1`       | 28px   | 700      | 1.2         | Screen titles ("Maintenance", plan names) |
| `text-h2`       | 22px   | 700      | 1.3         | Section headers, "Choose your level..."   |
| `text-h3`       | 18px   | 600      | 1.4         | Card titles ("Bedroom", "Locked")         |
| `text-body`     | 16px   | 400      | 1.5         | Body text, descriptions                    |
| `text-body-bold`| 16px   | 600      | 1.5         | Emphasized body, FAQ questions             |
| `text-small`    | 14px   | 400      | 1.4         | Subtitles, timestamps, sensor statuses    |
| `text-xs`       | 12px   | 500      | 1.4         | Labels ("MOTION IN"), badges, tags         |
| `text-button`   | 18px   | 700      | 1.0         | Primary button text                        |
| `text-button-sm`| 14px   | 600      | 1.0         | Secondary/small button text                |
| `text-price`    | 28px   | 700      | 1.1         | Price display ("35 lei", "70 lei")         |

### Typography Rules
- **Senior-facing screens** (SeniorDashboard): minimum font size is 16px. Prefer 18px+ for all interactive text.
- **Caregiver screens**: standard sizes apply.
- Labels and section titles: UPPERCASE, `text-xs`, `font-semibold`, `tracking-wide`, `text-secondary`.
- Prices: `text-price` weight, aligned right in plan cards.
- Links: `text-link` color, no underline by default, underline on hover.

---

## 4. Spacing System

Base unit: **4px**. All spacing uses multiples of 4.

| Token    | Value  | Usage                                    |
|----------|--------|------------------------------------------|
| `sp-1`   | 4px    | Minimal gaps, icon padding               |
| `sp-2`   | 8px    | Inner padding small elements             |
| `sp-3`   | 12px   | Tag/badge padding, compact card padding  |
| `sp-4`   | 16px   | Standard card padding, input padding     |
| `sp-5`   | 20px   | Section gaps                             |
| `sp-6`   | 24px   | Card gaps, screen horizontal padding     |
| `sp-8`   | 32px   | Major section spacing                    |
| `sp-10`  | 40px   | Screen top padding                       |
| `sp-12`  | 48px   | Large vertical gaps                      |

### Screen Layout
- **Screen horizontal padding:** 24px (sp-6) on each side
- **Gap between cards:** 12–16px (sp-3 to sp-4)
- **Bottom Nav height:** 64px
- **Status Bar height:** 44px
- **Safe area bottom padding:** 20px (below bottom nav)

---

## 5. Border Radius

| Token            | Value  | Usage                                        |
|------------------|--------|----------------------------------------------|
| `rounded-sm`     | 8px    | Input fields, small elements                 |
| `rounded-md`     | 12px   | Standard cards, dropdowns                    |
| `rounded-lg`     | 16px   | Feature cards, plan cards                    |
| `rounded-xl`     | 20px   | Large cards (role selection, sensor cards)   |
| `rounded-full`   | 9999px | Buttons (pill shape), toggle, badges, tags   |

### Rules
- **Buttons:** Always `rounded-full` (pill shaped)
- **Cards:** `rounded-lg` or `rounded-xl`
- **Inputs:** `rounded-sm` to `rounded-md`
- **Tags/badges:** `rounded-full`
- **Phone frame:** `rounded-[40px]`

---

## 6. Shadows

| Token            | Value                                      | Usage                    |
|------------------|--------------------------------------------|--------------------------|
| `shadow-card`    | `0 2px 8px rgba(0, 0, 0, 0.08)`           | Standard card shadow     |
| `shadow-card-hover`| `0 4px 16px rgba(0, 0, 0, 0.12)`        | Card hover state         |
| `shadow-button`  | `0 2px 6px rgba(13, 59, 102, 0.2)`        | Primary buttons          |
| `shadow-phone`   | `0 20px 60px rgba(0, 0, 0, 0.3)`          | Phone frame shadow       |
| `shadow-nav`     | `0 -2px 10px rgba(0, 0, 0, 0.05)`         | Bottom nav top shadow    |
| `shadow-none`    | `none`                                      | Flat elements            |

---

## 7. Component Specifications

### 7.1 Buttons

**Primary Button (Sign In, Get Started, Done)**
```
Background: primary-dark (#0D3B66)
Text: text-white, text-button (18px/700)
Padding: 16px vertical, 32px horizontal
Border-radius: rounded-full
Shadow: shadow-button
Width: 100% (full-width in mobile)
Height: 56px
Hover: brightness 110%, shadow-card-hover
Active: brightness 90%
```

**Secondary Button (Scan QR Code)**
```
Background: bg-card (#FFFFFF)
Text: primary-dark, text-button
Border: 2px solid primary-dark
Padding: 16px vertical
Border-radius: rounded-full
Width: 100%
Height: 56px
Hover: bg-page
```

**Emergency Button**
```
Background: status-error (#E53935)
Text: text-white, text-button
Width: 100%
Height: 56px
Border-radius: rounded-md (12px) — NOT pill, slightly different
Shadow: 0 4px 12px rgba(229, 57, 53, 0.4)
Animation: subtle pulse (box-shadow breathe)
Icon: ⚠️ warning triangle left of text
```

**Help Button (Maintenance)**
```
Background: accent-gold (#C9A96E)
Text: text-white, text-button, uppercase
Padding: 14px 48px
Border-radius: rounded-full
Width: ~60%, centered
Hover: accent-gold-hover
```

**Badge Button (CARE plan)**
```
Background: transparent
Text: primary-dark, text-xs, font-semibold
Border: 1.5px solid primary-dark
Padding: 6px 16px
Border-radius: rounded-full
```

### 7.2 Cards

**Standard Card (sensor items, dashboard items)**
```
Background: bg-card
Border-radius: rounded-lg (16px)
Padding: sp-4 (16px)
Shadow: shadow-card
Border-left: 4px solid primary-medium (optional, for sensor status)
```

**Warning Card (Smoke Alarm low battery)**
```
Same as Standard Card but:
Background: #FFF8E7 (warm yellow tint)
Border-left: 4px solid status-warning
```

**Info Banner Card (Maintenance info)**
```
Background: bg-info (#D6E6F5)
Border-radius: rounded-lg
Padding: sp-4
Icon: dark blue circle with ℹ️ or ! inside, left side
Text: text-body, text-primary
```

**Feature Card — Status (Motion In, Front Door)**
```
Background: bg-page (#E8F0FE) or light tint
Border-radius: rounded-lg
Padding: sp-4
Label: text-xs, uppercase, text-secondary (tracking-wide)
Value: text-h3, font-bold
Subtitle: text-small, text-tertiary
```

### 7.3 Toggle Pill (Email / QR Code)

```
Container:
  Background: bg-card
  Border: 1.5px solid border-light
  Border-radius: rounded-full
  Padding: 4px
  Display: flex, equal width segments
  Width: ~250px, centered

Active Tab:
  Background: primary-dark
  Text: text-white, text-body-bold
  Border-radius: rounded-full
  Padding: 10px 24px
  Transition: all 0.3s ease

Inactive Tab:
  Background: transparent
  Text: primary-dark, text-body
  Padding: 10px 24px
  Cursor: pointer
```

### 7.4 Input Fields

```
Background: bg-input
Border: 1.5px solid border-light
Border-radius: rounded-sm (8px)
Padding: 14px 16px
Font: text-body
Color: text-primary
Placeholder: text-tertiary

Focus state:
  Border-color: primary-medium
  Box-shadow: 0 0 0 3px rgba(26, 95, 158, 0.1)
  Outline: none

Label:
  text-body, text-primary, font-medium
  Margin-bottom: sp-2 (8px)
```

### 7.5 Radio Option Cards (Maintenance)

```
Container:
  Background: bg-card
  Border: 1.5px solid border-light
  Border-radius: rounded-lg
  Padding: 16px 20px
  Display: flex, align-center
  Gap: sp-3
  Cursor: pointer

Radio Circle:
  Size: 24px
  Border: 2px solid border-medium
  Border-radius: 50%

Selected State:
  Border-color: primary-dark
  Radio Circle: filled with primary-dark (inner circle 12px)
  Background: very subtle blue tint (#F5F8FD)

Hover:
  Background: bg-page
```

### 7.6 Dropdown/Select (Maintenance)

```
Background: bg-page (#E8F0FE)
Border-radius: rounded-lg
Padding: 16px 20px
Font: text-h3, font-semibold
Color: text-primary
Chevron: right side, text-secondary, 20px
Border: none
```

### 7.7 Tags / Badges (Subscription Plans)

```
Background: rgba(208, 222, 240, 0.5) — semi-transparent blue
Text: text-xs or text-small, font-medium, primary-dark
Padding: 6px 14px
Border-radius: rounded-full
Border: 1px solid rgba(13, 59, 102, 0.15)

On dark background (Safety plan):
  Background: rgba(255, 255, 255, 0.2)
  Text: text-white
  Border: 1px solid rgba(255, 255, 255, 0.3)
```

### 7.8 Status Indicator Dots

```
Size: 12px
Border-radius: 50%
Colors:
  Normal/OK: primary-medium (#1A5F9E)
  Warning: status-warning (#E8A020)
  Safe: status-safe (#2E8B57)
Alignment: right side of sensor card, vertically centered
```

### 7.9 Bottom Navigation Bar

```
Container:
  Background: bg-card (#FFFFFF)
  Height: 64px
  Border-top: 1px solid divider
  Shadow: shadow-nav
  Display: flex, 3 equal items, align-center, justify-center
  Position: fixed bottom within phone frame
  Padding-bottom: safe-area (8px)

Nav Item:
  Icon size: 24px
  Color inactive: text-secondary
  Color active: primary-dark OR text-white in active indicator
  
Active Indicator:
  Background: primary-dark
  Border-radius: rounded-md (12px)
  Padding: 8px 20px
  Icon color: text-white

Icons (in order):
  1. Home — house icon (🏠)
  2. Maintenance — wrench icon (🔧)
  3. Support/Plans — grid/calendar icon (📋)
```

### 7.10 Status Bar (iOS)

```
Height: 44px
Background: transparent (inherits screen bg)
Padding: 0 24px
Display: flex, justify-between, align-center

Left: Time "9:41" — text-small, font-semibold
Right: Signal bars + WiFi + Battery icons — small, 16px
Color: adapts to screen (dark on light bg, white on dark bg)
```

---

## 8. Screen-Specific Layouts

### Splash Screen
```
Background: linear-gradient(180deg, primary-dark 0%, bg-splash-gradient 100%)
Content: centered vertically and horizontally
Logo: 120px in white circle (padding 24px, circle bg white)
App name: text-display, text-white, margin-top sp-6
Tagline: text-body, text-white opacity 80%, italic
Button: at bottom, margin-bottom sp-12
```

### Login Screens
```
Background: bg-card (white)
Padding: sp-6 horizontal
Logo: centered, 80px, margin-top sp-10
Toggle: centered, margin sp-8
Form: stacked, gap sp-5
Button area: margin-top sp-6
Footer text: text-small, text-secondary, centered, bottom
```

### Role Selection
```
Background: bg-page
Padding: sp-6
Header area: margin-top sp-8
Cards: stacked vertical, gap sp-4
Senior card: bg primary-dark, text white, min-height 160px
Caregiver card: bg bg-card-alt, text dark, min-height 160px
```

### Senior Dashboard
```
Background: bg-page
Greeting: sp-10 top, sp-6 horizontal
Cards: full-width, gap sp-3
Home Status card: slightly larger padding, green accent
Emergency button: fixed above bottom nav, sp-6 horizontal padding
```

### Caregiver Dashboard
```
Background: bg-page
Header: flex row between title and badge
Status cards row: 2 columns, gap sp-3
Sensors label: text-xs, uppercase, margin-top sp-5
Sensor list: gap sp-3
```

### Subscription Plans
```
Background: bg-card (white)
Cards stack: gap sp-4
Each card: distinct background (white → blue tint → dark blue)
Tags wrap: flex-wrap, gap sp-2
Price: absolute or flex-end right alignment
```

---

## 9. Animations & Transitions

| Animation              | Duration | Easing              | Trigger                  |
|------------------------|----------|----------------------|--------------------------|
| Page transition        | 300ms    | ease-in-out          | Screen navigation        |
| Card fade-in           | 400ms    | ease-out             | Screen load (staggered)  |
| Button hover           | 150ms    | ease                 | Mouse hover              |
| Toggle slide           | 250ms    | ease-in-out          | Tab switch               |
| Input focus glow       | 200ms    | ease                 | Input focus              |
| Radio fill             | 200ms    | ease-out             | Selection change         |
| Emergency pulse        | 2000ms   | ease-in-out          | Continuous (infinite)    |
| Splash logo scale      | 600ms    | cubic-bezier(0.34,1.56,0.64,1) | Page load   |
| Card stagger delay     | 80ms     | —                    | Per-item delay           |

### Stagger Pattern
```css
.card-stagger > *:nth-child(1) { animation-delay: 0ms; }
.card-stagger > *:nth-child(2) { animation-delay: 80ms; }
.card-stagger > *:nth-child(3) { animation-delay: 160ms; }
.card-stagger > *:nth-child(4) { animation-delay: 240ms; }
.card-stagger > *:nth-child(5) { animation-delay: 320ms; }
```

### Emergency Pulse
```css
@keyframes emergency-pulse {
  0%, 100% { box-shadow: 0 4px 12px rgba(229, 57, 53, 0.4); }
  50% { box-shadow: 0 4px 24px rgba(229, 57, 53, 0.7); }
}
```

---

## 10. Phone Frame (MobileFrame Component)

```
Outer container:
  Width: 390px
  Height: 844px
  Border-radius: 40px
  Background: bg-card
  Border: 8px solid #1A1A2E
  Shadow: shadow-phone
  Overflow: hidden
  Position: relative

Inner:
  Full width/height
  Overflow-y: auto (scrollable content)
  Overflow-x: hidden
  Scroll behavior: smooth
  -webkit-overflow-scrolling: touch

Dynamic Island (optional, top center):
  Width: 120px
  Height: 30px
  Background: #1A1A2E
  Border-radius: 20px
  Position: absolute, top 10px, centered
  z-index: 10
```

---

## 11. Gallery / Showcase Layout

```
Desktop (>1024px):
  Grid: 3 columns, gap 40px
  Phone frames: scale(0.7), hover scale(0.75)
  Background: subtle gradient or dot pattern
  Header: app name + toggle switch

Tablet (768-1024px):
  Grid: 2 columns, gap 30px
  Phone frames: scale(0.6)

Mobile (<768px):
  Stack: 1 column, centered
  Phone frame: scale(0.85) or full-width adapted
  Swipe/scroll between screens

Interactive Flow mode:
  Single frame, centered
  Full scale (1.0)
  Navigation via in-app buttons
```

---

## 12. Tailwind Config Reference

These tokens should be defined in `tailwind.config.js` under `theme.extend`:

```js
colors: {
  'primary-dark': '#0D3B66',
  'primary-medium': '#1A5F9E',
  'primary-light': '#3A7BC8',
  'bg-page': '#E8F0FE',
  'bg-card': '#FFFFFF',
  'bg-card-alt': '#F0F4F8',
  'bg-card-blue': '#D0DEF0',
  'bg-info': '#D6E6F5',
  'bg-splash': '#0D3B66',
  'bg-splash-end': '#0A2D4D',
  'status-safe': '#2E8B57',
  'status-warning': '#E8A020',
  'status-error': '#E53935',
  'status-info': '#1A5F9E',
  'accent-gold': '#C9A96E',
  'accent-gold-hover': '#B8944F',
  'text-primary': '#1A1A2E',
  'text-secondary': '#6B7280',
  'text-tertiary': '#9CA3AF',
  'text-link': '#1A5F9E',
  'border-light': '#D1D5DB',
  'border-medium': '#9CA3AF',
  'divider': '#E5E7EB',
  'warning-bg': '#FFF8E7',
},
borderRadius: {
  'sm': '8px',
  'md': '12px',
  'lg': '16px',
  'xl': '20px',
  'phone': '40px',
},
boxShadow: {
  'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
  'card-hover': '0 4px 16px rgba(0, 0, 0, 0.12)',
  'button': '0 2px 6px rgba(13, 59, 102, 0.2)',
  'phone': '0 20px 60px rgba(0, 0, 0, 0.3)',
  'nav': '0 -2px 10px rgba(0, 0, 0, 0.05)',
},
fontFamily: {
  'heading': ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
  'body': ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
},
```

---

> **This document is the single source of truth.** When in doubt, refer here. When building, match here. When reviewing, verify against here.
