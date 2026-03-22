#!/bin/bash

# Convert SVG to PNG for Open Graph image
# This script requires sharp or imagemagick to be installed

echo "Converting OG image to PNG format..."

# Method 1: Using sharp (recommended for Node.js projects)
if command -v sharp &> /dev/null; then
    sharp public/og-image.svg \
         --resize 1200 630 \
         --png \
         public/og-image.png
    echo "✅ PNG created with sharp"
# Method 2: Using ImageMagick
elif command -v convert &> /dev/null; then
    convert public/og-image.svg \
            -resize 1200x630 \
            public/og-image.png
    echo "✅ PNG created with ImageMagick"
else
    echo "❌ Neither sharp nor ImageMagick found"
    echo "Please install one of these tools:"
    echo "  npm install -g sharp"
    echo "  or"
    echo "  # On macOS: brew install imagemagick"
    echo "  # On Ubuntu: sudo apt-get install imagemagick"
    echo ""
    echo "Alternatively, use an online converter like:"
    echo "  https://convertio.co/svg-png/"
    echo "  https://cloudconvert.com/svg-to-png"
fi

echo "Done! 🎉"
