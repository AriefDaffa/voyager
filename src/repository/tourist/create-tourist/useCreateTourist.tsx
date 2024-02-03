import { useCallback, useMemo, useState } from 'react';
import type { SyntheticEvent } from 'react';

import { createTourist } from '.';
import type { UseCreateTouristResponse, useCreateTouristProps } from './types';

const useCreateTourist = (
  props: useCreateTouristProps
): UseCreateTouristResponse => {
  const { payload, token, setMsg, refetch } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [createModal, setCreateModal] = useState(false);

  const handleOpenCreate = () => {
    setCreateModal(true);
  };

  const handleCloseCreate = () => {
    setCreateModal(false);
  };

  const handleCreateTourist = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      setIsLoading(true);

      try {
        const request = await createTourist(
          {
            tourist_email: payload.tourist_email,
            tourist_location: payload.tourist_location,
            tourist_name: payload.tourist_name,
          },
          token
        );

        const response = await request.json();

        setIsLoading(false);

        if (request.status >= 200 && request.status < 400) {
          if (response?.id) {
            setMsg({ type: 'success', msg: 'Tourist created successfully ' });
            handleCloseCreate();
            refetch();
          }
        } else {
          setMsg({
            type: 'warning',
            msg: 'Failed to create, please try again',
          });
        }
      } catch (error) {
        setIsLoading(false);
        setCreateModal(false);
        setMsg({ type: 'warning', msg: 'Failed to create, please try again' });
      }
    },
    [
      payload.tourist_email,
      payload.tourist_location,
      payload.tourist_name,
      refetch,
      setMsg,
      token,
    ]
  );

  return useMemo(() => {
    return {
      isLoading,
      handleCreateTourist,
      handleOpenCreate,
      handleCloseCreate,
      isModalOpen: createModal,
    };
  }, [handleCreateTourist, isLoading, createModal]);
};

export default useCreateTourist;
