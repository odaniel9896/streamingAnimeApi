import { HttpResponse } from '../../presentation/protocols';

export function ok(payload = {}): HttpResponse {
	return {
		statusCode: 200,
		body: {
			success: true,
			message: 'request successful',
			payload,
			errors: [],
		},
	};
}

export function okWithHeader(payload = {}, headers: any): HttpResponse {
	return { ...ok(payload), headers };
}

export function badRequest(errors: any = []): HttpResponse {
	return {
		statusCode: 400,
		body: {
			success: false,
			message: 'invalid request params',
			payload: {},
			errors,
		},
	};
}

export function serverError(errors: any = []): HttpResponse {
	console.log(errors);
	return {
		statusCode: 500,
		body: {
			success: false,
			message: 'internal server error',
			payload: {},
			errors: {},
		},
	};
}

export function notFound(param: string, payload: any = {}): HttpResponse {
	return {
		statusCode: 404,
		body: {
			success: false,
			message: 'not found',
			payload,
			errors: [
				{
					message: `${param} not found`,
					param,
				},
			],
		},
	};
}

export function unauthorized(): HttpResponse {
	return {
		statusCode: 401,
		body: {
			success: false,
			message: 'unauthorized',
			payload: {},
			errors: [
				{
					message: 'token invalid',
					param: 'token',
				},
			],
		},
	};
}

export function conflict(
	param: string,
	message = 'already exists'
): HttpResponse {
	return {
		statusCode: 409,
		body: {
			success: false,
			message: 'conflict',
			payload: {},
			errors: [
				{
					message: `${param} ${message}`,
					param,
				},
			],
		},
	};
}
