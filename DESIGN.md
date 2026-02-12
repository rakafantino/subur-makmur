# Design System: Katalog Pakan Ternak & Peliharaan
**Project ID:** projects/3066578976781699617

## 1. Visual Theme & Atmosphere
The design embraces a **Neo-Brutalism "Pecel Lele" Street Art** aesthetic. It is bold, high-contrast, and utilitarian, mimicking the hand-painted banners found in Indonesian street food stalls. The vibe is "Lively," "Local," and "Trustworthy." It uses hard shadows, thick black borders, and vibrant gradients to create a distinct, energetic look.

## 2. Color Palette & Roles
*   **Neon Green (Primary)** (`#5bec13`): Used for brand identity, highlights, and primary buttons. High visibility.
*   **Off-White (Background Light)** (`#f6f8f6`): Used for the main background in light mode to provide a clean canvas.
*   **Deep Jungle (Background Dark)** (`#162210`): Used for the main background in dark mode.
*   **Pecel Red** (`#DC143C`): Used for gradients, accents, and high-impact call-to-actions (like "Lihat Katalog").
*   **Pecel Orange** (`#FF4500`): Used for gradients and secondary accents.
*   **Pecel Yellow** (`#FFD700`): Used for gradients, decorative elements, and highlighting text.
*   **Black** (`#000000`): Used for borders, text strokes, and hard shadows. Essential for the brutalist look.

## 3. Typography Rules
*   **Font Family:** `Work Sans` (Display). Used for everything from headings to body text.
*   **Headings:** Extremely bold (`font-black`, `font-extrabold`), often uppercase, with tight tracking (`tracking-tighter`). Often features text strokes (`-webkit-text-stroke`) and gradients.
*   **Body:** Bold (`font-bold`) to maintain legibility against the energetic background.

## 4. Component Stylings
*   **Buttons:**
    *   Rectangular with slightly rounded corners (`rounded`).
    *   Thick black borders (`border-2 border-black`).
    *   Hard black shadows (`shadow-hard`).
    *   Hover effects include translation (`translate-x-1 translate-y-1`) to simulate pressing or lifting.
*   **Cards/Containers:**
    *   White background with thick black borders (`border-4 border-black`).
    *   Hard shadows (`shadow-hard`).
    *   Often rotated slightly (`rotate-1` or `-rotate-1`) to give a hand-placed feel.
*   **Images:**
    *   Often masked in circles or rounded rectangles with thick borders.
    *   Use `mix-blend-multiply` or `mix-blend-overlay` to blend with the background or gradients.
*   **Decorations:**
    *   "Wobble" effects on hover.
    *   Canvas texture overlays (`bg-canvas`) to simulate fabric.
    *   Gradient text with strokes.

## 5. Layout Principles
*   **Spacing:** Generous padding (`py-20`, `gap-8`) to allow the bold elements to breathe.
*   **Grid:** Standard responsive grid (`grid-cols-1 md:grid-cols-2`, etc.).
*   **Z-Index:** Heavy use of absolute positioning and z-index for layering decorative elements (blobs, banners) behind or on top of content.
