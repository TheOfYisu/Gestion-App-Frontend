export interface DataInterface {
  id: number;
  name: string;
  lastname: string;
  // photo: string;
  roles: { id: number; name: string }[];
}
