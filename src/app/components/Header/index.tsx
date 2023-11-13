import styles from './header.module.scss';
import Navigation from '@/app/components/Navigation';

export default function Header() {
  return (
      <header className={styles.header}>
          <Navigation />
      </header>
  );
}