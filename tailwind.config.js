/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',        
    './src/**/*.{js,ts,jsx,tsx}',  
  ],
  theme: {
    extend: {
      colors: {
        'custom-yellow':'#ecfccb',
      },
      perspective:{
        1000:'1000px',
      },
      rotate:{
        180:'180deg',
      }
    },
  },
  plugins: [],
}
