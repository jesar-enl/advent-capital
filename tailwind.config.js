// import type { Config } from 'tailwindcss';
/** @type {import('tailwindcss').Config}*/
import { nextui } from '@nextui-org/react';
import { withUt } from 'uploadthing/tw';
// import flowbite from 'flowbite/plugin';

export default withUt({
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite-react/lib/esm/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{ts,tsx,mdx}',
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
});
