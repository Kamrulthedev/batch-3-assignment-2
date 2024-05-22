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

// //get by all Orders
// const getallOrderDb = async (req: Request, res: Response) => {
//   try {
//     const result = await OrderService.getallOrder();
//     res.status(200).json({
//       success: true,
//       message: "Orders fetched successfully!",
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: "You are Worng data",
//       error: err,
//     });
//   }
// };

const getallOrderDb = async (req: Request, res: Response) => {
  try {
    const email = req.query.email as string | undefined;
    let result;
    if (email) {
      result = await OrderService.getOrderByEmail(email);
      if (!result.length) {
        return res.status(404).json({
          success: false,
          message: "No orders found for the specified email",
        });
      }
    } else {
      result = await OrderService.getallOrder();
    }

    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Something went wrong while fetching orders",
      error: error.message,
    });
  }
};

// const getOrderByEmailDb = async (req: Request, res: Response) => {
//   try {
//       const email = req.query.email as string;
//       if (!email) {
//           return res.status(400).json({
//               success: false,
//               message: "Email query parameter is required",
//           });
//       }
//       const result = await OrderService.getOrderByEmail(email);
//       res.status(200).json({
//           success: true,
//           message: "Orders fetched successfully!",
//           data: result,
//       });
//   } catch (error: any) {
//       res.status(500).json({
//           success: false,
//           message: "Something went wrong while fetching orders",
//           error: error.message,
//       });
//   }
// };

export const OrderControllar = {
  createOrderDb,
  getallOrderDb,
};
