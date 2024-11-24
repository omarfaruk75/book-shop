import mongoose from "mongoose";
import {z} from "zod";


const objectIdValidation = z.string().refine((id) => mongoose.Types.ObjectId.isValid(id), {
  message: "Invalid ObjectId",
});
const orderSchema =z.object({
  email: z.string(),
  product: objectIdValidation,
  quantity: z.number(),
  totalPrice:z.number(),
  createdAt: z.date(), 
  updatedAt: z.date()
})
export default orderSchema;