import {StyledTextInput} from '@components/inputs/StyledInput';
import {View} from 'react-native';
import {StyledRadioGroup} from '@components/inputs/radio/StyledRadioGroup';
import {useState} from 'react';
import {RadioButtonProps} from 'react-native-radio-buttons-group';
import {getRadioButtonProps} from '@components/inputs/radio/StyledRadioGroup/settings.ts';
import {Temperature} from '@components/Temperature';
import {LightLevelMeasurement} from '@components/LightLevelMeasurement';

const radioButtons: RadioButtonProps[] = [
  getRadioButtonProps('outdoor', 'Outdoor'),
  getRadioButtonProps('indoor', 'Indoor'),
];

export const AddRoomForm = () => {
  const [selectedType, setSelectedType] = useState('outdoor');

  return (
    <View>
      {/*<Formik>*/}
      <StyledTextInput onChangeText={() => {}} label="Name room" />
      <StyledRadioGroup
        layout="row"
        radioButtons={radioButtons}
        selectedId={selectedType}
        onPress={setSelectedType}
      />
      <Temperature />
      <LightLevelMeasurement />
      {/*<Plants />*/}
      {/*</Formik>*/}
    </View>
  );
};
