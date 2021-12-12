import Knex from 'knex';
import { DATABASE } from '../constants';

const knex = Knex({
  client: 'mysql2',
  connection: {
    host: DATABASE.DB_HOST,
    user: DATABASE.DB_USERNAME,
    password: DATABASE.DB_PASSWORD,
    database: DATABASE.DB_NAME,
  },
});

export default knex;
