import { Request, Response } from "express";
import { OrderService } from "./order.service";


//create order
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

//get by all Orders
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


//get Order by email 
const getOrderByEmailDb = async(req:Request, res:Response)=>{
  try{
    const emailData = req.query.email as string
     if(!emailData){
  return res.status(400).json({
    success: false,
    message: 'not found your email!!',
});
 }
 const result = await OrderService.getOrderByEmail(emailData);
 res.status(200).json({
  success:true,
  message:"Orders get by email in the successfully.",
  data:result
 })
  }catch(err:any){
    res.status(500).json({
      success:false,
      message:"Orders Fetched UnSuccessfully",
      data:err
    })
  }
};


export const OrderControllar = {
  createOrderDb,
  getallOrderDb,
  getOrderByEmailDb
};
