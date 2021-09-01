import { getTollFee } from "./calculator.js";
import { Car } from "./domain/vehicle.js";

const fee = getTollFee(
    new Car(),
    new Date("2021-01-04T15:19:00"),
    new Date("2021-01-04T15:20:00"),
    new Date("2021-01-04T16:35:00")
);
console.log(fee);
