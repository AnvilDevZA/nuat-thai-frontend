import type { Config } from "tailwindcss";

export default {
theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-chonburi)'],
        sans: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
  darkMode: "class",
} satisfies Config;
