import { Roboto_Condensed, Roboto } from 'next/font/google';

export const robotoCondensed = Roboto_Condensed({
  subsets: ['cyrillic'],
  display: 'swap',
  weight: ['200', '400', '500', '700'],
  variable: '--roboto-condensed',
});

export const roboto = Roboto({
  subsets: ['cyrillic'],
  display: 'swap',
  weight: ['400'],
  variable: '--roboto',
});