import { useCallback, useEffect, useMemo, useState } from 'react';

import { logout } from '@/utils/logout';

import { detailTourist } from '.';
import type {
  DetailTouristResponse,
  UseGetDetailTouristProps,
  UseGetDetailTouristResponse,
} from './types';

const defaultValue = {
  $id: '',
  createdat: '',
  id: '',
  tourist_email: '',
  tourist_profilepicture: '',
  tourist_location: '',
  tourist_name: '',
};

const useGetTouristDetail = ({
  id,
  token,
}: UseGetDetailTouristProps): UseGetDetailTouristResponse => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<DetailTouristResponse>(defaultValue);

  const fetchDetailTourist = useCallback(async () => {
    try {
      setIsLoading(true);

      const req = await detailTourist(id, token);

      const resp = await req.json();

      setIsLoading(false);

      if (req.status >= 200 && req.status < 400) {
        if (resp?.id) {
          setData(resp);
        }
      } else if (req.status === 401) {
        logout();
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
    if (typeof id !== 'string') {
      return;
    }
    fetchDetailTourist();
  }, [fetchDetailTourist, id]);

  return useMemo(() => {
    return { data, isLoading, isError };
  }, [data, isError, isLoading]);
};

export default useGetTouristDetail;
