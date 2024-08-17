export interface user {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmation: string;
  gender: string;
  state: {
    value: string;
    // label: string;
  };
  picture: FileList;
  terms?: boolean;
}
