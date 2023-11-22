import { Request, Response, Express } from 'express';
import { createItemUseCase } from '../../core/use-cases/create-item-use-case';

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
        createItemUseCase(req.body)
        res.send(req.body);
    });
      
}