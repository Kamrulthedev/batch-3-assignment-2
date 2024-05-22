import cors from "cors";
import express, { Application, Request, Response } from "express";
import bodyPaser from "body-parser";
import { ProductRouter } from "./modules/Product/product.route";
import { OrderRouter } from "./modules/Order/order.route";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(bodyPaser.json());

app.use("/api/products", ProductRouter);
app.use("/api/orders", OrderRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Prodects!");
});

export default app;
