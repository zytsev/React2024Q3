import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import { countries } from '../assets/countries';
interface countrie {
  name: string;
  code: string;
}

export interface listcountries {
  listcountries: countrie[];
}

const initialState: listcountries = {
  listcountries: countries,
};

export const countrieSlice = createSlice({
  name: 'listcountries',

  initialState,
  reducers: {},
});

export default countrieSlice.reducer;
