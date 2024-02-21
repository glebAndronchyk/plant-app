import {View} from 'react-native';
import {RegistrationForm} from '@components/forms/RegistrationForm';
import {AuthStackScreenProps} from '@navigation/RootStack/AuthStack/types.ts';

type RegistrationScreenProps = AuthStackScreenProps<'Registration'>;

export const RegistrationScreen = ({navigation}: RegistrationScreenProps) => {
  return (
    <View style={{gap: 16, flex: 1}}>
      <RegistrationForm navigation={navigation} />
    </View>
  );
};
