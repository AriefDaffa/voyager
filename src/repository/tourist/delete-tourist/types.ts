import type { Dispatch, SetStateAction } from 'react';

export interface DeleteTouristPayload {
  tourist_email: string;
  tourist_location: string;
  tourist_name: string;
}

export interface useDeleteTouristProps {
  id: string;
  token: string;
  payload: DeleteTouristPayload;
  setMsg: Dispatch<
    SetStateAction<{
      type: string;
      msg: string;
    }>
  >;
  refetch: () => void;
  clearPayload: () => void;
}

export interface UseDeleteTouristResponse {
  isLoading: boolean;
  isModalOpen: boolean;
  handleOpenDelete: () => void;
  handleCloseDelete: () => void;
  handleDeleteTourist: () => void;
}
