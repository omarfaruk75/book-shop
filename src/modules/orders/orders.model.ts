

import mongoose, { Schema } from "mongoose";
import { IOrder } from "./orders.interface";

const OrderSchema = new Schema<IOrder>(
  {
    email: { type: String, required: true },
    product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
  },
  {
    timestamps: true, // Enables createdAt and updatedAt
  }
);

export const Order = mongoose.model<IOrder>("Order", OrderSchema);
