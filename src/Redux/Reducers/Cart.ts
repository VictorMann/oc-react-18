import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'Cart',
  initialState: {
    data: []
  },
  reducers: {
    setCart(state, action) {
      state.data = action.payload;
    }
  }
});

export const { setCart } = slice.actions;
export default slice.reducer;