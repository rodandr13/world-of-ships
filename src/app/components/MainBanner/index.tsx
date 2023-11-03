import styles from './mainBanner.module.scss';
import Image from 'next/image';

export default function MainBanner() {
  return (
   <section aria-label="Мир кораблей">
     <Image className={styles.mainBanner} src="/images/main_banner.svg" alt="Логотип Мир кораблей" width={448} height={245} />
   </section>
  );
}