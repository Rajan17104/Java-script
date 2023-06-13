/********* Array *********/

// let arr1 = [10,20,30];

// //copy 

// let arr2 = [...arr1];
// console.log(arr2);

// //merging

// let arr3 = ['amit' , 23 , ...arr1 , 'surat']
// console.log(arr3);

// //merging

// let arr5 = [99 , 100];
// let ans = [...arr5 , ...arr1];
// console.log(ans);

// //Destructuring

// let [id , age , per] = arr1;
// console.log(age);



/******* Object *******/


let obj1 = {
    id : 101,
    name: 'rajan',
    age: 30
}

//copy

let obj2 = {...obj1};
console.log(obj2);

//merging

let obj3 = {city:'surat', ...obj1, pin:12345}
console.log(obj3);

//merging

let obj9 = {
    id:999,
    city:'surat'
}

let ans1 = { ...obj1, ...obj9}
console.log(ans1);


//Destructuring

let {id , name , age} = obj1;
console.log(name);