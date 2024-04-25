//single inheritance 
class Shape {   
    Area:number   
    constructor(area:number) {   
       this.Area = area  
    }   
 }   
 class Circle extends Shape {   
    display():void {   
       console.log("Area of the circle: "+this.Area)   
    }   
 }  
 var obj = new Circle(320);   
 obj.display()  

 //multilevel
 class Animal {   
    eat():void {   
        console.log("Eating")   
     }   
}   
class Dog extends Animal {   
   bark():void {   
      console.log("Barking")   
   }   
}  
class BabyDog extends Dog{   
    weep():void {   
        console.log("Weeping")   
     }  
}  
let obj1 = new BabyDog();   
obj1.eat();  
obj1.bark();  
obj1.weep()  


