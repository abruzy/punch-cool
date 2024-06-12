/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        moveLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50px)' }
        },
        moveRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(50px)' }
        }
      },
      animation: {
        moveLeft: 'moveLeft 0.5s forwards',
        moveRight: 'moveRight 0.5s forwards'
      },
      colors: {
        primary: '#525AA0',
        secondary: '#202229',
        tertiary: '#F0F0F0',
        sunflower: '#FFBE2E',
        pearl: '#F8F8F8',
        foam: '#C9EFC4',
        mint: '#F2F2F2',
        steel: '#959595',
        pewter: '#EDEFFF',
        purpletint: '#AF7CFF',
        'grey-1': '#C6C4C4',
        'grey-2': '#ECECEC',
        'grey-3': '#D6D6D6',
        'grey-4': '#E8E8E8',
        'brown-1': '#1E1515CC',
        'light-blue': '#f4f5ff',
        'light-purple': '#50589F',
        'white-2': '#F3F3F3',
        'dark-2': '#292B34',
        'orange-2': '#fff8e0',
        'teal-blue': '#8BA4FD',
        'light-green': '#C7F4C2',
        seap: '#969fef'
      },
      boxShadow: {
        deep: '0px 15px 25px 0px #00000026',
        'deep-1': '0px 15px 30px 0px #BFB5FF26'
      }
    }
  },
  plugins: []
}
