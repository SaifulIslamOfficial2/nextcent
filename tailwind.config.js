/* eslint-disable no-undef */



/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/**/*.{js,jsx,ts,tsx}',  // Your source files
    './node_modules/flowbite/**/*.js',  // Include Flowbite files

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};
