export interface user {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmation: string;
  gender: string;
  state: {
    value: string;
  };
  picture: FileList;
  terms?: boolean;
}

export interface StateUser {
  name: string;
  age: number;
  email: string;
  password: string;
  gender: string;
  state: string;
  picture: string | unknown;
}
