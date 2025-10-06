# React Native Basics and in  the last we do Project

This repository contains a day-wise learning/demo file (App.jsx) showing common React Native concepts. Below is a concise day-by-day summary of what was implemented in `App.jsx`.

## Quick run
- Install deps: `npm install`
- Start Metro: `npx react-native start`
- Run on Android (device/USB): `npx react-native run-android`
- Check connected devices: `adb devices`

## Day-wise summary

- Day 1 — Text & Image basics
  - Simple Text render examples.
  - Image from URL rendering.

- Day 2 — Touchables & Buttons
  - Button, TouchableOpacity, TouchableHighlight, Pressable usage and examples.

- Day 3 — SafeAreaView & inline styling
  - Using SafeAreaView from `react-native-safe-area-context`.
  - Inline styles demo.

- Day 4 — StyleSheet usage
  - StyleSheet.create examples and external/global stylesheet import.

- Day 5 — Theming (dark/light)
  - `useColorScheme` example and conditional styles for dark mode.

- Day 6 — Units & font sizing notes
  - Notes on font-size units supported in RN.

- Day 7 — Flexbox fundamentals
  - Examples for flex, flexDirection, justifyContent, alignItems, alignSelf.

- Day 8 — Flex wrap, alignContent, flexGrow
  - wrap/nowrap examples and `flexGrow` demo.

- Day 9 — ScrollView
  - Horizontal ScrollView with `contentContainerStyle` and many child items.

- Day 10 — FlatList
  - FlatList examples with `numColumns`, `columnWrapperStyle`, `ItemSeparatorComponent`.

- Day 11 — TextInput and form handling
  - Controlled TextInput, two-way binding, `keyboardType`, `secureTextEntry`, and submit handling.

- Day 12 — Navigation (Stack)
  - Setup notes for `@react-navigation/native`, `@react-navigation/stack`, `react-native-gesture-handler`.
  - Example Stack navigator wrapping `Home`, `Profile`, `Login`.
  - Wrap `NavigationContainer` in `GestureHandlerRootView`.

- Day 13 — Tab Navigation & Icons
  - Bottom tab navigator example with `@react-navigation/bottom-tabs`.
  - Icon usage via `react-native-vector-icons`.
  - Note: add `apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"` to `android/app/build.gradle` (for Android fonts).

- Day 14 — Mini inventory project
  - Project files under `src/Project-file/`:
    - `Home.jsx` — main demo with sample data and view toggles.
    - `Allitem.jsx` — FlatList of all items (low/high stock color).
    - `Lowstock.jsx` — list filtered for low stock.
    - `Create.jsx` — add / edit / delete UI for items.
![Home Page + AllItem](<WhatsApp Image 2025-10-07 at 01.40.49_7e704de5.jpg>)
![LowStock](<WhatsApp Image 2025-10-07 at 01.41.39_32520697.jpg>)
![Create page](<WhatsApp Image 2025-10-07 at 01.42.02_3db506a3.jpg>)
![Adding Item](<WhatsApp Image 2025-10-07 at 01.43.57_33f49610.jpg>)
![showing add item](<WhatsApp Image 2025-10-07 at 01.44.11_1a31140e.jpg>)

## Useful commands
- Reset Metro cache: `npx react-native start --reset-cache`
- Clean Android build: (Windows PowerShell)
  - `cd android`
  - `.\gradlew clean`
  - `cd ..`

## Files of interest
- `App.jsx` — day-wise code and switches
- `src/Project-file/*` — small inventory/demo app components
- `package.json` — project dependencies
 
---

Keep `App.jsx` as the learning timeline — each block is commented and can be uncommented to try examples individually.