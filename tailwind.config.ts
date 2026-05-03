import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        shop: {
          "blue-900": "hsl(var(--shop-blue-900))",
          "blue-700": "hsl(var(--shop-blue-700))",
          "blue-600": "hsl(var(--shop-blue-600))",
          "blue-100": "hsl(var(--shop-blue-100))",
          "blue-50": "hsl(var(--shop-blue-50))",
          "red-700": "hsl(var(--shop-red-700))",
          "red-600": "hsl(var(--shop-red-600))",
          "red-500": "hsl(var(--shop-red-500))",
          "red-50": "hsl(var(--shop-red-50))",
          "amber-600": "hsl(var(--shop-amber-600))",
          "amber-500": "hsl(var(--shop-amber-500))",
          "amber-100": "hsl(var(--shop-amber-100))",
        },
        asphalt: {
          900: "hsl(var(--asphalt-900))",
          800: "hsl(var(--asphalt-800))",
          700: "hsl(var(--asphalt-700))",
        },
        steel: {
          500: "hsl(var(--steel-500))",
          300: "hsl(var(--steel-300))",
        },
        bone: { 50: "hsl(var(--bone-50))" },
        paper: { 100: "hsl(var(--paper-100))" },
        line: { 200: "hsl(var(--line-200))" },
        status: {
          "in-stock": "hsl(var(--in-stock-700))",
          backorder: "hsl(var(--backorder-600))",
          quote: "hsl(var(--quote-700))",
          discontinued: "hsl(var(--discontinued-600))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
