"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = void 0;
//validated with All Products and All Orders
const validate = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);
        next();
    }
    catch (error) {
        return res.status(400).json({
            success: false,
            message: error.errors[0].message,
        });
    }
};
exports.validate = validate;
