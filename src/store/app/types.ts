import {Animation} from '@app_types/animation.ts';

export interface AppState {
  isAuthorized: boolean | null;
  bootSplashAnimation: Animation;
}
