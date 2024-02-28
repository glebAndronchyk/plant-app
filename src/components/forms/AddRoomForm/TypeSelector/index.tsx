import {StyledRadioGroup} from '@components/inputs/radio/StyledRadioGroup';
import {RadioButtonProps} from 'react-native-radio-buttons-group';
import {getRadioButtonProps} from '@components/inputs/radio/StyledRadioGroup/settings.ts';
import {useState} from 'react';
import {View} from 'react-native';
import {Label} from '@components/forms/AddRoomForm/Label';

const radioButtons: RadioButtonProps[] = [
  getRadioButtonProps('outdoor', 'Outdoor'),
  getRadioButtonProps('indoor', 'Indoor'),
];

export const TypeSelector = () => {
  const [selectedType, setSelectedType] = useState('outdoor');

  return (
    <View>
      <Label text="Type" />
      <StyledRadioGroup
        layout="row"
        radioButtons={radioButtons}
        selectedId={selectedType}
        onPress={setSelectedType}
      />
    </View>
  );
};
