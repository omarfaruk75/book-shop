import { z } from "zod";


//creating zod validation schema
const productValidationSchema=z.object({
            title :z.string(),   
            author:z.string(),
            price:z.number().min(0,{message:"Price must be a positive number"}), 
            category: z.enum(['Fiction','Science','SelfDevelopment','Poetry','Religious']),        
            description:z.string(),
            quantity:z.number(),
            inStock:z.boolean(),
            createdAt:z.date(),
            updatedAt:z.date()
       })   
       
       export default productValidationSchema;