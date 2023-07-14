// const first = () =>{
//     console.log('first process');
// }

// const { reject } = require("async");

// const second = () =>{
//     console.log('second process');
// }

// const third = () =>{
//     console.log('third process');
// }

// first();
// second();
// third();


// syncronious problem--------------------

// const first = () =>{
//     console.log('first process');
// }

// const second = () =>{

//     let now = new Date();

//     while(Date.now() - now < 5000){

//     }

//     console.log('second process');
// }

// const third = () =>{
//     console.log('third process');
// }


// //synchroious function
// first();
// second();
// third();



//Asyncronious function---------------------

// console.log('Process start');

// //by default async

// setTimeout(() => {
//     console.log('i Got data');
// }, 5000);

// console.log('i am in the process');




//Callback function-----------------

// const print = (ans) =>{
    
//     console.log('Ans is: ',ans );
// }

// const add = (a,b,Callback) =>{
//     let ans =  a + b;

//     Callback(ans);
// }

// add( 2 , 3 ,print )



// 1.using callback function---------------------


// console.log('program start');

// const display =(data) =>{
//     console.log(data);
// }

// const getdata =(Callback) =>{
//     setTimeout(() =>{
//         let data = {id:101 ,name:'Rajan'}
//         Callback(data)
//     },3000)
// }

// getdata(display);

// console.log('handle user input');



// 2.Promise---------------------

// console.log('program start');

// let myPromise = new Promise ((resolve,reject) => {
//     setTimeout(() =>{
//         resolve('I got Data')
//     },2000);
// })

// myPromise
//     .then((res) => console.log(res))
//     .catch((error) => console.log(error))
//     .finally(() => console.log('I Always Execute'));

// console.log('handle user input');

// console.log(myPromise);



// 3.async await---------------------

console.log('program start');

const getdata = async () =>{
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    let data = await response.json();

    console.log(data);
}

getdata();

console.log('handle user input');
