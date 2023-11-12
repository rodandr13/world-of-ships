import type { Metadata } from 'next';
import './globals.css';
import { robotoCondensed, roboto } from './fonts';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import { ReduxProviders } from '@/app/redux/provider';

export const metadata: Metadata = {
  title: 'Мир Кораблей — бесплатная многопользовательская онлайн-игра в жанре аркадного симулятора',
  description: 'Окунитесь в мир реалистичных морских сражений! Вам предстоит управлять кораблями первой половины прошлого века: линкорами, крейсерами, эсминцами, авианосцами или подводными лодками. Объединяйтесь с другими игроками и добивайтесь главной цели — победы в битве.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="ru" className={`${robotoCondensed.variable} ${roboto.variable}`}>
      <body>
        <Header />
        <ReduxProviders>
          {children}
        </ReduxProviders>
        <Footer />
      </body>
    </html>
  );
}
