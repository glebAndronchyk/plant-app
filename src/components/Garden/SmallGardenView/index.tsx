import {rooms} from '@API';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';

import {PlusCard} from './PlusCard';
import {RoomCard} from './RoomCard';
import {StyledText} from '@styled';
import Typography from '@theme/typography.ts';
import {useSupabaseOnMount} from '@hooks/useSupabaseOnMount';

const {width: screenWidth} = Dimensions.get('window');

export const SmallGardenView = () => {
  const {data: userRooms} = useSupabaseOnMount(rooms.getAll);

  return (
    <View>
      <StyledText style={styles.sectionTitle}>My Garden</StyledText>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{gap: screenWidth / 16}}>
        {userRooms?.map(room => (
          <RoomCard key={room.id} room={room} />
        ))}
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
