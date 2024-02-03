import { useState } from 'react';
import type { ChangeEvent, FC } from 'react';

import Container from '@/components/Container';
import Flexer from '@/components/Flexer';
import Toast from '@/components/Toast';
import AnimationWrapper from '@/components/AnimationWrapper';
import useLogin from '@/repository/user/login/useLogin';
import LoginForm from './LoginForm';

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
    <AnimationWrapper>
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
    </AnimationWrapper>
  );
};

export default Login;
