# Apeach Electron App 🍑💕

A cute Electron application featuring Apeach, the adorable Kakao Friends character! This interactive app lets you explore different activities with Apeach including eating, taking selfies, sleeping, and giving flowers.

## Features

- **Interactive Menu System**: Navigate through different Apeach activities
- **Eating Activity**: Watch Apeach enjoy a meal with animated progress
- **Selfie Mode**: See Apeach take cute selfies
- **Sleep Time**: Watch Apeach sleep peacefully with floating Z's
- **Flower Gift**: Give Apeach beautiful flowers with confetti celebration
- **Secure Architecture**: Built with modern Electron security best practices
- **Creator Watermark**: Features @pry_uchiha Instagram handle

## Prerequisites

Before running this application, make sure you have:

- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Installation

1. Navigate to the project directory:
   ```bash
   cd Apeach-main
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running the Application

### Development Mode
```bash
npm start
```

### Development with DevTools (for debugging)
```bash
npm run dev
```

## Project Structure

```
Apeach-main/
├── main.js           # Main Electron process
├── preload.js        # Secure preload script
├── package.json      # Project dependencies and scripts
├── index.html        # Home page
├── menu.html         # Main menu
├── page3.html        # Eating activity
├── page4.html        # Selfie activity
├── page5.html        # Sleeping activity
├── page6.html        # Flower gift activity
├── css/             # Stylesheets for each page
│   ├── index.css
│   ├── menu.css
│   ├── page3.css
│   ├── page4.css
│   ├── page5.css
│   └── page6.css
├── js/              # JavaScript for each page
│   ├── index.js
│   ├── menu.js
│   ├── page3.js
│   ├── page4.js
│   ├── page5.js
│   └── page6.js
└── img/             # Image assets
    ├── home-page1.png
    ├── page-3.png
    ├── page-4.png
    ├── page-5.1.png
    └── page-6.1.png
```

## Security Features

This application implements modern Electron security practices:

- ✅ **Context Isolation**: Enabled for secure communication
- ✅ **Node Integration**: Disabled in renderer processes
- ✅ **Content Security Policy**: Strict CSP headers
- ✅ **Preload Scripts**: Secure API exposure
- ✅ **Remote Module**: Disabled

## Accessibility Features

- ✅ **ARIA Labels**: Proper screen reader support
- ✅ **Semantic HTML**: Uses proper HTML5 semantic elements
- ✅ **Keyboard Navigation**: Full keyboard accessibility
- ✅ **Focus Management**: Proper focus indicators
- ✅ **Alt Text**: Descriptive image alt attributes

## Development

### Adding New Pages

1. Create new HTML file in root directory
2. Create corresponding CSS file in `css/` directory
3. Create corresponding JS file in `js/` directory
4. Add navigation handlers in `main.js` and `preload.js`

### Customizing Styles

Each page has its own CSS file with:
- CSS custom properties for consistent theming
- Responsive design considerations
- Accessibility-friendly focus states
- Smooth animations and transitions

## Troubleshooting

### Common Issues

1. **App won't start**: Make sure you've run `npm install` first
2. **Images not loading**: Check that all image files are in the `img/` directory
3. **Navigation not working**: Ensure all HTML files are in the root directory

### Getting Help

If you encounter issues:
1. Check the console output for error messages
2. Verify all files are in the correct locations
3. Make sure Node.js and npm are properly installed

## Contributing

This is a personal project, but feel free to fork and modify for your own use!

## Creator

**Created by:** @pry_uchiha  
**Instagram:** [@pry_uchiha](https://instagram.com/pry_uchiha)

## License

MIT License - feel free to use this code for your own projects.

---

Enjoy your time with Apeach! 🍑✨