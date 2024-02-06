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
      gridTemplateColumns: {
        gridHomeLayout: 'minmax(5rem, 5rem) 1fr'
      },

      colors: {
        grayBase: '#F5F5F5',
        grayIcon: '#878787',
        grayLegend: '#424242',
        grayTitle: '#202020',
        darkGray: '#2B2B2B',
        buttonText: '#4A4A4A',
        borderColor: '#949494',
        primaryBlue: '#367ADF',
        secondaryBlue: '#367ADF',
      },

      backgroundImage: {
        gradientBlue: 'linear-gradient(107deg, #367ADF 13.1%, #36A5C8 68.23%);',
        gradientTransparentToBlue: 'linear-gradient(294deg, #367ADF 25.9%, rgba(54, 165, 200, 0) 43.55%);',
        gradientBlack: ' linear-gradient(294deg, #000 25.9%, rgba(0, 0, 0, 0.00) 43.55%);',
        rSliderButtonGradient: 'linear-gradient(270deg, rgba(0, 0, 0, 0.46) -80%, rgba(0, 0, 0, 0.00) 100%);',
        lSliderButtonGradient: 'linear-gradient(90deg, rgba(0, 0, 0, 0.46) -80%, rgba(0, 0, 0, 0.00) 100%);',
        profileCardGradient: 'linear-gradient(270deg, rgba(255, 255, 255, 0.00) 44.8%, #FFF 100%);',
      },

      boxShadow: {
        default: '0px 4px 4px 0px rgba(0, 0, 0, 0.25);',
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
  plugins: [require('@tailwindcss/line-clamp')],
};
export default config;
