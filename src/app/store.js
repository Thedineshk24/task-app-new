import { configureStore } from '@reduxjs/toolkit';
import paragraphSlice from '../features/Paragraph/paragraphSlice';


export const store = configureStore({
  reducer: {
    paragraphReducer: paragraphSlice,
  },
});


