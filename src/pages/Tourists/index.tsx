import type { FC } from 'react';

import Container from '@/components/Container';
import dummyTourists from '@/data/tourists_data.json';

import TouristsList from './TouristsList';

interface TouristsProps {}

const Tourists: FC<TouristsProps> = () => {
  return (
    <Container className="px-2 md:px-4">
      <TouristsList tourists={dummyTourists.data} />
    </Container>
  );
};

export default Tourists;
