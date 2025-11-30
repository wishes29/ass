# Make-A-Wish Text Logo Style Guide

## Overview
This guide provides 6 professional text logo options for Make-A-Wish. All logos are built using modern CSS gradients and web fonts for maximum scalability and performance.

---

## Logo Options

### 1. **Modern Gradient Logo** (Recommended)
- **Best for:** Hero sections, large headers, landing page
- **Style:** Bold gradient from blue to cyan
- **CSS Class:** `logo-gradient`
- **Usage:**
  ```html
  <h1 class="logo-gradient">Make-A-Wish</h1>
  ```
- **Responsive Variants:**
  - `.logo-gradient.small` (1.8em)
  - `.logo-gradient.large` (3.5em)

---

### 2. **Elegant Serif Logo**
- **Best for:** Formal contexts, print materials, about pages
- **Style:** Uppercase serif with gold star accent
- **CSS Class:** `logo-serif`
- **Usage:**
  ```html
  <h1 class="logo-serif">MAKE<span class="star">★</span>WISH</h1>
  ```
- **Variations:** Works well on light backgrounds

---

### 3. **Solid Badge Logo**
- **Best for:** Buttons, navigation, badges, CTA sections
- **Style:** White text on blue gradient background
- **CSS Class:** `logo-badge`
- **Usage:**
  ```html
  <div class="logo-badge">Make-A-Wish</div>
  ```
- **Responsive Variants:**
  - `.logo-badge.small` (1.5em)
  - `.logo-badge.large` (3.5em)

---

### 4. **Magical Sparkles Logo**
- **Best for:** Playful sections, wish-focused content, children's pages
- **Style:** Bold text with sparkle emojis
- **CSS Class:** `logo-sparkles`
- **Usage:**
  ```html
  <h1 class="logo-sparkles">Make-A-Wish</h1>
  ```
- **Note:** Automatically adds ✨ before and after

---

### 5. **Stacked Logo**
- **Best for:** Square spaces, sidebars, compact areas
- **Style:** Vertical stacking with "MAKE" (top) and "A WISH" (bottom)
- **CSS Classes:** `logo-stacked`, `logo-stacked-top`, `logo-stacked-bottom`
- **Usage:**
  ```html
  <div class="logo-stacked">
    <div class="logo-stacked-top">MAKE</div>
    <div class="logo-stacked-bottom">A WISH</div>
  </div>
  ```

---

### 6. **Rainbow Gradient Logo**
- **Best for:** Festive/celebratory content, diversity messaging
- **Style:** Multi-color gradient (blue → cyan → gold)
- **CSS Class:** `logo-rainbow`
- **Usage:**
  ```html
  <h1 class="logo-rainbow">MAKE-A-WISH</h1>
  ```

---

## Implementation

### Quick Start

1. **Link the CSS file** in your header (or `<head>`):
   ```html
   <link rel="stylesheet" href="/css/logo-styles.css">
   ```

2. **Add Google Fonts** (optional but recommended for best rendering):
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700;800;900&family=Playfair+Display:wght@700;900&family=Montserrat:wght@700;800;900&display=swap" rel="stylesheet">
   ```

3. **Use the logo component** in your EJS templates:
   ```html
   <%- include('partials/logo', { style: 'gradient', size: 'md' }) %>
   ```

### Size Variants

All logos have responsive size classes:

| Class | Size | Best Used |
|-------|------|-----------|
| `.logo-xs` | 1.2em | Small labels |
| `.logo-sm` | 1.8em | Navigation, sidebars |
| `.logo-md` | 2.5em | Default, cards |
| `.logo-lg` | 3.5em | Headers, sections |
| `.logo-xl` | 4.5em | Hero sections |

### Color Utilities

| Class | Color | Use Case |
|-------|-------|----------|
| `.logo-primary` | #005eb8 (Blue) | Primary branding |
| `.logo-secondary` | #00a7e1 (Cyan) | Secondary elements |
| `.logo-accent` | #ffb81c (Gold) | Accents, highlights |
| `.logo-white` | White | On colored backgrounds |

### Text Utilities

| Class | Effect |
|-------|--------|
| `.logo-bold` | Extra bold weight |
| `.logo-uppercase` | Convert to uppercase |
| `.logo-tight` | Reduce letter spacing |
| `.logo-loose` | Increase letter spacing |

### Combining Classes

You can combine size, color, and text utilities:

```html
<!-- Large, tight-spaced logo -->
<h1 class="logo-gradient logo-lg logo-tight">Make-A-Wish</h1>

<!-- Small badge logo with accent color -->
<div class="logo-badge logo-sm logo-accent">Make-A-Wish</div>

<!-- Uppercase with white color -->
<h1 class="logo-gradient logo-uppercase logo-white">Make-A-Wish</h1>
```

---

## Where to Use Each Logo

### Homepage/Hero Section
```html
<div class="hero">
  <div class="logo-gradient logo-xl">Make-A-Wish</div>
  <p class="lead">Share the love and grant wishes</p>
</div>
```

### Navigation Bar
```html
<nav class="navbar">
  <div class="logo-stacked logo-sm">
    <div class="logo-stacked-top">MAKE</div>
    <div class="logo-stacked-bottom">A WISH</div>
  </div>
</nav>
```

### Donation Button/Badge
```html
<a href="/donate" class="logo-badge logo-sm">
  Make-A-Wish
</a>
```

### Section Heading
```html
<h2 class="logo-serif logo-lg">MAKE★WISH</h2>
<p>Learn about our mission...</p>
```

### Footer
```html
<footer>
  <div class="logo-gradient logo-md">Make-A-Wish</div>
  <p>© 2025 Make-A-Wish Organization</p>
</footer>
```

### Volunteer/Kids Section
```html
<h1 class="logo-sparkles">Make-A-Wish</h1>
<p>Join us in making dreams come true!</p>
```

---

## Responsive Design

All logos automatically adjust on mobile devices:

- **Desktop (1024px+):** Full size, optimized spacing
- **Tablet (768px):** 20% size reduction
- **Mobile (480px):** 40% size reduction

No additional media query code needed—it's built into the CSS!

---

## Color Reference

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue | `#005eb8` | Main branding, text |
| Cyan | `#00a7e1` | Gradients, accents |
| Gold | `#ffb81c` | Highlights, stars |
| White | `#ffffff` | Contrast, badges |

---

## SVG Alternative

For maximum scalability, you can also create an SVG version:

```html
<svg width="300" height="100" viewBox="0 0 300 100">
  <defs>
    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#005eb8;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#00a7e1;stop-opacity:1" />
    </linearGradient>
  </defs>
  <text x="150" y="70" font-family="Poppins" font-size="48" 
        font-weight="900" fill="url(#logoGradient)" text-anchor="middle">
    Make-A-Wish
  </text>
</svg>
```

---

## Browser Support

All logos work on:
- ✅ Chrome/Edge (v90+)
- ✅ Firefox (v88+)
- ✅ Safari (v14+)
- ✅ Mobile browsers

---

## Performance Tips

1. **Use CSS over images** - Logos load instantly with zero HTTP requests
2. **Cache Google Fonts** - Browsers cache fonts for faster future loads
3. **Lazy load** - Use `defer` on large logo sections
4. **Webfont optimization** - Only load font weights you use (700, 800, 900)

---

## Customization

To modify colors, edit `/public/css/logo-styles.css`:

```css
.logo-gradient {
  background: linear-gradient(135deg, #YOUR_COLOR_1 0%, #YOUR_COLOR_2 100%);
}
```

To change fonts, update the Google Fonts link in your header:

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR_FONT:wght@700;800;900&display=swap" rel="stylesheet">
```

---

## Questions?

For more info on web typography and gradients, see:
- [Google Fonts Documentation](https://fonts.google.com/)
- [CSS Gradients Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient)
- [Web Typography Best Practices](https://web.dev/font-display/)
