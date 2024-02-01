import type { FC } from 'react';

import Container from '@/components/Container';
import Flexer from '@/components/Flexer';

import RegisterForm from './RegisterForm';

interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
  return (
    <Container className="z-20">
      <Flexer className="justify-center h-screen">
        <RegisterForm />
      </Flexer>
    </Container>
  );
};

export default Register;
