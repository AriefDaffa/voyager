export interface ProfileResponse {
  id: string;
  email: string;
  password: string;
  name: string;
  avatar: string;
}

export interface UseGetProfileProps {
  id: string;
  token: string;
}

export interface UseGetProfileResponse {
  isLoading: boolean;
  isError: boolean;
  data: ProfileResponse;
}
