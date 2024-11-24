import { Product } from './products.model';
import { IProduct } from './products.interface';

const createProductIntoDB = async (product: IProduct): Promise<IProduct> => {
  const result = await Product.create(product);
  return result;
};
const getAllProductsFromDB = async () => {
  const result = await Product.find();
  return result;
};
const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findOne({ id });
  return result;
};
const updateSingleProductFromDB = async (id: string, data: IProduct) => {
  const result = await Product.findByIdAndUpdate(id, data, { new: true });
  return result;
};
const deleteSingleProductFromDB = async (id: string) => {
  const result = await Product.deleteOne({ id });
  return result;
};

export const productServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  deleteSingleProductFromDB,
  getSingleProductFromDB,
  updateSingleProductFromDB,
};
