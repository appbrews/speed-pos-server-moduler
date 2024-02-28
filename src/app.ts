import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to speed pos server!🔥');
});

// application routes
app.use('/api/v1/', router);

// Global error handler
app.use(globalErrorHandler);

// Not Found
app.use(notFound);

export default app;
