import type { FC } from 'react';

import Container from '@/components/Container';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  return (
    <Container className="px-2 md:px-4">
      <div className="text-center text-8xl font-bold">
        Welcome to <span className="text-primary">Voyager</span>!
      </div>
    </Container>
  );
};

export default Home;
