// tailwind.config.js
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        light: '#ECDFCC',
        secondary: '#E49BA6',
        primary: '#007F73',
        dark: '#540863',
        extraDark: '#000',
        bgDark: '#222831',
        bgLight: '#ECDFCC',
        textLight: '#181C14',
        textDark: '#ECDFCC'
      }
    }
  },
  plugins: []
}
