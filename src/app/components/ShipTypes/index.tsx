import Image from 'next/image';
import Ship from '@/app/components/Ship';

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
        <h3 className={styles.shipsList__classTitle}>{type.name}</h3>
      </header>
      <ul className={styles.shipsList__ships}>
        {type.ships.map(ship => (
          <li key={ship.title} className={styles.shipList__shipItem}>
            <Ship ship={ship} />
          </li>
        ))}
      </ul>
    </section>
  );
}