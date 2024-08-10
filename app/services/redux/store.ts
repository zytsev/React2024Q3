import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, useStore } from 'react-redux';
import searchReducer from './slice/searchParamSlice';
import checkCardReducer from './slice/checkCardSlice';
import { coffeeApi } from './coffeeApi/coffeeApi';
export const makeStore = () => {
  return configureStore({
    reducer: {
      searchParam: searchReducer,
      checkCard: checkCardReducer,
      [coffeeApi.reducerPath]: coffeeApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(coffeeApi.middleware),
  });
};
// Infer the `RootState` and `AppDispatch` types from the store itself
// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
export const useAppStore = useStore.withTypes<AppStore>();
