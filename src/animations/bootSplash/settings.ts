type SplashScreens =
  | 'boot'
  | 'login'
  | 'onboarding'
  | 'onboardingToLogin'
  | 'authIntermediate';

export const bootSplashFrames: Record<SplashScreens, [number, number]> = {
  boot: [0, 53],
  onboarding: [53, 80],
  onboardingToLogin: [80, 110],
  login: [165, 110],
  authIntermediate: [110, 165],
};
