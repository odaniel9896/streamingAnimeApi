export interface HttpRequest {
	body?: any;
	params?: any;
	query?: any;
	file?: Express.Multer.File;
	files?: any;
	// token?: TokenData;
	headers?: any;
}

export interface HttpResponse {
	statusCode: number;
	body?: any;
	headers?: any;
}
