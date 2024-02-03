import type { Dispatch, SetStateAction, SyntheticEvent } from 'react';

export interface CreateTouristPayload {
  tourist_email: string;
  tourist_location: string;
  tourist_name: string;
}

export interface useCreateTouristProps {
  token: string;
  payload: CreateTouristPayload;
  setMsg: Dispatch<
    SetStateAction<{
      type: string;
      msg: string;
    }>
  >;
  refetch: () => void;
}

export interface UseCreateTouristResponse {
  isLoading: boolean;
  isModalOpen: boolean;
  handleOpenCreate: () => void;
  handleCloseCreate: () => void;
  handleCreateTourist: (e: SyntheticEvent) => void;
}
