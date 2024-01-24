import {NavigationContainer} from '@react-navigation/native';
import {RootStack} from './src/navigation/RootStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {UserAuthorizationWrapper} from '@components/wrappers/UserAuthorizationWrapper';
import {StoreWrapper} from '@components/wrappers/StoreWrapper';
import {BootSplashWrapper} from '@components/wrappers/BootSplashWrapper';

export default function App() {
  return (
    <StoreWrapper>
      <UserAuthorizationWrapper>
        <SafeAreaProvider>
          <BootSplashWrapper>
            <NavigationContainer>
              <RootStack />
            </NavigationContainer>
          </BootSplashWrapper>
        </SafeAreaProvider>
      </UserAuthorizationWrapper>
    </StoreWrapper>
  );
}
