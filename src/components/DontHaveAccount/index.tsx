import Typography from '@theme/typography.ts';
import {StyledText} from '@styled';
import {Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {containerStyles} from '@theme/containers.ts';
import {AuthStackNavigation} from '@navigation/RootStack/AuthStack/types.ts';

export const DontHaveAccount = () => {
  const {navigate} = useNavigation<AuthStackNavigation>();
  const onSignUp = () => navigate('Registration');

  return (
    <View
      style={{
        flexDirection: 'row',
        ...containerStyles().fullCentered,
        ...Typography.smRegular,
      }}>
      <StyledText>Don't have an account? </StyledText>
      <Pressable onPress={onSignUp}>
        <StyledText style={Typography.sm}>Sign Up</StyledText>
      </Pressable>
    </View>
  );
};
