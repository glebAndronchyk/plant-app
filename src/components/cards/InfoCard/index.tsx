import {Image, StyleSheet, View} from 'react-native';
import {StyledText} from '@styled';
import {Button} from '@components/Button';
import {COLORS} from '@theme/colors.ts';
import Typography from '@theme/typography.ts';
import {shadow} from '@theme/shadows.ts';
import Animated from 'react-native-reanimated';
import {FADE_IN_500} from '@theme/animations.ts';

interface InfoCardProps {
  imageUrl?: string | null;
  title?: string | null;
  description?: string | null;
  actionButtonTitle?: string | null;
  onActionPress?: () => void;
}

export const InfoCard = ({
  imageUrl,
  title,
  description,
  actionButtonTitle,
  onActionPress,
}: InfoCardProps) => {
  return (
    <Animated.View entering={FADE_IN_500} style={[styles.container, shadow.sm]}>
      <View style={styles.cardTop}>
        {imageUrl && <Image style={styles.icon} source={{uri: imageUrl}} />}
        {title && (
          <StyledText style={{...Typography.md, flexShrink: 1}}>
            {title}
          </StyledText>
        )}
      </View>
      {description && (
        <StyledText style={Typography.caption}>{description}</StyledText>
      )}
      {actionButtonTitle && onActionPress && (
        <View style={{paddingHorizontal: '15%'}}>
          <Button label={actionButtonTitle} onPress={onActionPress} />
        </View>
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    padding: 16,
    flex: 1,
    gap: 8,
    borderWidth: 1, // This should be done via svg shadow
  },
  icon: {
    width: 32,
    height: 32,
  },
  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 8,
    borderBottomColor: COLORS.GREEN[200],
    borderBottomWidth: 1,
  },
});
