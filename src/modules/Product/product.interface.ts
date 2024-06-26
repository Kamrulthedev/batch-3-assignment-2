import { Schema, model, connect } from "mongoose";

export type EVariant = {
  type: string;
  value: string;
};

export type EInventory = {
  quantity: number;
  inStock: boolean;
};


//creteing a EProduct Type
export type EProduct = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: EVariant[];
  inventory: EInventory;
};
