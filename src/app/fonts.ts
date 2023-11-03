import { Roboto_Condensed } from 'next/font/google';

export const robotoCondensed = Roboto_Condensed({
  subsets: ['cyrillic'],
  display: 'swap',
  weight: ['200', '400', '500', '700'],
  variable: '--roboto-condensed',
});