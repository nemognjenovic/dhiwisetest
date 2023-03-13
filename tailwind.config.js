module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray_600: "#676d7d",
        gray_601: "#6c757d",
        gray_400: "#b4b7bd",
        gray_900: "#161d31",
        bluegray_100: "#d0d2d6",
        black_900_1e: "#0000001e",
        bluegray_900: "#283046",
        bluegray_800: "#3b4253",
        deep_purple_A200_1e: "#7367f01e",
        gray_600_a3: "#6c757da3",
        bluegray_400: "#82868b",
        bluegray_200: "#babfc7",
        bluegray_200_1e: "#babfc71e",
        deep_purple_A200: "#7367f0",
        white_A700: "#ffffff",
        cyan_500: "#00cfe8",
      },
      fontFamily: { montserrat: "Montserrat" },
      boxShadow: { bs: "0px 4px  24px 0px #0000001e" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
