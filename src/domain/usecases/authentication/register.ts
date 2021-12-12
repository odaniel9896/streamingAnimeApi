export interface RegisterParams {
  email: string;
  password: string;
  prefix_id?: number;
  name?: string;
}

export interface Register {
  add(registerParams: RegisterParams): Promise<number>;
}
