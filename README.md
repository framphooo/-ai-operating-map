# AI Operating Map

A premium, Apple-inspired interactive web application that presents an executive-grade explanation of the AI era through an OS-like interface.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### Build for Production

```bash
npm run build
npm start
```

### Environment Variables

- Copy `env.example` to `.env.local` if you add any config keys.
- No secrets are required for the current local setup.

## 📁 Project Structure

```
/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and design tokens
│   ├── layout.tsx         # Root layout with fonts
│   └── page.tsx           # Main page entry
├── components/            # React components
│   ├── DesktopShell.tsx   # Main OS shell container
│   ├── MenuBar.tsx        # Top menu bar
│   ├── Dock.tsx           # Bottom dock with app icons
│   ├── Window.tsx         # Draggable window component
│   ├── WindowManager.tsx  # Manages window state and rendering
│   ├── FGMark.tsx         # Logo component
│   └── windows/           # Window content components
│       ├── HomeWindow.tsx
│       ├── AIMapWindow.tsx
│       ├── VerticalAIWindow.tsx
│       ├── WhyPilotsFailWindow.tsx
│       ├── MaturityTimelineWindow.tsx
│       ├── ExamplesLibraryWindow.tsx
│       ├── ResourcesWindow.tsx
│       ├── AboutWindow.tsx
│       └── ContactWindow.tsx
├── data/                  # Static data
│   ├── layers.ts          # AI system stack layers
│   ├── timeline.ts        # Maturity timeline data
│   └── examples.ts        # Example cases
├── hooks/                 # React hooks
│   └── useWindowActions.tsx  # Window action context
├── lib/                   # Utilities
│   └── utils.ts           # Helper functions (cn, etc.)
└── types/                 # TypeScript types
    └── window.ts          # Window-related types
```

## 🎨 Design System

### Colors

- Background: `#F4F3F5` (Apple-like light gray)
- Text: `#111111` (near black)
- Secondary Text: `#4B4B4B`
- Accent: `#4D9DFB` (electric blue)
- Card: `rgba(255, 255, 255, 0.9)` with backdrop blur

### Fonts

- **Primary (UI/Body)**: Inter
- **Secondary (Headings)**: Manrope

### Typography Scale

- Headings use `font-heading` (Manrope)
- Body text uses default font (Inter)
- Text sizes are optimized for executive-grade readability

## 🪟 Features

### OS-like Interface

- **Menu Bar**: Top bar with logo, current window title, and system widgets
- **Dock**: Bottom dock with app icons that open windows
- **Windows**: Draggable, closable, minimizable windows with macOS-style chrome
- **Desktop**: Clean background with subtle texture

### Interactive Windows

1. **Home**: Welcome screen with quick actions
2. **AI Map**: Interactive layer stack showing the 7 layers of AI systems
3. **Vertical AI**: Explanation and examples of vertical AI systems
4. **Why Pilots Fail**: Root causes and failure patterns
5. **Maturity Timeline**: Evolution of AI from 2020 to present
6. **Examples Library**: 8 real-world case studies
7. **Resources**: Curated resources and frameworks
8. **About**: Francisco Guevara's background
9. **Contact**: Contact form and information

### Responsive Design

- Desktop-first design with full OS experience
- Mobile: Simplified full-screen panels with back buttons
- Tablet: Optimized layout

## 🔧 What to Edit Next

### Content Updates

1. **Update Logo**: Replace the placeholder SVG in `components/FGMark.tsx` with your actual logo
2. **Update Contact Info**: Edit placeholders in `components/windows/ContactWindow.tsx`
3. **Add Resources**: Populate `components/windows/ResourcesWindow.tsx` with actual resource links
4. **Customize Content**: Edit window content in `components/windows/` as needed

### Future Enhancements

1. **Supabase Integration** (see TODO comments in code):
   - Contact form submissions
   - Resource tracking
   - User preferences (window positions, theme)

2. **Features to Consider**:
   - Window resizing
   - Window maximization
   - Desktop widgets
   - Search functionality
   - Keyboard shortcuts
   - Window snapping/tiling

3. **Performance**:
   - Optimize animations for lower-end devices
   - Implement virtual scrolling for long lists
   - Add image optimization if images are added

### Code TODOs

Look for `TODO:` comments in:
- `components/windows/ContactWindow.tsx` - Form submission
- `components/windows/ResourcesWindow.tsx` - Resource storage
- `components/DesktopShell.tsx` - Window persistence

## 🛠️ Technology Stack

- **Next.js 14** (App Router) - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Hooks** - State management

## 📝 Notes

- All data is currently local (JSON/TypeScript objects)
- Designed for future Supabase integration
- No authentication required for v1
- Form submissions currently log to console

## 🤝 Contributing

Suggestions are welcome. See `CONTRIBUTING.md` for setup and PR guidance.

## 🔒 Security

See `SECURITY.md` for how to report vulnerabilities responsibly.

## 📄 License

MIT License - see `LICENSE` for details.




