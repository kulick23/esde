import { configureStore } from '@reduxjs/toolkit';
import skillsReducer from './features/skills/skillsSlice.ts';
import newsReducer from './features/news/newsSlice.ts';

const store = configureStore({
  reducer: {
    skills: skillsReducer,
    news: newsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
