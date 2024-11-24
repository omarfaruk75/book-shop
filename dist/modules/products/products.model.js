"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.productSchema = void 0;
const mongoose_1 = require("mongoose");
exports.productSchema = new mongoose_1.Schema({
    author: { type: String, required: true },
    title: { type: String, required: true, unique: true },
    price: {
        type: Number,
        required: [true, '{VALUE} must be a positive number'],
        validate: {
            validator: function (value) {
                return value > 0;
            },
            message: 'Price must be a positive number',
        },
    },
    category: {
        type: String,
        enum: ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
        required: true,
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
}, {
    timestamps: true,
});
exports.Product = (0, mongoose_1.model)('Product', exports.productSchema);
