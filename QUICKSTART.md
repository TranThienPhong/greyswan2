# Quick Start Guide

## Running the Application

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

## Adding New Events

### 1. Add Images
Place your images in the appropriate era folder:
```
public/
  era1/  → 1776-1907
  era2/  → 1913-1944
  era3/  → 1945-1989
  era4/  → 1990-2007
  era5/  → 2008-2019
  era6/  → 2020-2024
```

### 2. Update Timeline Data
Edit `src/timelineData.js` and add your event:

```javascript
{
  year: "2025",
  title: "Your event description here",
  side: "left",   // "left" for Economy & Policy, "right" for Newsletters
  images: ["/era6/2025.jpg"]  // Can have multiple images
}
```

### 3. Side Guide
- **Left (Economy & Policy):** Government actions, regulations, economic events
- **Right (Newsletters & Industry):** Publications, media, industry developments

## Examples

### Single Image Event
```javascript
{
  year: "1776",
  title: "Paine's Common Sense ignites a mass pamphleteering movement.",
  side: "right",
  images: ["/era1/1776.jpg"]
}
```

### Multiple Image Event
```javascript
{
  year: "1907",
  title: "Wyckoff launches The Magazine of Wall Street.",
  side: "right",
  images: [
    "/era1/1907_-right_Wyckoff.jpeg",
    "/era1/1907_right_WallMagazine.jpg"
  ]
}
```

### Year Range Event
```javascript
{
  year: "1987-97",
  title: "Beardstown Ladies dominate media → later discredited",
  side: "right",
  images: ["/era3/1987-97_2.jpg", "/era3/1987-97_3.jpg"]
}
```

### Approximate Year Event
```javascript
{
  year: "Late 1970s",
  title: "Batra's trilogy (1978-85) peaks at #1 (NYT)",
  side: "right",
  images: ["/era3/late_1970s.jpg"]
}
```

## Creating a New Era

If you need to add Era 7, update `src/timelineData.js`:

```javascript
{
  era: 7,
  title: "Your Era Name",
  years: "2025-2030",
  events: [
    {
      year: "2025",
      title: "First event",
      side: "left",
      images: ["/era7/2025.jpg"]
    }
    // Add more events...
  ]
}
```

Don't forget to create the `/public/era7/` folder!

## Color Customization

Edit `tailwind.config.js`:

```javascript
colors: {
  'rich-black': '#0a0a0a',  // Background color
  'muted-gold': '#c9a227',  // Accent color (timeline, years)
}
```

## Font Customization

Edit `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Your+Font&display=swap');
```

Then update `tailwind.config.js`:

```javascript
fontFamily: {
  'serif': ['Your Serif Font', 'Georgia', 'serif'],
  'sans': ['Your Sans Font', 'system-ui', 'sans-serif'],
}
```

## Troubleshooting

### Issue: Changes not appearing
1. Save all files
2. Check terminal for errors
3. Refresh browser (Ctrl+R or Cmd+R)
4. Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Issue: Image not showing
- Check file path starts with `/` (e.g., `/era1/image.jpg`)
- Verify image exists in public folder
- Check file extension matches (`.jpg`, `.png`, `.avif`, etc.)

### Issue: Layout broken
- Verify JSON syntax (commas, brackets)
- Check `side` value is "left" or "right"
- Ensure `images` is an array with brackets `[]`

## Building for Production

```bash
# Create production build
npm run build

# Test production build locally
npm run preview
```

The built files will be in the `dist/` folder, ready for deployment.

## Keyboard Shortcuts (Development)

- `Ctrl+C` (in terminal) - Stop development server
- `Ctrl+Shift+R` - Hard refresh browser
- `F12` - Open browser DevTools

## Need Help?

1. Check [IMPLEMENTATION.md](IMPLEMENTATION.md) for detailed documentation
2. Check [README.md](README.md) for full feature list
3. Look at existing events in `timelineData.js` for examples
