import { EOrder } from "./order.interface";
import { Order } from "./order.shema";

const createOrder = async (orderData: EOrder) => {
  const result = new Order(orderData);
  return await result.save();
};

const getallOrder = async () => {
  const result = await Order.find();
  return result;
};

const getOrderByEmail = async (email: string) => {
  return await Order.find({ email });
};

export const OrderService = {
  createOrder,
  getallOrder,
  getOrderByEmail
};
