import mongoose, { Schema, model, connect, Types } from "mongoose";

export type EOrder = Document & {
  email: string;
  productId: Types.ObjectId;
  price: number;
  quantity: number;
};
