import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface State {
  idCheckedCard: number[];
}

const initialState: State = {
  idCheckedCard: [],
};

export const checkCardSlice = createSlice({
  name: 'checkCard',

  initialState,
  reducers: {
    setIdCheckedCard: (state, action: PayloadAction<{ id: number }>) => {
      const id = action.payload.id;
      const i = state.idCheckedCard.findIndex((el) => el === id);
      if (i === -1) {
        state.idCheckedCard.push(action.payload.id);
      } else {
        state.idCheckedCard.splice(i, 1);
      }
    },
    clearAllCheckedCard: (state) => {
      state.idCheckedCard = [];
    },
  },
});

export const { setIdCheckedCard, clearAllCheckedCard } = checkCardSlice.actions;

export default checkCardSlice.reducer;
