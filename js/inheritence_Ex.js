// /******Example 1********/

class Employee {
    id;
    name;
    salary;

    constructor(i, n, s){
        this.id = i;
        this.name = n;
        this.salary = s;
    }

    information(){
        console.log("id" , this.id);
        console.log("Name" , this.name);
        console.log("Salary" , this.salary);

    }

    // /****** polymorphism ******/

    // extraSalary(){
    //     console.log('Extra salary');
    // }

}

class bonus extends Employee{

    bonus;

    constructor(i, n , s , b){
        super(i, n ,s);
        this.bonus=b;

    }

    bonusdetails(){
        console.log('id: '+this.id);
        console.log('Name: '+this.name);
        console.log('Salary: '+this.salary);
        console.log('bonus: ' +this.bonus);
        console.log('Extra bonus'+ this.bonus_duration);
    }

    // /****** polymorphism ******/

    // extraSalary(){
    //     console.log('Extra salary per month');
    // }

    // /*************************/

}

let b1 = new bonus(99 , "rajan" , 50000 , 10000);
b1.__proto__.bonus_duration = " 1 month";

b1.bonusdetails();
// b1.extraSalary();



/*******Example 2*******/

// class cars{
//     name;
//     price;
//     color;

//     constructor(n, p, c){
//         this.name = n;
//         this.price =p;
//         this.color =c;
//     }

//     information(){
//         console.log("Name" , this.name);
//         console.log("Price" , this.price);
//         console.log("color", this.color);
//     }

//     // /****** polymorphism ******/

//     // modify(){
//     //     console.log('Modify the car');
//     // } 

//     // /*************************/

// }

// class model extends cars {

//     model;

//     constructor(n, p, c, m){
//         super(n, p, c);
//         this.model= m; 
//     }

//     carDetails(){
//         console.log("Name:" , this.name);
//         console.log("Price:" , this.price);
//         console.log("color:" , this.color);
//         console.log("model:" , this.model);
//     }

//     // /****** polymorphism ******/

//     // modify(){
//     //     console.log('Modify the car 10 month');
//     // }

//     // /*************************/


// }


// let c1 = new model ('supra',800000,'black','MK 4');

// c1.carDetails();

// c1.modify();