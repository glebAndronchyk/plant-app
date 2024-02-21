import {PropsWithChildren} from 'react';
import {ViewStyle} from 'react-native';

export interface SkeletonProps {
  width: ViewStyle['width'];
  height: ViewStyle['height'];
  duration?: number;
  style?: Omit<ViewStyle, 'width' | 'height' | 'opacity' | 'backgroundColor'>;
}

export interface SkeletonsContainerProps extends PropsWithChildren {
  singleSkeletonProps: SkeletonProps;
  count: number;
  loading: boolean;
}
