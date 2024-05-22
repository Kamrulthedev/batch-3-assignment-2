import { Request, Response } from "express";
import { OrderService } from "./order.service";

const createOrderDb = async (req: Request, res: Response) => {
  try {
    const Orderdata = req.body;
    const result = await OrderService.createOrder(Orderdata);
    res.status(200).json({
      success: true,
      message: "Your Order Created Successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(400).json({
      success: false,
      message: "This Order Not Create",
      error: err,
    });
  }
};

const getallOrderDb = async (req: Request, res: Response) => {
  try {
    const result = await OrderService.getallOrder();
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: "You are Worng data",
      error: err,
    });
  }
};

const getOrderByEmailDb = async(req:Request, res:Response)=>{
  try{
    const emailData = req.query.email as string
 if(!emailData){
  return res.status(400).json({
    success: false,
    message: 'Email query parameter is required',
});
 }
 const result = await OrderService.getOrderByEmail(emailData);
 res.status(200).json({
  success:true,
  message:"Orders fetched successfully for user email!",
  data:result
 })
  }catch(err:any){
    res.status(500).json({
      success:false,
      message:"Orders Fetched UnSuccessfully for user Email",
      data:err
    })
  }
}

export const OrderControllar = {
  createOrderDb,
  getallOrderDb,
  getOrderByEmailDb
};
