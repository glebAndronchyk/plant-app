import {RootStackParamList} from '@navigation/RootStack/types.ts';
import {CompositeScreenProps} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthStackParamList} from '@navigation/RootStack/AuthStack/types.ts';
import {HomeStackParamList} from '@navigation/RootStack/HomeTabs/types.ts';

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends RootStackParamList,
        AuthStackParamList,
        HomeStackParamList {}
  }
}

export type ComposeProps<
  ParamList1 extends {[key: string]: object | undefined},
  ParamList2 extends Record<string, object | undefined>,
  Screen1 extends keyof ParamList1 = keyof ParamList1,
  Screen2 extends keyof ParamList2 = keyof ParamList2,
> = CompositeScreenProps<
  // @ts-expect-error
  CompositeItem<ParamList1, Screen1>,
  CompositeItem<ParamList2, Screen2>
>;

type CompositeItem<
  ParamList extends Record<string, object | undefined>,
  Screen extends keyof ParamList = keyof ParamList,
> = StackScreenProps<ParamList, Screen>;
