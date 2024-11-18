 export class Car {
    #mileage = 0; // Private field
  
    constructor(brand, model) {
      this.brand = brand;
      this.model = model;
    }
  
    drive(distance) { //In classes there are methods which are functions that operate inside the class..
      this.#mileage += distance;// In this class thru encapsulation the private field can be used to do things together with the methods in it..
      console.log(`Drove ${distance} miles. Total mileage: ${this.#mileage}`);
    }
  }

  export class BankAccount {
    #balance; // Private field
    constructor(accountHolder, balance) {
      this.accountHolder = accountHolder;
      this.#balance = balance;
    }
    getBalance() {
      return this.#balance;
    }
    deposit(amount) {
      if (amount > 0) {
        this.#balance += amount;
      }
    }
  }
  

  
  

  