import {RootState} from '@store/index.ts';

export const selectAnimation = (state: RootState) => state.app.globalAnimation;
export const selectIsAuthorized = (state: RootState) => state.app.isAuthorized;
