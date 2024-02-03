import { useNavigate } from 'react-router-dom';
import {
  SyntheticEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { useUserContext } from '@/context/UserContext';

import { login } from '.';
import type { LoginPayload, UseLoginResponse } from './types';

const useLogin = (props: LoginPayload): UseLoginResponse => {
  const { email, password } = props;

  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState({ type: '', msg: '' });

  const { handleUserLogin } = useUserContext();

  const handleLogin = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      setIsLoading(true);

      try {
        const request = await login({
          email,
          password,
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
          setMsg({
            type: 'warning',
            msg: 'Login failed, please try again',
          });
        }
      } catch (error) {
        setMsg({
          type: 'warning',
          msg: 'Login failed, please try again',
        });
      }
    },
    [email, handleUserLogin, navigate, password]
  );

  useEffect(() => {
    if (msg.type !== '') {
      setTimeout(() => {
        setMsg({ type: '', msg: '' });
      }, 2000);
    }
  }, [msg.type]);

  return useMemo(() => {
    return { handleLogin, msg, isLoading };
  }, [handleLogin, isLoading, msg]);
};

export default useLogin;
