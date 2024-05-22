import cors from "cors";
import express, { Application, Request, Response } from "express";
const app: Application = express();

app.use(express.json());
app.use(cors());

app.use('/api/products', )

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Prodects!");
});

export default app;
