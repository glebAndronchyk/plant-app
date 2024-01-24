type SplashScreens = 'boot' | 'login' | 'onboarding' | 'onboardingToLogin';

export const bootSplashFrames: Record<SplashScreens, [number, number]> = {
  boot: [0, 63],
  login: [195, 240],
  onboarding: [63, 110],
  onboardingToLogin: [110, 155],
};
