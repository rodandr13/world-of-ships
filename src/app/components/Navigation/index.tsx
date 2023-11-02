import styles from './navigation.module.scss';
import Logo from '@/app/components/Logo';

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <Logo />
      <ul className={styles.menu}>
        <li className={styles.menu__item}><a className={styles.menu__link} href="">Новости</a></li>
        <li className={styles.menu__item}><a className={styles.menu__link} href="">Игра</a></li>
        <li className={styles.menu__item}><a className={styles.menu__link} href="">Обучение</a></li>
        <li className={styles.menu__item}><a className={styles.menu__link} href="">Медиа</a></li>
        <li className={styles.menu__item}><a className={styles.menu__link} href="">Игроки</a></li>
        <li className={styles.menu__item}><a className={styles.menu__link} href="">Форум</a></li>
        <li className={styles.menu__item}><a className={styles.menu__link} href="">Морское братство</a></li>
      </ul>
      <button type="button" className={`${styles.button} ${styles.navigation__button} ${styles.button_type_download}`}>Играй бесплатно</button>
    </nav>
  );
}