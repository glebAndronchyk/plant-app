import {rooms} from '@API';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';

import {PlusCard} from './PlusCard';
import {RoomCard} from './RoomCard';
import {StyledText} from '@styled';
import Typography from '@theme/typography.ts';
import {useSupabaseOnMount} from '@hooks/useSupabaseOnMount';
import {SkeletonsContainer} from '@components/skeletons/SkeletonsContainer';
import {MEDIUM_IMAGE_CARD_SIZING} from '@theme/cards.ts';

const {width: screenWidth} = Dimensions.get('window');

export const SmallGardenView = () => {
  const {data: userRooms} = useSupabaseOnMount(rooms.getAll);

  return (
    <View>
      <StyledText style={styles.sectionTitle}>My Garden</StyledText>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        contentContainerStyle={{gap: screenWidth / 16}}>
        <SkeletonsContainer
          loading={!userRooms}
          count={2}
          singleSkeletonProps={{
            ...MEDIUM_IMAGE_CARD_SIZING,
            style: {borderRadius: 16},
          }}>
          {userRooms?.map(room => (
            <RoomCard key={room.id} room={room} />
          ))}
        </SkeletonsContainer>
        <PlusCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    ...Typography['2xl'],
    marginBottom: 8,
  },
});
