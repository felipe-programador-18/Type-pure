const names: number [] = [12,32,323,34,123,4324,12,3354,324,123,453,123,435,213,123,3423]
const reverseNames = names.reverse()
console.log(reverseNames)


// simples functions 
const TradePosiAndNega = (item:number) => {
    return item*= -1
} 

console.log(TradePosiAndNega(-10))


// to practice a bit about Object key

const OtherDates= {name:"felipe", nickname: 'the best of two words always give the all'}
console.log(Object.keys(OtherDates).reverse())