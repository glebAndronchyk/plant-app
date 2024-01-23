import {Provider} from 'react-redux';
import store from '@store/index.ts';
import {PropsWithChildren} from 'react';

export const StoreWrapper = ({children}: PropsWithChildren) => {
  return <Provider store={store}>{children}</Provider>;
};
