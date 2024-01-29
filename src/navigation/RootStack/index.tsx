import {useAuthorization} from '@hooks/useAuthorization';
import {RootStackNavigator} from '@navigators';
import {HomeTabs} from './HomeTabs';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {authTheme, unAuthorizedGroupScreenOptions} from './settings';
import {AuthStack} from './AuthStack';
import {OnboardingScreen} from '@screens/onboarding';

const {Navigator, Screen, Group} = RootStackNavigator;

export const RootStack = () => {
  const {isAuthorized, onboardingComplete} = useAuthorization();

  return (
    <NavigationContainer theme={!isAuthorized ? authTheme : DefaultTheme}>
      <Navigator id="root" initialRouteName="Onboarding">
        {isAuthorized ? (
          <Group>
            <Screen name="HomeTabs" component={HomeTabs} />
          </Group>
        ) : (
          <Group screenOptions={unAuthorizedGroupScreenOptions}>
            {!onboardingComplete && (
              <Screen name="Onboarding" component={OnboardingScreen} />
            )}
            <Screen
              name="AuthStack"
              component={AuthStack}
              initialParams={{
                animationKey: 'login',
                dependOnPreviousAnimation: true,
              }}
            />
          </Group>
        )}
      </Navigator>
    </NavigationContainer>
  );
};
