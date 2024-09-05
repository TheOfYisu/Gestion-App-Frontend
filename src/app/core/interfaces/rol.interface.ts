export interface UserxRolInterface {
  id: number;
  id_rol?: {
    id: number;
    name: string;
  };
  id_users?: {
    id: 1;
    name: string;
    lastname: string;
  };
  status: number;
  created_at: Date;
  updated_at: Date;
}

export interface getUserxRolAllUserInterface {
  userxrol: UserxRolInterface[];
}
