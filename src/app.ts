import cors from "cors";
import express, { Application, Request, Response } from "express";
import { ProductRouter } from "./modules/Product/product.route";
import { OrderRouter } from "./modules/Order/order.route";

const app: Application = express();

app.use(express.json());
app.use(cors());


app.use('/api', ProductRouter)
app.use('/api', OrderRouter)

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Prodects!");
});

export default app;
