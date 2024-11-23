import express from "express"
import { calculateRevenue, orderControllers } from "./orders.controller";



const router = express.Router();

router.post('/create-order',orderControllers.createOrder);
router.get('/orders',orderControllers.getAllOrders);
router.get('/:orderId',orderControllers.getSingleOrder);
router.put('/:orderId',orderControllers.updateSingleOrder);
router.delete('/:orderId',orderControllers.deleteSingleOrder);
router.get('/revenue', orderControllers.calculateRevenue);

export const orderRoutes = router;