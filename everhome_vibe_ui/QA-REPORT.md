# EverHome — QA Report

**Date:** 2026-03-25
**Build status:** PASS
**Bundle size:** 75.47 KB gzip (JS) + 5.38 KB gzip (CSS)

## Screen Verification

| Screen | Visual | i18n EN | i18n RO | Navigation |
|--------|--------|---------|---------|------------|
| SplashScreen | ✅ | ✅ | ✅ | ✅ |
| LoginEmail | ✅ | ✅ | ✅ | ✅ |
| LoginQRCode | ✅ | ✅ | ✅ | ✅ |
| RoleSelection | ✅ | ✅ | ✅ | ✅ |
| HowItWorks | ✅ | ✅ | ✅ | ✅ |
| SeniorDashboard | ✅ | ✅ | ✅ | ✅ |
| EmergencyConfirmed | ✅ | ✅ | ✅ | ✅ |
| CaregiverDashboard | ✅ | ✅ | ✅ | ✅ |
| AlertScreen | ✅ | ✅ | ✅ | ✅ |
| SubscriptionPlans | ✅ | ✅ | ✅ | ✅ |
| Maintenance | ✅ | ✅ | ✅ | ✅ |
| Support | ✅ | ✅ | ✅ | ✅ |

## Responsive

| Width | Gallery | Interactive |
|-------|---------|-------------|
| 1440px | ✅ 4-col grid | ✅ |
| 1200px | ✅ 4-col grid | ✅ |
| 1024px | ✅ 3-col grid | ✅ |
| 768px | ✅ 2-col grid | ✅ |
| 390px | ✅ 1-col grid | ✅ |

## Navigation Paths Verified

- ✅ Splash → Get Started → LoginEmail
- ✅ LoginEmail ↔ LoginQR (toggle switches)
- ✅ LoginEmail → Sign In → RoleSelection
- ✅ LoginQR → Done → RoleSelection
- ✅ RoleSelection → Senior → HowItWorks → Continue → SeniorDashboard
- ✅ RoleSelection → Caregiver → HowItWorks → Continue → CaregiverDashboard
- ✅ SeniorDashboard → Emergency → EmergencyConfirmed
- ✅ EmergencyConfirmed → I'm OK → SeniorDashboard
- ✅ CaregiverDashboard → Simulate Alert → alert banner → Tap details → AlertScreen
- ✅ AlertScreen → Mark as Safe → CaregiverDashboard
- ✅ Dashboard → Bottom Nav → Maintenance
- ✅ Dashboard → Bottom Nav → Support
- ✅ Maintenance → Bottom Nav → Home
- ✅ Support → Bottom Nav → Home
- ✅ Maintenance ↔ Support (via bottom nav)

## Gallery Features Verified

- ✅ Section labels (Auth Flow, Onboarding, Senior Experience, Caregiver Experience, Shared)
- ✅ Phones organized within sections
- ✅ Hover effect: scale + shadow
- ✅ Click phone → modal opens full-size view
- ✅ Modal backdrop blur
- ✅ Close button dismisses modal
- ✅ Backdrop click dismisses modal
- ✅ Dot grid background pattern
- ✅ Footer text visible
- ✅ Gallery/Interactive toggle works
- ✅ LanguageToggle visible and functional

## Issues Found & Fixed

1. **Invalid Tailwind class `text-small`** in SeniorDashboard and EmergencyConfirmed → replaced with `text-sm` — FIXED
2. **Hardcoded English strings** in CaregiverDashboard ("just now", "3 min ago", "Since 8:12 AM", "Tap to view details", "Simulate Alert", "Clear Alert") → added i18n keys to en.js and ro.js — FIXED
3. **Hardcoded hex color `#E53935`** in AlertScreen header → replaced with Tailwind `bg-status-error` — FIXED
4. **Hardcoded hex color `rgba(255,255,255,0.2)`** in AlertScreen pulse ring → replaced with Tailwind `bg-white/20` — FIXED
5. **Hardcoded hex color `#FFF0F0`** in CaregiverDashboard alert banner → added `emergency-warm` token, used Tailwind class — FIXED
6. **Hardcoded hex colors `#FFF0F0`/`#F0FFF5`** in EmergencyConfirmed background transition → added `emergency-warm`/`emergency-calm` tokens, used CSS vars — FIXED
7. **Hardcoded hex color `#1A1A2E`** in MobileFrame bezel → added `bezel` token with CSS var — FIXED
8. **Hardcoded hex colors in HowItWorks** step borderColors (`#3A7BC8`, `#C9A96E`, `#2E8B57`) → replaced with CSS vars (`--color-primary-light`, `--color-accent-gold`, `--color-status-safe`) — FIXED
9. **Hardcoded hex color `#1A5F9E`** in CaregiverDashboard and SeniorDashboard sensor card borders → replaced with `var(--color-primary-medium)` — FIXED
10. **Hardcoded hex `#0D3B66`** in LoginQRCode SVG → replaced with `currentColor` using Tailwind `text-primary-dark` class — FIXED
11. **Hardcoded SVG stroke `#2E8B57`** in EmergencyConfirmed checkmark → replaced with `var(--color-status-safe)` — FIXED
12. **Hardcoded hex in EverHomeLogo** dark variant → replaced with `var(--color-primary-dark)` — FIXED
13. **Hardcoded hex in SplashScreen gradient** → replaced with CSS vars `var(--color-bg-splash)` and `var(--color-bg-splash-end)` — FIXED
14. **Hardcoded hex `#d1d5db`** in App.jsx dot grid → replaced with `var(--color-border-light)` — FIXED
15. **Hardcoded hex `#f8fafc`** in App.jsx gallery bg → added `bg-gallery` token with CSS var — FIXED
16. **Hardcoded hex `#F5F8FD`** in RadioOption → added `bg-selected` token, used Tailwind class — FIXED
17. **Inline `style={{ fontWeight: 500 }}`** in SplashScreen, LoginEmail, LoginQRCode → replaced with Tailwind `font-medium` class — FIXED
18. **Inline `style={{ height: 64, paddingBottom: 8 }}`** in BottomNav → replaced with Tailwind `h-16 pb-2` — FIXED
19. **Inline `style={{ height: 44 }}`** in StatusBar → replaced with Tailwind `h-11` — FIXED
20. **Inline `style={{ width: 260, height: 260 }}`** in LoginQRCode scanner → replaced with Tailwind `w-[260px] h-[260px]` — FIXED
21. **Inline `style={{ width: 40, height: 40 }}`** in LoginQRCode corners → replaced with Tailwind `w-10 h-10` — FIXED
22. **Inline `style={{ width: 140, height: 140 }}`** in SplashScreen logo → replaced with Tailwind `w-[140px] h-[140px]` — FIXED
23. **Inline `style={{ minHeight: 160 }}`** in RoleSelection cards → replaced with Tailwind `min-h-[160px]` — FIXED
24. **Missing `aria-label`** on BottomNav icon-only buttons → added aria-label from tab label — FIXED
25. **5 new CSS custom properties** added to index.css for emergency-warm, emergency-calm, bezel, bg-gallery, bg-selected — FIXED
26. **5 new Tailwind color tokens** added to tailwind.config.js — FIXED

## Code Quality

- ✅ Zero unused imports
- ✅ Zero console.log statements
- ✅ Zero commented-out code blocks
- ✅ Zero TODO/FIXME comments
- ✅ Zero hardcoded hex values in JSX (except `#FFFFFF` for white in SVG component)
- ✅ All user-facing screen text uses t() translation function
- ✅ All colors reference design tokens via Tailwind classes or CSS custom properties
- ✅ Build: zero errors, zero warnings

## Remaining Known Issues

- App.jsx showcase chrome strings (Gallery, Interactive, Back to Gallery, section labels, footer) are not translated — these are design showcase UI, not part of the 12 app screens, and are intentionally left in English
- IDE reports prop validation warnings (S6774) for all components — this is expected since the project uses plain JSX without PropTypes or TypeScript; not a runtime issue
