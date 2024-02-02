import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { ChangeEvent, FC, SyntheticEvent } from 'react';

import Container from '@/components/Container';
import Flexer from '@/components/Flexer';
import LoginForm from './LoginForm';
import Toast from '@/components/Toast';
import { login } from '@/repository/user/login';
import { useUserContext } from '@/context/UserContext';

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const [payload, setPayload] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginErr, setIsLoginErr] = useState(false);

  const { handleUserLogin } = useUserContext();

  const navigate = useNavigate();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPayload((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLoginErr(false);
    setIsLoading(true);

    try {
      const request = await login({
        email: payload.email,
        password: payload.password,
      });

      const response = await request.json();

      setIsLoading(false);

      if (request.status >= 200 && request.status < 400) {
        if (response?.data?.Id) {
          const path = localStorage.getItem('voy-lastPath');

          handleUserLogin(response?.data);
          navigate(typeof path === 'string' ? path : '/');

          localStorage.removeItem('voy-lastPath');
        }
      } else {
        setIsLoginErr(true);
      }
    } catch (error) {
      setIsLoading(false);
      setIsLoginErr(true);
    }
  };

  useEffect(() => {
    if (isLoginErr) {
      setTimeout(() => {
        setIsLoginErr(false);
      }, 2000);
    }
  }, [isLoginErr]);

  return (
    <>
      <Container className="z-20">
        <Flexer flexDirection="col" className="justify-center h-screen">
          <LoginForm
            isLoading={isLoading}
            email={payload.email}
            password={payload.password}
            handleSubmit={handleSubmit}
            handleChange={onChangeHandler}
          />
        </Flexer>
      </Container>
      {isLoginErr && (
        <div className="absolute top-2 right-2">
          <Toast type="warning">There is a problem, please try again</Toast>
        </div>
      )}
    </>
  );
};

export default Login;
