import type { Theme, ThemeType } from "../types";

export const themes: Record<ThemeType, Theme> = {
  theme1: {
    id: "theme1",
    name: "Minimalist",
    description: "Clean and simple design with light colors",
    fontFamily: "font-sans",
    colors: {
      bg: "#ffffff",
      surface: "#f8fafc",
      primary: "#3b82f6",
      secondary: "#64748b",
      text: "#1e293b",
      accent: "#06b6d4",
    },
    layout: "minimal",
  },
  theme2: {
    id: "theme2",
    name: "Dark Professional",
    description: "Dark mode with sidebar layout and clean fonts",
    fontFamily: "font-sans",
    colors: {
      bg: "#0f172a",
      surface: "#1e293b",
      primary: "#f59e0b",
      secondary: "#64748b",
      text: "#f1f5f9",
      accent: "#10b981",
    },
    layout: "sidebar",
  },
  theme3: {
    id: "theme3",
    name: "Colorful Creative",
    description: "Vibrant colors with card-based grid layout",
    fontFamily: "font-playful",
    colors: {
      bg: "#fef3c7",
      surface: "#fff7ed",
      primary: "#e11d48",
      secondary: "#8b5cf6",
      text: "#7c2d12",
      accent: "#059669",
    },
    layout: "grid",
  },
};

export const defaultTheme: ThemeType = "theme1";
