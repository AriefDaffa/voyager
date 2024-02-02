interface Tourist {
  $id: string;
  createdat: string;
  id: string;
  tourist_email: string;
  tourist_profilepicture: string;
  tourist_location: string;
  tourist_name: string;
}

export interface ListTouristResponse {
  page: string;
  per_page: number;
  totalrecord: number;
  total_pages: number;
  tourists: Tourist[];
}

export interface UseGetListTouristProps {
  token: string;
  page: number;
}

export interface UseGetListTouristResponse {
  isLoading: boolean;
  isError: boolean;
  data: ListTouristResponse;
}
