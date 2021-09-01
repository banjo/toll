import { prices } from "../config/prices.js";

const STATIC_DATE = "2020-01-08";

export function calculateTollFee(date) {
    for (const price of prices) {
        const correctPrice = getPriceForTime(date, price);
        if (correctPrice) return correctPrice;
    }

    return 0;
}

function getPriceForTime(date, price) {
    const currentHour = date.getHours();
    const currentMinute = date.getMinutes();

    for (const interval of price.intervals) {
        const [fromHour, fromMinute] = getTimeFromInterval(interval.from);
        const [toHour, toMinute] = getTimeFromInterval(interval.to);

        const passageTime = convertToTime(
            currentHour.toString(),
            currentMinute.toString()
        );
        const fromTime = convertToTime(fromHour, fromMinute);
        const toTime = convertToTime(toHour, toMinute);

        if (isBetweenDates(passageTime, fromTime, toTime)) return price.amount;
    }
}

function getTimeFromInterval(interval) {
    const time = interval.split(":");
    return [time[0], time[1]];
}

function convertToTime(hour, minute) {
    const paddedHour = hour.padStart(2, "0");
    const paddedMinute = minute.padStart(2, "0");

    return new Date(`${STATIC_DATE}T${paddedHour}:${paddedMinute}`);
}

export function isBetweenDates(date, min, max) {
    return date.getTime() >= min.getTime() && date.getTime() <= max.getTime();
}
