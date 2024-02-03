import { useState } from 'react';
import type { ChangeEvent, FC } from 'react';

import Container from '@/components/Container';
import Flexer from '@/components/Flexer';

import RegisterForm from './RegisterForm';
import Toast from '@/components/Toast';
import useRegister from '@/repository/user/register/useRegister';

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
    <>
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
    </>
  );
};

export default Register;
