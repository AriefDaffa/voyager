import { FaPlaneDeparture } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import type { ChangeEvent, FC, SyntheticEvent } from 'react';

import Flexer from '@/components/Flexer';
import Header from '@/components/Typography/Header';
import SubHeader from '@/components/Typography/SubHeader';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { primary } from '@/constants/colors';

interface LoginFormProps {
  email: string;
  password: string;
  isLoading: boolean;
  onEmailChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onPassChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: SyntheticEvent) => void;
}

const LoginForm: FC<LoginFormProps> = ({
  email,
  password,
  isLoading,
  onEmailChange,
  onPassChange,
  handleSubmit,
}) => {
  const navigate = useNavigate();

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 py-4 px-6 rounded-md max-w-[500px] self-center w-full  bg-white md:border md:shadow-2xl"
    >
      <FaPlaneDeparture size={36} color={primary} />
      <Flexer flexDirection="col" className="gap-1 my-4">
        <Header>
          <div>
            Sign In to <span className="text-primary">Voyager</span>
          </div>
        </Header>
        <SubHeader>
          New Here?{' '}
          <span
            onClick={() => navigate('/register')}
            className="underline underline-offset-2 cursor-pointer"
          >
            Create an account
          </span>
        </SubHeader>
      </Flexer>
      <Flexer flexDirection="col" className="gap-4">
        <Input
          id="login-email"
          inputType="email"
          label="Email"
          placeholder="email@mail.com"
          value={email}
          onChange={onEmailChange}
        />
        <Input
          id="login-password"
          inputType="password"
          label="Password"
          placeholder=""
          value={password}
          onChange={onPassChange}
        />
      </Flexer>
      <div className="w-full mt-3">
        <Button
          text={isLoading ? 'Loading...' : 'Submit'}
          className="w-full"
          disabled={isLoading}
        />
      </div>
    </form>
  );
};

export default LoginForm;
