import { getTollFee } from "./calculator.js";
import { Car } from "./domain/vehicle.js";

const fee = getTollFee(
    new Car(),
    new Date("2021-01-04T16:18:00"), // 22
    new Date("2021-01-04T17:19:00") // 16
);
console.log(fee);
