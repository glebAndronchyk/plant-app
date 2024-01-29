import {Image, View} from 'react-native';
import {StyledText} from '@styled';
import Typography from '@theme/typography.ts';
import {ActionButtons} from './ActionButtons';
import {OnboardingCardProps} from './types.ts';
import {OnboardingCards} from '@screens/onboarding/settings.ts';
import {useRef, useState} from 'react';
import {ITEM_COUNT, ITEM_SIZE} from './settings.ts';
import {containers, dot, onboardingStyles} from './styles.ts';
import {OnboardingCardSignature} from '@screens/onboarding/types.ts';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Blur} from '@components/Blur';

export const OnboardingCard = ({handlePressSkip}: OnboardingCardProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef<Carousel<OnboardingCardSignature>>(null);
  const isLastCard = currentSlide === ITEM_COUNT - 1;

  const onPressNext = () => {
    if (isLastCard) {
      handlePressSkip();
    } else {
      carouselRef.current!.snapToNext();
    }
  };

  return (
    <View style={containers.container}>
      <Blur />
      <Carousel
        vertical={false}
        ref={carouselRef}
        data={OnboardingCards}
        itemWidth={ITEM_SIZE}
        sliderWidth={ITEM_SIZE}
        onSnapToItem={index => setCurrentSlide(index)}
        renderItem={({item: {title, image, description}}) => (
          <View
            style={[
              onboardingStyles.horizontalIntent,
              {justifyContent: 'space-between'},
            ]}
            key={title}>
            <Image source={image} width={262} height={309} />
            <StyledText style={[Typography['3xl'], onboardingStyles.title]}>
              {title}
            </StyledText>
            <View>
              <StyledText
                style={[Typography.mdRegular, onboardingStyles.description]}>
                {description}
              </StyledText>
            </View>
          </View>
        )}
      />

      <View style={onboardingStyles.horizontalIntent}>
        <Pagination
          activeDotIndex={currentSlide}
          dotsLength={ITEM_COUNT}
          containerStyle={containers.paginationContainer}
          dotContainerStyle={containers.dot}
          inactiveDotScale={1}
          dotStyle={dot.active}
          inactiveDotStyle={dot.inactive}
        />
        <ActionButtons
          isLastCard={isLastCard}
          handlePressNext={onPressNext}
          handlePressSkip={handlePressSkip}
        />
      </View>
    </View>
  );
};
