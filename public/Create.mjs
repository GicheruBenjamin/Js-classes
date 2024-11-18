// A class is created by using the class keyword
// It is an instance of a real word object

export class Vehicle {
    constructor(){//Constuctor to mean it is being created
        this.name = "car";// This keyword to refer to the class itself
        this.wheels = 4;
    }
}


export class Shop{
    constructor(name, address){// The properties here can change in the future
        this.name = name;
        this.address = address;
    }
}



