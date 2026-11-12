/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class', // Sincroniza el modo oscuro mediante clases HTML
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
        colors: {
            // Paleta verde esmeralda inspirada en cubarentacaronline.com
            primary: {
            50: '#f0fdf4',
            100: '#dcfce7',
            500: '#10b981',
            600: '#059669',
            700: '#047857',
            }
        }
        },
    },
    plugins: [],
  darkMode: 'class', // Sincroniza el modo oscuro mediante clases HTML
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}' // Añade PrimeVue a los contenidos
  ],
  theme: { extend: {} },
  plugins: [require('tailwind-primeui-preset-aura')]
}