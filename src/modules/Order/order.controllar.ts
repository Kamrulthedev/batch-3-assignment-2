import { Request, Response } from "express";
import { OrderService } from "./order.service";



const createOrderDb = async(req:Request, res:Response)=>{
 try{    const Orderdata = req.body;
    const result = await OrderService.createOrder(Orderdata);
res.status(200).json({
    success:true,
    message:"Your Order Created Successfully",
    data:result
})
}catch(err:any){
    res.status(400).json({
        success:false,
        message:"This Order Not Create",
        error:err
    })
}
     
};


export const OrderControllar = {
    createOrderDb
};