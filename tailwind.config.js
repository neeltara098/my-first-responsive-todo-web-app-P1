/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  
  theme: {
    extend: {
        screens: 
        { 
          'sm': '640px', 
          'md': '641px', 
          'lg': '1240px', 
        },
    },
  },
  plugins: [],
}

