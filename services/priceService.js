import { prices } from "../config/prices.js";

export function calculateTollFee(date) {
    const currentHour = date.getHours();
    const currentMinute = date.getMinutes();

    for (const price of prices) {
        for (const interval of price.intervals) {
            const from = interval.from.split(":");
            const fromHour = from[0];
            const fromMinute = from[1];

            const to = interval.to.split(":");
            const toHour = to[0];
            const toMinute = to[1];

            if (
                fromHour <= currentHour &&
                currentHour <= toHour &&
                fromMinute <= currentMinute &&
                currentMinute <= toMinute
            )
                console.log(from, to, price.amount);
        }
    }

    return 0;
}
