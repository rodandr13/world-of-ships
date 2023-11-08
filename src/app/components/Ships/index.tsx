'use client';

import styles from './ships.module.scss';
import ToggleDisplayShips from '@/app/components/ToggleDisplayShips';
import { useQuery } from '@apollo/client';
import { GET_ALL_SHIPS } from '@/app/utils/queries';
import { useEffect, useState } from 'react';
import ShipNations from '@/app/components/ShipNations';

type Props = {
  setNationOptions: React.Dispatch<React.SetStateAction<NationOption[]>>;
  setTypeOptions: React.Dispatch<React.SetStateAction<TypeOption[]>>;
  setLevelOptions: React.Dispatch<React.SetStateAction<number[]>>;
  selectedLevels: number[],
  selectedTypes: string[],
  selectedNations: string[],
};

export default function Ships({ setNationOptions, setTypeOptions, setLevelOptions, selectedLevels, selectedTypes, selectedNations }: Props) {
  const { data, loading, error } = useQuery(GET_ALL_SHIPS);
  const [shipsByNation, setShipsByNation] = useState<Nation[]>([]);
  const [filteredShips, setFilteredShips] = useState<Nation[]>([]);

  function filterShips(ships: Nation[], selectedValues: any) {


    return ships
      .filter(nation => selectedValues.nations.length === 0 || selectedValues.nations.includes(nation.name))
      .map(nation => ({
        ...nation,
        types: nation.types
          .filter(type => selectedValues.types.length === 0 || selectedValues.types.includes(type.name))
          .map(type => ({
            ...type,
            ships: type.ships
              .filter(ship => selectedValues.levels.length === 0 || selectedValues.levels.includes(ship.level)),
          })),
      }));
  }

  useEffect(() => {
    console.log(selectedLevels);
    setFilteredShips(filterShips(shipsByNation, { 'levels': selectedLevels, 'nations': selectedNations, 'types': selectedTypes }));
  }, [selectedLevels, selectedTypes, selectedNations]);

  useEffect(() => {
    if (data) {
      let nationFilters: NationOption[] = [];
      let typeFilters: TypeOption[] = [];
      let levelFilters: number[] = [];

      const ships = data.vehicles.reduce((acc: Nation[], ship: Ship) => {
        const nationName = ship.nation.name;
        const typeName = ship.type.name;
        if (!nationFilters.some(nation => nation.name === ship.nation.name)) {
          nationFilters.push({
            name: ship.nation.name,
            icon: ship.nation.icons.small,
          });
        }
        if (!typeFilters.some(type => type.name === ship.type.name)) {
          typeFilters.push({
            name: ship.type.name,
            icon: ship.type.icons.default,
          });
        }
        if (!levelFilters.includes(ship.level)) {
          levelFilters.push(ship.level);
        }
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

      levelFilters.sort((a, b) => a - b);

      setNationOptions(nationFilters);
      setTypeOptions(typeFilters);
      setLevelOptions(levelFilters);
      setShipsByNation(ships);
    }
  }, [data]);
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log(filteredShips);

  return (
    <section className={styles.ships}>
      <ToggleDisplayShips parentBlockClasses={styles.ships__toggleView}/>
      <section className={styles.shipsList}>
        {filteredShips.map(nation => (
          nation.types.some(type => type.ships.length > 0) &&
          <ShipNations key={nation.name} nation={nation} styles={styles}/>
        ))}
      </section>
    </section>
  );
}