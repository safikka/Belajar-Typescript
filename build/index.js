"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chicken_1 = require("./chicken");
const interface_1 = require("./interface");
console.log('Hello World!');
const chicken = new chicken_1.Chicken;
chicken.cluck();
const coreI5 = {
    brand: "Intel",
    baseModel: "Core i5",
    modelName: "i5-13400",
    clockSpeed: 36000,
    coreTotal: "octacore",
    turboBoost: true
};
(0, interface_1.createIntel)(coreI5);
