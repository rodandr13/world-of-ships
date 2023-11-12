import { createSlice } from '@reduxjs/toolkit';

export const shipsSlice = createSlice({
  name: 'ships',
  initialState: {
    filteredList: [],
  },
  reducers: {
    setFilteredShips: (state, action) => {
      state.filteredList = action.payload;
    },
  },
});

export const { setFilteredShips } = shipsSlice.actions;
export default shipsSlice.reducer;