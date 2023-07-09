import { configureStore } from '@reduxjs/toolkit';
import Cart from './Reducers/Cart';

export const store = configureStore({
  reducer: {
    Cart,
  }
});

export type RootState = ReturnType<typeof store.getState>;