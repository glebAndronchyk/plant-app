import {Image, StyleSheet, View} from 'react-native';
import {StyledText} from '@styled';
import {COLORS} from '@theme/colors.ts';
import SettingsIcons from '@icons/settings.svg';
import Typography from '@theme/typography.ts';
import {BasicHeaderLayout} from '../layouts/BasicHeaderLayout';

export const MainHeader = () => {
  return (
    <BasicHeaderLayout
      LeftContainer={
        <>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: 'https://reactjs.org/logo-og.png'}}
              style={styles.pic}
            />
          </View>
          <StyledText style={Typography.lg}>Hi {'<name>'}</StyledText>
        </>
      }
      RightActionIcon={<SettingsIcons />}
      onRightActionPress={() => console.log('settings')}
      rightActionContainerStyles={styles.settingsButton}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {borderRadius: 50, overflow: 'hidden'},
  pic: {width: 48, height: 48},
  settingsButton: {
    backgroundColor: COLORS.GRAY.light,
  },
});
