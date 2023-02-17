enum month {
    JAN,
    FEB,
    MAR,
    APR,
    MAY
}

console.log(month)

for(let i: number = 0; i < 5; i++){
    console.log(month[i], i)
}

enum days {
    SUN = "Sunday",
    MON = "Monday",
    TUE = "Tuesday",
}

console.log(days.SUN)