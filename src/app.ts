import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { porductRoutes } from './modules/products/products.routes';
import { orderRoutes } from './modules/orders/orders.routes';
const app: Application = express();

//parsers
app.use('/', express.json());
app.use(cors());

//application routes
app.use('/api/products', porductRoutes);
app.use('/api/products/productId', porductRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/orders/orderId', orderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Server is Live',
  });
});

export default app;
