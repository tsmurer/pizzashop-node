import { Request, Response, Express } from 'express';

export default function useRoutes(app: Express) {

    app.get('/', (req: Request, res: Response) => {
        res.send('Express + TypeScript Server');
      });

    app.get('/user', (req: Request, res: Response) => {
        res.send('USER');
      });
      
}