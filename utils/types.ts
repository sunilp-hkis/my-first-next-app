export interface Params {
  params: {
    slug: string;
  };
}

export interface SignupPayload {
  name: string;
  email: string;
  password: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface Toast {
  message: string;
  toast: boolean;
}
