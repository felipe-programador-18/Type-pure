interface Names {
    name:string,
    email:string,
    cellphone: number,
    gender?: "M"|"F"
}

interface Employeer {
    numberEmployer: string,
    adress: string,
    salary: number,
}

const ReceiveEmplo: Employeer = {
    numberEmployer:"feli23231",
    adress:"avavavav number cross the world",
    salary:232323
}

const lesson:Names = {
  name:"felipe martins",
  email:"machadofelipe@outlook.com",
  cellphone:9895301323232,
  gender:"M"
}




console.log(lesson,ReceiveEmplo)