
//1.    Finding the maximum element in an array.

let arr1 = [10 , 55 , 65, 95 ,52]
let arr2 = [20 ,30];
let arr3 = [40 ,50];

const arrMax = (arr) =>{

    let max = arr[0];
    for(i=0; i<arr.length; i++){
        
        if(arr[i] > max){
            max = arr[i];
        }
    }

    console.log("Max no is:", max);
}

// arrMax(arr1);


//2.    Finding the minimum element in an array.

const arrmin = (a) =>{

    let min = a[0];
    for(i=0; i<a.length; i++){
        
        if(a[i] < min){
            min = a[i];
        }
    }

    console.log("Min no is", min);

}

// arrmin(arr1);



//3.    Sorting an array in ascending order.

const shortAsc = (arr) =>{

    arr.sort((a ,b) => a - b);

        console.log(arr);
}

// shortAsc(arr1)



//4.    Sorting an array in descending order.


const shortDes = (arr) =>{

    arr.sort((a,b) => b-a);

    console.log(arr);

}

// shortAsc(arr1);  


//5.    Reversing an array.


const revArr = (arr) => {

    arr.reverse();

    console.log(arr);

}

// revArr(arr1);


//6.    Finding the sum of all elements in an array.


const sumArr = (arr) =>{

    let sum = 0;

    arr.map((a) => sum = sum + a);

    console.log(sum);

}

// sumArr(arr1);


//7.    Finding the average of all elements in an array.

const avgArr = (arr) =>{

    let sum = 0, avg = 0;

    arr.map((a) => sum = sum + a);

    avg = sum / arr.length;

    console.log(avg);
}

// avgArr(arr1);


//8.    Checking if an array contains a specific element.


const cheakArr = (arr ,elem) => {

    let ans = arr.includes(elem);

    console.log(ans);

}

// cheakArr(arr1, 55);


//9.    Removing duplicates from an array.


const removeDup = (arr) =>{

    let uniqeElem;

    arr.map((a) => uniqeElem )

    if(uniqeElem){

    }

}

// removeDup(arr1);

// 10.    Merging two arrays into a new array.

const merging = (arr1,arr2,arr3) =>{

let mer;

   mer = arr1.concat(arr2,arr3);

    console.log(mer);

}

// merging(arr1 ,arr2 ,arr3);

// 11.    Splitting an array into two arrays based on a condition.

   
let spt = "how are you rajan";

const Splitting = (arr) =>{

 arr = spt.split(" ");

   console.log(arr);

}

// Splitting(spt);


// 18.    Finding the mode of an array.


let list = [5 , 6 , 9, 10 ,5 , 6 , 6]

const mode = (ans) =>{

  ans = {};
list.map((e)=> {
  if(ans[e] === undefined) {
    ans[e] = 0
  }
  ans[e] += 1;
})

    console.log(ans);

}
      
// mode(list);

// 19.    Checking if two arrays are equal or not.


// let a = [1, 2, 3];
// let b = [1, 2, 3];

// let c = Array(1, 2, 3);

// let d;
//  d= (a === b && b === c);
 
// console.log(d);
 

// 20.    Finding the union of two arrays.


var a = [34, 35, 45, 48, 49];
var b = [48, 55];
var union = [...new Set([...a, ...b])];
console.log(union);




