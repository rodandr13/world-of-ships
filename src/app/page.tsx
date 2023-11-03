import styles from './page.module.css';
import MainBanner from '@/app/components/MainBanner';
import Ships from '@/app/components/Ships';

export default function Home() {
  return (
    <>
      <MainBanner />
      <main className={styles.main}>
        <Ships />
      </main>
    </>
  );
}
