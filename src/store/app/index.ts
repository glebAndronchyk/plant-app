import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {APP_INITIAL_STATE} from './settings.ts';
import {Animation} from '@app_types/animation.ts';

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
    setBootSplashFrames: (state, action: PayloadAction<Animation>) => {
      state.bootSplashAnimation.frames = action.payload.frames;
      state.bootSplashAnimation.playing = action.payload.playing;
    },
    setBootSplashPlayingStatus: (state, playing: PayloadAction<boolean>) => {
      state.bootSplashAnimation.playing = playing.payload;
    },
    resetGlobalAnimation: () => {},
    changeGlobalAnimationStatus: () => {},
    changeGlobalAnimationIntervalKeys: () => {},
  },
});

export const {
  authorizeUser,
  unAuthorizeUser,
  setBootSplashFrames,
  setBootSplashPlayingStatus,
  resetGlobalAnimation,
  changeGlobalAnimationStatus,
  changeGlobalAnimationIntervalKeys,
} = appSlice.actions;

export const appReducer = appSlice.reducer;
