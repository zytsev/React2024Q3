import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface State {
  searchParam: string;
}

const initialState: State = {
  searchParam: '',
};

export const searchParam = createSlice({
  name: 'searchParam',
  initialState,
  reducers: {
    setSearchParam: (state, action: PayloadAction<string>) => {
      state.searchParam = action.payload;
    },
  },
});

export const { setSearchParam } = searchParam.actions;

export default searchParam.reducer;
