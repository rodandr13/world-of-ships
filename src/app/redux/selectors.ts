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

export const makeSelectFilteredShips = () => {
  return createSelector(
    [(state: RootState) => state.ships.filteredList, (state: RootState) => state.filters],
    (filteredList, filters) => {
      const selectedValues = {
        nations: filters.selectedNations,
        types: filters.selectedTypes,
        levels: filters.selectedLevels,
      };
      return filterShips(filteredList, selectedValues);
    },
  );
};
