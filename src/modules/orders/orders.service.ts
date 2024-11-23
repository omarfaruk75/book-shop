import { IOrder } from "./orders.interface";
import { Order } from "./orders.model";


const createOrderIntoDB =async(order:IOrder):Promise<IOrder>=>{
    const result = await Order.create(order);
    return result;
}
const getAllOrdersFromDB = async () => {
  const result = await Order.find().populate("product"); // Populate product details
  return result;
};
const getRevenueByOrderFromDB = async () => {
  const result = await Order.aggregate([
    // Lookup product details
    {
      $lookup: {
        from: "products", // Collection name for products
        localField: "product", // Field in orders
        foreignField: "_id", // Field in products
        as: "productDetails", // Alias for product details
      },
    },
    // Unwind product details to simplify access
    {
      $unwind: "$productDetails",
    },
    // Calculate total price for each order
    {
      $project: {
        totalPrice: { $multiply: ["$productDetails.price", "$quantity"] }, // Compute price * quantity
      },
    },
    // Group all orders to calculate total revenue
    {
      $group: {
        _id: null, // No specific grouping
        totalRevenue: { $sum: "$totalPrice" }, // Sum of all total prices
      },
    },
  ]);

  // Handle the case where no revenue is calculated
  return result.length > 0 ? result[0].totalRevenue : 0;
};
// const getSingleOrderFromDB = async (id: string) => {
//   const result = await Order.findById(id).populate("product"); // Populate product details
//   return result;
// };
// const updateSingleOrderFromDB =async(id:string,data:IOrder)=>{
//     const result = await Order.findByIdAndUpdate(id,data,{new:true});
//     return result;
// }
// const deleteSingleOrderFromDB =async(id:string)=>{
//     const result = await Order.deleteOne({id});
//     return result;
// }

export const orderServices = {
  createOrderIntoDB,
getRevenueByOrderFromDB,
 getAllOrdersFromDB,
//   updateSingleOrderFromDB,
//   deleteSingleOrderFromDB,
//   getSingleOrderFromDB,
};