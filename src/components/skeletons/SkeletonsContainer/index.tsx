import {SkeletonsContainerProps} from '../types.ts';
import {Skeleton} from '../Skeleton';

export const SkeletonsContainer = ({
  count,
  loading,
  children,
  singleSkeletonProps,
}: SkeletonsContainerProps) => {
  if (!loading) {
    return <>{children}</>;
  }

  return (
    <>
      {Array.from({length: count}).map((_, index) => (
        <Skeleton key={index} {...singleSkeletonProps} />
      ))}
    </>
  );
};
