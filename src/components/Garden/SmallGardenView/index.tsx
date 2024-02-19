import {useEffect, useState} from 'react';
import {rooms} from '@API';
import {Dimensions, ScrollView, StyleSheet, View} from 'react-native';

import {PlusCard} from './PlusCard';
import {RoomCard} from './RoomCard';
import {RoomRow} from '@app_types/api/rooms.ts';
import {StyledText} from '@styled';
import Typography from '@theme/typography.ts';

const {width: screenWidth} = Dimensions.get('window');

export const SmallGardenView = () => {
  const [userRooms, setUserRooms] = useState<RoomRow[]>([]);

  useEffect(() => {
    const getRooms = async () => {
      const {data} = await rooms.getAll();

      if (data) {
        setUserRooms(data);
      }
    };

    getRooms();
  }, []);

  return (
    <View>
      <StyledText style={styles.sectionTitle}>My Garden</StyledText>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{gap: screenWidth / 16}}>
        {userRooms.map(room => (
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
