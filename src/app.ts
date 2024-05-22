import cors from "cors";
import express, { Application, Request, Response } from 'express';
const app: Application = express();
const port = 5000;



app.listen(port, (req:Request, res:Response) => {
    console.log(`Example app listening on port ${port}`)
  });

  export default app;