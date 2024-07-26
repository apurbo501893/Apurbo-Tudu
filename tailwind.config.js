export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#0A192F",
        designColor: "#64ffda",
        lightText: "#ccd6f6",
        hoverColor: "rgba(100,255,218,0.1)",
      },
      fontFamily: {
        bodyFont: ["Montserrat", "sans-sarif"],
      },
    },
  },
  plugins: [],
};
