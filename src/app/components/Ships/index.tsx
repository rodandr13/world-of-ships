'use client';

import styles from './ships.module.scss';
import ShipNations from '@/app/components/ShipNations';
import { makeSelectFilteredShips } from '@/app/redux/selectors';
import { useShipsData } from '@/app/hooks/useShipsData';
import { useSelector } from 'react-redux';
const selectFilteredShips = makeSelectFilteredShips();

export default function Ships() {
  const { loading, error } = useShipsData();
  const filteredShips = useSelector(selectFilteredShips);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <section className={styles.ships}>
      <section className={styles.shipsList}>
        {filteredShips.map(nation => (
          nation.types.some(type => type.ships.length > 0) &&
          <ShipNations key={nation.name} nation={nation} styles={styles}/>
        ))}
      </section>
    </section>
  );
}