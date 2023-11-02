"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const test_contoller_1 = __importDefault(require("../controllers/test.contoller"));
const Router = express_1.default.Router();
Router.get('/', (req, res, next) => {
    const test = test_contoller_1.default.getTest();
    res.status(200).json({
        message: 'Hello World!',
        test
    });
});
exports.default = Router;
