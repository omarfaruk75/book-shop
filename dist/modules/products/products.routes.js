"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.porductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const products_controller_1 = require("./products.controller");
const router = express_1.default.Router();
router.post('/create-product', products_controller_1.productControllers.createProduct);
router.get('/', products_controller_1.productControllers.getAllProducts);
router.get('/:productId', products_controller_1.productControllers.getSingleProduct);
router.put('/:productId', products_controller_1.productControllers.updateSingleProduct);
router.delete('/:productId', products_controller_1.productControllers.deleteSingleProduct);
exports.porductRoutes = router;
