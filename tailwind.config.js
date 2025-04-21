/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}',       // For the App Router
      './components/**/*.{js,ts,jsx,tsx}', // If you're using a components folder
    ],
    theme: {
      extend: {
        fontFamily: {
          montserrat: ['var(--font-montserrat)'], // 👈 This connects the Google font
        },
      },
    },
    plugins: [],
  }
  