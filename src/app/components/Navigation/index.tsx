'use client';

import styles from './navigation.module.scss';
import Logo from '@/app/components/Logo';
import Button from '@/app/components/Button';
import HamburgerButton from '@/app/components/HamburgerButton';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={styles.navigation}>
      <Logo />
      <ul className={`${styles.menu} ${styles.menu_type_mobile} ${isOpen ? styles.menu_open : ''}`}>
        <li className={styles.menu__item}><a className={styles.menu__link} href="">Новости</a></li>
        <li className={styles.menu__item}><a className={styles.menu__link} href="">Игра</a></li>
        <li className={styles.menu__item}><a className={styles.menu__link} href="">Обучение</a></li>
        <li className={styles.menu__item}><a className={styles.menu__link} href="">Медиа</a></li>
        <li className={styles.menu__item}><a className={styles.menu__link} href="">Игроки</a></li>
        <li className={styles.menu__item}><a className={styles.menu__link} href="">Форум</a></li>
        <li className={styles.menu__item}><a className={styles.menu__link} href="">Морское братство</a></li>
      </ul>
      <Button type="button" title="Играй бесплатно" parentBlockClasses={styles.navigation__button} style="download" />
      <HamburgerButton isOpen={isOpen} toggleMenu={toggleMenu} />
      {isOpen && <div className={styles.overlay} onClick={toggleMenu}></div>}
    </nav>
  );
}