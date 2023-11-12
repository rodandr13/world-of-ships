'use client';

import React, { useState } from 'react';
import styles from './hamburgerButton.module.scss';


function HamburgerButton({ isOpen, toggleMenu }) {


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