import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import type { HeaderProps, NavigationItem } from "../../types";

const navigationItems: NavigationItem[] = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export function Header({ onSidebarToggle }: HeaderProps) {
  const { theme, currentTheme, setTheme, themes } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const handleThemeChange = (themeId: string) => {
    setTheme(themeId as keyof typeof themes);
    setIsDropdownOpen(false);
  };

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 theme-transition"
      style={{ backgroundColor: theme.colors.surface }}
    >
      <div
        className="border-b"
        style={{ borderColor: theme.colors.secondary + "30" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Brand */}
            <div className="flex items-center space-x-4">
              {theme.layout === "sidebar" && (
                <button
                  onClick={onSidebarToggle}
                  className="lg:hidden p-2 rounded-md hover:bg-opacity-80 transition-colors"
                  style={{
                    backgroundColor: theme.colors.primary + "20",
                    border: `1px solid ${theme.colors.primary}40`,
                  }}
                  aria-label="Toggle sidebar"
                >
                  <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                    <span
                      className="block h-0.5 w-6 transform transition duration-300"
                      style={{ backgroundColor: theme.colors.text }}
                    />
                    <span
                      className="block h-0.5 w-6 transform transition duration-300"
                      style={{ backgroundColor: theme.colors.text }}
                    />
                    <span
                      className="block h-0.5 w-6 transform transition duration-300"
                      style={{ backgroundColor: theme.colors.text }}
                    />
                  </div>
                </button>
              )}

              <Link to="/" className="flex items-center space-x-2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: theme.colors.primary }}
                >
                  <span className="text-white font-bold text-lg">T</span>
                </motion.div>
                <span
                  className={`text-xl font-bold ${theme.fontFamily}`}
                  style={{ color: theme.colors.text }}
                >
                  ThemeSwitcher
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            {theme.layout !== "sidebar" && (
              <nav className="hidden md:flex space-x-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      isActiveRoute(item.path) ? "font-bold" : "hover:scale-105"
                    }`}
                    style={{
                      color: isActiveRoute(item.path)
                        ? theme.colors.primary
                        : theme.colors.text,
                      backgroundColor: isActiveRoute(item.path)
                        ? theme.colors.primary + "20"
                        : "transparent",
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            )}

            {/* Navigation for Sidebar Layout (Visible on larger screens) */}
            {theme.layout === "sidebar" && (
              <nav className="hidden lg:flex space-x-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      isActiveRoute(item.path) ? "font-bold" : "hover:scale-105"
                    }`}
                    style={{
                      color: isActiveRoute(item.path)
                        ? theme.colors.primary
                        : theme.colors.text,
                      backgroundColor: isActiveRoute(item.path)
                        ? theme.colors.primary + "20"
                        : "transparent",
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            )}

            {/* Theme Selector and Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Theme Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center space-x-2 px-3 py-2 rounded-md border transition-all duration-200 hover:scale-105"
                  style={{
                    borderColor: theme.colors.secondary,
                    backgroundColor: theme.colors.surface,
                    color: theme.colors.text,
                  }}
                  aria-label="Select theme"
                >
                  <span className="text-sm font-medium">{theme.name}</span>
                  <motion.div
                    animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      style={{ color: theme.colors.text }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-48 rounded-md shadow-lg border z-10"
                      style={{
                        backgroundColor: theme.colors.surface,
                        borderColor: theme.colors.secondary + "50",
                        boxShadow:
                          theme.colors.bg === "#0f172a"
                            ? "0 10px 25px rgba(0, 0, 0, 0.5)"
                            : "0 10px 25px rgba(0, 0, 0, 0.15)",
                      }}
                    >
                      <div className="py-1">
                        {Object.values(themes).map((themeOption) => (
                          <button
                            key={themeOption.id}
                            onClick={() => handleThemeChange(themeOption.id)}
                            className={`block w-full text-left px-4 py-2 text-sm transition-colors duration-200 hover:bg-opacity-80 ${
                              currentTheme === themeOption.id ? "font-bold" : ""
                            }`}
                            style={{
                              color:
                                currentTheme === themeOption.id
                                  ? theme.colors.primary
                                  : theme.colors.text,
                              backgroundColor:
                                currentTheme === themeOption.id
                                  ? theme.colors.primary + "20"
                                  : "transparent",
                            }}
                            onMouseEnter={(e) => {
                              if (currentTheme !== themeOption.id) {
                                e.currentTarget.style.backgroundColor =
                                  theme.colors.primary + "10";
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (currentTheme !== themeOption.id) {
                                e.currentTarget.style.backgroundColor =
                                  "transparent";
                              }
                            }}
                          >
                            <div>
                              <div className="font-medium">
                                {themeOption.name}
                              </div>
                              <div className="text-xs opacity-70">
                                {themeOption.description}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Menu Button */}
              {theme.layout !== "sidebar" && (
                <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="md:hidden p-2 rounded-md"
                  style={{ backgroundColor: theme.colors.primary + "20" }}
                  aria-label="Toggle mobile menu"
                >
                  <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                    <span
                      className="block h-0.5 w-6 transform transition duration-300"
                      style={{ backgroundColor: theme.colors.text }}
                    />
                    <span
                      className="block h-0.5 w-6 transform transition duration-300"
                      style={{ backgroundColor: theme.colors.text }}
                    />
                    <span
                      className="block h-0.5 w-6 transform transition duration-300"
                      style={{ backgroundColor: theme.colors.text }}
                    />
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && theme.layout !== "sidebar" && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t"
              style={{ borderColor: theme.colors.secondary + "30" }}
            >
              <div className="px-4 py-2 space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActiveRoute(item.path) ? "font-bold" : ""
                    }`}
                    style={{
                      color: isActiveRoute(item.path)
                        ? theme.colors.primary
                        : theme.colors.text,
                      backgroundColor: isActiveRoute(item.path)
                        ? theme.colors.primary + "20"
                        : "transparent",
                    }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Backdrop for dropdowns */}
      {(isDropdownOpen || isMobileMenuOpen) && (
        <div
          className="fixed inset-0 z-0"
          onClick={() => {
            setIsDropdownOpen(false);
            setIsMobileMenuOpen(false);
          }}
        />
      )}
    </motion.header>
  );
}
