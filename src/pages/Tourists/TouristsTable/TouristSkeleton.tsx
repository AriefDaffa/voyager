import type { FC } from 'react';

import Skeleton from '@/components/Skeleton';

interface TouristSkeletonProps {}

const TouristSkeleton: FC<TouristSkeletonProps> = () => {
  return (
    <tr className="">
      <td className={`py-5 px-3 border border-gray-300 w-16`}>
        <Skeleton className="h-6" />
      </td>
      <td className={`py-5 px-3 border border-gray-300`}>
        <Skeleton className="h-6" />
      </td>
      <td className={`py-5 px-3 border border-gray-300`}>
        <Skeleton className="h-6" />
      </td>
      <td className={`py-5 px-3 border border-gray-300 border-r-0`}>
        <Skeleton className="h-6" />
      </td>
      <td className={`py-5 px-3 border border-gray-300 border-l-0`}></td>
    </tr>
  );
};

export default TouristSkeleton;
