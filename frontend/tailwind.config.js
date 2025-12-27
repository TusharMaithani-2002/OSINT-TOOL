// tailwind.config.js
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#4C763B',
        bgDark: '#89986D',
        text: '#043915',
        textDark: '#F6F0D7'
      }
    }
  },
  plugins: []
}
