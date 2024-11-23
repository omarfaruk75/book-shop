import { Request, Response } from "express";
import { productServices } from "./products.service";

const createProduct = async(req:Request,res:Response)=>{
   try {
     const {data:productData}= req.body;
    const result =await productServices.createProductIntoDB(productData)
    res.status(200).json({
        message:"Book created successfully",
        success:true,
        data:result

    })
   }  catch (error) {
    res.json({
        status:false,
        message:'Something went wrong',
        error
    })

}
}
const getAllProducts = async(req:Request,res:Response)=>{
   try {
    const result =await productServices.getAllProductsFromDB()
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

const getSingleProduct = async(req:Request,res:Response)=>{
   try {
    const productId = req.params.id;
    const result =await productServices.getSingleProductFromDB(productId)
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

const updateSingleProduct = async(req:Request,res:Response)=>{
   try {
    console.log(req.params);
    const productId = req.params.productId;
    const body = req.body; 
    const result =await productServices.updateSingleProductFromDB(productId,body)
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


const deleteSingleProduct = async(req:Request,res:Response)=>{
   try {
    const productId = req.params.id;
    const result =await productServices.deleteSingleProductFromDB(productId)
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

export const productControllers = {
    createProduct,getAllProducts,getSingleProduct,updateSingleProduct,deleteSingleProduct
}
