import {createSlice} from '@reduxjs/toolkit';
import {APP_INITIAL_STATE} from './settings.ts';

const appSlice = createSlice({
  name: 'app',
  initialState: APP_INITIAL_STATE,
  reducers: {
    authorizeUser: state => {
      state.isAuthorized = true;
      //additional logic
    },
    unAuthorizeUser: state => {
      state.isAuthorized = false;
      //additional logic
    },
    setGlobalAnimation: () => {},
    resetGlobalAnimation: () => {},
    changeGlobalAnimationStatus: () => {},
    changeGlobalAnimationIntervalKeys: () => {},
  },
});

export const {
  authorizeUser,
  unAuthorizeUser,
  setGlobalAnimation,
  resetGlobalAnimation,
  changeGlobalAnimationStatus,
  changeGlobalAnimationIntervalKeys,
} = appSlice.actions;

export const appReducer = appSlice.reducer;
