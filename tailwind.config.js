/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      bgColor: "#0a0a0a",
      white: "#ffffff",
      orange: "#ff6f4f",
      green: "#029c54",
      ghostWhite: "#dac6fb",
      gray: "#8c8c8c",
      black:"#191f22"
    },

    extend: {
      scrollbar: {
        width: "thin", // or 'none' or 'auto'
        color: "#8c8c8c", // any valid CSS color value
      },
    },
  },
  plugins: [],
};

