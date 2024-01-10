/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "bg-white": "#ffffff",
        "text-black": "#1c201f",
        greeen1: "#28b860",
        green2: "#26a757",
      },
    },
  },
  plugins: [],
};
