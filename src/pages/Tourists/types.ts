export interface Tourists {
  $id: string;
  createdat: string;
  id: string;
  tourist_email: string;
  tourist_profilepicture: string;
  tourist_location: string;
  tourist_name: string;
}

export interface EditValArgs {
  name: string;
  email: string;
  location: string;
  id: string;
}
