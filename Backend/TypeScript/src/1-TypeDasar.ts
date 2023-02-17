// string
let nama: string = "Raj Alam";
// nama = 20  -> error
nama = "Azura"

// number
let umur: number = 24;
umur = 18;

// boolean
let isMarried: boolean;
isMarried = false

// any
// any ini seperti javascript pada umumnya, contohnya kita bisa re-assign variable dengan tipe data berbeda
let any: any = "Azure";
any = 20
any = {}
any = []
any = true || false && false

// array string
let arr1: string[] = ["test", "yes"]

// array number
let arr2: number[] = [1, 2, 3]

// array any
let arr3: any[] = ["test", 1, true]

// tuples
let myTuples: [string, number];
myTuples = ["asdf", 12]

console.log(nama, umur, isMarried, any, arr1, arr2, arr3)

