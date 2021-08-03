import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: '',
};

export const paragraphSlice = createSlice({
  name: 'paragraph',
  initialState,
  reducers: {
    setText: (state,action) => {
      state.text = action.payload;
    },
  },

});

export const { setText } = paragraphSlice.actions;

export default paragraphSlice.reducer;

