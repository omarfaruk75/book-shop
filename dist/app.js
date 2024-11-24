"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const products_routes_1 = require("./modules/products/products.routes");
const orders_routes_1 = require("./modules/orders/orders.routes");
const app = (0, express_1.default)();
//parsers
app.use('/', express_1.default.json());
app.use((0, cors_1.default)());
//application routes
app.use('/api/products', products_routes_1.porductRoutes);
app.use('/api/products/productId', products_routes_1.porductRoutes);
app.use('/api/orders', orders_routes_1.orderRoutes);
app.use('/api/orders/orderId', orders_routes_1.orderRoutes);
app.get('/', (req, res) => {
    res.send({
        status: true,
        message: 'Server is Live',
    });
});
exports.default = app;
