import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
import { useApi } from "../hooks/useApi";
import { productService } from "../services/api";
import { ProductCard } from "../components/ProductCard";
import type { Product } from "../types";

export function HomePage() {
  const { theme } = useTheme();
  const {
    data: products,
    loading,
    error,
  } = useApi<Product[]>(() => productService.getAllProducts());

  const getGridClasses = () => {
    switch (theme.layout) {
      case "minimal":
        return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6";
      case "sidebar":
        return "space-y-6";
      case "grid":
        return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8";
      default:
        return "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center min-h-64">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            className="w-8 h-8 border-2 border-t-transparent rounded-full"
            style={{ borderColor: theme.colors.primary }}
          />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <div className="text-6xl mb-4">😞</div>
          <h2
            className="text-2xl font-bold mb-2"
            style={{ color: theme.colors.text }}
          >
            Oops! Something went wrong
          </h2>
          <p
            className="text-lg opacity-70"
            style={{ color: theme.colors.text }}
          >
            {error}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 btn-primary"
            style={{
              backgroundColor: theme.colors.primary,
              color: "white",
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h1
          className={`text-4xl md:text-6xl font-bold mb-4 ${theme.fontFamily}`}
          style={{ color: theme.colors.text }}
        >
          Welcome to ThemeSwitcher
        </h1>
        <p
          className="text-xl mb-8 opacity-80"
          style={{ color: theme.colors.text }}
        >
          Experience our amazing {theme.name.toLowerCase()} design with dynamic
          theming
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <button
            className="btn-primary text-lg"
            style={{
              backgroundColor: theme.colors.primary,
              color: "white",
            }}
          >
            Explore Products
          </button>
        </motion.div>
      </motion.div>

      {/* Theme Description */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-12 p-6 rounded-lg"
        style={{ backgroundColor: theme.colors.surface }}
      >
        <h2
          className={`text-2xl font-bold mb-3 ${theme.fontFamily}`}
          style={{ color: theme.colors.text }}
        >
          Current Theme: {theme.name}
        </h2>
        <p className="text-lg opacity-80" style={{ color: theme.colors.text }}>
          {theme.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <span
            className="px-3 py-1 rounded-full text-sm font-medium"
            style={{
              backgroundColor: theme.colors.primary + "20",
              color: theme.colors.primary,
            }}
          >
            Layout: {theme.layout}
          </span>
          <span
            className="px-3 py-1 rounded-full text-sm font-medium"
            style={{
              backgroundColor: theme.colors.accent + "20",
              color: theme.colors.accent,
            }}
          >
            Font: {theme.fontFamily.replace("font-", "")}
          </span>
        </div>
      </motion.div>

      {/* Products Section */}
      <div className="mb-8">
        <h2
          className={`text-3xl font-bold mb-6 ${theme.fontFamily}`}
          style={{ color: theme.colors.text }}
        >
          Featured Products
        </h2>
        <p
          className="text-lg opacity-70 mb-8"
          style={{ color: theme.colors.text }}
        >
          Discover our amazing collection of products, styled with the current{" "}
          {theme.name.toLowerCase()} theme.
        </p>
      </div>

      {/* Products Grid */}
      {products && (
        <div className={getGridClasses()}>
          {products.slice(0, 12).map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      )}

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center mt-16 p-8 rounded-lg"
        style={{ backgroundColor: theme.colors.surface }}
      >
        <h3
          className={`text-2xl font-bold mb-4 ${theme.fontFamily}`}
          style={{ color: theme.colors.text }}
        >
          Love this theme?
        </h3>
        <p
          className="text-lg opacity-80 mb-6"
          style={{ color: theme.colors.text }}
        >
          Try switching to other themes using the dropdown in the header to see
          how the entire layout transforms!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
            style={{
              backgroundColor: theme.colors.primary,
              color: "white",
            }}
          >
            View All Products
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-secondary"
            style={{
              backgroundColor: theme.colors.accent,
              color: "white",
            }}
          >
            Learn More
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
