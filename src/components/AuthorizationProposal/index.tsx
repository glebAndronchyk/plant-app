import Typography from '@theme/typography.ts';
import {StyledText} from '@styled';
import {Pressable, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {containerStyles} from '@theme/containers.ts';
import {AuthStackNavigation} from '@navigation/RootStack/AuthStack/types.ts';

interface AuthorizationProposalProps {
  type: 'sign-up' | 'log-in';
}

export const AuthorizationProposal = ({type}: AuthorizationProposalProps) => {
  const {navigate} = useNavigation<AuthStackNavigation>();
  const onSignUp = () => navigate('Registration');
  const onLogIn = () => navigate('Login');
  const isSignUp = type === 'sign-up';

  return (
    <View
      style={{
        flexDirection: 'row',
        ...containerStyles().fullCentered,
        ...Typography.smRegular,
      }}>
      <StyledText>
        {isSignUp ? "Don't" : 'Already'} have an account?{' '}
      </StyledText>
      <Pressable onPress={isSignUp ? onSignUp : onLogIn}>
        <StyledText style={Typography.sm}>
          {isSignUp ? 'Sign up' : 'Log in'}
        </StyledText>
      </Pressable>
    </View>
  );
};
