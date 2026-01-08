# Quick Start Guide

## How to Run

1. **Install dependencies** (first time only):
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

4. **Build for production**:
   ```bash
   npm run build
   npm start
   ```

## What to Edit Next

### 1. Update Logo
Replace the placeholder logo in `components/FGMark.tsx` with your actual SVG logo.

### 2. Update Contact Information
- Edit `components/windows/ContactWindow.tsx`
- Replace email and LinkedIn placeholders with actual contact info

### 3. Wire Up Contact Form
- Currently logs to console
- Add Supabase integration or email service
- See TODO comment in `components/windows/ContactWindow.tsx`

### 4. Populate Resources
- Edit `components/windows/ResourcesWindow.tsx`
- Replace placeholder entries with actual resource links

### 5. Customize Content
- Window content files in `components/windows/`
- Data files in `data/` (layers.ts, timeline.ts, examples.ts)

### 6. Future Enhancements (Optional)
- Window resizing functionality
- Window persistence (save positions to localStorage or Supabase)
- Desktop widgets
- Search functionality
- Keyboard shortcuts
- Theme toggle (dark mode)

## Project Structure Overview

- `app/` - Next.js app router (pages, layout, global styles)
- `components/` - React components (OS shell, windows, UI)
- `data/` - Static data (layers, timeline, examples)
- `hooks/` - React hooks (window actions context)
- `lib/` - Utilities
- `types/` - TypeScript type definitions

## Key Features

✅ macOS-style desktop interface  
✅ Draggable windows  
✅ Dock navigation  
✅ Menu bar with system widgets  
✅ 9 content windows with executive-grade content  
✅ Responsive design (mobile-friendly)  
✅ Smooth animations  
✅ Accessible (keyboard navigation, focus states)




