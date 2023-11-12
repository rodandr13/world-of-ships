import styles from './mainBanner.module.scss';
import Image from 'next/image';

export default function MainBanner() {
  return (
   <section className={styles.mainBanner} aria-label="Мир кораблей">
     <Image
       className={styles.mainBanner__image}
       src="/images/main_banner.svg"
       alt="Логотип Мир кораблей"
       layout="responsive"
       width={448}
       height={245}
     />
   </section>
  );
}