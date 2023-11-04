import styles from './page.module.scss';
import MainBanner from '@/app/components/MainBanner';
import Ships from '@/app/components/Ships';
import Filters from '@/app/components/Filters';

export default function Home() {
  return (
    <>
      <MainBanner />
      <main className={styles.page}>
        <Filters />
        <Ships />
      </main>
    </>
  );
}
