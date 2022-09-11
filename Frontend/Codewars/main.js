function generateShape(integer){
    let str = "";

    for(let i = 0; i < integer * integer; i++){
        if(i % integer === 0 && i !== 0){
            str += "\n";
        }
        str += "+";
    };

    return str;
}

console.log(generateShape(3))