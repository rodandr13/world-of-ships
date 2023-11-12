import Image from 'next/image';
import ShipTypes from '@/app/components/ShipTypes';
import { NATIONS_RU } from '@/app/utils/constans';

type Props = {
  styles: Record<string, string>,
  nation: Nation,
};
export default function ShipNations({ styles, nation }: Props) {
  return (
    <article className={styles.shipsList__country}>
      <header className={styles.shipsList__countryHeader}>
        <div className={styles.shipsList__countryImageContainer}>
          <Image
            className={styles.shipsList__countryImage}
            src={`https:${nation.icons.large}`}
            alt={`Флаг ${NATIONS_RU[nation.name]}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        </div>
        <h2 className={styles.shipsList__countryTitle}>{NATIONS_RU[nation.name]}</h2>
      </header>
      {nation.types.map(type => (
        type.ships.length > 0 &&
        <ShipTypes styles={styles} key={type.name} type={type} />
      ))}
    </article>
  );
}