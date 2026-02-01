# Component Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         App.jsx                             │
│  - Main container                                           │
│  - Manages overall layout                                   │
│  - Imports timeline data                                    │
└────────────────┬────────────────────────────────────────────┘
                 │
                 ├──────────────────┬──────────────────┐
                 │                  │                  │
        ┌────────▼────────┐ ┌──────▼─────────┐ ┌─────▼──────┐
        │  Header.jsx     │ │ Timeline.jsx   │ │timelineData│
        │                 │ │                │ │   .js      │
        │ • Logo          │ │ • Era sections │ │            │
        │ • Split titles  │ │ • Event cards  │ │ • 6 Eras   │
        │ • Fixed top     │ │ • Animations   │ │ • 35+ events│
        └─────────────────┘ │ • Central line │ └────────────┘
                            │ • Connectors   │
                            └───────┬────────┘
                                    │
                          ┌─────────▼──────────┐
                          │   Lightbox.jsx     │
                          │                    │
                          │ • Image viewer     │
                          │ • Navigation       │
                          │ • Close button     │
                          └────────────────────┘
```

## Data Flow

```
timelineData.js
     │
     │ (import)
     ▼
  App.jsx
     │
     │ (props)
     ▼
Timeline.jsx
     │
     ├─────────────────┐
     │                 │
     │ (map events)    │ (state)
     ▼                 ▼
Event Cards      Lightbox.jsx
     │
     │ (click)
     └─────────────────►
```

## Animation Layers

```
┌──────────────────────────────────────────┐
│          GSAP ScrollTrigger              │  ← Scroll-based reveals
│  • Event fade-in                         │
│  • Central line growth                   │
│  • Stagger animations                    │
└──────────────────────────────────────────┘
                  ↓
┌──────────────────────────────────────────┐
│         Framer Motion                    │  ← Component animations
│  • Era title reveals                     │
│  • Initial load animations               │
│  • Viewport detection                    │
└──────────────────────────────────────────┘
                  ↓
┌──────────────────────────────────────────┐
│         CSS Transitions                  │  ← Micro-interactions
│  • Image hover effects                   │
│  • Button states                         │
│  • Color transitions                     │
└──────────────────────────────────────────┘
```

## Layout Structure

```
┌────────────────────────────────────────────────────────────┐
│                      HEADER (Fixed)                        │
│  ┌────────────────────────────────────────────────────┐   │
│  │  [Logo] Grey Swan Investment Fraternity            │   │
│  │         Tradition. Legacy. Insight.                │   │
│  └────────────────────────────────────────────────────┘   │
│  ┌─────────────────────┬──────────────────────────────┐   │
│  │  Economy & Policy   │ Newsletters & Industry       │   │
│  │     (White BG)      │      (Gold BG)              │   │
│  └─────────────────────┴──────────────────────────────┘   │
└────────────────────────────────────────────────────────────┘
┌────────────────────────────────────────────────────────────┐
│                    TIMELINE CONTENT                        │
│                                                            │
│  ╔════════════════════════════════════════════════════╗   │
│  ║        ERA I: The Birth of Dissent (1776-1907)     ║   │
│  ╚════════════════════════════════════════════════════╝   │
│-----------------------------------------------------------│
│  ┌────────────────────┐        ┌───────────────────────┐  │
│  │    1776            │   ●────│  [Image: Common Sense]│  │
│  │ Paine's Common... │        └───────────────────────┘  │
│  └────────────────────┘                                   │
│                            ┌────────────────────┐         │
│        ┌───────────────┐   │        1792        │         │
│        │ [Image:       │───●  Buttonwood...     │         │
│        │  Buttonwood]  │   │                    │         │
│        └───────────────┘   └────────────────────┘         │
│                     │                                     │
│                     ● (center dot)                        │
│                     │                                     │
│                     │                                     │
│                     ▼                                     │
│                    ───                                    │
│                     V (arrow)                             │
│-----------------------------------------------------------│
│  ╔════════════════════════════════════════════════════╗   │
│  ║       ERA II: The Managed World (1913-1944)        ║   │
│  ╚════════════════════════════════════════════════════╝   │
│-----------------------------------------------------------|
|                   (ERA II events)                         |
|-----------------------------------------------------------|
|                   (continues...)                          │
└───────────────────────────────────────────────────────────┘
```

## Responsive Breakpoints

### Desktop (> 1024px)
```
┌────────────────────────────────────────┐
│  [Logo & Titles]                       │
├──────────────────┬─────────────────────┤
│ Economy & Policy │ Newsletters        │
├──────────────────┴─────────────────────┤
│                                        │
│  [Left Event]  ●───────  [Right Image]│
│                │                       │
│                ●                       │
│                │                       │
│  [Left Image]──●  [Right Event]       │
│                                        │
└────────────────────────────────────────┘
```

### Mobile (< 768px)
```
┌─────────────────────┐
│  [Logo & Titles]    │
├─────────────────────┤
│  Economy & Policy   │
│ Newsletters&Industry│
├─────────────────────┤
│                     │
│    [Event Year]     │
│    [Event Title]    │
│    [Event Image]    │
│                     │
│         ●           │
│         │           │
│                     │
│    [Event Year]     │
│    [Event Title]    │
│    [Event Image]    │
│                     │
└─────────────────────┘
```

## State Management

```javascript
// Timeline.jsx State
┌─────────────────────────────────┐
│ lightboxOpen: boolean           │  ← Lightbox visibility
│ lightboxImages: string[]        │  ← Current image set
│ lightboxIndex: number           │  ← Current image index
└─────────────────────────────────┘
          │
          ├── openLightbox(images, index)
          ├── closeLightbox()
          └── handleNext/Prev()
```

## Animation Timeline

```
Page Load
   │
   ├──► Header appears (instant)
   │
   ├──► Central line starts growing (scroll)
   │
   ├──► Era 1 title fades in (scroll @ 80vh)
   │
   ├──► Event 1 fades in (scroll @ 80vh)
   │     ├─ Text: opacity 0→1, y: 50→0
   │     └─ Image: opacity 0→1, x: 30→0
   │
   ├──► Event 2 fades in (scroll @ 80vh)
   │
   ├──► Era 2 title fades in (scroll @ 80vh)
   │
   └──► ... (continues for all events)

User Interaction
   │
   ├──► Hover image: scale 1→1.05
   │
   ├──► Click image: Lightbox opens
   │     ├─ Backdrop fades in
   │     └─ Image scales in
   │
   └──► Click close: Lightbox closes
         └─ Fade out animation
```

## File Dependencies

```
index.html
   │
   └──► main.jsx
         │
         ├──► React
         ├──► ReactDOM
         └──► App.jsx
               │
               ├──► index.css (Tailwind)
               ├──► App.css
               ├──► Header.jsx
               ├──► Timeline.jsx
               │     │
               │     ├──► GSAP
               │     ├──► ScrollTrigger
               │     ├──► Framer Motion
               │     ├──► timelineData.js
               │     └──► Lightbox.jsx
               │              │
               │              └──► Lucide Icons
               └──► timelineData.js
```

## Build Process

```
Source Files (src/)
      │
      ├──► Vite Dev Server ──► Browser (HMR)
      │
      └──► npm run build
             │
             ├──► Transpile JSX → JS
             ├──► Process CSS (Tailwind)
             ├──► Bundle JS modules
             ├──► Optimize assets
             ├──► Minify code
             └──► Output to dist/
                    │
                    ├── index.html
                    ├── assets/
                    │    ├── index-[hash].js
                    │    └── index-[hash].css
                    └── era*/
                         └── [images]
```

## CSS Architecture

```
Tailwind Base
   │
   ├──► Custom Theme (tailwind.config.js)
   │     ├─ Colors: rich-black, muted-gold
   │     └─ Fonts: Playfair Display, Inter
   │
   ├──► Global Styles (index.css)
   │     ├─ Google Fonts import
   │     ├─ Body defaults
   │     └─ Scrollbar styling
   │
   └──► Component Styles (App.css)
         └─ Smooth scrolling
```

## Browser Rendering Pipeline

```
1. HTML Parse
   └──► DOM Tree

2. CSS Parse
   └──► CSSOM Tree

3. Render Tree
   └──► Layout

4. Paint
   └──► Composite Layers
         ├─ Fixed Header (separate layer)
         ├─ Scrolling Content (separate layer)
         └─ Lightbox Overlay (separate layer)

5. JavaScript Execution
   ├──► React Rendering
   ├──► GSAP Animations (GPU-accelerated)
   └──► Event Handlers
```

This architecture ensures optimal performance and maintainability!
