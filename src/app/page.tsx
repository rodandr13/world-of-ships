'use client';

import { ApolloProvider } from '@apollo/client';
import { create } from '@/app/utils/apolloClient';
import styles from './page.module.scss';
import MainBanner from '@/app/components/MainBanner';
import Ships from '@/app/components/Ships';
const apolloClient = create();
export default function Home() {

  return (
    <ApolloProvider client={apolloClient}>
      <MainBanner />
      <main className={styles.page}>
        <Ships />
      </main>
    </ApolloProvider>

  );
}
