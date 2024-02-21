import {useSupabaseOnMount} from '@hooks/useSupabaseOnMount';
import {InfoCard} from '@components/cards/InfoCard';
import {cms} from '@API';
import {SkeletonsContainer} from '@components/skeletons/SkeletonsContainer';

export const InfoCards = () => {
  const {data: cards} = useSupabaseOnMount(cms.getInfoCards);

  return (
    <SkeletonsContainer
      loading={!cards}
      singleSkeletonProps={{
        width: '100%',
        height: 100,
        style: {borderRadius: 16},
      }}
      count={3}>
      {cards?.map(
        ({id, description, title, action_button_title, link_to, image_url}) => (
          <InfoCard
            key={id}
            imageUrl={image_url}
            description={description}
            title={title}
            actionButtonTitle={action_button_title}
            onActionPress={() => console.log(link_to)}
          />
        ),
      )}
    </SkeletonsContainer>
  );
};
