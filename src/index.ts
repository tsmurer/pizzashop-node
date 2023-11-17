import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import useRoutes from './interface-adapters/routes/routes';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(bodyParser.json());

useRoutes(app)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});