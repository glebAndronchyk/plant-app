import {BasicHeaderLayout} from '@components/headers/layouts/BasicHeaderLayout';
import {Pressable, StyleSheet} from 'react-native';
import {COLORS} from '@theme/colors.ts';
import BackArrow from '@icons/back-arrow.svg';
import CheckmarkIcon from '@icons/checkmark.svg';
import {useNavigation} from '@react-navigation/native';

export const AddRoomHeader = () => {
  const {goBack} = useNavigation();

  return (
    <BasicHeaderLayout
      LeftContainer={
        <>
          <Pressable onPressIn={goBack} style={styles.imageContainer}>
            <BackArrow />
          </Pressable>
        </>
      }
      RightActionIcon={
        <CheckmarkIcon
          fill={COLORS.WHITE}
          style={styles.checkIcon}
          color={COLORS.WHITE}
          stroke={COLORS.WHITE}
        />
      }
      onRightActionPress={() => console.log('apply')}
      rightActionContainerStyles={styles.applyButton}
    />
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.GRAY.dark,
    padding: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  applyButton: {
    backgroundColor: COLORS.PRIMARY,
  },
  checkIcon: {
    width: 24,
    height: 24,
  },
});
