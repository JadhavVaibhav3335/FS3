class Engine {
    horsepower: number;
    fuelType: string;

    constructor(horsepower: number, fuelType: string) {
        this.horsepower = horsepower;
        this.fuelType = fuelType;
    }
}

class Car {
    make: string;
    model: string;
    year: number;
    engine: Engine;

    constructor(make: string, model: string, year: number, engine: Engine) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.engine = engine;
    }

    start(): void {
        console.log("The car is starting...");
    }

    printCarDetails(): void {
        console.log("Car details:");
        console.log("Make:", this.make);
        console.log("Model:", this.model);
        console.log("Year:", this.year);
        console.log("Engine details:");
        console.log("Horsepower:", this.engine.horsepower);
        console.log("Fuel Type:", this.engine.fuelType);
    }
}

// Example usage
let myEngine = new Engine(200, "Petrol");
let myCar = new Car("Toyota", "Camry", 2022, myEngine);

myCar.start(); // Output: The car is starting...
myCar.printCarDetails();