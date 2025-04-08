import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { router } from './routes';

const app = express();
app.use(express.json());
app.use(cors());


app.use(router);
// Middleware para tratamento de erros




app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      message: err.message,
    });
  }
  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}); 

app.listen(3333, () => 
  console.log('Servidor rodando na port 3333')
);