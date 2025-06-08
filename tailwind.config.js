// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",
        hoverPrimary: "#4338CA",
        secondary: "#22D3EE",
        background: "#0F172A",
        textLight: "#F8FAFC",
      },
      fontFamily: {
        mono: ["'Fira Code'", "monospace"],
      },
    },
  },
  plugins: [],
};
