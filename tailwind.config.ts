import type {Config} from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'linear-gradient': 'linear-gradient(180deg, #47206F 0%, #2C1E6E 100%)',
        'linear-gradient2':
          'linear-gradient(90deg, #328DF9 30.21%, #C23DF9 100%)',
        'linear-gradient3':
          'linear-gradient(90deg, #8239FA 0.42%, #C23DF9 99.58%)',
        'linear-gradient4':
          'linear-gradient(270deg, #2925C6 0%, #01031C 53.12%)',
        'linear-gradient5':
          'linear-gradient(270deg, rgba(71, 32, 111, 0.60) 33.85%, rgba(44, 30, 110, 0.60) 100%)',
        'linear-gradient6':
          'linear-gradient(270deg, #47206F 33.85%, #2C1E6E 100%)',
      },
    },
    colors: {
      white: {
        DEFAULT: '#FFF',
      },
      black: {
        DEFAULT: '#000',
      },
      blue: {
        DEFAULT: '#117EFF',
        900: '#2925C6',
      },
      grey: {
        DEFAULT: '#01031C',
        800: '#848484',
        700: '#7A7A7A',
        500: '#BBBBBB',
      },
      transparent: 'transparent',
    },
  },
  plugins: [],
};
export default config;
