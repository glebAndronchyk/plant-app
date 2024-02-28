import {StyledTextInput} from '@components/inputs/StyledInput';
import {ScrollView} from 'react-native';
import {Temperature} from './Temperature';
import {LightLevelMeasurement} from './LightLevelMeasurement';
import {PlantsList} from './PlantsList';
import {TypeSelector} from './TypeSelector';
import {containerStyles} from '@theme/containers.ts';

export const AddRoomForm = () => {
  return (
    <ScrollView
      contentContainerStyle={[containerStyles().marginContainer, {gap: 24}]}>
      <StyledTextInput onChangeText={() => {}} label="Name room" />
      <TypeSelector />
      <Temperature />
      {/*TODO: FIX LAYOUT*/}
      <LightLevelMeasurement />
      <PlantsList />
    </ScrollView>
  );
};
