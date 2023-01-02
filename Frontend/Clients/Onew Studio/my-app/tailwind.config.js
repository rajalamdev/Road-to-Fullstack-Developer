/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "navbar-primary": "var(--navbar-primary)",
        "bg-primary": "var(--bg-primary)",
        "header-primary": "var(--header-primary)",
        "header-secondary": "var(--header-secondary)",
        "text-primary": "var(--text-primary)",
        "link": "var(--link)",
        "link-hover": "var(--link-hover)",
        "sidebar": "var(--sidebar)",
        "bg-gray": "var(--bg-gray)"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },
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
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  plugins: [
]
}