import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          '0': 'var(--color-neutral-0)',
          '5': 'var(--color-neutral-5)',
          '10': 'var(--color-neutral-10)',
          '20': 'var(--color-neutral-20)',
          '30': 'var(--color-neutral-30)',
          '40': 'var(--color-neutral-40)',
          '50': 'var(--color-neutral-50)',
          '60': 'var(--color-neutral-60)',
          '70': 'var(--color-neutral-70)',
          '80': 'var(--color-neutral-80)',
          '85': 'var(--color-neutral-85)',
          '90': 'var(--color-neutral-90)',
          '100': 'var(--color-neutral-100)',
        },
        yellow: {
          '5': 'var(--color-yellow-5)',
          '10': 'var(--color-yellow-10)',
          '20': 'var(--color-yellow-20)',
          '30': 'var(--color-yellow-30)',
          '40': 'var(--color-yellow-40)',
          '50': 'var(--color-yellow-50)',
          '60': 'var(--color-yellow-60)',
          '70': 'var(--color-yellow-70)',
          '80': 'var(--color-yellow-80)',
          '90': 'var(--color-yellow-90)',
        },

        blue: {
          '5': 'var(--color-blue-5)',
          '10': 'var(--color-blue-10)',
          '20': 'var(--color-blue-20)',
          '30': 'var(--color-blue-30)',
          '40': 'var(--color-blue-40)',
          '50': 'var(--color-blue-50)',
          '60': 'var(--color-blue-60)',
          '70': 'var(--color-blue-70)',
          '80': 'var(--color-blue-80)',
          '90': 'var(--color-blue-90)',
        },
        vioelt: {
          '5': 'var(--color-vioelt-5)',
          '10': 'var(--color-vioelt-10)',
          '20': 'var(--color-vioelt-20)',
          '30': 'var(--color-vioelt-30)',
          '40': 'var(--color-vioelt-40)',
          '50': 'var(--color-vioelt-50)',
          '60': 'var(--color-vioelt-60)',
          '70': 'var(--color-vioelt-70)',
          '80': 'var(--color-vioelt-80)',
          '90': 'var(--color-vioelt-90)',
        },
        green: {
          '5': 'var(--color-green-5)',
          '10': 'var(--color-green-10)',
          '20': 'var(--color-green-20)',
          '30': 'var(--color-green-30)',
          '40': 'var(--color-green-40)',
          '50': 'var(--color-green-50)',
          '60': 'var(--color-green-60)',
          '70': 'var(--color-green-70)',
          '80': 'var(--color-green-80)',
          '90': 'var(--color-green-90)',
        },
        red: {
          '5': 'var(--color-red-5)',
          '10': 'var(--color-red-10)',
          '20': 'var(--color-red-20)',
          '30': 'var(--color-red-30)',
          '40': 'var(--color-red-40)',
          '50': 'var(--color-red-50)',
          '60': 'var(--color-red-60)',
          '70': 'var(--color-red-70)',
          '80': 'var(--color-red-80)',
          '90': 'var(--color-red-90)',
        },
      },
      fontFamily: {
        appleSdGothic: 'var(--font-appleSdGothic)',
      },
      fontWeight: {
        medium: '400',
        regular: '500',
        semibold: '600',
      },
    },
  },
  plugins: [],
} satisfies Config;
