// let city = 'surat'; //global

// const printcity = () => {

//     console.log(city);
// }

// printcity();

// city = 'baroda'

// printcity();

// city = 'vapi'

// printcity();

// city = 'vadodara'

// printcity();

// let name = 'Rajan'; // Global variable 

// const info = (salary) => {  // outer function    //2

//     let age = 25;  // outer function's variable

//     // Inner function

//     return function printInfo(){  //3
//         console.log(name);
//         console.log(age);
//         console.log(salary);
//     }

// }

//           // outer function call  
// let res = info(50000); //1  //4

// res(); // Inner function call //5


const handleop = () =>{

    let count = 0;

    return function operation() {
        count = count + 1;
        console.log(count);
    };

}

let res= handleop();

res();
res();
res();


let res1 = handleop();

res1();
res1();
res1();
