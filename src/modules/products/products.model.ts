import { Schema, model } from 'mongoose';
import { IProduct } from './products.interface';

export const productSchema = new Schema<IProduct>(
  {
    author: { type: String, required: true },
    title: { type: String, required: true, unique: true },
    price: {
      type: Number,
      required: [true, '{VALUE} must be a positive number'],
      validate: {
        validator: function (value) {
          return value > 0;
        },
        message: 'Price must be a positive number',
      },
    },
    category: {
      type: String,
      enum: ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
      required: true,
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  },
);

export const Product = model<IProduct>('Product', productSchema);
