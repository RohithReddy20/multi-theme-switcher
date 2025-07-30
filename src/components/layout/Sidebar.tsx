import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import type { NavigationItem } from "../../types";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigationItems: NavigationItem[] = [
  { path: "/", label: "Home", icon: "🏠" },
  { path: "/about", label: "About", icon: "ℹ️" },
  { path: "/contact", label: "Contact", icon: "📧" },
];

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const { theme } = useTheme();
  const location = useLocation();

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Backdrop for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.div
        initial={{ x: -320 }}
        animate={{ x: isOpen ? 0 : -320 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed left-0 top-16 bottom-0 w-80 z-50 lg:z-30 sidebar-transition"
        style={{ backgroundColor: theme.colors.surface }}
      >
        <div
          className="h-full border-r"
          style={{ borderColor: theme.colors.secondary + "30" }}
        >
          {/* Sidebar Header */}
          <div
            className="p-6 border-b"
            style={{ borderColor: theme.colors.secondary + "30" }}
          >
            <h2
              className={`text-lg font-bold ${theme.fontFamily}`}
              style={{ color: theme.colors.text }}
            >
              Navigation
            </h2>
            <p
              className="text-sm opacity-70 mt-1"
              style={{ color: theme.colors.text }}
            >
              {theme.description}
            </p>
          </div>

          {/* Navigation */}
          <nav className="p-4">
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={onClose}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 hover:scale-105 ${
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
                    <span className="text-xl">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sidebar Footer */}
          <div
            className="absolute bottom-0 left-0 right-0 p-4 border-t"
            style={{ borderColor: theme.colors.secondary + "30" }}
          >
            <div
              className="text-xs opacity-60 text-center"
              style={{ color: theme.colors.text }}
            >
              <p>Theme: {theme.name}</p>
              <p>Dark Professional Layout</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content spacer for desktop */}
      <div
        className={`hidden lg:block transition-all duration-300 ${
          isOpen ? "w-80" : "w-0"
        }`}
      />
    </>
  );
}
