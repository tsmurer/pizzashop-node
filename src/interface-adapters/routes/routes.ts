import { Request, Response, Express } from 'express';

export default function useRoutes(app: Express) {

    app.get('/', (req: Request, res: Response) => {
        res.send('Express + TypeScript Server');
      });

    app.get('/user', (req: Request, res: Response) => {
        res.send('testing user endpoint');
      });

    app.post('/create-item', function(req, res) {
        console.log('receiving data ...');
        console.log('body is ',req.body);
        res.send(req.body);
    });
      
}