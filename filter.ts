interface Vehicles {
    summary(): string
 }
 

 const Manage = {
    brand: "toyota",
    price: 23232,
    message:"the car is not affordable for me",
 
 
    summary(): string{
      return  `return this now about this ${this.brand}`
    }
 }
 
 const sendBrand = (newBranch:Vehicles): void => {
   console.log(newBranch.summary())
 }
 
 
 
 class NewMore {
    calls(): void{
      console.log("testing something here now")
    }
 }
 
 const getNew = new NewMore()
 getNew.calls()
 


class Names {
    public getSomething (): any {
        console.log("return something bro")
    }
}
const ReceiveNames = new Names 
ReceiveNames.getSomething()


class OtherResults {
    public ShowNotes (): any {
        console.log(" to practice a more about typescript")
    }
    private DontshowNotes (): any {
        console.log("to change and give it all always")
    }

    protected DangersHere (): any {
        console.log("pay attention about your circle at the life")
    }
}

const justPublic = new OtherResults
justPublic.ShowNotes()


const OtherResultsing = (item:number) => {
    return item < 5000
}

const dates = [1232,3213,4,213,123,435,23,3423,4123,45353].filter(OtherResultsing)
dates.forEach(calls => console.log(calls < 50))
console.log(dates)