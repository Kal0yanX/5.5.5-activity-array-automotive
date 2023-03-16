//this includes the vehicle class as a module
const VehicleModule = require('./vehicle.js')

class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage, passengers, numberOfWheels, maximumPassengers, maximumSpeed, fuel, scheduleService){
        super(make, model, year, color, mileage, numberOfWheels);
        this.maximumPassengers = maximumPassengers;
        this.passengers = passengers;
        this.numberOfWheels = numberOfWheels;
        this.maximumSpeed = maximumSpeed;
        this.fuel = fuel;
        this.scheduleService = scheduleService;
    }
    loadPassenger(){
        if (this.passenger > this.maximumPassengers){
            return console.log('this car is full')
        }
        else if (this.passenger < this.maximumPassengers){
            return console.log('this car may seat more passengers')
        }
        else if (this.passenger = this.maximumPassengers){
            return console.log ('this car is at capacity')
        }
    }

    start() {
        if (this.fuel > 0)
        return console.log(this.start)
    }
    checkService(){
        if (this.mileage > 30000){
            this.scheduleService = true;
            console.log("service needed")
            return this.scheduleService;
        }
        else (console.log("No service required"))
    }

}


//this shows how to call from this module...
const Car1 = new Car("A28 Mercury", "Sedan", 2023, "black", 12000, 4, 4, 5, 160, 10, 'false')

console.log(Car1);
Car1.loadPassenger();
Car1.start(1);
Car1.checkService(12000)
Car1.typeOfVehicle(4)


//ORIGINAL CODING THAT DID NOT WORK BELOW

// class Car extends Vehicle {
//     constructor(make, model, year, color, mileage, numberOfWheels, maximumPassengers, maximumSpeed, fuel, scheduleService){
//         super(make, model, year, color, mileage, numberOfWheels);
//         this.maximumPassengers = 5;
//         this.passenger = 6;
//         this.numberOfWheels = 4;
//         this.maximumSpeed = 160;
//         this.fuel = 10;
//         this.scheduleService = false;
//     }
//     loadPassenger(){
//         if (this.passenger > this.maximumPassengers){
//             return console.log('this car is full')
//         }
//     }

//     start() {
//         if (this.fuel > 0)
//         return console.log(this.start)
//     }
//     checkService(){
//         if (this.mileage > 30000){
//             this.scheduleService = true
//             return this.scheduleService;
//         }
//     }

// }

// const Car1 = new Car("A28 Mercury", "Sedan", 2023, "black", 12000, 4, 160, 10, 'false')

// console.log(Car1);
// Car1.loadPassenger(6);
// Car1.start(1);
// Car1.checkService()