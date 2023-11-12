'use client';

import styles from './ships.module.scss';
import ShipNations from '@/app/components/ShipNations';
import { makeSelectFilteredShips } from '@/app/redux/selectors';
import { useShipsData } from '@/app/hooks/useShipsData';
import { useSelector } from 'react-redux';
import Preloader from '@/app/components/Preloader';
import Filters from '@/app/components/Filters';
const selectFilteredShips = makeSelectFilteredShips();

export default function Ships() {
  const { loading } = useShipsData();
  const filteredShips = useSelector(selectFilteredShips);

  if (loading) {
    return <Preloader />;
  }

  const hasShips = filteredShips.some(nation =>
    nation.types.some(type => type.ships.length > 0),
  );

  return (
    <>
      <Filters />
      <section className={styles.ships}>
        <section className={styles.shipsList}>
          {hasShips ? (
            filteredShips.map(nation => (
              nation.types.some(type => type.ships.length > 0) &&
              <ShipNations key={nation.name} nation={nation} styles={styles}/>
            ))
          ) : (
            <p className={styles.shipsList__noShipsMessage}>Нет кораблей с выбранными фильтрами.</p>
          )}
        </section>
      </section>
    </>
  );
}
