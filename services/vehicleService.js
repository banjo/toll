import { TollFreeVehicle } from "../domain/tollFreeVehicle.js";

export function isTollFreeVehicle(vehicle) {
    if (vehicle == null) return false;
    return Object.values(TollFreeVehicle).includes(vehicle.getType());
}
