import type { FC } from 'react';

import Container from '@/components/Container';
import Flexer from '@/components/Flexer';
import LoginForm from './LoginForm';

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  return (
    <div className="relative overflow-hidden">
      <Container>
        <Flexer className="h-screen md:px-6">
          <Flexer flexDirection="col" className="h-full justify-center w-full">
            <LoginForm />
          </Flexer>
          <Flexer className=" w-full h-full hidden lg:flex">
            <div className="self-center">
              <img src="images/plane.png" alt="" />
            </div>
          </Flexer>
        </Flexer>
      </Container>
      <img
        src="images/world-globe.png"
        alt=""
        className="absolute top-[40%] -z-20"
      />
    </div>
  );
};

export default Login;
