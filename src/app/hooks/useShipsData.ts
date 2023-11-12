'use client';

import { useEffect } from 'react';
import { setLevelOptions, setNationOptions, setTypeOptions } from '@/app/redux/features/filtersSlice';
import { setFilteredShips } from '@/app/redux/features/shipsSlice';
import { useQuery } from '@apollo/client';
import { GET_ALL_SHIPS } from '@/app/utils/queries';
import { useTypedDispatch } from '@/app/hooks/useTypedDispatch';


export function useShipsData() {
  const { data, loading, error } = useQuery(GET_ALL_SHIPS);
  const dispatch = useTypedDispatch();
  useEffect(() => {
    if (data) {
      const ships = data.vehicles.reduce((acc: Nation[], ship: Ship) => {
        const nationName = ship.nation.name;
        const typeName = ship.type.name;

        const nationOption = {
          name: ship.nation.name,
          icon: ship.nation.icons.small,
          isSelected: false,
        };
        dispatch(setNationOptions(nationOption));

        const typeOption = {
          name: ship.type.name,
          icon: ship.type.icons.default,
          isSelected: false,
        };
        dispatch(setTypeOptions(typeOption));

        const levelOption = {
          number: ship.level,
          isSelected: false,
        };
        dispatch(setLevelOptions(levelOption));

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
      dispatch(setFilteredShips(ships));
    }

  }, [data, dispatch]);

  return { ships: data, loading, error };
}