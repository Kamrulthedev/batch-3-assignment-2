"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
const zod_1 = require("zod");
exports.productSchema = zod_1.z.object({
    name: zod_1.z.string()
        .max(20, { message: "This Name is not find please 20 characters" })
        .min(1, { message: "First name is required" }),
    description: zod_1.z.string(),
    price: zod_1.z.number()
        .min(5, { message: "First Price is required" }),
    category: zod_1.z.string(),
    tags: zod_1.z.array(zod_1.z.string()),
    variants: zod_1.z.array(zod_1.z.object({
        type: zod_1.z.string(),
        value: zod_1.z.string()
    })),
    inventory: zod_1.z.object({
        quantity: zod_1.z.number(),
        inStock: zod_1.z.boolean()
    })
});
