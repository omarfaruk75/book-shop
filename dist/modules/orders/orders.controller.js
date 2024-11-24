"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderControllers = void 0;
const orders_service_1 = require("./orders.service");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { data: orderData } = req.body;
        const result = yield orders_service_1.orderServices.createOrderIntoDB(orderData);
        res.status(200).json({
            message: 'Book created successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.json({
            status: false,
            message: 'Something went wrong',
            error,
        });
    }
});
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield orders_service_1.orderServices.getAllOrdersFromDB();
        res.status(200).json({
            message: 'Book retrieved successfully',
            success: true,
            data: result,
        });
    }
    catch (error) {
        res.status(404).json({
            success: false,
            message: 'Something went wrong',
            error,
        });
    }
});
const calculateRevenue = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const totalRevenue = yield orders_service_1.orderServices.getRevenueByOrderFromDB();
        res.status(200).json({
            message: 'Revenue calculated successfully',
            success: true,
            data: { totalRevenue },
        });
    }
    catch (error) {
        res.status(404).json({
            message: 'Failed to calculate revenue',
            success: false,
            error,
        });
    }
});
exports.orderControllers = {
    createOrder,
    getAllOrders,
    calculateRevenue,
};
