import {ImageCardProps} from '@components/cards/ImageCard';

export interface PlusCardProps
  extends Pick<ImageCardProps, 'variant' | 'label'> {
  labelPosition?: 'on' | 'under';
  onPress: () => void;
}
