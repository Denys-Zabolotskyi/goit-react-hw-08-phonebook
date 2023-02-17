import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeFilter(state, action) {
      return (state = action.payload);
    },
  },
});

// Экспортируем генераторы экшенов и редюсер
export const { changeFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
