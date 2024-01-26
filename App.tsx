import {RootStack} from '@navigation/RootStack';
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
            <RootStack />
          </BootSplashWrapper>
        </SafeAreaProvider>
      </UserAuthorizationWrapper>
    </StoreWrapper>
  );
}
