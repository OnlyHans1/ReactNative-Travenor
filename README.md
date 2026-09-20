# ✈️ Travenor - Travel & Tour Mobile App

[![React Native](https://img.shields.io/badge/React_Native-0.81.5-61DAFB?logo=react&logoColor=black)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-54.0-000020?logo=expo&logoColor=white)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Expo Router](https://img.shields.io/badge/Expo_Router-v6-black)](https://docs.expo.dev/router/introduction/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> A premium, high-performance travel and exploration mobile application built with **React Native**, **Expo Router**, and **React Native Reanimated**. Implemented with pixel-perfect precision from the official Figma design system.

---

## 📱 Screenshots & Figma Design Flow

| Splash Screen | Onboarding 1 | Onboarding 2 | Onboarding 3 |
| :---: | :---: | :---: | :---: |
| **Splash Screen** | **"World is wide"** | **"Go explore"** | **"Trips take people"** |
| *Node: 2101:6902* | *Node: 2101:6606* | *Node: 2101:6538* | *Node: 2101:6572* |
| `#24BAEC` brand background with spring logo and brand typography | Sailboat banner, orange curved swoop on **wide**, active dot 1, "Get Started" button | Canoe & cabin banner, orange curved swoop on **explore**, active dot 2, "Next" button | Mountain banner, orange curved swoop on **people**, active dot 3, "Next" button |

---

## ✨ Features

- 🎨 **Figma Pixel-Perfect Accuracy**: Direct translation of design tokens, colors (`#24BAEC`, `#FF7029`, `#1B1E28`, `#CAEAFF`), border radii, and exact SVG vector curves.
- ⚡ **Smooth Micro-Interactions**: Built using `react-native-reanimated` for 60fps spring transitions, logo bounce, scale feedback, and fade effects.
- 🔄 **Dynamic Pagination Indicator**: Custom pagination dots that interpolate both width (`35px`, `13px`, `6px`) and color seamlessly as the user swipes.
- 💾 **Persistent State**: Onboarding completion status saved locally via `@react-native-async-storage/async-storage`.
- 📁 **Clean Modular Architecture**: Clean separation between routing (`app/`) and core application logic (`src/`), ensuring scalability and maintainability.
- 🐪 **Strict camelCase Conventions**: Consistent variable, function, token, and parameter naming across the entire codebase.

---

## 🏗️ Project Architecture & Directory Structure

```text
ReactNative-Travenor/
├── app/                               # Expo Router file-based route handlers
│   ├── (tabs)/                        # Main application tab navigation
│   │   ├── (explore, index)/          # Tab screen views
│   │   └── _layout.tsx                # Tab bar layout & icons
│   ├── _layout.tsx                    # Root layout with ThemeProvider & Stack
│   ├── index.tsx                      # Splash screen entry point
│   ├── modal.tsx                      # Modal presentation route
│   └── onboarding.tsx                 # Onboarding carousel route
│
├── assets/                            # Static media assets
│   ├── icon/                          # SVG and vector brand icons
│   └── splash/                        # High-resolution splash & onboarding illustrations
│       ├── splash-1.png               # Sailboat on waves (Slide 1)
│       ├── splash-2.png               # Flying bird & mountains (Slide 3)
│       └── splash-3.png               # Canoe by cabin & lake (Slide 2)
│
├── src/                               # Core Application Source Code
│   ├── animations/                    # Reanimated animation presets & timing
│   │   └── transitions.ts             # Spring & timing configurations
│   ├── components/                    # Reusable UI & presentation components
│   │   ├── common/                    # Universal primitives
│   │   │   └── TravenorLogo.tsx       # Vector globe & airplanes SVG logo
│   │   └── onboarding/                # Onboarding domain components
│   │       ├── HighlightCurve.tsx     # Curved orange accent vector (Vector 2524)
│   │       ├── OnboardingButton.tsx   # Action button (Primary & Skip variants)
│   │       ├── OnboardingSlide.tsx    # Slide banner layout & typography
│   │       ├── PaginationDots.tsx     # Animated responsive pagination indicator
│   │       └── index.ts               # Barrel exports
│   ├── constants/                     # Immutable design tokens & app data
│   │   ├── colors.ts                  # Brand color palette tokens
│   │   ├── design.ts                  # Spacing, typography, and border radius tokens
│   │   └── onboarding.ts              # Slide content, SVG paths, and storage keys
│   ├── hooks/                         # Reusable custom React hooks
│   │   ├── useColorScheme.ts          # System / theme appearance hook
│   │   ├── useOnboarding.ts           # Onboarding persistence state hook
│   │   └── useThemeColor.ts           # Dynamic theme token resolution
│   ├── screens/                       # Full-page screen compositions
│   │   ├── onboarding/
│   │   │   └── OnboardingScreen.tsx   # Swipeable FlatList carousel screen
│   │   ├── splash/
│   │   │   └── SplashScreen.tsx       # Brand splash screen with auto-navigation
│   │   └── index.ts                   # Screen barrel exports
│   └── types/                         # TypeScript interfaces & types
│       └── onboarding.ts              # Data contracts for slides, dots, & buttons
│
├── .gitignore
├── app.json                           # Expo app configuration
├── package.json                       # Project dependencies & npm scripts
├── tsconfig.json                      # TypeScript config with @/* path aliases
└── README.md                          # Project documentation
```

---

## 🎨 Design System Tokens

```typescript
import { colors, spacing, borderRadius } from '@/constants/colors';

// Brand Palette (from Figma)
colors.primary         // #24BAEC - Sky Blue (Buttons, Active Dots, Splash BG)
colors.accent          // #FF7029 - Vibrant Orange (Highlight Words, Vector Curves)
colors.backgroundLight // #CAEAFF - Light Blue (Inactive Dots, Skip Button Text)
colors.textDark        // #1B1E28 - Near Black (Headings & Titles)
colors.textSub         // #7D848D - Cool Gray (Descriptions & Subtitles)
colors.white           // #FFFFFF - Pure White
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 18 or newer) or [Bun](https://bun.sh/)
- [Expo Go](https://expo.dev/go) app on your mobile device (iOS or Android) or an emulator/simulator.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/OnlyHans1/ReactNative-Travenor.git
   cd ReactNative-Travenor
   ```

2. **Install dependencies:**
   ```bash
   bun install
   # or with npm
   npm install
   ```

3. **Start the development server:**
   ```bash
   bun start
   # or
   npx expo start
   ```

4. **Run on your preferred platform:**
   - Press <kbd>a</kbd> for **Android Emulator**.
   - Press <kbd>i</kbd> for **iOS Simulator**.
   - Press <kbd>w</kbd> for **Web**.
   - Scan the terminal QR code with **Expo Go** (Android) or **Camera** (iOS).

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm start` / `bun start` | Launches the Expo development server |
| `npm run android` | Starts app directly on connected Android device/emulator |
| `npm run ios` | Starts app directly on iOS simulator |
| `npm run web` | Serves the project for Web testing |
| `npm run lint` | Runs ESLint to inspect code quality |

---

## 📐 Code Guidelines & Conventions

- **Variable Naming**: All variables, constants, hook states, and utility functions must strictly adhere to `camelCase` (e.g. `onboardingSlides`, `hasSeenOnboarding`, `completeOnboarding`).
- **File & Component Naming**: React component files use `PascalCase.tsx` (e.g. `OnboardingSlide.tsx`), while utility and constants files use `camelCase.ts` or `kebab-case.ts`.
- **Absolute Imports**: Always use the path alias `@/*` (e.g. `@/components/onboarding`, `@/constants/colors`).
- **Type Safety**: Avoid using `any`; define explicit interfaces in `src/types/`.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
