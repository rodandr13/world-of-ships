import { configureStore } from '@reduxjs/toolkit';
import shipsReducer from './features/shipsSlice';
import filterReducer from './features/filtersSlice';

export const store = configureStore({
  reducer: {
    ships: shipsReducer,
    filters: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;