import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { StateUser } from '../assets/types';

export interface Users {
  users: StateUser[];
}

const initialState: Users = {
  users: [],
};

export const userSlice = createSlice({
  name: 'users',

  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<StateUser>) => {
      state.users.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
