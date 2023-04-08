const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget: object = Object.assign(target, source);

console.log(target.a);

const RulesDates = (item:number) => {
    return item <1000
}
const dates: number[] = [212,3423,4123,45234,323,34,123,4234].filter(RulesDates)
console.log(dates)