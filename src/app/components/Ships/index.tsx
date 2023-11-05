'use client';

import styles from './ships.module.scss';
import Image from 'next/image';
import { useRef } from 'react';
import ToggleDisplayShips from '@/app/components/ToggleDisplayShips';


export default function Ships() {
  const shipRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  function handleMouseEnter() {
    const currentShipWrapper = shipRef.current;
    const currentDescription = descriptionRef.current;
    if (currentShipWrapper && currentDescription) {
      const hoverWrapperHeight = currentShipWrapper.offsetHeight + currentDescription.offsetHeight;
      currentShipWrapper.style.height = `${hoverWrapperHeight}px`;
    }
  }
  function handleMouseLeave() {
    const currentShipWrapper = shipRef.current;
    if (currentShipWrapper) {
      currentShipWrapper.style.height = 'auto';
    }
  }

  return (
    <section className={styles.ships}>
      <ToggleDisplayShips parentBlockClasses={styles.ships__toggleView}/>
      <section className={styles.shipsList}>
        <article className={styles.shipsList__country}>
          <header className={styles.shipsList__countryHeader}>
            <Image className={styles.shipsList__countryImage} src="/images/japan_flag.png"
                   alt="Флаг Японии" width={222} height={134}/>
            <h2 className={styles.shipsList__countryTitle}>Япония</h2>
          </header>
          <section className={styles.shipsList__class}>
            <header className={styles.shipsList__classHeader}>
              <Image className={styles.shipsList__classImage} src="/images/destroyer_icon.png"
                     alt="Эсминцы" width={38} height={38} />
              <h3 className={styles.shipsList__classTitle}>Эсминцы</h3>
            </header>
            <ul className={styles.shipsList__ships}>
              <li className={styles.shipList__shipItem}>
                <article className={styles.ship} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                  <div ref={shipRef} className={styles.ship__wrapper} >
                    <Image className={styles.ship__flag} src="/images/japan_flag.png" alt="" width={78}
                           height={47}/>
                    <div className={styles.ship__class}>
                      <Image className={styles.ship__classImage} src="/images/destroyer_icon.png"
                             alt="Эсминец" width={30} height={30}/>
                      <p className={styles.ship__classCaption}>Подводная лодка</p>
                    </div>
                    <Image src="/images/ship.png" alt="" width={280} height={165}/>
                    <header className={styles.ship__header}>
                      <span className={styles.ship__level}>I</span>
                      <h4 className={styles.ship__title}>Wakatake</h4>
                    </header>
                    <div ref={descriptionRef} className={styles.ship__description}>
                      <p className={styles.ship__descriptionParagraph}>
                        Подводные крейсеры типа Otsu-gata были спроектированы для дальней разведки, в
                        том числе для совместных действий с надводными и подводными силами. Для этого
                        они были оборудованы катапультой и ангаром на один гидросамолёт.Подводные крейсеры типа Otsu-gata были спроектированы для дальней разведки, в
                        том числе для совместных действий с надводными и подводными силами. Для этого
                        они были оборудованы катапультой и ангаром на один гидросамолёт.
                      </p>
                    </div>
                  </div>
                </article>
              </li>
            </ul>
          </section>
        </article>
      </section>
    </section>
  );
}