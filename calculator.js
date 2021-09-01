import { isTollFreeDate, sortDates } from "./services/dateService.js";
import { calculateTollFee } from "./services/priceService.js";
import { isMultiplePassage } from "./services/passageService.js";
import { isTollFreeVehicle } from "./services/vehicleService.js";
import { settings } from "./config/settings.js";

const MAX_PRICE_PER_DAY = settings.maxPricePerDay;

function getTollFee(vehicle, ...dates) {
    if (isTollFreeVehicle(vehicle)) return 0;

    const sortedDates = sortDates(dates);

    let totalFee = 0;
    let latestPassageTime = undefined;
    let pendingFees = [];

    for (const date of sortedDates) {
        if (isTollFreeDate(date)) continue;

        let fee = calculateTollFee(date);

        if (isMultiplePassage(date, latestPassageTime)) {
            pendingFees.push(fee);
        } else {
            totalFee += getHighestFee(pendingFees);
            latestPassageTime = date.getTime();

            pendingFees = [];
            pendingFees.push(fee);
        }
    }

    totalFee += getHighestFee(pendingFees);
    if (totalFee >= MAX_PRICE_PER_DAY) return MAX_PRICE_PER_DAY;

    return totalFee;
}

function getHighestFee(pendingFees) {
    if (pendingFees.length >= 1) {
        return Math.max(...pendingFees);
    }

    return 0;
}

export { getTollFee };
