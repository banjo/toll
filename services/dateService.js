import { holidays } from "../config/holidays.js";
import { Day } from "../domain/day.js";
import { Month } from "../domain/month.js";

export function isTollFreeDate(date) {
    if (isWeekend(date) || isJuly(date)) return true;

    if (holidays.some((holiday) => isSameDay(new Date(holiday), date)))
        return true;

    return false;
}

function isWeekend(date) {
    let day = date.getDay();
    return day === Day.SATURDAY || day == Day.SUNDAY;
}

function isJuly(date) {
    return date.getMonth() == Month.JULY;
}

function isSameDay(first, second) {
    return (
        first.getFullYear() === second.getFullYear() &&
        first.getMonth() === second.getMonth() &&
        first.getDate() === second.getDate()
    );
}
