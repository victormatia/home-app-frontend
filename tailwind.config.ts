/* eslint-disable linebreak-style */
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        app: '#EBEBEB',
        placeholder: '#878787',
        info: '#404040',
        buttonText: '#4A4A4A',
        borderColor: '#949494',
        darkGray: '#2B2B2B',
        blue: '#367ADF',
      },

      backgroundImage: {
        paymentButton: 'linear-gradient(107deg, #367ADF 13.1%, #36A5C8 68.23%);',
      },

      animation: {
        openfilter: 'openfilter 0.2s ease-in',
      },

      keyframes:{
        openfilter:{
          'from': {
            opacity: '0',
            transform: 'translateX(100vw)',
          },
          'to': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
