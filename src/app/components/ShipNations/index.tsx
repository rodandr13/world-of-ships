import Image from 'next/image';
import ShipTypes from '@/app/components/ShipTypes';

type Props = {
  styles: Record<string, string>,
  nation: Nation,
};
export default function ShipNations({ styles, nation }: Props) {
  return (
    <article className={styles.shipsList__country}>
      <header className={styles.shipsList__countryHeader}>
        <Image className={styles.shipsList__countryImage} src={`https:${nation.icons.large}`}
               alt="Флаг Японии" width={222} height={134}/>
        <h2 className={styles.shipsList__countryTitle}>{nation.title}</h2>
      </header>
      {nation.types.map(type => (
        <ShipTypes styles={styles} key={type.name} type={type} />
      ))}
    </article>
  );
}