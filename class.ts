// create new interface
interface Pessoa {
    name: string,
    key: [string] ,
    sexo?: 'm' | 'f'
}

const receiveMore: Pessoa = {
    name:"felipe Programmer Floripa",
    key:['felipe programmer'],
    sexo:"m"
}




//guidance object
class Funcionario implements Pessoa {
    //object constructor read about this to remember
    name: string ;
    [key:string]: string | number ;
    constructor(name:string ){
        this.name = name,
    }   
}
