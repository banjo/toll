import { isTollFreeDate } from "./services/dateService.js";
import { calculateTollFee } from "./services/priceService.js";
import { isTollFreeVehicle } from "./services/vehicleService.js";

function getTollFee(vehicle, ...dates) {
    let totalFee = 0;
    const sortedDates = dates.sort((a, b) => a - b);

    for (const date of sortedDates) {
        if (isTollFreeVehicle(vehicle) || isTollFreeDate(date)) continue;
        // totalFee += calculateTollFee(vehicle, date);
    }

    return totalFee;
}

/**
 * Calculate the total toll fee for one day.
 *
 * @param {Vehicle} vehicle The vehicle.
 * @param {...Date} dates Date and time of all passages on one day.
 * @return {number} The total toll fee for that day.
 */
function getTollFeeOld(vehicle, ...dates) {
    var intervalStart = dates[0];
    var totalFee = 0;

    for (const date of dates) {
        var m = Math.floor((date - intervalStart) / (1000 * 60));
        var nextFee = tollFeePassage(date, vehicle);
        var tempFee = tollFeePassage(intervalStart, vehicle);

        if (m <= 60) {
            if (totalFee > 0) totalFee -= tempFee;
            if (nextFee >= tempFee) tempFee = nextFee;
            totalFee += tempFee;
        } else {
            totalFee += nextFee;
        }
    }

    if (totalFee > 60) totalFee = 60;
    return totalFee;
}

export { getTollFee };