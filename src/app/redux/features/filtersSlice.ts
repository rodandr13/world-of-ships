import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface FiltersState {
  nationOptions: NationOption[];
  typeOptions: TypeOption[];
  levelOptions: number[];
  selectedNations: string[];
  selectedTypes: string[];
  selectedLevels: number[];
}

const initialState: FiltersState = {
  nationOptions: [],
  typeOptions: [],
  levelOptions: [],
  selectedNations: [],
  selectedTypes: [],
  selectedLevels: [],
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setNationOptions: (state, action: PayloadAction<NationOption>) => {
      const option = action.payload;
      const isNationExist = state.nationOptions.some(nation => nation.name === option.name);
      if (!isNationExist) {
        state.nationOptions.push(option);
      }
    },
    setTypeOptions: (state, action: PayloadAction<TypeOption>) => {
      const option = action.payload;
      const isTypeExist = state.typeOptions.some(type => type.name === option.name);
      if (!isTypeExist) {
        state.typeOptions.push(option);
      }
    },
    setLevelOptions: (state, action: PayloadAction<number>) => {
      const option = action.payload;
      const isLevelExist = state.levelOptions.includes(option);
      if (!isLevelExist) {
        state.levelOptions.push(option);
        state.levelOptions.sort((a, b) => a - b);
      }
    },
    setSelectedNations: (state, action: PayloadAction<{ nation: string; isChecked: boolean }>) => {
      const { nation, isChecked } = action.payload;
      if (isChecked) {
        if (!state.selectedNations.includes(nation)) {
          state.selectedNations.push(nation);
        }
      } else {
        state.selectedNations = state.selectedNations.filter(n => n !== nation);
      }
    },
    setSelectedTypes: (state, action: PayloadAction<{ type: string; isChecked: boolean }>) => {
      const { type, isChecked } = action.payload;
      if (isChecked) {
        if (!state.selectedTypes.includes(type)) {
          state.selectedTypes.push(type);
        }
      } else {
        state.selectedTypes = state.selectedTypes.filter(l => l !== type);
      }
    },
    setSelectedLevels: (state, action: PayloadAction<{ level: number; isChecked: boolean }>) => {
      const { level, isChecked } = action.payload;
      if (isChecked) {
        if (!state.selectedLevels.includes(level)) {
          state.selectedLevels.push(level);
        }
      } else {
        state.selectedLevels = state.selectedLevels.filter(l => l !== level);
      }
    },
  },
});

export const {
  setNationOptions,
  setTypeOptions,
  setLevelOptions,
  setSelectedNations,
  setSelectedTypes,
  setSelectedLevels,
} = filtersSlice.actions;
export default filtersSlice.reducer;