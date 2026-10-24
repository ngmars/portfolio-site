/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Display"',
          '"SF Pro Text"',
          'Inter',
          'system-ui',
          'sans-serif',
        ],
      },
      colors: {
        // Brand accent — links and the primary button only.
        // `ink` is the darker variant for text on light surfaces.
        accent: {
          DEFAULT: '#35c19f',
          ink: '#0b7a5f',
        },
        // Text on light surfaces
        ink: {
          DEFAULT: '#1d1d1f',
          muted: '#6e6e73',
        },
        surface: {
          DEFAULT: '#000000',
          raised: '#161617',
          card: '#1d1d1f',
          light: '#f5f5f7',
        },
        // Secondary text on dark surfaces
        muted: '#86868b',
      },
      transitionTimingFunction: {
        apple: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
    },
  },
  plugins: [],
};
