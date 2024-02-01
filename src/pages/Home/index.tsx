import { useNavigate } from 'react-router-dom';
import type { FC } from 'react';

import Container from '@/components/Container';
import Navbar from '@/components/Navbar';
import Flexer from '@/components/Flexer';
import Button from '@/components/Button';

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-slate-100 overflow-hidden">
      <Container className="px-2 h-screen md:px-4">
        <Navbar />
        <Flexer
          flexDirection="col"
          className="absolute items-center justify-center  h-full z-20 left-0 right-0 mx-auto"
        >
          <div className="text-center text-2xl font-bold md:text-8xl">
            Welcome to <span className="text-primary">Voyager</span>
          </div>
          <div className="text-center text-gray-500 md:text-lg">
            Managing tourists never been easier!
          </div>
          <Flexer className="mt-12 gap-12">
            <Button
              onClick={() => navigate(`/tourists`)}
              text="Start managing tourists"
            />
          </Flexer>
        </Flexer>
      </Container>
      <div className="absolute top-[50%] overflow-hidden h-screen w-screen md:top-[70%]">
        <img
          src="images/world-globe.png"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default Home;
