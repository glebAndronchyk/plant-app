import {View} from 'react-native';
import {RegistrationForm} from '@components/forms/RegistrationForm';

export const RegistrationScreen = ({navigation}) => {
  return (
    <View style={{gap: 16, flex: 1}}>
      <RegistrationForm navigation={navigation} />
    </View>
  );
};
