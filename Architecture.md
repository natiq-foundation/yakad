# RFC: YAKAD UI Architecture

## Architecture

**YAKAD UI → React → Radix UI + CVA → CSS → Material 3 Design Tokens → Final UI**

## Overview

YAKAD UI follows a layered architecture inspired by Shadcn UI, using **Radix UI** for behavior, **CVA** for variants, and **CSS + Material 3 Design Tokens** for styling.

## Layers

- **React** — Component structure, composition, state, and props.
- **Radix UI** — Behavior, interaction, accessibility, and focus management.
- **CVA** — Component variants and states.
- **CSS** — Component styling and design-system integration.
- **Material 3 Design Tokens** — Colors, typography, shape, elevation, spacing, and visual values.