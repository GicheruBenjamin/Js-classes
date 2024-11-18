
//Polymorphism as in many forms of a class
class Cloth{
  constructor(type, color){
    this.type = type;
    this.color = color;
  }

  getInfo(){
    return `This ${this.color} ${this.type} cloth is made from cotton.`;
  }
}

export class Tops extends Cloth{
  constructor(type, color){
    super(type, color);
  }

  getInfo(){
    return `This ${this.color} ${this.type} top is made from cotton.`;
  }
}
export class Bottoms extends Cloth{
  constructor(type, color){
    super(type, color);
  }

  getInfo(){
   return `This ${this.color} ${this.type} bottom is made from cotton.`;
  }
}