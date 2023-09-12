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
      },
    },
  },
  plugins: [],
};
export default config;
