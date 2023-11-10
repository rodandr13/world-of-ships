'use client';

import { ApolloProvider } from '@apollo/client';
import { create } from '@/app/utils/apolloClient';
import styles from './page.module.scss';
import MainBanner from '@/app/components/MainBanner';
import Ships from '@/app/components/Ships';
import Filters from '@/app/components/Filters';

const apolloClient = create();

export default function Home() {
  console.log('Render PAGE');

  return (
    <ApolloProvider client={apolloClient}>
      <MainBanner />
      <main className={styles.page}>
        <Filters />
        <Ships />
      </main>
    </ApolloProvider>
  );
}
