// store.ts
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import siteReducer from './reducers/siteReducer';

const store = configureStore({
  reducer: {
    site: siteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
