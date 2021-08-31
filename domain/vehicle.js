class Vehicle {}

class Car extends Vehicle {
    getType() {
        return this.constructor.name;
    }
}

class Motorbike extends Vehicle {
    getType() {
        return this.constructor.name;
    }
}

class Tractor extends Vehicle {
    getType() {
        return this.constructor.name;
    }
}

class Emergency extends Vehicle {
    getType() {
        return this.constructor.name;
    }
}

class Diplomat extends Vehicle {
    getType() {
        return this.constructor.name;
    }
}

class Foreign extends Vehicle {
    getType() {
        return this.constructor.name;
    }
}

class Military extends Vehicle {
    getType() {
        return this.constructor.name;
    }
}

export { Car, Motorbike, Tractor, Emergency, Diplomat, Foreign, Military };
