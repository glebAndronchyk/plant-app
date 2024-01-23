import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './src/navigation/RootStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AfterSplashWrapper} from '@components/wrappers/AfterSplashWrapper';
import {UserAuthorizationWrapper} from '@components/wrappers/UserAuthorizationWrapper';
import {StoreWrapper} from '@components/wrappers/StoreWrapper';

export default function App() {
  return (
    <StoreWrapper>
      <UserAuthorizationWrapper>
        <SafeAreaProvider>
          <AfterSplashWrapper>
            <NavigationContainer>
              <RootStack />
            </NavigationContainer>
          </AfterSplashWrapper>
        </SafeAreaProvider>
      </UserAuthorizationWrapper>
    </StoreWrapper>
  );
}
