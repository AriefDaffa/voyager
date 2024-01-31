import type { FC } from 'react';

import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import Title from '@/components/Typography/Title';
import dummyTourists from '@/data/tourists_data.json';
import TouristsList from './TouristsList';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <Container className="px-2 md:px-4">
      {/* <Navbar /> */}
      {/* <div className="px-4">
        <Title>
          All Users <span className="text-gray-400 font-normal">| 123</span>
        </Title>
      </div> */}
      <TouristsList tourists={dummyTourists.data} />
    </Container>
  );
};

export default Home;
