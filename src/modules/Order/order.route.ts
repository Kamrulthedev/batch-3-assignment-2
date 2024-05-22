import express from "express";
import { OrderControllar } from "./order.controllar";




const router = express.Router();

//create a order
router.post("/", OrderControllar.createOrderDb);

//get all order
router.get("/", OrderControllar.getallOrderDb);

//getOrdersByEmail
router.get("/", OrderControllar.getOrderByEmailDb); 


export const OrderRouter = router;
