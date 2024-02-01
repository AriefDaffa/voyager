import type { FC } from 'react';

import Container from '@/components/Container';
import Flexer from '@/components/Flexer';
import LoginForm from './LoginForm';

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  return (
    <Container className="z-20">
      <Flexer className="justify-center h-screen">
        <LoginForm />
      </Flexer>
    </Container>
  );
};

export default Login;
