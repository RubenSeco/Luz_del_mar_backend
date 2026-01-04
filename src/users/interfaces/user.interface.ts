
export interface User {

  id: string;
  userName: string;
  password: string;
  roles: Role[];
}

export enum Role {
  User = "USER",
  Admin = "ADMIN"
}