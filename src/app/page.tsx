'use client';

import { ApolloProvider } from '@apollo/client';
import { create } from '@/app/utils/apolloClient';
import styles from './page.module.scss';
import MainBanner from '@/app/components/MainBanner';
import Ships from '@/app/components/Ships';
import Filters from '@/app/components/Filters';
import { useState } from 'react';

const apolloClient = create();

export default function Home() {
  const [nationOptions, setNationOptions] = useState<NationOption[]>([]);
  const [typeOptions, setTypeOptions] = useState<TypeOption[]>([]);
  const [levelOptions, setLevelOptions] = useState<number[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<number[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedNations, setSelectedNations] = useState<string[]>([]);
  return (
    <ApolloProvider client={apolloClient}>
      <MainBanner />
      <main className={styles.page}>
        <Filters nationOptions={nationOptions} typeOptions={typeOptions} levelOptions={levelOptions} setSelectedLevels={setSelectedLevels} setSelectedTypes={setSelectedTypes} setSelectedNations={setSelectedNations} />
        <Ships setNationOptions={setNationOptions} setTypeOptions={setTypeOptions} setLevelOptions={setLevelOptions} selectedLevels={selectedLevels} selectedTypes={selectedTypes} selectedNations={selectedNations} />
      </main>
    </ApolloProvider>
  );
}
