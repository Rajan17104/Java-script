let rollno = [5,56,12,'rajan',98,20];
let arr1 = [10,20];

// console.log(rollno);
// console.log(rollno.length);
// console.log(rollno[3]);


/***/


for (let i=0; i<rollno.length; i++){
    // console.log(rollno[i]);
}

/***/

rollno.forEach(function (v,i){
    // console.log(i,v);
});


rollno.forEach((v,i) =>{
    // console.log(i,v);
});


/***/

rollno.map(function (v,i){
    // console.log(i,v);
});

rollno.map((v,i) => {
    // console.log(i,v);
});


// rollno.map((i,v) => console.log(v));                                                 

//*****Update*****//

rollno[3] = 99;
// console.log(rollno);



//*****Last*****//

rollno.push(2); // add at last
// console.log(rollno);


rollno.pop(); // remove from last
// console.log(rollno);


//******First******//


rollno.unshift(99); // add at first
// console.log(rollno);


rollno.shift(); // remove from first
// console.log(rollno);


//////*****Array Function *****/////

/*IsArray*/ 

// check passed value is array or not

// let ans= Array.isArray(rollno);
// console.log(ans);

/*Concate*/ 

// combine two or more array

// let ans= rollno.concat(arr1);
// console.log(ans);

/*some*/

//cheake testfun over array element

// let ans = rollno.some((v) => v > 50);
// console.log(ans);

/*find*/

//return first element of array that satify test

// let ans = rollno.find((v) => v > 50);
// console.log(ans);

/*toString*/

// convert array to string

// let ans =rollno.toString();
// console.log(ans);

/*splice*/


/*add*/

const fruit = ["mango" , "apple" , "orange" , "lemon"];

// fruit.splice (2 ,0 ,"rajan","patel")
// console.log(fruit);

fruit.splice (1 , 1)
// console.log(fruit);