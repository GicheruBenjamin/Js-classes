class Animal {
    makeSound() {
      console.log("Some generic sound");
    }
  }
  
  class Dog extends Animal {//A dog is animals so an animal can be a dog 
    makeSound() {
      console.log("Woof woof!");
    }
  }
  
  class Cat extends Animal { //Wait an animal can also be a cat so animals can be of many forms == Polymorphism.
    makeSound() {
      console.log("Meow!");
    }
  }
  
  let dog = new Dog();
  let cat = new Cat();
  
  dog.makeSound();
  cat.makeSound();
  