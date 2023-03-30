
const testing: string[] = ['red', "green", 'blue']

console.log(testing)


const toAdd: (a:number) => void = (a:number) => {
  return a+2
}

const manage =toAdd(23232)
console.log(manage)

const Sum: (d:number, c:number) => number = (c,d) => {
    return c *d
} 

const getToTraning = Sum(100,50)
console.log(getToTraning)


const GetNamesNow:(nome:string, nickname:string) =>  string  = (nome, nickname) => {
  return nome + nickname
} 


const GetAllNames = GetNamesNow("programmer Felipe", "Programmer Felipe here now")
console.log(GetAllNames)


const simple :(name:string, anothernickname:string) => string  =
 (name, anothernickname) => {
  return name + anothernickname
}

console.log(simple("programmer", "not programmer"))


const sum: (f:number, g:number) => number = (f,g) => {
  return f * g
}
console.log(sum(1000,130))



const split : (t:number,g:number) => number = (t,g) => {
  return t**g
}

console.log(split(323,10))

const pronoucce: (falar:string, ouvir:string) => string = (falar, ouvir) => {
  return falar + ouvir
}

console.log(pronoucce("listing here now "," I always give the all for my future"))


const dates = {
  date: new Date(),
  weather: "summer"
}

//destructing something here now
const getDates= ({date, weather}: {date:Date, weather:string}):  void => {
console.log(date)
console.log(weather)
}

const theBoss = getDates(dates)
console.log(theBoss)

const names = {
  felipe:"programmer",
  martins:"floripa",
  age:2323
}

const newUser = ({felipe, martins, age} : {felipe:string, martins:string, age:number}) : void => {
  console.log(`${felipe}, ${martins} , my ${age}`)
}

console.log(newUser(names))

const cal: (soma:number, anothersoma: number) => number = (soma, anothersoma) => {
   return soma + anothersoma
}

console.log(cal(123,12322))