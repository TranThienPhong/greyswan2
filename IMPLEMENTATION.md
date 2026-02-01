# Implementation Guide

## Timeline Logic Implementation

### Year Ordering & Alignment

The timeline implements intelligent positioning based on event years:

#### 1. **Year Extraction**
```javascript
const getStartYear = (yearStr) => {
  const match = yearStr.match(/(\d{4})/);
  return match ? parseInt(match[1]) : 0;
};
```
This extracts the starting year from strings like:
- "1987" → 1987
- "1987-97" → 1987
- "Late 1970s" → 1970

#### 2. **Event Alignment**
When two events share the same starting year but are on different sides (left/right), they are aligned horizontally:

```javascript
const getEventPosition = (event, allEvents) => {
  const eventYear = getStartYear(event.year);
  const sameYearEvents = allEvents.filter(e => getStartYear(e.year) === eventYear);
  
  if (sameYearEvents.length === 1) {
    return 'single';
  }
  
  const leftEvent = sameYearEvents.find(e => e.side === 'left');
  const rightEvent = sameYearEvents.find(e => e.side === 'right');
  
  if (leftEvent && rightEvent) {
    return 'aligned';  // Both events are centered vertically
  }
  
  return 'single';
};
```

**Example:**
- Left: "1987" (Black Monday crash)
- Right: "1987-97" (Beardstown Ladies)
- Result: Both events are vertically aligned because they share 1987

#### 3. **Chronological Order**
Events within each era are displayed in the order they appear in the data file, which should be chronologically sorted.

---

## Animation System

### GSAP ScrollTrigger

Each timeline event has a scroll-triggered fade-in animation:

```javascript
gsap.fromTo(
  element,
  { opacity: 0, y: 50 },
  {
    opacity: 1,
    y: 0,
    duration: 0.8,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: element,
      start: 'top 80%',
      end: 'top 50%',
      toggleActions: 'play none none reverse',
    },
  }
);
```

**Behavior:**
- Elements start invisible and 50px below final position
- Animation triggers when element reaches 80% from viewport top
- Smooth power2 easing for natural motion

### Central Timeline Animation

The vertical gold line grows as you scroll:

```javascript
gsap.fromTo(
  centralLine,
  { scaleY: 0, transformOrigin: 'top' },
  {
    scaleY: 1,
    duration: 1.5,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: timelineRef.current,
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: 1,  // Tied to scroll position
    },
  }
);
```

### Framer Motion

Used for initial reveal animations on era titles:

```javascript
<motion.div
  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  {/* Era Title */}
</motion.div>
```

---

## Lightbox System

### Features
- Click any image to open in full-screen
- Navigate between multiple images with arrow buttons or keys
- Click backdrop to close
- Image counter (e.g., "2 / 5")
- Gold border matching site theme

### Implementation

```javascript
const openLightbox = (images, index = 0) => {
  setLightboxImages(images);
  setLightboxIndex(index);
  setLightboxOpen(true);
};
```

**Keyboard Navigation:** ← → keys navigate, ESC closes (future enhancement)

---

## Responsive Design

### Breakpoints

| Screen | Width | Layout |
|--------|-------|--------|
| Mobile | < 768px | Single column, stacked |
| Tablet | 768px - 1024px | Two columns, reduced spacing |
| Desktop | > 1024px | Full split-screen with connectors |

### Mobile Optimizations

1. **Layout Collapse:**
   - Events stack vertically
   - Both text and images shown in sequence
   - Connector lines hidden

2. **Spacing Reduction:**
   - Padding reduced from 48px to 24px
   - Image max-width reduced from 280px to 200px

3. **Header Compression:**
   - Logo size reduced
   - Font sizes scaled down

```jsx
{/* Mobile Layout - Show everything stacked */}
<div className="md:hidden order-3 space-y-4">
  <div className="text-center">
    <h3>{event.year}</h3>
    <p>{event.title}</p>
  </div>
  <div className="flex flex-wrap gap-3 justify-center">
    {/* Images */}
  </div>
</div>
```

---

## Data Structure

### Timeline Data Format

```javascript
{
  era: 1,
  title: "The Birth of Dissent",
  years: "1776-1907",
  events: [
    {
      year: "1776",
      title: "Event description",
      side: "left",  // or "right"
      images: ["/era1/1776.jpg"]
    }
  ]
}
```

### Adding New Events

1. **Open** `src/timelineData.js`
2. **Add event** to appropriate era:
```javascript
{
  year: "2025",
  title: "New milestone description",
  side: "left",  // Economy & Policy
  images: ["/era6/2025.jpg", "/era6/2025-detail.jpg"]
}
```
3. **Place images** in `/public/era6/` folder
4. **Maintain chronological order** within each era

---

## Styling Guide

### Color Usage

```css
/* Primary Background */
bg-rich-black      /* #0a0a0a */

/* Accent Color */
text-muted-gold    /* #c9a227 */
border-muted-gold  /* #c9a227 */

/* Text Colors */
text-white         /* Full brightness */
text-white/90      /* 90% opacity for descriptions */
text-white/60      /* 60% opacity for subtle text */

/* Special */
border-muted-gold/60  /* 60% opacity gold for image borders */
```

### Typography

```jsx
{/* Era Titles */}
<h2 className="font-serif text-3xl md:text-4xl">
  ERA {era.era}: <span className="italic">{era.title}</span>
</h2>

{/* Event Years */}
<h3 className="text-2xl md:text-3xl font-bold text-muted-gold font-sans">
  {event.year}
</h3>

{/* Event Descriptions */}
<p className="text-base md:text-lg text-white/90 leading-relaxed">
  {event.title}
</p>
```

### Spacing

```jsx
{/* Era Spacing */}
<div className="mb-48">  {/* Large gap between eras */}

{/* Event Spacing */}
<div className="space-y-16 md:space-y-24">  {/* Gap between events */}

{/* Horizontal Padding */}
<div className="md:pr-12 lg:pr-24">  {/* Responsive padding */}
```

---

## Performance Considerations

1. **Image Optimization:**
   - Use compressed formats (WebP, AVIF when possible)
   - Reasonable dimensions (max 1200px width recommended)
   - Multiple images per event load on-demand

2. **Animation Performance:**
   - GSAP uses GPU acceleration
   - ScrollTrigger efficiently tracks scroll position
   - Framer Motion optimizes React renders

3. **Code Splitting:**
   - Vite automatically chunks code
   - Components lazy-loaded when needed

4. **Cleanup:**
```javascript
useEffect(() => {
  // Setup animations
  
  return () => {
    // Clean up ScrollTrigger instances
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  };
}, [data]);
```

---

## Future Enhancements

### Potential Features

1. **Keyboard Navigation:**
   - Arrow keys for lightbox
   - ESC to close
   - Tab navigation for accessibility

2. **Search/Filter:**
   - Search events by keyword
   - Filter by era or side
   - Highlight matching events

3. **Zoom Controls:**
   - Pinch-to-zoom on lightbox images
   - Pan around zoomed images

4. **Share Functionality:**
   - Deep links to specific events
   - Social media sharing

5. **Dark/Light Mode Toggle:**
   - Alternative color scheme
   - User preference saving

6. **Animation Controls:**
   - Pause/play animations
   - Reduce motion for accessibility

7. **Export Timeline:**
   - Print-friendly version
   - PDF export
   - Image export

---

## Troubleshooting

### Common Issues

**Issue: Images not loading**
- Verify images exist in `/public/era*/` folders
- Check file paths in `timelineData.js` (should start with `/`)
- Ensure correct file extensions

**Issue: Animations stuttering**
- Check for large unoptimized images
- Reduce number of simultaneous animations
- Check browser DevTools for memory issues

**Issue: Layout breaking on mobile**
- Verify Tailwind responsive classes (`md:`, `lg:`)
- Test in browser DevTools responsive mode
- Check for fixed width values that don't scale

**Issue: Connector lines misaligned**
- Events must be in same `space-y-*` container
- Check that positioning logic matches your year format
- Verify `items-center` class is applied correctly

---

## Browser Support

- **Chrome/Edge**: Full support
- **Firefox**: Full support
- **Safari**: Full support (iOS 13+)
- **Opera**: Full support
- **IE11**: Not supported (uses modern ES6+)

---

## Deployment

### Build for Production

```bash
npm run build
```

Output: `/dist` folder

### Deploy to Static Hosting

**Vercel:**
```bash
vercel --prod
```

**Netlify:**
```bash
netlify deploy --prod --dir=dist
```

**GitHub Pages:**
```bash
npm run build
# Push dist folder to gh-pages branch
```

### Environment Variables

None required for current implementation.

---

## License & Credits

**Developed for:** Grey Swan Investment Fraternity  
**Framework:** React + Vite  
**Styling:** Tailwind CSS  
**Animation:** GSAP + Framer Motion  
**Icons:** Lucide React  

© 2026 Grey Swan Investment Fraternity. All rights reserved.
