
import { Vehicle } from "./Create.mjs";
 
export class Tractor extends Vehicle {
    constructor(brand, model, color) {
      super(brand, model);
      this.color = color;
    }
  
    drive(distance) {
      console.log(`Tractor drove ${distance} miles`);
    }
  }
  
  