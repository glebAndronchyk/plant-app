import {AppState} from './typess.ts';
import {bootSplashFrames} from '@animations/bootSplash/settings.ts';

export const APP_INITIAL_STATE: AppState = {
  isAuthorized: null,
  bootSplashAnimation: {
    frames: bootSplashFrames.boot,
    playing: true,
  },
};
