// tailwind.config.js
export = {
    content: [
      './components/**/*.{vue,js}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      './app.vue',
      './plugins/**/*.{js,ts}'
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
          }
        }
      },
    },
    plugins: [],
  }
  