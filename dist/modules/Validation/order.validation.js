"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderSchema = void 0;
const zod_1 = require("zod");
//validated for Orders
exports.orderSchema = zod_1.z.object({
    email: zod_1.z
        .string()
        .email({ message: "Invalid email format" })
        .min(1, { message: "Email is required" }),
    productId: zod_1.z.string(),
    price: zod_1.z.number({ message: "Please type in the Number Price" }),
    quantity: zod_1.z.number(),
});
