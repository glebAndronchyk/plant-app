import {StyleSheet, TextStyle, View} from 'react-native';
import {StyledText} from '@styled';
import Typography from '@theme/typography.ts';
import {COLORS} from '@theme/colors.ts';

export interface TextLayerProps {
  title?: string;
  description?: string;
  titleTextAlign?: TextStyle['textAlign'];
  descriptionTextAlign?: TextStyle['textAlign'];
}

export const TextLayer = ({
  title,
  description,
  titleTextAlign,
  descriptionTextAlign,
}: TextLayerProps) => {
  return (
    <View style={styles.container}>
      {title && (
        <StyledText style={[styles.title, {textAlign: titleTextAlign}]}>
          {title}
        </StyledText>
      )}
      {description && (
        <StyledText
          style={[styles.description, {textAlign: descriptionTextAlign}]}>
          {description}
        </StyledText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  title: {
    ...Typography.xl,
    color: COLORS.WHITE,
  },
  description: {
    ...Typography.smRegular,
    color: COLORS.WHITE,
  },
});
