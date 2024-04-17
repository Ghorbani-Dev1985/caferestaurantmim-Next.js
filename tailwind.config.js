/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/UI/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
      container: {
              center: true,
              padding: {
                DEFAULT: '1rem',
                md: '0.625rem',
              }
      },
      colors:{
        primary: {
          50: 'rgb(250, 243, 235)',
          100:'rgb(239, 220, 195)',
          200: 'rgb(228, 197, 155)',
          300: 'rgb(217, 174, 115)',
          400: 'rgb(217, 174, 115)',
          500: 'rgb(206, 151, 75)',
          600: 'rgb(180, 126, 49)',
          700: 'rgb(140, 98, 38)',
          800: 'rgb(100, 70, 27)',
          900: 'rgb(100, 70, 27)',
          DEFAULT: "#c58c3d",
           },
           secondary: '#303030',
           success: 'rgb(0 , 192 , 115)',
           warning: 'rgb(255 , 153 , 0)',
           error: 'rgb(255,71 , 87)',
       },
       fontFamily: {
        ShabnamFD: ["Shabnam-FD" , "sans-serif"],
        Shabnam: ["Shabnam" , "sans-serif"],
      },
      backgroundImage: {
        'paternBg' : 'url("/Footer/footerPatern.png")',
         'Footer': 'linear-gradient(rgb(61,61,61), rgba(30,30,30,0.83)) , url("/Footer/footerPatern.png")'
    },
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
},
  plugins: [
    nextui({
     prefix: "crmim", 
     addCommonColors: true,
     themes: {
      light: {
        screens: {
          'xs': '480px',
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
        },
      }
     } 
  }),
  require("tailwind-scrollbar"),
  function ({ addVariant }) {
    addVariant("child", "& > *");
    addVariant("child-hover", "& > *:hover");
  },
]
};
