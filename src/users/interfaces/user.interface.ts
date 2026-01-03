import { UUID } from "crypto";

export interface User {

  id: string;
  userName: string;
  password: string;
  role: string;
}