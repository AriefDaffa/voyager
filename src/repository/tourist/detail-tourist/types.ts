export interface DetailTouristResponse {
  $id: string;
  createdat: string;
  id: string;
  tourist_email: string;
  tourist_profilepicture: string;
  tourist_location: string;
  tourist_name: string;
}

export interface UseGetDetailTouristProps {
  id: string;
  token: string;
}

export interface UseGetDetailTouristResponse {
  isLoading: boolean;
  isError: boolean;
  data: DetailTouristResponse;
}
