import express from "express";
import { OrderControllar } from "./order.controllar";

const router = express.Router();
//create a order
router.post("/orders", OrderControllar.createOrderDb);
//get all order
router.get("/orders", OrderControllar.getallOrderDb);

export const OrderRouter = router;
