class Vehicle {
   
    constructor(public color:string ='red'){}

    protected honk(): void {
      console.log("beep")
    }
    
}
    
const vehicle = new Vehicle() 
console.log(vehicle.color)


class Newname {
  constructor(public newColoer:string ="black"){}
   
  getColor (): void {
    console.log("testing and get other color")
  }

}

const GeneretateOther= new Newname()
console.log(GeneretateOther.newColoer)


const names: (a: string, b: string) => string = (a,b) => {
  return a + b
}

const manageNames = names("to practice to become better in the life","give the best always")
console.log(manageNames)


const Othernames: string[] = ['felipe', 'martins', 'programmer', 'floripa', 'the best of both words']
Othernames.forEach(element =>  console.log(element+" give it all always !!"))
//console.log(Othernames)