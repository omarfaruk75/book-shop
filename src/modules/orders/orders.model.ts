import mongoose, { Schema } from 'mongoose';
import { IOrder } from './orders.interface';

const OrderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        },
        message: (props) => `Invalid email: ${props.value}`,
      },
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true,
    },
    quantity: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);

export const Order = mongoose.model<IOrder>('Order', OrderSchema);
