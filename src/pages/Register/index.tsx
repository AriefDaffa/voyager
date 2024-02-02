import { useEffect, useState } from 'react';
import type { ChangeEvent, FC, SyntheticEvent } from 'react';

import Container from '@/components/Container';
import Flexer from '@/components/Flexer';
import { register } from '@/repository/user/register';

import RegisterForm from './RegisterForm';
import Toast from '@/components/Toast';

interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [toastMsg, setToastMsg] = useState({ type: '', msg: '' });

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
    setIsLoading(true);

    try {
      const request = await register({ email, password, name });

      const response = await request.json();

      setIsLoading(false);

      if (request.status >= 200 && request.status < 400) {
        if (response?.data?.id) {
          setToastMsg({ type: 'success', msg: 'Account registered' });
        }
      } else {
        setToastMsg({
          type: 'warning',
          msg: 'There is a problem, please try again',
        });
      }
    } catch (error) {
      setIsLoading(false);
      setToastMsg({
        type: 'warning',
        msg: 'There is a problem, please try again',
      });
    }
  };

  useEffect(() => {
    if (toastMsg.type !== '') {
      setTimeout(() => {
        setToastMsg({ type: '', msg: '' });
      }, 2000);
    }
  }, [toastMsg]);

  return (
    <>
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
        </Flexer>
      </Container>
      {toastMsg.type !== '' && (
        <div className="absolute top-2 right-2">
          <Toast type={toastMsg.type}>{toastMsg.msg}</Toast>
        </div>
      )}
    </>
  );
};

export default Register;
