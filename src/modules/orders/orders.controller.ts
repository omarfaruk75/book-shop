import { Request, Response } from "express";
import { orderServices } from "./orders.service";
import { Order } from "./orders.model";


const createOrder = async(req:Request,res:Response)=>{
   try {
    const {data:orderData}= req.body
    const result =await orderServices.createOrderIntoDB(orderData)
    res.status(200).json({
        message:"Book created successfully",
        success:true,
        data:result

    })
   } catch (error) {
    res.json({
        status:false,
        message:'Something went wrong',
        error
    })
}
}
const getAllOrders = async(req:Request,res:Response)=>{
   try {
    const result =await orderServices.getAllOrdersFromDB()
    res.status(200).json({
        message:"Book retrieved successfully",
        success:true,
        data:result

    })
   } catch (error) {
    res.json({
        status:false,
        message:'Something went wrong',
        error
    })
   }
}

const getSingleOrder = async(req:Request,res:Response)=>{
   try {
    const orderId = req.params.id;
    const result =await orderServices.getSingleOrderFromDB(orderId)
    res.status(200).json({
        message:"Book retrieved successfully",
        success:true,
        data:result

    })
   } catch (error) {
    res.json({
        status:false,
        message:'Something went wrong',
        error
    })
   }
}

const updateSingleOrder = async(req:Request,res:Response)=>{
   try {
    const orderId = req.params.orderId;
    const body = req.body; 
    const result =await orderServices.updateSingleOrderFromDB(orderId,body)
    res.status(200).json({
        message:"Book updated successfully",
        success:true,
        data:result

    })
   } catch (error) {
    res.json({
        status:false,
        message:'Something went wrong',
        error
    })
   }
}


const deleteSingleOrder = async(req:Request,res:Response)=>{
   try {
    const orderIdd = req.params.id;
    const result =await orderServices.deleteSingleOrderFromDB(orderIdd)
    res.status(200).json({
        message:"Book Deleted successfully",
        success:true,
        data:result

    })
   } catch (error) {
    res.json({
        status:false,
        message:'Something went wrong',
        error
    })
   }
}
export const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue  =await orderServices.getRevenueByOrderFromDB()
    res.status(200).json({
      message: "Revenue calculated successfully",
      success: true,
      data:totalRevenue ,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to calculate revenue",
      success: false,
      error,
    });
  }
};

export const orderControllers = {
    createOrder,getAllOrders,getSingleOrder,updateSingleOrder,deleteSingleOrder,calculateRevenue
}