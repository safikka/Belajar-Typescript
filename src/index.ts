import { Chicken } from "./chicken"
import { Intel, createIntel } from "./interface";

console.log('Hello World!')

const chicken = new Chicken;
chicken.cluck();

const coreI5:Intel = {
    brand: "Intel",
    baseModel: "Core i5",
    modelName: "i5-13400",
    clockSpeed: 36000,
    coreTotal: "octacore",
    turboBoost: true
}

createIntel(coreI5);