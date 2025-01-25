import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
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
        primary: {
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
        violet: {
          '5': 'var(--color-violet-5)',
          '10': 'var(--color-violet-10)',
          '20': 'var(--color-violet-20)',
          '30': 'var(--color-violet-30)',
          '40': 'var(--color-violet-40)',
          '50': 'var(--color-violet-50)',
          '60': 'var(--color-violet-60)',
          '70': 'var(--color-violet-70)',
          '80': 'var(--color-violet-80)',
          '90': 'var(--color-violet-90)',
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
      fontSize: {
        // Display
        'display-desktop': ['2.5rem', { lineHeight: '120%', fontWeight: '700' }],
        'display-mobile': ['1.5rem', { lineHeight: '120%', fontWeight: '700' }],

        // Heading
        'heading-medium-desktop': ['2.375rem', { lineHeight: '120%', fontWeight: '700' }],
        'heading-medium-mobile': ['1.125rem', { lineHeight: '120%', fontWeight: '700' }],
        'heading-small-desktop': ['2rem', { lineHeight: '120%', fontWeight: '700' }],
        'heading-small-mobile': ['1.125rem', { lineHeight: '120%', fontWeight: '700' }],

        // Title
        'title-large-desktop': ['1.75rem', { lineHeight: '120%', fontWeight: '700' }],
        'title-large-mobile': ['1.25rem', { lineHeight: '120%', fontWeight: '700' }],
        'title-medium-desktop': ['1.5rem', { lineHeight: '120%', fontWeight: '600' }],
        'title-medium-mobile': ['1.25rem', { lineHeight: '120%', fontWeight: '600' }],
        'title-small-desktop': ['1.125rem', { lineHeight: '120%', fontWeight: '600' }],
        'title-small-mobile': ['1.25rem', { lineHeight: '120%', fontWeight: '600' }],

        // Body
        'body-xxlarge-desktop': ['1.375rem', { lineHeight: '160%', fontWeight: '600' }],
        'body-xxlarge-mobile': ['0.9375rem', { lineHeight: '160%', fontWeight: '600' }],
        'body-xlarge-desktop': ['1.25rem', { lineHeight: '160%', fontWeight: '600' }],
        'body-xlarge-mobile': ['.9375rem', { lineHeight: '160%', fontWeight: '600' }],
        'body-large-desktop': ['1.125rem', { lineHeight: '160%', fontWeight: '600' }],
        'body-large-mobile': ['.9375rem', { lineHeight: '160%', fontWeight: '600' }],
        'body-medium-desktop': ['1rem', { lineHeight: '160%', fontWeight: '600' }],
        'body-medium-mobile': ['.8125rem', { lineHeight: '160%', fontWeight: '600' }],
        'body-small-desktop': ['.9375rem', { lineHeight: '160%', fontWeight: '600' }],
        'body-small-mobile': ['.6875rem', { lineHeight: '160%', fontWeight: '600' }],
        'body-xsmall-desktop': ['.875rem', { lineHeight: '160%', fontWeight: '600' }],
        'body-xsmall-mobile': ['.6875rem', { lineHeight: '160%', fontWeight: '600' }],

        // Label
        'label-large-desktop': ['1.125rem', { lineHeight: '160%', fontWeight: '600' }],
        'label-large-mobile': ['.75rem', { lineHeight: '160%', fontWeight: '600' }],
        'label-medium-desktop': ['1rem', { lineHeight: '160%', fontWeight: '600' }],
        'label-medium-mobile': ['.75rem', { lineHeight: '160%', fontWeight: '600' }],
        'label-small-desktop': ['.875rem', { lineHeight: '160%', fontWeight: '400' }],
        'label-small-mobile': ['.75rem', { lineHeight: '160%', fontWeight: '400' }],

        // Link
        'link-large-desktop': ['1.125rem', { lineHeight: '160%', fontWeight: '500' }],
        'link-large-mobile': ['.75rem', { lineHeight: '160%', fontWeight: '500' }],
        'link-medium-desktop': ['1rem', { lineHeight: '160%', fontWeight: '500' }],
        'link-medium-mobile': ['.75rem', { lineHeight: '160%', fontWeight: '500' }],
        'link-small-desktop': ['.875rem', { lineHeight: '160%', fontWeight: '500' }],
        'link-small-mobile': ['.75rem', { lineHeight: '160%', fontWeight: '500' }],
      },
      borderRadius: {
        '1': '2px',
        '2': '4px',
        '3': '6px',
        '4': '8px',
        '5': '12px',
        '6': '16px',
        '7': '20px',
        '8': '24px',
        '9': '32px',
        '10': '1000px',
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      spacing: {
        '0': '0px',
        '1': '2px',
        '2': '4px',
        '3': '8px',
        '4': '12px',
        '5': '16px',
        '6': '20px',
        '7': '24px',
        '8': '32px',
        '9': '40px',
        '10': '48px',
      },
      fontFamily: {
        apple: 'var(--font-apple), sans-serif',
        suit: 'var(--font-suit), sans-serif',
      },
      fontWeight: {
        medium: '400',
        regular: '500',
        semibold: '600',
        bold: '700',
      },
      strokeWidth: {
        normal: '1px',
        strong: '2px',
      },
      boxShadow: {
        '1': '0px 2px 4px rgba(20, 23, 28, 0.04), 0px 4px 16px rgba(20, 23, 28, 0.04), 0px 16px 30px rgba(20, 23, 28, 0.04)',
        '2': '0px 0px 20px rgba(80, 74, 60, 0.1)',
        '3': '0px 0px 20px rgba(80, 74, 60, 0.05)',
      },
      screens: {
        desktop: { min: '1280px' }, // Desktop: 1280px ~ 1920px
        tablet: { min: '768px', max: '1279.9px' }, // Tablet: 768px ~ 1279px
        mobile: { max: '767.9px' }, // Mobile: 360px ~ 767px
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
