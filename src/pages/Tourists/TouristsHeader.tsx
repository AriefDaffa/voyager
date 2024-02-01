import type { FC } from 'react';

import Button from '@/components/Button';
import Flexer from '@/components/Flexer';

interface TouristsHeaderProps {
  totalTourist: number;
  handleOpenModal: () => void;
}

const TouristsHeader: FC<TouristsHeaderProps> = ({
  totalTourist,
  handleOpenModal,
}) => {
  return (
    <Flexer className="justify-between flex-col md:flex-row">
      <div>
        <div className="text-3xl font-bold">
          Tourists{' '}
          <span className="text-base font-normal text-gray-400">
            ({totalTourist})
          </span>
        </div>
        <div className="text-sm font-semibold text-gray-600 mb-5">
          Showing all of the Tourists registered in the system. Click one of the
          tourist to see the details.
        </div>
      </div>
      <Flexer className="items-center w-full justify-end mb-4 md:w-auto">
        <Button text="Add Tourist" onClick={handleOpenModal} />
      </Flexer>
    </Flexer>
  );
};

export default TouristsHeader;
