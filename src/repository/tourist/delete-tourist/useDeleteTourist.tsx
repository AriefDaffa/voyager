import { useCallback, useMemo, useState } from 'react';

import { deleteTourist } from '.';
import type { UseDeleteTouristResponse, useDeleteTouristProps } from './types';

const useDeleteTourist = (
  props: useDeleteTouristProps
): UseDeleteTouristResponse => {
  const { payload, token, id, setMsg, refetch, clearPayload } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const handleOpenDelete = () => {
    setDeleteModal(true);
  };

  const handleCloseDelete = useCallback(() => {
    setDeleteModal(false);
    clearPayload();
  }, [clearPayload]);

  const handleDeleteTourist = useCallback(async () => {
    try {
      const request = await deleteTourist(
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
      setDeleteModal(false);

      if (request.status >= 200 && request.status < 400) {
        if (response?.id) {
          setMsg({ type: 'success', msg: 'Tourist deleted successfully ' });
          handleCloseDelete();
          refetch();
        }
      } else {
        setMsg({
          type: 'warning',
          msg: 'Failed to delete, please try again',
        });
      }
    } catch (error) {
      setIsLoading(false);
      setDeleteModal(false);
      clearPayload();
      setMsg({ type: 'warning', msg: 'Failed to delete, please try again' });
    }
  }, [
    clearPayload,
    handleCloseDelete,
    id,
    payload.tourist_email,
    payload.tourist_location,
    payload.tourist_name,
    refetch,
    setMsg,
    token,
  ]);

  return useMemo(() => {
    return {
      handleDeleteTourist,
      isLoading,
      handleOpenDelete,
      handleCloseDelete,
      isModalOpen: deleteModal,
    };
  }, [deleteModal, handleCloseDelete, handleDeleteTourist, isLoading]);
};

export default useDeleteTourist;
