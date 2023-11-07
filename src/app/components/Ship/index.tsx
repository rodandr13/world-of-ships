import styles from '@/app/components/Ships/ships.module.scss';
import Image from 'next/image';
import { useRef } from 'react';

type Props = {
  ship: Ship,
};

export default function Ship({ ship } : Props) {
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
    <article className={styles.ship} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div ref={shipRef} className={styles.ship__wrapper} >
        <Image className={styles.ship__flag} src={`https:${ship.nation.icons.small}`} alt="" width={78}
               height={47}/>
        <div className={styles.ship__class}>
          <Image className={styles.ship__classImage} src={`https:${ship.type.icons.default}`}
                 alt={`Иконка: ${ship.type.title}`} width={30} height={30}/>
          <p className={styles.ship__classCaption}>{ship.type.title}</p>
        </div>
        <Image src={`https:${ship.icons.medium}`} alt="" width={280} height={165}/>
        <header className={styles.ship__header}>
          <span className={styles.ship__level}>{ship.level}</span>
          <h4 className={styles.ship__title}>{ship.title}</h4>
        </header>
        <div ref={descriptionRef} className={styles.ship__description}>
          <p className={styles.ship__descriptionParagraph}>
            {ship.description}
          </p>
        </div>
      </div>
    </article>
  );
}