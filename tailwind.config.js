/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "public/**/*.{html,svg}"
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '24': 'repeat(24,minmax(0,1fr))',
      },
      gridColumnStart: {
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
        '25': '25',
      },
      gridColumnEnd: {
        '12': '12',
        '13': '13',
        '14': '14',
        '15': '15',
        '16': '16',
        '17': '17',
        '18': '18',
        '19': '19',
        '20': '20',
        '21': '21',
        '22': '22',
        '23': '23',
        '24': '24',
        '25': '25',
      },
      transformOrigin: {
        '50': '50% 0%',
        'center': '50% 50%'
      }
    },
    colors: {
      transparent: 'transparent',
      current: "currentColor",
      'black': '#000000',
      'white': '#ffffff',
      'red': '#ff0000',
      'pink': '#FF66FF',
      'background': '#f2e8de',
      'background-dark': '#1f1f1f',
      'primary': '#1f1f1f',
      'primary-dark': '#f2e8de',
      'secondary': '#4f26e9',
      'secondary-dark': '#4f26e9',
      'tertiary': '#4f26e9',
      'tertiary-dark': '#d9f24f',
      'inverted': '#f2e8de',
      'inverted-dark': '#1f1f1f'
    },
    fontFamily: {
      FivoSansModern: ["Fivo sans modern", "serif"],
      BeVietnam: ["Be vietnam", "sans-serif"],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      heavy: 800,
      black: 900,
      'extra-black': 1000,
    },
    screens: {
      sm: "500px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
}
