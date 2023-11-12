'use client';

import styles from './hamburgerButton.module.scss';

type Props = {
  isOpen: boolean,
  toggleMenu: () => void,
};

function HamburgerButton({ isOpen, toggleMenu } : Props) {


  return (
    <button
      className={`${styles.hamburger} ${isOpen ? styles.hamburger__button_type_close : styles.hamburger__button}`}
      aria-label="Меню"
      type="button"
      onClick={toggleMenu}
    >
      <span className={`${styles.hamburger__buttonLine}`} />
      <span className={`${styles.hamburger__buttonLine}`} />
      <span className={`${styles.hamburger__buttonLine}`} />
    </button>
  );
}

export default HamburgerButton;