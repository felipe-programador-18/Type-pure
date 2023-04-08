
const getFloor = (floor:number) => {
    floor = 15

    for(let i=1; i <14; i++ ){
        if(i === 13) {
            continue
        }
        console.log("the numbers of floor", i, floor)
    }
}


console.log(getFloor(12))


for(let i=1; i<20 ; i++){
   console.log(i)
}