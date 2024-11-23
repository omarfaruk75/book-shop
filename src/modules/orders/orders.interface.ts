import mongoose, { Date } from "mongoose";

export interface IOrder extends Document {
  email: string;
  product: mongoose.Types.ObjectId; 
  quantity: number;
  totalPrice: number;
  createdAt?: Date; 
  updatedAt?: Date; 
}