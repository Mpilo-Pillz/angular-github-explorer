/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
import forms from "@tailwindcss/forms";

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: colors.teal[500],
        secondary: colors.gray[500],
        danger: colors.red[500],
        warning: colors.yellow[500],
      },
    },
  },
  plugins: [],
};
