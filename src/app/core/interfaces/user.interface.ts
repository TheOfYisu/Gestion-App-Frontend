export interface UserInterface {
  id: number;
  name: string;
  name2?: string;
  lastname: string;
  lastname2?: string;
  dni: string;
  dob: Date;
  phone: string;
  email: string;
  address: string;
  password?: string;
  created_at: Date;
  updated_at: Date;
}

export interface UsersInterface {
  users: UserInterface[];
}
