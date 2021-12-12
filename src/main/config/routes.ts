import { Express, Router } from 'express';
import { readdirSync } from 'fs';
import path from 'path';

export default (app: Express): void => {
  const router = Router();
  app.use('/api', router);

  const routesFolderPath = path.resolve(__dirname, '..', 'routes');

  readdirSync(routesFolderPath).map(async (file) => {
    (await import(`${routesFolderPath}/${file}`)).default(router);
  });
};
