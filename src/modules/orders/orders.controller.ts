import { Request, Response } from 'express';
import { orderServices } from './orders.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const result = await orderServices.createOrderIntoDB(data);
    res.status(200).json({
      message: 'Book created successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.json({
      status: false,
      message: 'Something went wrong',
      error,
    });
  }
};
const getAllOrders = async (req: Request, res: Response) => {
  try {
    const result = await orderServices.getAllOrdersFromDB();
    res.status(200).json({
      message: 'Book retrieved successfully',
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: 'Something went wrong',
      error,
    });
  }
};

const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await orderServices.getRevenueByOrderFromDB();
    res.status(200).json({
      message: 'Revenue calculated successfully',
      success: true,
      data: { totalRevenue },
    });
  } catch (error) {
    res.status(404).json({
      message: 'Failed to calculate revenue',
      success: false,
      error,
    });
  }
};

export const orderControllers = {
  createOrder,
  getAllOrders,
  calculateRevenue,
};
