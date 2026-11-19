import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./content/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "var(--color-brand)",
          hover: "var(--color-brand-hover)",
          subtle: "var(--color-brand-subtle)",
        },
        accent: "var(--color-accent)",
        ink: {
          DEFAULT: "var(--color-ink)",
          muted: "var(--color-ink-muted)",
          inverse: "var(--color-ink-inverse)",
        },
        surface: {
          DEFAULT: "var(--color-surface)",
          muted: "var(--color-surface-muted)",
          dark: "var(--color-surface-dark)",
        },
        border: "var(--color-border)",
        focus: "var(--color-focus)",
        error: "var(--color-error)",
        success: "var(--color-success)",
        rating: "var(--color-rating)",
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "Arial", "sans-serif"],
        display: ["var(--font-montserrat)", "Arial", "sans-serif"],
      },
      borderRadius: {
        card: "var(--radius-card)",
        button: "var(--radius-button)",
      },
      boxShadow: {
        card: "var(--shadow-card)",
        raised: "var(--shadow-raised)",
      },
      maxWidth: {
        content: "var(--width-content)",
        prose: "var(--width-prose)",
      },
    },
  },
};

export default config;
