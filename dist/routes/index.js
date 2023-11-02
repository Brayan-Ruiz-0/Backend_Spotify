"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const test_routes_1 = __importDefault(require("./test.routes"));
/* import loginRouter from "./login.routes" */
const artists_routes_1 = __importDefault(require("./artists.routes"));
const health_routes_1 = __importDefault(require("./health.routes"));
const Router = express_1.default.Router();
Router.use("/test", test_routes_1.default);
/* Router.use("/login", loginRouter); */
Router.use("/artists", artists_routes_1.default);
Router.use("/health", health_routes_1.default);
exports.default = Router;
