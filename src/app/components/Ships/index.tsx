'use client';

import styles from './ships.module.scss';
import ToggleDisplayShips from '@/app/components/ToggleDisplayShips';
import { useQuery } from '@apollo/client';
import { GET_ALL_SHIPS } from '@/app/utils/queries';
import { useEffect, useState } from 'react';
import ShipNations from '@/app/components/ShipNations';


let count = 0;

export default function Ships() {
  const { data, loading, error } = useQuery(GET_ALL_SHIPS);
  const [shipsByNation, setShipsByNation] = useState<Nation[]>([]);

  useEffect(() => {
    if (data) {
      const ships = data.vehicles.reduce((acc: Nation[], ship: Ship) => {
        const nationName = ship.nation.name;
        const typeName = ship.type.name;

        let nationObj = acc.find(n => n.name === nationName);
        if (!nationObj) {
          nationObj = {
            name: nationName,
            title: ship.nation.title,
            icons: ship.nation.icons,
            types: [],
          };
          acc.push(nationObj);
        }


        let typeObj = nationObj.types.find(t => t.name === typeName);
        if (!typeObj) {
          typeObj = {
            name: typeName,
            icons: ship.type.icons,
            ships: [],
          };
          nationObj.types.push(typeObj);
        }

        typeObj.ships.push(ship);

        return acc;
      }, []);

      setShipsByNation(ships);
    }
  }, [data]);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <section className={styles.ships}>
      <ToggleDisplayShips parentBlockClasses={styles.ships__toggleView}/>
      <section className={styles.shipsList}>
        {shipsByNation.map(nation => (
          <ShipNations key={nation.name} nation={nation} styles={styles}/>
        ))}
      </section>
    </section>
  );
}