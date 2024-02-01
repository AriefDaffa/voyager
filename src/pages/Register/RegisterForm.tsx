import { FaPlaneDeparture } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import type { FC } from 'react';

import Flexer from '@/components/Flexer';
import Header from '@/components/Typography/Header';
import SubHeader from '@/components/Typography/SubHeader';
import Button from '@/components/Button';
import Input from '@/components/Input';
import { primary } from '@/constants/colors';

interface RegisterFormProps {}

const RegisterForm: FC<RegisterFormProps> = () => {
  const navigate = useNavigate();

  return (
    <form className="flex flex-col gap-4 py-4 px-6 rounded-md max-w-[500px] self-center w-full  bg-white md:border md:shadow-2xl">
      <FaPlaneDeparture size={36} color={primary} />
      <Flexer flexDirection="col" className="gap-1 my-4">
        <Header>
          <div>
            Sign Up to <span className="text-primary">Voyager</span>
          </div>
        </Header>
        <SubHeader>
          Already have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            className="underline underline-offset-2 cursor-pointer"
          >
            Sign In
          </span>
        </SubHeader>
      </Flexer>
      <Flexer flexDirection="col" className="gap-4">
        <Input
          id="login-name"
          inputType="text"
          label="Name"
          placeholder="John"
        />
        <Input
          id="login-email"
          inputType="email"
          label="Email"
          placeholder="email@mail.com"
        />
        <Input
          id="login-password"
          inputType="password"
          label="Password"
          placeholder=""
        />
      </Flexer>
      <div className="w-full mt-3">
        <Button text="Submit" className="w-full" />
      </div>
    </form>
  );
};

export default RegisterForm;
