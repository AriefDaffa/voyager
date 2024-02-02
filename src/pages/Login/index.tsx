import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { ChangeEvent, FC, SyntheticEvent } from 'react';

import Container from '@/components/Container';
import Flexer from '@/components/Flexer';
import LoginForm from './LoginForm';
import Alert from '@/components/Alert';
import { login } from '@/repository/user/login';
import { useUserContext } from '@/context/UserContext';

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginErr, setIsLoginErr] = useState(false);

  const { handleUserLogin } = useUserContext();

  const navigate = useNavigate();

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onPassChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLoginErr(false);
    setIsLoading(true);

    try {
      const request = await login({ email, password });

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

  return (
    <Container className="z-20">
      <Flexer flexDirection="col" className="justify-center h-screen">
        <LoginForm
          isLoading={isLoading}
          onEmailChange={onEmailChange}
          onPassChange={onPassChange}
          email={email}
          password={password}
          handleSubmit={handleSubmit}
        />
        {isLoginErr && (
          <div className="self-center w-full max-w-[500px] pt-4 ">
            <Alert>There is a problem, please try again</Alert>
          </div>
        )}
      </Flexer>
    </Container>
  );
};

export default Login;
