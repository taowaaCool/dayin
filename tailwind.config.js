/** @type {import('tailwindcss').Config} */

import { blue, green, orange, red, yellow } from "@ant-design/colors";
// import typographyPlugin from "@tailwindcss/typographyPlugin";

function generateColorConfig(colorArray) {
  const colorConfig = {};

  colorArray.forEach((color, index) => {
    if (index === 0) {
      colorConfig["50"] = color;
    } else {
      colorConfig[index * 100] = color;
    }
  });

  colorConfig.DEFAULT = colorArray.primary;

  return colorConfig;
}

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: generateColorConfig(blue),
        red: generateColorConfig(red),
        orange: generateColorConfig(orange),
        yellow: generateColorConfig(yellow),
        green: generateColorConfig(green),
      },
    },
  },
  // plugins: [typographyPlugin],
};
