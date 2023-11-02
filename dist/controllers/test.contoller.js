"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TestController {
    static getTest() {
        const test = [
            {
                name: "test1",
                value: 20,
            },
            {
                name: "test2",
                value: 30,
            },
        ];
        return test;
    }
}
exports.default = TestController;
