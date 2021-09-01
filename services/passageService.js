import { settings } from "../config/settings.js";
import { isBetweenDates } from "./priceService.js";

const MINUTES_TO_ADD = settings.multipleVehicleInterval;

export function isMultiplePassage(currentDate, latestPassageTime) {
    if (latestPassageTime === undefined) return false;

    const minTime = new Date(latestPassageTime);
    const maxTime = new Date(
        minTime.setMinutes(minTime.getMinutes() + MINUTES_TO_ADD)
    );

    return isBetweenDates(currentDate, minTime, maxTime);
}
