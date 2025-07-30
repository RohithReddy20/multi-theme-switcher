# Multi-Theme Switcher App
**React Frontend Developer Application - Chimpiri Rohith - Hipster Inc**

A modern React TypeScript application that demonstrates dynamic theming with three distinct themes, each with different layouts, fonts, and color schemes.

## 🌐 Live Demo
**[View Live Application →](https://your-deployment-url-here.vercel.app)**

*Application submitted for React Frontend Developer position at Hipster Inc*

## 🚀 Features

- **Three Dynamic Themes**:
  - **Minimalist**: Clean light design with simple layout
  - **Dark Professional**: Dark mode with sidebar navigation and serif fonts
  - **Colorful Creative**: Vibrant colors with card-based grid layout

- **Modern Tech Stack**:
  - React 19 with TypeScript
  - Tailwind CSS for styling
  - Framer Motion for animations
  - React Router for navigation
  - Axios for API integration
  - React Hook Form for form handling

- **Key Features**:
  - Theme persistence with localStorage
  - Responsive design for all devices
  - Real-time data from Fake Store API
  - Smooth animations and transitions
  - Accessibility-focused design
  - Mobile-first approach

## 🛠️ Installation & Setup

1. **Clone or navigate to the project directory**:
   ```bash
   cd multi-theme-switcher
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview production build**:
   ```bash
   npm run preview
   ```

## 🎨 Theme Details

### Theme 1: Minimalist
- **Font**: Inter (Sans-serif)
- **Layout**: Clean grid layout
- **Colors**: Light backgrounds, blue accents
- **Style**: Simple, clean, professional

### Theme 2: Dark Professional
- **Font**: Merriweather (Serif)
- **Layout**: Sidebar navigation
- **Colors**: Dark backgrounds, warm accents
- **Style**: Professional, sophisticated

### Theme 3: Colorful Creative
- **Font**: Pacifico (Playful)
- **Layout**: Card-based grid
- **Colors**: Vibrant, creative palette
- **Style**: Fun, creative, engaging

## 📱 Responsive Design

- **Mobile**: Optimized touch interfaces, collapsible navigation
- **Tablet**: Balanced layouts for medium screens
- **Desktop**: Full-featured layouts with advanced interactions

## 🔒 Security Features

- Input sanitization and validation
- XSS protection
- Secure API calls with error handling
- Type-safe TypeScript implementation

## 📁 Project Structure

```
src/
├── assets/             # Static assets (SVG icons, images)
│   └── react.svg
├── components/         # Reusable UI components
│   ├── layout/        # Layout components
│   │   ├── Header.tsx
│   │   ├── Layout.tsx
│   │   └── Sidebar.tsx
│   └── ProductCard.tsx
├── context/           # React Context for theme management
│   ├── themeContext.ts
│   └── ThemeContext.tsx
├── hooks/             # Custom React hooks
│   ├── index.ts
│   ├── useApi.ts
│   ├── useLocalStorage.ts
│   └── useTheme.ts
├── pages/             # Page components
│   ├── AboutPage.tsx
│   ├── ContactPage.tsx
│   └── HomePage.tsx
├── services/          # API services and external integrations
│   └── api.ts
├── types/             # TypeScript type definitions
│   └── index.ts
├── utils/             # Utility functions and theme configurations
│   └── themes.ts
├── App.tsx            # Main App component
├── main.tsx           # Application entry point
├── index.css          # Global styles
└── vite-env.d.ts      # Vite environment types
```

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🌐 API Integration

Uses the [Fake Store API](https://fakestoreapi.com/) to fetch and display products:
- Product listings with images, descriptions, and ratings
- Category filtering
- Error handling and loading states

## 🎯 Key Implementation Details

- **Theme Context**: Centralized theme management with React Context
- **LocalStorage**: Theme preferences persist across sessions
- **Animations**: Smooth transitions using Framer Motion
- **Type Safety**: Full TypeScript implementation
- **Responsive**: Mobile-first design with Tailwind CSS
- **Performance**: Optimized with Vite build tool

## 🤝 Contributing

This is a demonstration project showcasing modern React development practices and dynamic theming capabilities.

## 📄 License

This project is created for demonstration purposes.

---

**Experience the power of dynamic theming!** 🎨

---

## 📧 Submission Details

**Applicant**: Chimpiri Rohith  
**Position**: React Frontend Developer  
**Company**: Hipster Inc  
**Submission Date**: July 30, 2025  
**Repository**: https://github.com/RohithReddy20/multi-theme-switcher  
**Live Demo**: [Deployment Link Here]  

### Technical Assessment Compliance
- ✅ React TypeScript implementation with modern best practices
- ✅ Three distinct themes with different layouts and fonts
- ✅ Real-world API integration (Fake Store API)
- ✅ Responsive design and accessibility features
- ✅ Clean code structure and documentation
- ✅ Production-ready build configuration
