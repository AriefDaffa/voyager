import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import type { FC } from 'react';

import type {
  DefaultUserVal,
  UserContextInterface,
  UserProvider,
} from './types';

const defaultVal = {
  $id: '',
  Email: '',
  Id: '',
  Name: '',
  Token: '',
};

const UserContext = createContext<UserContextInterface>({
  user: defaultVal,
  handleUserLogin: () => {},
});

export const UserContextProvider: FC<UserProvider> = ({ children }) => {
  const [user, setUser] = useState<DefaultUserVal>(() => {
    const storageVal = localStorage.getItem('voy-user');

    return storageVal ? JSON.parse(storageVal) : defaultVal;
  });

  const handleUserLogin = useCallback((val: DefaultUserVal) => {
    setUser(val);
  }, []);

  useEffect(() => {
    localStorage.setItem('voy-user', JSON.stringify(user));
  }, [user]);

  const value: UserContextInterface = useMemo(() => {
    return {
      user,
      handleUserLogin,
    };
  }, [handleUserLogin, user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => useContext(UserContext);
