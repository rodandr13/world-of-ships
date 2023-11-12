import styles from './preloader.module.scss';
import Image from 'next/image';
export default function Preloader() {
  return (
    <div className={styles.center}>
      <div className={styles.preloader}>
        <Image className={styles.preloader__image} src="/images/anchor_icon.svg" alt="" width={116} height={137} />
      </div>
    </div>
  );
}