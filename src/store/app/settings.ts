import {AppState} from './types.ts';
import {bootSplashFrames} from '@animations/bootSplash/settings.ts';

export const APP_INITIAL_STATE: AppState = {
  isAuthorized: null,
  onboardingComplete: false,
  bootEnded: false,
  bootSplashAnimation: {
    frames: bootSplashFrames.boot,
    playing: true,
  },
};
