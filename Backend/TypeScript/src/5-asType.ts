type age = number;
let myAge: age;
myAge = 24
console.log(myAge)

type Tambah = (val1: number, val2: number) => number;
const Add: Tambah = (val1: number, val2: number):number => {
    return val1 + val2
}

console.log(Add(1,10))