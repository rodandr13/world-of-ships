import styles from './navigation.module.scss';
import Logo from '@/app/components/Logo';
import Button from '@/app/components/Button';

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
      <Button type="button" title="Играй бесплатно" parentBlockClasses={styles.navigation__button} style="download" />
    </nav>
  );
}