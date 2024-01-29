import {RootState} from '@store/index.ts';

export const selectBootSplashAnimation = (state: RootState) =>
  state.app.bootSplashAnimation;
export const selectAppState = (state: RootState) => state.app;
export const selectIsAuthorized = (state: RootState) => state.app.isAuthorized;

export const selectBootStatus = (state: RootState) => state.app.bootEnded;
export const selectOnboardingStatus = (state: RootState) =>
  state.app.onboardingComplete;
