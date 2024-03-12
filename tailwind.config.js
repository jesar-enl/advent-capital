// import type { Config } from 'tailwindcss';
/** @type {import('tailwindcss').Config}*/
import { nextui } from '@nextui-org/react';
// import flowbite from 'flowbite/plugin';

const config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/lib/esm/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('/images/kampala.png')",
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui(), require('flowbite/plugin')],
};
export default config;
