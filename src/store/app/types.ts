import {Animation} from '@app_types/animation.ts';

export interface AppState {
  isAuthorized: boolean | null;
  bootEnded: boolean;
  onboardingComplete: boolean;
  bootSplashAnimation: Animation;
}
