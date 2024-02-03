import { useCallback, useEffect, useMemo, useState } from 'react';
import type { SyntheticEvent } from 'react';

import { register } from '.';
import type { RegisterPayload, UseRegisterResponse } from './types';

const useRegister = (props: RegisterPayload): UseRegisterResponse => {
  const { email, password, name } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [msg, setMsg] = useState({ type: '', msg: '' });

  const handleRegister = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      setIsLoading(true);

      try {
        const request = await register({
          email,
          password,
          name,
        });

        const response = await request.json();

        setIsLoading(false);

        if (request.status >= 200 && request.status < 400) {
          if (response?.data?.id) {
            setMsg({ type: 'success', msg: 'Account registered' });
          }
        } else {
          setMsg({
            type: 'warning',
            msg: 'There is a problem, please try again',
          });
        }
      } catch (error) {
        setIsLoading(false);
        setMsg({
          type: 'warning',
          msg: 'There is a problem, please try again',
        });
      }
    },
    [email, name, password]
  );

  useEffect(() => {
    if (msg.type !== '') {
      setTimeout(() => {
        setMsg({ type: '', msg: '' });
      }, 2000);
    }
  }, [msg.type]);

  return useMemo(() => {
    return { handleRegister, msg, isLoading };
  }, [handleRegister, isLoading, msg]);
};

export default useRegister;
