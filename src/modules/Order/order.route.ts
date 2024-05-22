import  express  from "express"
import { OrderControllar } from "./order.controllar"


const router = express.Router()

router.post('/orders' , OrderControllar.createOrderDb)

export const OrderRouter = router;