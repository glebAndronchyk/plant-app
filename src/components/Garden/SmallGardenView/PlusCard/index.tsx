import {StyledText} from '@styled';
import {ImageCard} from '@components/cards/ImageCard';
import {StyleSheet} from 'react-native';
import PlusIcon from '@icons/plus.svg';
import Typography from '@theme/typography.ts';

export const PlusCard = () => {
  return (
    <ImageCard
      containerStyle={styles.plusCard}
      imageSource={require('@images/add-room-bg.png')}>
      <PlusIcon style={styles.icon} />
      <StyledText style={styles.text}>Add room</StyledText>
    </ImageCard>
  );
};

const styles = StyleSheet.create({
  plusCard: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {marginBottom: 13},
  text: {
    ...Typography.xl,
  },
});
