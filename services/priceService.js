import { prices } from "../config/prices.js";

export function calculateTollFee(date) {
    h = date.getHours();
    m = date.getMinutes();

    for (const price of prices) {
        for (const interval of price.intervals) {
            const fromHour = interval.from.split(":")[0];
            console.log(fromHour);
        }
    }

    if (h === 6 && m >= 0 && m <= 29) return 9;
    else if (h === 6 && m >= 30 && m <= 59) return 16;
    else if (h === 7 && m >= 0 && m <= 59) return 22;
    else if (h === 8 && m >= 0 && m <= 29) return 16;
    else if (h >= 8 && h <= 14 && m >= 30 && m <= 59) return 9;
    else if (h === 15 && m >= 0 && m <= 29) return 16;
    else if ((h === 15 && m >= 0) || (h === 16 && m <= 59)) return 22;
    else if (h === 17 && m >= 0 && m <= 59) return 16;
    else if (h === 18 && m >= 0 && m <= 29) return 9;
    else return 0;
}
