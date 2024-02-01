import type { FC } from 'react';

import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import dummyTourists from '@/data/tourists_data.json';

import TouristsList from './TouristsList';

interface TouristsProps {}

const Tourists: FC<TouristsProps> = () => {
  return (
    <div className="bg-gray-100 pt-24">
      <Container className="px-2 h-screen  md:px-4">
        <Navbar />
        <div className="text-3xl font-bold">
          Tourists{' '}
          <span className="text-base font-normal text-gray-400">
            ({dummyTourists.totalrecord})
          </span>
        </div>
        <div className="text-sm font-semibold text-gray-600 mb-5">
          Showing all of the Tourists registered in the system. Click one of the
          tourist to see the details.
        </div>
        {/* <button
          type="submit"
          className="bg-primary p-2 rounded-md font-bold text-white my-2 hover:bg-primaryDarker"
        >
          Add Tourist
        </button> */}
        <TouristsList tourists={dummyTourists.data} />
      </Container>
    </div>
  );
};

export default Tourists;
