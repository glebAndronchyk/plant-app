import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {appReducer} from '@store/app';

const rootReducer = combineReducers({
  app: appReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
