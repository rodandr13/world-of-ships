import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

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

export const makeSelectFilteredShips = (selectedValues: any) => {
  return createSelector(
    [(state: RootState) => state.ships.filteredList],
    (filteredList) => filterShips(filteredList, selectedValues),
  );
};
