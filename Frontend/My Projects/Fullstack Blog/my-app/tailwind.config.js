/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
        "2xl": '1536px'
      },
      center: true,
      padding: {
        DEFAULT: '1rem',
        // sm: '2rem',
        // lg: '4rem',
        // xl: '5rem',
        // '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        'patrick': ['Patrick Hand', 'cursive']
      },
      colors: {
        'lightGray': 'var(--bg-lightGray)',
        'darkGray': 'var(--bg-darkGray)'
      },
    },
  },
}
