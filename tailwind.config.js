/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: "#fff7fb",
          100: "#fdebf3",
          200: "#f8d7e3",
          300: "#f2aeca",
          500: "#ec4899"
        },
        lavender: {
          100: "#f3e8ff",
          200: "#e9d5ff",
          500: "#a855f7"
        },
        ink: "#111827",
        muted: "#6b7280"
      },
      boxShadow: {
        premium: "0 24px 70px rgba(17, 24, 39, 0.10)",
        glow: "0 20px 60px rgba(236, 72, 153, 0.20)"
      },
      backgroundImage: {
        "soft-radial": "radial-gradient(circle at 20% 20%, rgba(248, 215, 227, 0.50), transparent 28%), radial-gradient(circle at 80% 10%, rgba(233, 213, 255, 0.45), transparent 26%)"
      }
    }
  },
  plugins: []
};
