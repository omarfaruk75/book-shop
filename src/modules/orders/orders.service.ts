import { IOrder } from './orders.interface';
import { Order } from './orders.model';

const createOrderIntoDB = async (order: IOrder): Promise<IOrder> => {
  const result = await Order.create(order);
  return result;
};
const getAllOrdersFromDB = async () => {
  const result = await Order.find();
  return result;
};
const getRevenueByOrderFromDB = async () => {
  try {
    const revenue = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: '$totalPrice' },
        },
      },
      {
        $project: {
          _id: 0,
          totalRevenue: 1,
        },
      },
    ]);
    return revenue[0]?.totalRevenue || 0;
  } catch (error) {
    throw new Error(`Error calculating revenue: ${error}`);
  }
};

export const orderServices = {
  createOrderIntoDB,
  getRevenueByOrderFromDB,
  getAllOrdersFromDB,
};
