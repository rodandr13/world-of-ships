import styles from './header.module.css';
import Navigation from '@/app/components/Navigation';

export default function Header() {
  return (
      <header className={styles.header}>
          <Navigation />
      </header>
  );
}