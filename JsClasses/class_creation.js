// A class is created by using the class keyword
// It is an instance of a real word object

class vehicle {
    constructor(){//Constuctor to mean it is being created
        this.name = "car";// This keyword to refer to the class itself
        this.wheels = 4;
    }
}

myvehicle = new vehicle();//A vehicle class is being instanceated
console.log(myvehicle.name);// Now we can access the class properties

class shop{
    constructor(name, address){// The properties here can change in the future
        this.name = name;
        this.address = address;
    }
}

myshop = new shop("My Shop", "123 Main Street");// The properties are being passed in the constructor.
console.log(myshop.address);


