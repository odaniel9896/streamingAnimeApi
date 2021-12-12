import { Router } from 'express';
import { adaptRoute } from '../adapters/adaptRoute';
import { makeRegisterFactory } from '../factories/controllers/authentication';
import { makeLoginController } from '../factories/controllers/authentication/makeLoginFactory';

export default (routes: Router) => {
  routes.post('/login', adaptRoute(makeLoginController()));
  routes.post('/register', adaptRoute(makeRegisterFactory()));
};
