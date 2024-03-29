import {AuthStackNavigator} from '@navigators';
import {LoginScreen} from '@screens/authorization/login';
import {RegistrationScreen} from '@screens/authorization/registration';
import {PhoneConfirmationScreen} from '@screens/authorization/phone-confirmation';
import {unAuthorizedGroupScreenOptions} from '../settings.ts';
import {Platform, StyleSheet, View} from 'react-native';
import {bootSplashFrames} from '@animations/bootSplash/settings.ts';
import {useEffect} from 'react';
import {useAppDispatch} from '@store/_hooks/useAppDispatch';
import {setBootSplashFrames} from '@store/app';
import Animated, {
  SlideInDown,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Blur} from '@components/Blur';
import {useAppSelector} from '@store/_hooks/useAppSelector';
import {selectBootSplashAnimation} from '@store/app/selectors.ts';
import {AuthStackProps} from './types.ts';
import {usePreventGoingBack} from '@hooks/usePreventGoingBack';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AuthStackContext} from './settings.ts';

const {Navigator, Screen} = AuthStackNavigator;

export const AuthStack = ({route, navigation}: AuthStackProps) => {
  const dispatch = useAppDispatch();
  const {playing} = useAppSelector(selectBootSplashAnimation);
  const outOpacity = useSharedValue(1);

  usePreventGoingBack(navigation);

  const {animationKey, dependOnPreviousAnimation} = route.params;

  useEffect(() => {
    const frames = bootSplashFrames[animationKey];
    dispatch(setBootSplashFrames({frames, playing: dependOnPreviousAnimation}));
  }, []);

  const triggerOutAnimation = (toValue = 0) => {
    outOpacity.value = withTiming(toValue, {duration: 500});
  };

  return (
    <>
      {!playing && (
        <AuthStackContext.Provider value={{triggerOutAnimation}}>
          <View style={styles.wrapper}>
            <Animated.View
              entering={SlideInDown.duration(1000)}
              style={[styles.container, {opacity: outOpacity}]}>
              <Blur />
              <KeyboardAwareScrollView
                enableOnAndroid
                extraScrollHeight={200}
                enableAutomaticScroll={Platform.OS === 'ios'}
                contentContainerStyle={{flex: 1}}>
                <Navigator
                  screenOptions={unAuthorizedGroupScreenOptions}
                  initialRouteName="Login">
                  <Screen name="Login" component={LoginScreen} />
                  <Screen name="Registration" component={RegistrationScreen} />
                  <Screen
                    name="PhoneConfirmation"
                    component={PhoneConfirmationScreen}
                  />
                </Navigator>
              </KeyboardAwareScrollView>
            </Animated.View>
          </View>
        </AuthStackContext.Provider>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {flex: 1, justifyContent: 'flex-end'},
  container: {
    width: '100%',
    height: '80%',
    borderTopLeftRadius: 100,
    overflow: 'hidden',
    paddingTop: 24,
    paddingHorizontal: 16,
  },
});
