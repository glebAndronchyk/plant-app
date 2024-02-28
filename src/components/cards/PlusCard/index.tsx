import {StyledText} from '@styled';
import {ImageCard} from '@components/cards/ImageCard';
import {StyleSheet, View} from 'react-native';
import PlusIcon from '@icons/plus.svg';
import Typography from '@theme/typography.ts';
import {PlusCardProps} from '@components/cards/PlusCard/types.ts';

export const PlusCard = ({
  variant,
  label,
  labelPosition = 'on',
  onPress,
}: PlusCardProps) => {
  const isOnCard = labelPosition === 'on';

  return (
    <ImageCard
      variant={variant}
      label={!isOnCard ? label : ''}
      onPressIn={onPress}
      containerStyle={styles.plusCard}
      imageSource={require('@images/add-room-bg.png')}>
      <View style={{gap: 12, alignItems: 'center'}}>
        <PlusIcon />
        {isOnCard && <StyledText style={styles.text}>{label}</StyledText>}
      </View>
    </ImageCard>
  );
};

const styles = StyleSheet.create({
  plusCard: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    ...Typography.xl,
  },
});
