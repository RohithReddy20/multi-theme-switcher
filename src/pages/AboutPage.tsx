import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";

export function AboutPage() {
  const { theme } = useTheme();

  const features = [
    {
      title: "Dynamic Theming",
      description:
        "Switch between three distinct themes with completely different layouts, fonts, and color schemes.",
      icon: "🎨",
    },
    {
      title: "Responsive Design",
      description:
        "Fully responsive design that works perfectly on desktop, tablet, and mobile devices.",
      icon: "📱",
    },
    {
      title: "Modern Technology",
      description:
        "Built with React, TypeScript, Tailwind CSS, and Framer Motion for smooth animations.",
      icon: "⚡",
    },
    {
      title: "API Integration",
      description:
        "Real-time data integration with the Fake Store API for dynamic product listings.",
      icon: "🔌",
    },
    {
      title: "LocalStorage Persistence",
      description:
        "Your theme preference is saved and persists across browser sessions.",
      icon: "💾",
    },
    {
      title: "Accessibility",
      description:
        "Built with accessibility in mind, including proper ARIA labels and keyboard navigation.",
      icon: "♿",
    },
  ];

  const teamMembers = [
    {
      name: "Chimpiri Rohith",
      role: "Sole Developer",
      description:
        "Passionate developer with expertise in React, TypeScript, and modern web technologies.",
      avatar: "👨‍💻",
    },
  ];

  const getCardClasses = () => {
    switch (theme.layout) {
      case "minimal":
        return "minimal-card bg-white";
      case "sidebar":
        return "dark-card";
      case "grid":
        return "grid-card";
      default:
        return "minimal-card bg-white";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="text-6xl mb-6">🚀</div>
        <h1
          className={`text-4xl md:text-6xl font-bold mb-6 ${theme.fontFamily}`}
          style={{ color: theme.colors.text }}
        >
          About ThemeSwitcher
        </h1>
        <p
          className="text-xl max-w-3xl mx-auto opacity-80"
          style={{ color: theme.colors.text }}
        >
          A revolutionary web application that demonstrates the power of dynamic
          theming. Experience how the same content can be transformed with
          completely different designs, layouts, and user experiences.
        </p>
      </motion.div>

      {/* Mission Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-16 p-8 rounded-lg"
        style={{ backgroundColor: theme.colors.surface }}
      >
        <h2
          className={`text-3xl font-bold mb-6 text-center ${theme.fontFamily}`}
          style={{ color: theme.colors.text }}
        >
          Our Mission
        </h2>
        <div className="max-w-4xl mx-auto">
          <p
            className="text-lg leading-relaxed opacity-90 mb-6"
            style={{ color: theme.colors.text }}
          >
            We believe that great design should be flexible, accessible, and
            delightful. ThemeSwitcher was created to showcase how modern web
            technologies can be used to create truly dynamic user experiences.
          </p>
          <p
            className="text-lg leading-relaxed opacity-90"
            style={{ color: theme.colors.text }}
          >
            Our goal is to demonstrate that a single application can serve
            multiple audiences with different design preferences while
            maintaining functionality, performance, and accessibility standards.
          </p>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`text-3xl font-bold mb-12 text-center ${theme.fontFamily}`}
          style={{ color: theme.colors.text }}
        >
          Key Features
        </motion.h2>

        <div
          className={
            theme.layout === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : theme.layout === "sidebar"
              ? "space-y-6"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          }
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: theme.layout === "grid" ? 1.05 : 1.02 }}
              className={getCardClasses()}
              style={{
                backgroundColor: theme.colors.surface,
                borderColor:
                  theme.layout === "minimal"
                    ? theme.colors.secondary + "30"
                    : "transparent",
              }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3
                  className={`text-xl font-bold mb-3 ${theme.fontFamily}`}
                  style={{ color: theme.colors.text }}
                >
                  {feature.title}
                </h3>
                <p className="opacity-80" style={{ color: theme.colors.text }}>
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className={`text-3xl font-bold mb-12 text-center ${theme.fontFamily}`}
          style={{ color: theme.colors.text }}
        >
          Meet Our Team
        </motion.h2>

        <div
          className={
            theme.layout === "sidebar"
              ? "space-y-8 mx-auto"
              : "grid grid-cols-1 mx-auto"
          }
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className={getCardClasses()}
              style={{
                backgroundColor: theme.colors.surface,
                borderColor:
                  theme.layout === "minimal"
                    ? theme.colors.secondary + "30"
                    : "transparent",
              }}
            >
              <div className="text-center">
                <div className="text-5xl mb-4">{member.avatar}</div>
                <h3
                  className={`text-xl font-bold mb-2 ${theme.fontFamily}`}
                  style={{ color: theme.colors.text }}
                >
                  {member.name}
                </h3>
                <p
                  className="font-medium mb-3"
                  style={{ color: theme.colors.primary }}
                >
                  {member.role}
                </p>
                <p
                  className="text-sm opacity-80"
                  style={{ color: theme.colors.text }}
                >
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technology Stack */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="text-center p-8 rounded-lg"
        style={{ backgroundColor: theme.colors.surface }}
      >
        <h2
          className={`text-3xl font-bold mb-6 ${theme.fontFamily}`}
          style={{ color: theme.colors.text }}
        >
          Built With Modern Technology
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {[
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Framer Motion",
            "Vite",
            "React Router",
          ].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full font-medium"
              style={{
                backgroundColor: theme.colors.primary + "20",
                color: theme.colors.primary,
              }}
            >
              {tech}
            </span>
          ))}
        </div>
        <p
          className="text-lg opacity-80 max-w-2xl mx-auto"
          style={{ color: theme.colors.text }}
        >
          This project showcases the latest web development technologies and
          best practices, including responsive design, accessibility, and
          performance optimization.
        </p>
      </motion.section>
    </div>
  );
}
