export interface LoginParams {
  email: string;
  password: string;
}

export interface Login {
  auth(loginParams: LoginParams): Promise<string>;
}
