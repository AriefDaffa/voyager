import { useCallback, useEffect, useMemo, useState } from 'react';

import { profile } from '.';
import type {
  ProfileResponse,
  UseGetProfileProps,
  UseGetProfileResponse,
} from './types';

const defaultValue = {
  id: '',
  email: '',
  password: '',
  name: '',
  avatar: '',
};

const useGetProfile = ({
  id,
  token,
}: UseGetProfileProps): UseGetProfileResponse => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<ProfileResponse>(defaultValue);

  const fetchProfile = useCallback(async () => {
    try {
      setIsLoading(true);

      const req = await profile(id, token);

      const resp = await req.json();

      setIsLoading(false);

      if (req.status >= 200 && req.status < 400) {
        if (resp?.email) {
          setData(resp);
        }
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  }, [id, token]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return useMemo(() => {
    return { data, isLoading, isError };
  }, [data, isError, isLoading]);
};

export default useGetProfile;
