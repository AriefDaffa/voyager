import { useCallback, useEffect, useMemo, useState } from 'react';

import { logout } from '@/utils/logout';

import { listTourist } from '.';
import type {
  ListTouristResponse,
  UseGetListTouristProps,
  UseGetListTouristResponse,
} from './types';

const defaultValue = {
  page: '1',
  per_page: 0,
  totalrecord: 0,
  total_pages: 0,
  tourists: [
    {
      $id: '',
      createdat: '',
      id: '',
      tourist_email: '',
      tourist_profilepicture: '',
      tourist_location: '',
      tourist_name: '',
    },
  ],
};

const useGetListTourist = ({
  token,
  page,
}: UseGetListTouristProps): UseGetListTouristResponse => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState<ListTouristResponse>(defaultValue);

  const fetchListTourist = useCallback(async () => {
    try {
      setIsLoading(true);

      const req = await listTourist(token, page);

      const resp = await req.json();

      setIsLoading(false);

      if (req.status >= 200 && req.status < 400) {
        if (resp?.page) {
          setData({ ...resp, tourists: resp?.data });
        }
      } else if (req.status === 401) {
        logout();
      } else if (req.status === 404) {
        window.location.href = '/tourists';
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  }, [page, token]);

  useEffect(() => {
    fetchListTourist();
  }, [fetchListTourist]);

  return useMemo(() => {
    return { data, isLoading, isError, refetch: fetchListTourist };
  }, [data, fetchListTourist, isError, isLoading]);
};

export default useGetListTourist;
