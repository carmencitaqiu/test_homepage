module.exports = {
  content: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./components/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "13": "52px",
        "15": "60px",
        "21": "84px"
      },
      margin: {
        "90": "180px"
      },
      borderRadius: {
        "ssm": "10px",
        "sbase": "20px",
        "smd": "30px"
      },
      fontSize: {
        'ssm': '22px',
        'sbase': '26px',
        'sbase1': '28px',
        'sbase2': '35px',
        'smd': '40px',
        'sxl': '56px',
        '6.5xl': '68px'
      },
      boxShadow: {
        "scard": "0px 20px 250px rgba(9, 9, 10, 0.07)"
      },
      colors: {
        "white-1": "#f5f5f5",
        "white-2": "rgba(248,248,248,1)",
        "white-3": "rgba(250, 250, 250,1)",
        "white-4": "rgba(255, 255, 255,1)",
        "white-5": "#ccc",
        "gray-1": "rgba(50,59,75,1)",
        "gray-2": "rgba(93, 106, 131, 1)",
        "gray-3": "#fafbff",
        "gray-4": "#dfe2E6",
        "gray-5": "#efefef",
        "gray-6": "#e2eCf9",
        "blue-1": "#091270",
        "black-2": "#333333",
        "black-3": "#707070",
        "black-4": "rgba(0, 0, 0, 0.7)",
        "black-5": "#12191f",
        "green-1": "#326d4a",
        "red-1": "#A72062", //new
        "blue-new-1": "#062C81"
      },
      fontFamily: {
        'manrope': [
          'Manrope',
        ]
      },
      letterSpacing: {
        "stight": "0.02em"
      },
      lineHeight: {
        "s130": "130%",
        "s135": "135%",
        "s150": "150%",
        "s160": "160%",
        "srelaxed": "170%",
        "15": "60px"
      },
      height: {
        "15": "60px",
        "21": "84px",
        "17": "70px",
        "86": "344px"
      },
      minWidth: {
        "24": "96px"
      },
      transitionProperty: {
        "fontsize": "fontsize"
      },
      width: {
        "17": "70px",
        "50": "200px",
        "86": "344px"
      },
      zIndex: {
        "1": "1"
      },
      backgroundSize: {
        '100%': '100% 100%',
      },
      borderRadius: {
        '4xl': '32px'
      }
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen xl': {
            maxWidth: '1100px',
          },
        }
      })
    }
  ],
}