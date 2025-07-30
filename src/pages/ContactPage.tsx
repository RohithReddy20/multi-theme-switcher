import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useTheme } from "../hooks/useTheme";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactPage() {
  const { theme } = useTheme();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    console.log("Form submitted:", data);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    reset();

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      details: "rohith18151821@gmail.com",
      description: "Send us an email anytime",
    },
    {
      icon: "📱",
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Mon-Fri from 9am to 5pm",
    },
    {
      icon: "📍",
      title: "Address",
      details: "123 Design Street, Web City, WC 12345",
      description: "Visit our headquarters",
    },
    {
      icon: "💬",
      title: "Social Media",
      details: "Chimpiri Rohith",
      description: "Follow us for updates",
    },
  ];

  const getFormClasses = () => {
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

  const getInputClasses = () => {
    return `w-full px-4 py-3 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 theme-transition`;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <div className="text-6xl mb-6">📞</div>
        <h1
          className={`text-4xl md:text-6xl font-bold mb-6 ${theme.fontFamily}`}
          style={{ color: theme.colors.text }}
        >
          Get In Touch
        </h1>
        <p
          className="text-xl max-w-3xl mx-auto opacity-80"
          style={{ color: theme.colors.text }}
        >
          Have questions about ThemeSwitcher? Want to collaborate or provide
          feedback? We'd love to hear from you!
        </p>
      </motion.div>

      <div
        className={
          theme.layout === "sidebar"
            ? "space-y-12"
            : "grid grid-cols-1 lg:grid-cols-2 gap-12"
        }
      >
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: theme.layout === "sidebar" ? 0 : -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className={getFormClasses()}
          style={{
            backgroundColor: theme.colors.surface,
            borderColor:
              theme.layout === "minimal"
                ? theme.colors.secondary + "30"
                : "transparent",
          }}
        >
          <h2
            className={`text-2xl font-bold mb-6 ${theme.fontFamily}`}
            style={{ color: theme.colors.text }}
          >
            Send us a message
          </h2>

          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-6 p-4 rounded-lg"
              style={{
                backgroundColor: theme.colors.accent + "20",
                color: theme.colors.accent,
              }}
            >
              <div className="flex items-center space-x-2">
                <span>✅</span>
                <span className="font-medium">Message sent successfully!</span>
              </div>
            </motion.div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-2"
                style={{ color: theme.colors.text }}
              >
                Full Name *
              </label>
              <input
                {...register("name", { required: "Name is required" })}
                type="text"
                id="name"
                className={getInputClasses()}
                style={{
                  backgroundColor: theme.colors.bg,
                  borderColor: errors.name
                    ? "#ef4444"
                    : theme.colors.secondary + "50",
                  color: theme.colors.text,
                }}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2"
                style={{ color: theme.colors.text }}
              >
                Email Address *
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                type="email"
                id="email"
                className={getInputClasses()}
                style={{
                  backgroundColor: theme.colors.bg,
                  borderColor: errors.email
                    ? "#ef4444"
                    : theme.colors.secondary + "50",
                  color: theme.colors.text,
                }}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium mb-2"
                style={{ color: theme.colors.text }}
              >
                Subject *
              </label>
              <input
                {...register("subject", { required: "Subject is required" })}
                type="text"
                id="subject"
                className={getInputClasses()}
                style={{
                  backgroundColor: theme.colors.bg,
                  borderColor: errors.subject
                    ? "#ef4444"
                    : theme.colors.secondary + "50",
                  color: theme.colors.text,
                }}
                placeholder="What's this about?"
              />
              {errors.subject && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.subject.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
                style={{ color: theme.colors.text }}
              >
                Message *
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                id="message"
                rows={6}
                className={getInputClasses()}
                style={{
                  backgroundColor: theme.colors.bg,
                  borderColor: errors.message
                    ? "#ef4444"
                    : theme.colors.secondary + "50",
                  color: theme.colors.text,
                  resize: "vertical",
                }}
                placeholder="Tell us more about your inquiry..."
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary"
              style={{
                backgroundColor: theme.colors.primary,
                color: "white",
                opacity: isSubmitting ? 0.7 : 1,
              }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: theme.layout === "sidebar" ? 0 : 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-8"
        >
          <div
            className={getFormClasses()}
            style={{
              backgroundColor: theme.colors.surface,
              borderColor:
                theme.layout === "minimal"
                  ? theme.colors.secondary + "30"
                  : "transparent",
            }}
          >
            <h2
              className={`text-2xl font-bold mb-6 ${theme.fontFamily}`}
              style={{ color: theme.colors.text }}
            >
              Contact Information
            </h2>
            <p className="opacity-80 mb-8" style={{ color: theme.colors.text }}>
              Reach out to us through any of these channels. We're here to help
              and answer any questions you might have.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="text-2xl">{info.icon}</div>
                  <div className="flex-1">
                    <h3
                      className="font-bold mb-1"
                      style={{ color: theme.colors.text }}
                    >
                      {info.title}
                    </h3>
                    <p
                      className="font-medium mb-1"
                      style={{ color: theme.colors.primary }}
                    >
                      {info.details}
                    </p>
                    <p
                      className="text-sm opacity-70"
                      style={{ color: theme.colors.text }}
                    >
                      {info.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div
            className={getFormClasses()}
            style={{
              backgroundColor: theme.colors.surface,
              borderColor:
                theme.layout === "minimal"
                  ? theme.colors.secondary + "30"
                  : "transparent",
            }}
          >
            <h3
              className={`text-xl font-bold mb-4 ${theme.fontFamily}`}
              style={{ color: theme.colors.text }}
            >
              Quick Questions?
            </h3>
            <div className="space-y-4">
              <div>
                <h4
                  className="font-medium mb-2"
                  style={{ color: theme.colors.primary }}
                >
                  How do I switch themes?
                </h4>
                <p
                  className="text-sm opacity-80"
                  style={{ color: theme.colors.text }}
                >
                  Use the dropdown menu in the header to select between the
                  three available themes.
                </p>
              </div>
              <div>
                <h4
                  className="font-medium mb-2"
                  style={{ color: theme.colors.primary }}
                >
                  Is my theme preference saved?
                </h4>
                <p
                  className="text-sm opacity-80"
                  style={{ color: theme.colors.text }}
                >
                  Yes! Your theme selection is automatically saved and will
                  persist when you return.
                </p>
              </div>
              <div>
                <h4
                  className="font-medium mb-2"
                  style={{ color: theme.colors.primary }}
                >
                  Can I use this code?
                </h4>
                <p
                  className="text-sm opacity-80"
                  style={{ color: theme.colors.text }}
                >
                  This is a demonstration project. Contact us for licensing
                  information.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
