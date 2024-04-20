class Vehicle {
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
  
    drive() {
      console.log("Driving...");
    }
  }
  
  class Car extends Vehicle {// This car class is a child born by vehicle class
    constructor(brand, model, color) {
      super(brand, model);// Do not forget to state the props of parent class as super. 
      this.color = color;// A new prop has been added to this child class
    }
  }
  
  let myCar = new Car("Toyota", "Camry", "blue");
  myCar.drive(); //A method from the parent class is called
  