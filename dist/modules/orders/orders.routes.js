"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderRoutes = void 0;
const express_1 = __importDefault(require("express"));
const orders_controller_1 = require("./orders.controller");
const router = express_1.default.Router();
router.post('/create-order', orders_controller_1.orderControllers.createOrder);
router.get('/orders', orders_controller_1.orderControllers.getAllOrders);
router.get('/revenue', orders_controller_1.orderControllers.calculateRevenue);
exports.orderRoutes = router;
