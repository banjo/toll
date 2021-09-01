import { getTollFee } from "./calculator.js";
import { Car } from "./domain/vehicle.js";

const fee = getTollFee(
    new Car(),
    new Date("2021-01-04T15:19:00"), // 16
    new Date("2021-01-04T16:10:00"), // 22
    new Date("2021-01-04T16:20:00"), // 22
    new Date("2021-01-04T16:22:00") // 22
    // new Date("2021-01-04T11:12:00"), // 9
    // new Date("2021-01-04T11:13:00") // 9
);
console.log(fee);
