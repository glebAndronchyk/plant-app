import {Image, StyleSheet, View} from 'react-native';
import {StyledText} from '@styled';
import {COLORS} from '@theme/colors.ts';
import SettingsIcons from '@icons/settings.svg';
import Typography from '@theme/typography.ts';
import {headerContainerStyle} from '@theme/containers.ts';

export const MainHeader = () => {
  return (
    <View style={headerContainerStyle}>
      <View style={styles.leftContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: 'https://reactjs.org/logo-og.png'}}
            style={styles.pic}
          />
        </View>
        <StyledText style={Typography.lg}>Hi {'<name>'}</StyledText>
      </View>
      <View style={[styles.pic, styles.settingsButton]}>
        <SettingsIcons />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  leftContainer: {flexDirection: 'row', alignItems: 'center', gap: 8},
  imageContainer: {borderRadius: 50, overflow: 'hidden'},
  pic: {width: 48, height: 48},
  settingsButton: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.GRAY.light,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
