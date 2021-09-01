import { settings } from "../config/settings.js";
import { isBetweenDates } from "./priceService.js";

const MINUTES_TO_ADD = settings.multipleVehicleInterval;

export function isWithinInterval(currentDate, latestDate) {
    if (latestDate === undefined) return false;

    const latestAsDate = new Date(latestDate);
    const minTime = new Date(latestAsDate);
    const maxTime = new Date(
        latestAsDate.setMinutes(latestAsDate.getMinutes() + MINUTES_TO_ADD)
    );

    return isBetweenDates(currentDate, minTime, maxTime);
}
