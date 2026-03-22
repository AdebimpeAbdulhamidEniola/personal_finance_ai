# OG Image for FinTrack

I've created a custom Open Graph image for your FinTrack app! 

## 📁 Files Created

1. **`public/og-image.svg`** - High-quality vector version
2. **`convert-og-image.sh`** - Script to convert to PNG

## 🎨 Design Features

The OG image showcases:
- **App branding** with FinTrack logo and name
- **Dashboard mockup** with charts, stats, and budget breakdown
- **AI insights section** highlighting the AI features
- **Professional gradient** matching your app's design
- **Key metrics** showing income, expenses, and savings
- **Optimized dimensions** 1200x630px for social media

## 🚀 Quick Setup

### Option 1: Use SVG directly (Recommended)
Most platforms support SVG OG images now. Just use:
```typescript
url: "/og-image.svg"
```

### Option 2: Convert to PNG
Run the conversion script:
```bash
chmod +x convert-og-image.sh
./convert-og-image.sh
```

### Option 3: Online Converter
If the script doesn't work, use:
- https://convertio.co/svg-png/
- https://cloudconvert.com/svg-to-png/

## 📋 Update Your Metadata

Make sure your layout.tsx references the correct file:

```typescript
// For SVG (recommended)
images: [
  {
    url: "/og-image.svg",
    width: 1200,
    height: 630,
    alt: "FinTrack AI Finance Dashboard",
  },
],

// Or for PNG after conversion
images: [
  {
    url: "/og-image.png", 
    width: 1200,
    height: 630,
    alt: "FinTrack AI Finance Dashboard",
  },
],
```

## 🎯 Why This Design Works

- **Shows the product** - People can see what your app does
- **Highlights AI features** - Your key differentiator
- **Professional appearance** - Builds trust and credibility
- **Brand consistency** - Matches your app's color scheme
- **Clear value proposition** - "Transform your financial life"

## 📱 Platform Testing

Test your OG image on:
- Facebook Debugger: https://developers.facebook.com/tools/debug/
- Twitter Card Validator: https://cards-dev.twitter.com/validator
- LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

Your FinTrack app will now look amazing when shared on social media! 🎉
