import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FiltersState {
  nationOptions: NationOption[];
  typeOptions: TypeOption[];
  levelOptions: LevelOption[];
}

const initialState: FiltersState = {
  nationOptions: [],
  typeOptions: [],
  levelOptions: [],
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
    setLevelOptions: (state, action: PayloadAction<LevelOption>) => {
      const option = action.payload;
      const isLevelExist = state.levelOptions.some(level => level.number === option.number);
      if (!isLevelExist) {
        state.levelOptions.push(option);
        state.levelOptions.sort((a, b) => a.number - b.number);
      }
    },
    toggleNationOption: (state, action: PayloadAction<string>) => {
      const nationName = action.payload;
      const nation = state.nationOptions.find(n => n.name === nationName);
      if (nation) {
        nation.isSelected = !nation.isSelected;
      }
    },
    toggleLevelOption: (state, action: PayloadAction<number>) => {
      const levelOption = action.payload;
      const level = state.levelOptions.find(l => l.number === levelOption);
      if (level) {
        level.isSelected = !level.isSelected;
      }
    },
    toggleTypeOption: (state, action: PayloadAction<string>) => {
      const typeName = action.payload;
      const type = state.typeOptions.find(t => t.name === typeName);
      if (type) {
        type.isSelected = !type.isSelected;
      }
    },
    resetFilters: (state) => {
      state.nationOptions.forEach(nation => nation.isSelected = false);
      state.typeOptions.forEach(type => type.isSelected = false);
      state.levelOptions.filter(level => level.isSelected = false);
    },
  },
});

export const {
  setNationOptions,
  setTypeOptions,
  setLevelOptions,
  resetFilters,
  toggleTypeOption,
  toggleLevelOption,
  toggleNationOption,
} = filtersSlice.actions;
export default filtersSlice.reducer;