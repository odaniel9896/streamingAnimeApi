import { Router } from 'express';
import { adaptRoute } from '../adapters/adaptRoute';
import { makeLoginController } from '../factories/controllers/test';

export default (routes: Router) => {
	routes.get('/list', adaptRoute(makeLoginController()));
};
