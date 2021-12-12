import { Router } from 'express';
import { adaptRoute } from '../adapters/adaptRoute';
import { makeLoginController } from '../factories/controllers/authentication/makeLoginFactory';

export default (routes: Router) => {
  routes.get('/login', adaptRoute(makeLoginController()));
};
