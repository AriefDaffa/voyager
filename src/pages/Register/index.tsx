import { useState } from 'react';
import type { ChangeEvent, FC } from 'react';

import Toast from '@/components/Toast';
import Container from '@/components/Container';
import Flexer from '@/components/Flexer';
import AnimationWrapper from '@/components/AnimationWrapper';
import useRegister from '@/repository/user/register/useRegister';

import RegisterForm from './RegisterForm';

interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
  const [payload, setPayload] = useState({ email: '', name: '', password: '' });

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPayload((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { handleRegister, msg, isLoading } = useRegister({
    name: payload.name,
    email: payload.email,
    password: payload.password,
  });

  return (
    <AnimationWrapper>
      <Container className="z-20">
        <Flexer flexDirection="col" className="justify-center h-screen">
          <RegisterForm
            email={payload.email}
            name={payload.name}
            password={payload.password}
            isLoading={isLoading}
            handleSubmit={handleRegister}
            handleChange={onChangeHandler}
          />
        </Flexer>
      </Container>
      {msg.type !== '' && (
        <div className="absolute top-2 right-2">
          <Toast type={msg.type}>{msg.msg}</Toast>
        </div>
      )}
    </AnimationWrapper>
  );
};

export default Register;
