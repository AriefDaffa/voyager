import type { FC } from 'react';

interface SkeletonProps {
  className?: string;
}

const Skeleton: FC<SkeletonProps> = ({ className }) => {
  return (
    <div
      className={`pulse bg-gray-300 ${className} ${
        className?.includes('rounded') ? '' : 'rounded-md'
      }`}
    ></div>
  );
};

export default Skeleton;
