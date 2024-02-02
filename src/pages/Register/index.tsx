import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { ChangeEvent, FC, SyntheticEvent } from 'react';

import Container from '@/components/Container';
import Flexer from '@/components/Flexer';
import Alert from '@/components/Alert';
import { register } from '@/repository/user/register';

import RegisterForm from './RegisterForm';

interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isLoginErr, setIsLoginErr] = useState(false);

  const navigate = useNavigate();

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onPassChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setIsLoginErr(false);
    setIsLoading(true);

    try {
      const request = await register({ email, password, name });

      const response = await request.json();

      setIsLoading(false);

      if (request.status >= 200 && request.status < 400) {
        if (response?.data?.id) {
          navigate('/login');
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
        <RegisterForm
          email={email}
          name={name}
          password={password}
          onEmailChange={onEmailChange}
          onNameChange={onNameChange}
          onPassChange={onPassChange}
          isLoading={isLoading}
          handleSubmit={handleSubmit}
        />
        {isLoginErr && (
          <div className="self-center w-full max-w-[500px] pt-4 ">
            <Alert>There is a problem, please try again </Alert>
          </div>
        )}
      </Flexer>
    </Container>
  );
};

export default Register;
