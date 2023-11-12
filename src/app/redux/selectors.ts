import { createSelector } from '@reduxjs/toolkit';
import { RootState } from './store';

function filterShips(ships: Nation[], filters: FiltersState) {
  const selectedNations = filters.nationOptions.filter(nation => nation.isSelected).map(nation => nation.name);
  const selectedTypes = filters.typeOptions.filter(type => type.isSelected).map(type => type.name);
  const selectedLevels = filters.levelOptions.filter(level => level.isSelected).map(level => level.number);

  return ships
    .filter(nation => selectedNations.length === 0 || selectedNations.includes(nation.name))
    .map(nation => ({
      ...nation,
      types: nation.types
        .filter(type => selectedTypes.length === 0 || selectedTypes.includes(type.name))
        .map(type => ({
          ...type,
          ships: type.ships
            .filter(ship => selectedLevels.length === 0 || selectedLevels.includes(ship.level)),
        })),
    }));
}

export const makeSelectFilteredShips = () => {
  return createSelector(
    [(state: RootState) => state.ships.filteredList, (state: RootState) => state.filters],
    (filteredList, filters) => filterShips(filteredList, filters),
  );
};
