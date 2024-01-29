import {RootStackParamList} from '@navigation/RootStack/types.ts';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
