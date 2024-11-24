import express from 'express';
import { orderControllers } from './orders.controller';

const router = express.Router();

router.post('/create-order', orderControllers.createOrder);
router.get('/orders', orderControllers.getAllOrders);
router.get('/revenue', orderControllers.calculateRevenue);

export const orderRoutes = router;
