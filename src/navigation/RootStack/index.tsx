import {useAuthorization} from '@hooks/useAuthorization';
import {RootStackNavigator} from '@navigators';
import {HomeTabs} from './HomeTabs';
import {LoginScreen} from '@screens/authorization/login';
import {OnboardingScreen} from '@screens/onboarding';
import {RegistrationScreen} from '@screens/authorization/registration';
import {PhoneConfirmationScreen} from '@screens/authorization/phone-confirmation';

const {Navigator, Screen, Group} = RootStackNavigator;

export const RootStack = () => {
  const {isAuthorized, onboardingShown} = useAuthorization();

  return (
    <Navigator id="root" initialRouteName="Onboarding">
      {isAuthorized ? (
        <Group>
          <Screen name="Home Tabs" component={HomeTabs} />
        </Group>
      ) : (
        <Group>
          {!onboardingShown && (
            <Screen name="Onboarding" component={OnboardingScreen} />
          )}
          <Screen name="Login" component={LoginScreen} />
          <Screen name="Registration" component={RegistrationScreen} />
          <Screen
            name="PhoneConfirmation"
            component={PhoneConfirmationScreen}
          />
        </Group>
      )}
    </Navigator>
  );
};
