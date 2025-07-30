import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import type { LayoutProps } from "../../types";

export function Layout({ children }: LayoutProps) {
  const { theme } = useTheme();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div
      className="min-h-screen theme-transition"
      style={{ backgroundColor: theme.colors.bg }}
    >
      <Header onSidebarToggle={toggleSidebar} />

      <div className="flex">
        {/* Sidebar for Theme 2 */}
        {theme.layout === "sidebar" && (
          <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
        )}

        {/* Main Content */}
        <motion.main
          key={theme.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className={`flex-1 pt-16 theme-transition ${
            theme.layout === "sidebar" && isSidebarOpen ? "lg:ml-80" : ""
          }`}
        >
          <div className="min-h-screen">{children}</div>
        </motion.main>
      </div>
    </div>
  );
}
