// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { card } from '../../../assets/types/types';

// Define a service using a base URL and expected endpoints
export const coffeeApi = createApi({
  reducerPath: 'coffeeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://66716cbfe083e62ee43b8e10.mockapi.io/',
  }),
  endpoints: (builder) => ({
    getAllCoffee: builder.query<card[], string>({
      query: (searchparam = '') =>
        `books${searchparam && `?search=${searchparam}`}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllCoffeeQuery } = coffeeApi;
