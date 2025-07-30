import { motion } from "framer-motion";
import { useTheme } from "../hooks";
import type { Product } from "../types";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const { theme } = useTheme();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price);
  };

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + "..."
      : text;
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={i} style={{ color: theme.colors.accent }}>
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" style={{ color: theme.colors.accent }}>
          ☆
        </span>
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <span key={`empty-${i}`} style={{ color: theme.colors.secondary }}>
          ☆
        </span>
      );
    }

    return stars;
  };

  // Theme 1 - Minimalist Card
  if (theme.layout === "minimal") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="minimal-card bg-white"
        style={{ borderColor: theme.colors.secondary + "30" }}
      >
        <div className="aspect-square mb-4 overflow-hidden rounded-md">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="space-y-2">
          <h3
            className="font-semibold text-lg"
            style={{ color: theme.colors.text }}
          >
            {truncateText(product.title, 50)}
          </h3>
          <p
            className="text-sm opacity-70"
            style={{ color: theme.colors.text }}
          >
            {truncateText(product.description, 80)}
          </p>
          <div className="flex items-center space-x-2">
            <div className="flex">{renderStars(product.rating.rate)}</div>
            <span className="text-sm opacity-60">({product.rating.count})</span>
          </div>
          <div className="flex items-center justify-between">
            <span
              className="text-2xl font-bold"
              style={{ color: theme.colors.primary }}
            >
              {formatPrice(product.price)}
            </span>
            <button
              className="btn-secondary"
              style={{
                backgroundColor: theme.colors.primary,
                color: "white",
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  // Theme 2 - Dark Professional Card
  if (theme.layout === "sidebar") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        whileHover={{ scale: 1.02 }}
        className="dark-card"
        style={{
          backgroundColor: theme.colors.surface,
          borderColor: theme.colors.secondary + "30",
        }}
      >
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain hover:scale-110 transition-transform duration-500"
              />
            </div>
          </div>
          <div className="md:w-2/3 space-y-4">
            <div>
              <span
                className="text-xs px-2 py-1 rounded-full"
                style={{
                  backgroundColor: theme.colors.accent + "20",
                  color: theme.colors.accent,
                }}
              >
                {product.category}
              </span>
            </div>
            <h3
              className={`text-xl font-bold ${theme.fontFamily}`}
              style={{ color: theme.colors.text }}
            >
              {product.title}
            </h3>
            <p
              className="text-sm leading-relaxed opacity-80"
              style={{ color: theme.colors.text }}
            >
              {product.description}
            </p>
            <div className="flex items-center space-x-3">
              <div className="flex">{renderStars(product.rating.rate)}</div>
              <span
                className="text-sm"
                style={{ color: theme.colors.secondary }}
              >
                {product.rating.rate} ({product.rating.count} reviews)
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span
                className="text-3xl font-bold"
                style={{ color: theme.colors.primary }}
              >
                {formatPrice(product.price)}
              </span>
              <button
                className="btn-primary"
                style={{
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.bg,
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Theme 3 - Colorful Grid Card
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ y: -8, rotate: 1 }}
      className="grid-card"
      style={{
        backgroundColor: theme.colors.surface,
        boxShadow: `0 8px 32px ${theme.colors.primary}20`,
      }}
    >
      <div className="relative">
        <div className="aspect-square mb-4 overflow-hidden rounded-xl">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
          />
        </div>
        <div
          className="absolute top-2 right-2 px-2 py-1 rounded-full text-xs font-bold"
          style={{
            backgroundColor: theme.colors.accent,
            color: "white",
          }}
        >
          {product.category}
        </div>
      </div>

      <div className="space-y-3">
        <h3
          className={`text-lg font-bold ${theme.fontFamily}`}
          style={{ color: theme.colors.text }}
        >
          {truncateText(product.title, 45)}
        </h3>
        <p className="text-sm opacity-80" style={{ color: theme.colors.text }}>
          {truncateText(product.description, 100)}
        </p>
        <div className="flex items-center justify-center space-x-2">
          <div className="flex">{renderStars(product.rating.rate)}</div>
          <span className="text-sm font-medium">({product.rating.count})</span>
        </div>
        <div className="text-center space-y-3">
          <div
            className="text-3xl font-bold"
            style={{ color: theme.colors.primary }}
          >
            {formatPrice(product.price)}
          </div>
          <button
            className="w-full btn-primary"
            style={{
              backgroundColor: theme.colors.secondary,
              color: "white",
            }}
          >
            🛒 Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}
