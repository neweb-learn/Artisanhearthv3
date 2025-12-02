# Project Guidelines: The Rustic Table (Artisan Hearth Archetype)

## 1. Project Overview
"The Rustic Table" is a boutique hospitality website designed to evoke the feeling of a warm, rustic kitchen. It prioritizes narrative and atmosphere over transactional utility.

**Key Aesthetics:**
- **Tactile & Organic:** Uses visual metaphors like paper textures, grain overlays, and "imperfect" layouts (rotated elements, hand-drawn lines).
- **Warmth:** A color palette rooted in nature and hearth (cream, rust, olive, wood).
- **Story-First:** Layouts emphasize the origins of ingredients and family history.
- **Visuals:** Imagery is treated like a scrapbook—polaroid styles, tape effects, and soft filters.

## 2. Tech Stack
- **Core:** React (Vite ecosystem)
- **Styling:** Tailwind CSS v4.0
- **Animation:** `motion/react` (formerly Framer Motion)
- **Routing:** `react-router-dom`
- **Icons:** `lucide-react`
- **Additional Libraries:** `react-responsive-masonry` (for collage layouts)

## 3. Design System & Tokens

### Colors
The palette avoids sterile white (#FFFFFF) and pitch black (#000000).
- **Canvas/Background:** `#F9F5E3` (Cream)
- **Paper/Cards:** `#FCFAF2` (Off-white paper)
- **Primary Accent:** `#8C3A28` (Rust/Clay)
- **Secondary Accent:** `#4A5D23` (Olive Green)
- **Text/Dark:** `#4A3B32` (Dark Earth/Brown)

### Typography
- **Primary (Headings & Body):** `Lora` (Serif). Classic, readable, literary.
- **Accent (Eyebrows & Decorative):** `Dancing Script` (Cursive). Used for "handwritten" notes.
- **Classes:** `.font-serif`, `.font-script`.

### UI Patterns
- **Grain Overlay:** A global SVG noise filter applied in `Layout.tsx` to give texture to the whole screen.
- **Soft Rectangles:** Buttons and cards use `rounded-md` (approx 6px) to avoid sharp digital edges.
- **Rotated Elements:** Cards and images often have slight rotations (`rotate-1`, `-rotate-2`) to mimic physical placement.
- **Dashed Lines:** Used for separators in menus (`border-dashed`).

## 4. Project Structure
```
/
├── components/
│   ├── home/           # Home-specific sections (Hero, MenuTeaser, etc.)
│   ├── layout/         # Global shell (Layout.tsx, Nav, Footer)
│   ├── ui/             # Atomic components (Button.tsx)
│   └── utils/          # Utilities (ScrollToTop.tsx)
├── data/
│   └── content.ts      # Centralized text, links, and image paths
├── pages/              # Top-level route components (Home, Menu, Story, etc.)
├── App.tsx             # Router and main entry
└── guidelines/         # Project documentation
```

## 5. Coding Standards

### Data Driven
- **Separation of Concerns:** Do not hardcode text content in components.
- **Implementation:** Import `siteContent` from `../../data/content`.
- **Structure:** The `siteContent` object mirrors the site structure (hero, menuHighlights, footer, etc.).

### Styling
- **Tailwind:** Use arbitrary values `[]` for specific design tokens (e.g., `bg-[#F9F5E3]`) to ensure exact color matching.
- **Relative Imports:** ALWAYS use relative paths (e.g., `../components/ui/Button`). NEVER use `@/`.
- **Global CSS:** Minimal. Fonts and grain overlay are defined in `Layout.tsx` via a `<style>` tag or global CSS file.

### Images
- **Source:** Unsplash (via tool).
- **Style:** Images should be warm, candid, and high-quality.
- **Presentation:** Often wrapped in a container with padding/shadow to look like a photograph, sometimes with CSS filters (sepia, contrast) to enhance the vintage feel.

### Routing
- Use `Link` from `react-router-dom` for all internal navigation.
- Ensure `ScrollToTop` is active so route changes reset the viewport.

## 6. Extension Guidelines
- **New Sections:** When creating a new section, wrap it in a `<section className="py-20">`.
- **Animation:** Use `motion.div` for entrance animations. Standard is `initial={{ opacity: 0, y: 20 }}` -> `whileInView={{ opacity: 1, y: 0 }}`.
- **Consistency:** If adding a form or interaction, ensure it uses the `Button` component and follows the rounded/rustic aesthetic. Avoid default browser inputs; style them with transparent backgrounds and bottom borders.
