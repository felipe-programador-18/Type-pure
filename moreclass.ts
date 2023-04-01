class Vehicle {
   
    constructor(public color:string ='red'){}

    protected honk(): void {
      console.log("beep")
    }
    
}
    
const vehicle = new Vehicle() 
console.log(vehicle.color)