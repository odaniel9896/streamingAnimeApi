import express from 'express';
import cors from 'cors';
import setupRoutes from './config/routes';

const server = express();

server.use(cors({ exposedHeaders: 'X-Total-Count' }));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

setupRoutes(server);

export default server;
