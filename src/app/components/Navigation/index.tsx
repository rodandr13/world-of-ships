'use client';

import styles from './navigation.module.scss';
import Logo from '@/app/components/Logo';
import Button from '@/app/components/Button';
import HamburgerButton from '@/app/components/HamburgerButton';
import { useState } from 'react';
import clsx from 'clsx';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={styles.navigation}>
      <Logo />
      <ul className={clsx(styles.menu, styles.menu_type_mobile, isOpen && styles.menu_open)}>
        <li className={styles.menu__item}><a className={styles.menu__link} href="https://korabli.su/ru/news/">Новости</a></li>
        <li className={styles.menu__item}><a className={styles.menu__link} href="https://korabli.su/ru/content/game/">Игра</a></li>
        <li className={styles.menu__item}><a className={styles.menu__link} href="https://korabli.su/ru/content/education/">Обучение</a></li>
        <li className={styles.menu__item}><a className={styles.menu__link} href="https://www.youtube.com/@korabli">Медиа</a></li>
        <li className={styles.menu__item}><a className={styles.menu__link} href="https://profile.korabli.su/">Игроки</a></li>
        <li className={styles.menu__item}><a className={styles.menu__link} href="https://forum.korabli.su/">Форум</a></li>
        <li className={styles.menu__item}><a className={styles.menu__link} href="https://friends.korabli.su/">Морское братство</a></li>
      </ul>
      <Button type="button" title="Играй бесплатно" parentBlockClasses={styles.navigation__button} style="download" />
      <HamburgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
      {isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
    </nav>
  );
}