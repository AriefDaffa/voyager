import { useCallback, useMemo, useState } from 'react';
import type { SyntheticEvent } from 'react';

import { updateTourist } from '.';
import type { UseUpdateTouristResponse, useUpdateTouristProps } from './types';

const useUpdateTourist = (
  props: useUpdateTouristProps
): UseUpdateTouristResponse => {
  const { payload, token, id, setMsg, refetch, clearPayload } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [updateModal, setUpdateModal] = useState(false);

  const handleOpenUpdate = () => {
    setUpdateModal(true);
  };

  const handleCloseUpdate = useCallback(() => {
    setUpdateModal(false);
    clearPayload();
  }, [clearPayload]);

  const handleUpdateTourist = useCallback(
    async (e: SyntheticEvent) => {
      e.preventDefault();
      setIsLoading(true);

      try {
        const request = await updateTourist(
          {
            tourist_email: payload.tourist_email,
            tourist_location: payload.tourist_location,
            tourist_name: payload.tourist_name,
          },
          id,
          token
        );

        const response = await request.json();

        setIsLoading(false);

        if (request.status >= 200 && request.status < 400) {
          if (response?.id) {
            setMsg({ type: 'success', msg: 'Tourist updated successfully ' });
            handleCloseUpdate();
            refetch();
          }
        } else {
          setMsg({
            type: 'warning',
            msg: 'Failed to update, please try again',
          });
        }
      } catch (error) {
        setIsLoading(false);
        setUpdateModal(false);
        clearPayload();
        setMsg({ type: 'warning', msg: 'Failed to delete, please try again' });
      }
    },
    [
      clearPayload,
      handleCloseUpdate,
      id,
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
      handleUpdateTourist,
      handleOpenUpdate,
      handleCloseUpdate,
      isModalOpen: updateModal,
    };
  }, [handleCloseUpdate, handleUpdateTourist, isLoading, updateModal]);
};

export default useUpdateTourist;
