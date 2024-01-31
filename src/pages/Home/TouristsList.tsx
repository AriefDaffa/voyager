import type { FC } from 'react';

import Flexer from '@/components/Flexer';

import { Tourists } from './types';

interface TouristsListProps {
  tourists: Tourists[];
}

const TouristsList: FC<TouristsListProps> = ({ tourists }) => {
  return (
    <Flexer flexDirection="col" className="gap-1">
      {tourists.map((item) => (
        <Flexer
          key={item.id}
          className="items-center py-2 gap-2 border-b-[1px]"
        >
          <div className="w-10 h-10 rounded-full">
            <img
              src={item.tourist_profilepicture}
              alt=""
              className="w-full h-full rounded-full"
            />
          </div>
          <div>
            <div className="text-xs font-semibold">{item.tourist_name}</div>
            <div className="text-xs text-gray-500">{item.tourist_email}</div>
          </div>
          <div></div>
        </Flexer>
      ))}
    </Flexer>
  );
};

export default TouristsList;
