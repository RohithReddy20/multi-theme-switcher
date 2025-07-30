export type ThemeType = "theme1" | "theme2" | "theme3";

export interface Theme {
  id: ThemeType;
  name: string;
  description: string;
  fontFamily: string;
  colors: {
    bg: string;
    surface: string;
    primary: string;
    secondary: string;
    text: string;
    accent: string;
  };
  layout: "minimal" | "sidebar" | "grid";
}

export interface ThemeContextType {
  currentTheme: ThemeType;
  theme: Theme;
  setTheme: (theme: ThemeType) => void;
  themes: Record<ThemeType, Theme>;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ApiResponse<T> {
  data: T;
  loading: boolean;
  error: string | null;
}

export interface NavigationItem {
  path: string;
  label: string;
  icon?: string;
}

export interface LayoutProps {
  children: React.ReactNode;
}

export interface HeaderProps {
  isSidebarOpen?: boolean;
  onSidebarToggle?: () => void;
}
