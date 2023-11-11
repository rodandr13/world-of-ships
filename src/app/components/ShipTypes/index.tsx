import Image from 'next/image';
import Ship from '@/app/components/Ship';
import LazyLoadComponent from '@/app/components/LazyLoadComponent';
import { SHIP_TYPE_RU } from '@/app/utils/constans';

type Props = {
  styles: Record<string, string>,
  type: Type,
};

export default function ShipTypes({ styles, type }: Props) {
  return (
    <section className={styles.shipsList__class}>
      <header className={styles.shipsList__classHeader}>
        <Image className={styles.shipsList__classImage} src={`https:${type.icons.default}`}
               alt="Эсминцы" width={38} height={38}/>
        <h3 className={styles.shipsList__classTitle}>{SHIP_TYPE_RU[type.name]}</h3>
      </header>
      <ul className={styles.shipsList__ships}>
        {type.ships.map(ship => (
          <li key={ship.title} className={styles.shipsList__shipItem}>
            <LazyLoadComponent>
              <Ship ship={ship} />
            </LazyLoadComponent>
          </li>
        ))}
      </ul>
    </section>
  );
}