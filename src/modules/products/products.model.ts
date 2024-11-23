import { Schema, model } from 'mongoose';
import { IProduct} from './products.interface';



export const productSchema = new Schema<IProduct>({
  author:{type: String, required: true}, 
  title :{type: String, required: true},   
  price:{type: Number, required: [true,"{VALUE} must be a positive number"],}, 
  category: { 
    type: String, 
    enum: ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'], 
    required: true 
  },       
  description:{type: String, required: true},
  quantity:{type: Number, required: true},
  inStock:{type:Boolean,default:true},

},
{
  timestamps: true,
//    toJSON: { virtuals: true },
//    toObject: { virtuals: true },
},

);

// productSchema.virtual('id').get( function (){
//     return this._id.toString()
// })


export const Product = model<IProduct>('Product', productSchema);