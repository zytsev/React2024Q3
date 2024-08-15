import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { user } from '../assets/types';

export interface StateUsers {
  users: user[];
}

const initialState: StateUsers = {
  users: [],
};

export const userSlice = createSlice({
  name: 'users',

  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<user>) => {
      state.users.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
