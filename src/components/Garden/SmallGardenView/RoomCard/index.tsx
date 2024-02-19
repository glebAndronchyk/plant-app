import {StyleSheet, View} from 'react-native';
import {TextLayer} from '@components/cards/ImageCard/layers/TextLayer';
import {ImageCard} from '@components/cards/ImageCard';

import ThreeFlowerPlantIcon from '@icons/three-flower-plant.svg';
import {StyledText} from '@styled';
import {COLORS} from '@theme/colors.ts';
import Typography from '@theme/typography.ts';
import {RoomRow} from '@app_types/api/rooms.ts';

interface RoomCardProps {
  room: RoomRow;
}

export const RoomCard = ({room}: RoomCardProps) => {
  return (
    <ImageCard
      containerStyle={styles.container}
      imageSource={{
        uri: room.imageUrl || 'placeholder',
      }}>
      <View style={styles.cardTop}>
        <View style={styles.plantAmountWidget}>
          <StyledText style={styles.amount}>{room.plant_ids.length}</StyledText>
          <ThreeFlowerPlantIcon />
        </View>
      </View>
      <TextLayer title={room.name} titleTextAlign="center" />
    </ImageCard>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  plantAmountWidget: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: COLORS.PRIMARY,
    borderRadius: 10,
    gap: 2,
    alignItems: 'center',
  },
  amount: {
    color: COLORS.WHITE,
    ...Typography.md,
  },
});
