type googleDetails = {
  id: string;
  name: string;
  email: string;
};

export type User = {
  id: GUID;
  email: string;
  name: string;
  google: googleDetails;
  photo: string;
  session: string;
  iat: number;
  exp: number;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

export type UserSliceState = {
  user: User | null;
  status: Status;
};

export type UserResponse = {
  google: {
    id: string;
    name: string;
    email: string;
  };
  _id: string;
  email: string;
  __v: number;
  name: string;
  photo: string;
};
