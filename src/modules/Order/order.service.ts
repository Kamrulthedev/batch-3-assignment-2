import { EOrder } from "./order.interface";
import { Order } from "./order.shema";



const createOrder = async(orderData:EOrder)=>{
      const result = new Order(orderData)
      return await result.save();
};

export const OrderService = {
    createOrder
};