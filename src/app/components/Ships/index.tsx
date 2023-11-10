'use client';

import styles from './ships.module.scss';
import ToggleDisplayShips from '@/app/components/ToggleDisplayShips';
import ShipNations from '@/app/components/ShipNations';
import { useTypedSelector } from '@/app/hooks/useTypedSelector';
import { makeSelectFilteredShips, selectFilteredShips } from '@/app/redux/selectors';
import { useShipsData } from '@/app/hooks/useShipsData';
import { useSelector } from 'react-redux';

export default function Ships() {
  const { loading, error } = useShipsData();
  console.log('Render Ships');
  //const filteredShips = useTypedSelector(selectFilteredShips);
  const selectedValues = {
    nations: ['ussr'],
    types: [],
    levels: [1],
  };
  const selectFilteredShipsNew = makeSelectFilteredShips(selectedValues);
  const filteredShipsNew = useSelector(selectFilteredShipsNew);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <section className={styles.ships}>
      <ToggleDisplayShips parentBlockClasses={styles.ships__toggleView}/>
      <section className={styles.shipsList}>
        {filteredShipsNew.map(nation => (
          nation.types.some(type => type.ships.length > 0) &&
          <ShipNations key={nation.name} nation={nation} styles={styles}/>
        ))}
      </section>
    </section>
  );
}