
import { Vehicle, Shop } from "./public/Create.mjs";
import { Car , BankAccount } from "./public/Encap.mjs";
import { Tractor } from "./public/Inh.mjs";
import { Tops, Bottoms } from "./public/Poly.mjs";


function main(){
    let myCar = new Vehicle();
    console.log(myCar);
    console.log("-----------------");
    
    let myShop = new Shop("My Shop", "123 Main St");
    console.log(myShop);
    console.log("-----------------");

    let myCar2 = new Car("Toyota", "Camry", "Red");
    myCar2.drive(100);
    console.log("-----------------");

    let myBankAccount = new BankAccount("John Doe", 500);
    console.log(myBankAccount.getBalance());
    myBankAccount.deposit(100);
    console.log(myBankAccount.getBalance());
    console.log("-----------------");

    let myTractor = new Tractor("Ford", "F-150", "Blue");
    myTractor.drive(200);
    console.log("-----------------");

    let top = new Tops("Sweater", "Black");
    console.log(top.getInfo());
    console.log("-----------------");

    let bottom = new Bottoms("Pants", "White");
    console.log(bottom.getInfo());
    console.log("-----------------");

}
main();