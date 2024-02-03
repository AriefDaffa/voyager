import type { Dispatch, SetStateAction, SyntheticEvent } from 'react';

export interface UpdateTouristPayload {
  tourist_email: string;
  tourist_location: string;
  tourist_name: string;
}

export interface useUpdateTouristProps {
  id: string;
  token: string;
  payload: UpdateTouristPayload;
  setMsg: Dispatch<
    SetStateAction<{
      type: string;
      msg: string;
    }>
  >;
  refetch: () => void;
}

export interface UseUpdateTouristResponse {
  isLoading: boolean;
  isModalOpen: boolean;
  handleOpenUpdate: () => void;
  handleCloseUpdate: () => void;
  handleUpdateTourist: (e: SyntheticEvent) => void;
}
