import { HttpRequest } from './http';

export interface Validation {
	validate(httpRequest: HttpRequest): void | Error;
}
