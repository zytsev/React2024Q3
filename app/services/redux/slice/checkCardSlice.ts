import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { card } from '../../../assets/types/types';

export interface StateCheckCard {
  checkedCards: card[];
}

const initialState: StateCheckCard = {
  checkedCards: [],
};

export const checkedCardsSlice = createSlice({
  name: 'checkedCards',

  initialState,
  reducers: {
    setCheckedCards: (state, action: PayloadAction<card>) => {
      const id = action.payload.id;
      const i = state.checkedCards.findIndex((el) => el.id === id);

      if (i === -1) {
        state.checkedCards.push(action.payload);
      } else {
        state.checkedCards.splice(i, 1);
      }
    },
    clearAllCheckedCards: (state) => {
      state.checkedCards = [];
    },
  },
});

export const { setCheckedCards, clearAllCheckedCards } =
  checkedCardsSlice.actions;

export default checkedCardsSlice.reducer;
