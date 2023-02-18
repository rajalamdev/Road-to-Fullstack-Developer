export class Users {
    public name: string;
    public age: number;

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    getName = ():string => {
        return this.name
    }

    setName = (value: string):void => {
        this.name = value
    }
}

let thisUser = new Users("Raj alam", 24)
console.log(thisUser)


class Admin extends Users {
    read: boolean = true;
    write: boolean = true;

    getRole(): {read: boolean, write:boolean} {
        return {
            read: this.read,
            write: this.write
        }
    }
}

let admin = new Admin("Azura", 24)
console.log(admin)
console.log(admin.getName())
console.log(admin.getRole())
console.log(admin.setName("Siapa"))
console.log(admin.getName())