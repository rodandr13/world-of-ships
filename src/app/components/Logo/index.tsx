import styles from './logo.module.scss';
import Image from 'next/image';

export default function Logo() {
  return (
    <a href="#" className={styles.logo}>
      <Image className={styles.logo__image} src="/images/logo.svg" alt="Logo" width={30} height={37} />
    </a>
  );
}