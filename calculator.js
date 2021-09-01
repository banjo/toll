import { isTollFreeDate, sortDates } from "./services/dateService.js";
import { calculateTollFee } from "./services/priceService.js";
import { isWithinInterval } from "./services/passageService.js";
import { isTollFreeVehicle } from "./services/vehicleService.js";
import { settings } from "./config/settings.js";

const MAX_PRICE_PER_DAY = settings.maxPricePerDay;

function getTollFee(vehicle, ...dates) {
    if (isTollFreeVehicle(vehicle)) return 0;

    const sortedDates = sortDates(dates);

    let totalFee = 0;
    let latestDate = undefined;
    let pendingFees = [];

    for (const date of sortedDates) {
        if (isTollFreeDate(date)) continue;

        let fee = calculateTollFee(date);

        if (isWithinInterval(date, latestDate)) {
            pendingFees.push(fee);
            continue;
        } else {
            totalFee += getHighestFee(pendingFees);
            pendingFees = [];
        }

        latestDate = date;
        pendingFees.push(fee);
    }

    totalFee += getHighestFee(pendingFees);
    if (totalFee >= MAX_PRICE_PER_DAY) return MAX_PRICE_PER_DAY;

    return totalFee;
}

function getHighestFee(latestFees) {
    if (latestFees.length >= 1) {
        return Math.max(...latestFees);
    }

    return 0;
}

export { getTollFee };
