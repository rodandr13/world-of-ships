import styles from './footer.module.scss';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <Image src="/images/lesta_logo.svg" alt="Lesta logo" width={172} height={24} />
        <nav className={styles.footer__navigation}>
          <ul className={styles.footer__menu}>
            <li><a href="">Политика конфиденциальности </a></li>
            <li><a href="">Лицензионное соглашение</a></li>
            <li><a href="">Партнеры</a></li>
          </ul>
        </nav>
        <div className={styles.footer__copyright}>
          <p className={styles.footer__text}>© Lesta Games, 2022–2023.</p>
          <p className={styles.footer__text}>Игра «Мир кораблей» основана на интеллектуальной собственности третьих лиц. Все права на объекты прав третьих лиц принадлежат их законным правообладателям.</p>
        </div>
      </div>
    </footer>
  );
}