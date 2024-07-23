import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { card } from '../assets/types/types';

// Define a type for the slice state
export interface State {
  coffee: card[];
}

// Define the initial state using that type
const initialState: State = {
  coffee: [],
};

export const coffeeSlice = createSlice({
  name: 'coffee',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setCoffee: (state, action: PayloadAction<card[]>) => {
      state.coffee = action.payload;
    },
  },
});

export const { setCoffee } = coffeeSlice.actions;

export default coffeeSlice.reducer;
