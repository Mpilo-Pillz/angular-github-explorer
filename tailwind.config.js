/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
import forms from "@tailwindcss/forms";

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: colors.teal[500],
        secondary: colors.gray[600],
        danger: colors.red[500],
        warning: colors.yellow[500],
        success: colors.lime[500],
        info: colors.blue[500],
        lighter: colors.gray[200],
        darker: colors.gray[900],
        tertiary: colors.amber[500],
      },
    },
  },
  plugins: [],
};
