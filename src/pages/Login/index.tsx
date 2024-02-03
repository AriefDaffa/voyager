import { useState } from 'react';
import type { ChangeEvent, FC } from 'react';

import Container from '@/components/Container';
import Flexer from '@/components/Flexer';
import LoginForm from './LoginForm';
import Toast from '@/components/Toast';
import useLogin from '@/repository/user/login/useLogin';

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const [payload, setPayload] = useState({ email: '', password: '' });

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPayload((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { handleLogin, msg, isLoading } = useLogin({
    email: payload.email,
    password: payload.password,
  });

  return (
    <>
      <Container className="z-20">
        <Flexer flexDirection="col" className="justify-center h-screen">
          <LoginForm
            isLoading={isLoading}
            email={payload.email}
            password={payload.password}
            handleSubmit={handleLogin}
            handleChange={onChangeHandler}
          />
        </Flexer>
      </Container>
      {msg.type !== '' && (
        <div className="fixed top-2 right-2 z-[60]">
          <Toast type={msg.type}>{msg.msg}</Toast>
        </div>
      )}
    </>
  );
};

export default Login;
