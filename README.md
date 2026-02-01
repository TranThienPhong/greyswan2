# GreySwan Historical Timeline

An interactive historical timeline web application showcasing the evolution of financial and political eras from 1776 to 2024.

## 🚀 Features

- **Split-Screen Layout**: Left side shows "Economy & Policy" events, right side shows "Newsletters & Industry" events
- **Vertical Scroll Animation**: Smooth scroll-triggered animations inspired by modern web design
- **6 Historical Eras**: From "The Birth of Dissent" (1776-1907) to "The Post-Truth Tsunami" (2020-2024)
- **Interactive Lightbox**: Click any image to view it in full-screen with navigation
- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop
- **Smooth Animations**: Powered by Framer Motion and GSAP ScrollTrigger

## 🛠️ Tech Stack

- **React** - UI framework
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - React animations & transitions
- **GSAP ScrollTrigger** - Scroll-based animations
- **Lucide React** - Icon library

## 📐 Design System

### Color Palette
- **Rich Black**: `#0a0a0a` - Main Background
- **Muted Gold**: `#c9a227` - Accents, Connector Lines, Years
- **White**: `#ffffff` - Primary Text
- **Muted White**: `rgba(255,255,255,0.6)` - Secondary Text

### Typography
- **Headings**: Playfair Display (Serif) - Era Titles and major headers
- **Body/UI**: Inter (Sans-serif) - Event Years, Titles, and UI elements

## 🎯 Timeline Logic

### Year Ordering
- Years are displayed in chronological order
- If a milestone on the right is 1776, it appears before a 1792 left milestone

### Aligned Milestones
- If events share the same starting year (e.g., left: "1987", right: "1987-97"), their milestone lines are aligned horizontally

## 📁 Project Structure

```
greyswan2/
├── public/
│   ├── era1/          # 1776-1907 images
│   ├── era2/          # 1913-1944 images
│   ├── era3/          # 1945-1989 images
│   ├── era4/          # 1990-2007 images
│   ├── era5/          # 2008-2019 images
│   └── era6/          # 2020-2024 images
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Top header with logo and split titles
│   │   ├── Timeline.jsx     # Main timeline component
│   │   └── Lightbox.jsx     # Image lightbox component
│   ├── timelineData.js      # Timeline data for all 6 eras
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
├── tailwind.config.js       # Tailwind configuration
└── package.json             # Dependencies

```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to the URL shown (usually `http://localhost:5173`)

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 📝 Adding New Events

To add new events to the timeline, edit [src/timelineData.js](src/timelineData.js):

```javascript
{
  year: "2025",
  title: "Your event title here",
  side: "left", // or "right"
  images: ["/era6/2025.jpg"]
}
```

## 🎨 Customization

### Colors
Edit [tailwind.config.js](tailwind.config.js) to change the color scheme:

```javascript
colors: {
  'rich-black': '#0a0a0a',
  'muted-gold': '#c9a227',
}
```

### Fonts
Import different fonts in [src/index.css](src/index.css):

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px - Single column, simplified connectors
- **Tablet**: 768px - 1024px - Reduced spacing
- **Desktop**: > 1024px - Full layout with all features

## ⚡ Performance

- Images are lazy-loaded
- Smooth scroll performance with GSAP
- Optimized animations with Framer Motion
- Minimal bundle size with Vite

## 📄 License

This project is private and proprietary.

## 👥 Credits

Developed for Grey Swan Investment Fraternity
