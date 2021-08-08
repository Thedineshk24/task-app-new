import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: '',
  theWodrds: '',
  words:'',
};

export const paragraphSlice = createSlice({
  name: 'paragraph',
  initialState,
  reducers: {
    setText: (state,action) => {
      debugger
      state.text = action.payload?.split(".")?.reverse(); 
      console.log("text",state.text);
    },
    setSkipWordsNums: (state,action) => {
      state.words = action.payload;
      state.theWodrds = state.text?.split(' ').slice(0,state.words);
      console.log("result",state?.theWodrds);
    }
  },

});

export const { setText, setSkipWordsNums } = paragraphSlice.actions;

export default paragraphSlice.reducer;

