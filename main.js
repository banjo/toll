import { getTollFee } from "./calculator.js";
import { Car } from "./domain/vehicle.js";

const fee = getTollFee(
    new Car(),
    new Date("2021-01-04T12:00:00"),
    new Date("2021-01-04T11:30:00")
);
console.log(fee);
