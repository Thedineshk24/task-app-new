import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: '',
  stringText: '',
  firstString: '',
  skip:'',
  lastString: '',
  theWodrds: '',
  words:0,
};

export const paragraphSlice = createSlice({
  name: 'paragraph',
  initialState,
  reducers: {
    setText: (state,action) => {
     state.text = action.payload.split(" ");
     state.skip = state.text.slice(0,(state.text.length) - state.words).join(" ");
     state.firstString = state.skip.split(". ").reverse().join(".")+ '.';
     state.lastString = action.payload.split(" ").slice(-state.words).join(' ');
    },
    setSkipWordsNums: (state,action) => {
      state.words = action.payload;
    }
  },

});

export const { setText, setSkipWordsNums } = paragraphSlice.actions;

export default paragraphSlice.reducer;

