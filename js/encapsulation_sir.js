class Employee {

    id;
    name;
    #salary;
    #instenvie;

    constructor(i ,n ,s){
        this.id = i;
        this.name = n;
        this.#salary= s;
    }

    set instenvie(i){
        this.#instenvie = i;
    }

    get instenvie (){
        return this.#instenvie;
    }

    #bonus(){
        let bonus = this.#salary * 0.10;
        console.log("Your Bonus is:" , bonus);
    }

    information(){
        console.log("ID:" , this.id);
        console.log("Name:" , this.name);
        console.log("Salary:" , this.#salary);

        this.#bonus();
    }



}

let e1 = new Employee(101 , 'Rajan' , 50000);

e1.information();

// e1.#salary = 500000;
// e1.#bonus();

e1.instenvie = 2000;
let res = e1.instenvie;

console.log('Your instenvie is:' + res);
