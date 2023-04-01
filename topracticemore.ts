

const a:number = 2323
const b:number =5000

const sum = a+b
console.log(sum)


const filterName = (item:string) => {
    return item === 'felipe'
}
const Name:string[] = ['felipe', 'martins','felipe'].filter(filterName)

console.log(Name)

const DoDifferent = (names: string) => {
    return names === "programer"
}
 
const add: string[] = ['programer',"programmer","programador","software developer"].filter(DoDifferent)
console.log(add)