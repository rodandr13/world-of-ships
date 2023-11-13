'use client';

import { useEffect, useState } from 'react';
import { setLevelOptions, setNationOptions, setTypeOptions } from '@/app/redux/features/filtersSlice';
import { setFilteredShips } from '@/app/redux/features/shipsSlice';
//import { useQuery } from '@apollo/client';
//import { GET_ALL_SHIPS } from '@/app/utils/queries';
import { useTypedDispatch } from '@/app/hooks/useTypedDispatch';
import test_data from '@/app/utils/test_data.json';


export function useShipsData() {
  //const { data, loading, error } = useQuery(GET_ALL_SHIPS);
  const dispatch = useTypedDispatch();
  const [loading, setLoading] = useState(true);
  const data = test_data.data;
  useEffect(() => {
    setTimeout(() => {
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
      setLoading(false);
    }, 3000);
  }, [data, dispatch]);

  return { ships: data, loading };
}