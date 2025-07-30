import type { ThemeContextType, ThemeType, LayoutProps } from "../types";
import { themes, defaultTheme } from "../utils/themes";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { ThemeContext } from "./themeContext";

export function ThemeProvider({ children }: LayoutProps) {
  const [currentTheme, setCurrentTheme] = useLocalStorage<ThemeType>(
    "selected-theme",
    defaultTheme
  );

  const setTheme = (theme: ThemeType) => {
    setCurrentTheme(theme);
  };

  const theme = themes[currentTheme];

  const value: ThemeContextType = {
    currentTheme,
    theme,
    setTheme,
    themes,
  };

  return (
    <ThemeContext.Provider value={value}>
      <div
        className={`min-h-screen theme-transition ${theme.fontFamily}`}
        style={{
          backgroundColor: theme.colors.bg,
          color: theme.colors.text,
        }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
}
