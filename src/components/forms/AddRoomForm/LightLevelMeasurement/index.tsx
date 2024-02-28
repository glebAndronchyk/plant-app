import {StyleSheet, View} from 'react-native';
import {useLightSensor} from '@hooks/useLightSensor';
import {Button} from '@components/Button';
import {StyledTextInput} from '@components/inputs/StyledInput';
import {StyledText} from '@styled';
import SunIcon from '@icons/sun.svg';
import {Label} from '@components/forms/AddRoomForm/Label';

export const LightLevelMeasurement = () => {
  const {lightLevel, startLightSensorListening, hasSensor} = useLightSensor();

  const rememberLightLevelToStore = () => {
    //dispatch()
  };

  const onGetLightLevel = () => {
    startLightSensorListening();
    rememberLightLevelToStore();
  };

  return (
    <View>
      <Label text="Light level" />
      <View style={styles.container}>
        {hasSensor ? (
          <>
            <StyledTextInput
              maxLength={5}
              value={lightLevel ? lightLevel.toString() : ''}
              placeholder="Number"
              keyboardType="numeric"
              onChangeText={rememberLightLevelToStore}
            />
            <Button
              size="sm"
              buttonStyle={{gap: 14}}
              LeftIcon={SunIcon}
              label="Measure"
              onPress={onGetLightLevel}
            />
          </>
        ) : (
          <StyledText>Your device does not have a light sensor :(</StyledText>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 8,
  },
});
