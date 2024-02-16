import {RootStack} from '@navigation/RootStack';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {UserAuthorizationWrapper} from '@components/wrappers/UserAuthorizationWrapper';
import {StoreWrapper} from '@components/wrappers/StoreWrapper';
import {BootSplashWrapper} from '@components/wrappers/BootSplashWrapper';
import {GeolocationWrapper} from '@components/wrappers/GeolocationWrapper';

export default function App() {
  return (
    <StoreWrapper>
      <UserAuthorizationWrapper>
        <SafeAreaProvider>
          <BootSplashWrapper>
            <GeolocationWrapper>
              <RootStack />
            </GeolocationWrapper>
          </BootSplashWrapper>
        </SafeAreaProvider>
      </UserAuthorizationWrapper>
    </StoreWrapper>
  );
}
