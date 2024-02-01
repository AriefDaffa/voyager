import { FaPlaneDeparture } from 'react-icons/fa';
import type { FC } from 'react';

import Flexer from '@/components/Flexer';
import Header from '@/components/Typography/Header';
import SubHeader from '@/components/Typography/SubHeader';
import { primary } from '@/constants/colors';
import Button from '@/components/Button';

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = () => {
  return (
    <form className="flex flex-col gap-4 py-4 px-6 rounded-md max-w-[500px] self-center w-full  bg-white md:border md:shadow-2xl">
      <FaPlaneDeparture size={36} color={primary} />
      <Flexer flexDirection="col" className="gap-1 my-4">
        <Header>
          <div>
            Sign In to <span className="text-primary">Voyager</span>
          </div>
        </Header>
        <SubHeader>
          New Here?{' '}
          <a className="underline underline-offset-2 cursor-pointer">
            Create an account
          </a>
        </SubHeader>
      </Flexer>
      <Flexer flexDirection="col" className="gap-4">
        <Flexer flexDirection="col" className="gap-1">
          <label className="text-sm font-semibold">Email</label>
          <input
            className="p-2 outline-none border border-[#dadada] rounded-md"
            type="email"
          />
        </Flexer>
        <Flexer flexDirection="col" className="gap-1">
          <label className="text-sm font-semibold">Password</label>
          <input
            className="p-2 outline-none border border-[#dadada] rounded-md"
            type="password"
          />
        </Flexer>
      </Flexer>
      <Button text="Submit" />
    </form>
  );
};

export default LoginForm;
