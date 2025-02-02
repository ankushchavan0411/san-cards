/** @format */

import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xs: "450px",
      // => @media (min-width: 450px) { ... }

      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      colors: {
        "background": "var(--background)",
        "foreground": "var(--foreground)",
        "primary": "#ba1313",
        "primary-100": "#f7d4d4",
        "primary-200": "#efaaaa",
        "primary-300": "#e77f7f",
        "primary-400": "#df5555",
        "primary-500": "#ba1313", // Base Color
        "primary-600": "#a10f0f",
        "primary-700": "#860b0b",
        "primary-800": "#6b0808" // Darkests
      },
    },
  },
  plugins: [],
} satisfies Config;
