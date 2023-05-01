
//1.    Finding the maximum element in an array.

let arr1 = [10 , 55 , 55 , 65,  95 ,52 ,22]
// let arr2 = [20 ,30];
// let arr3 = [40 ,50];

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

    let uniqeElem=[];

    arr.map((a) => {

        if(!uniqeElem.includes(a)){
            uniqeElem.push(a);
        };
    
    });
    console.log(uniqeElem);

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

const SplitArrCon = (arr) =>{

    let a1 = [];
    let a2 = [];

    arr.map((a) =>{
        
        if(a > 60){
            a1.push(a);
        }else{
            a2.push(a);
        }

    })

    console.log(a1);
    console.log(a2);

}

// SplitArrCon(arr1);


const SplitArrConStr = (arr) =>{

let a3 = [];
let a4 = [];

arr.map((a) =>{

    if(a > 0){
        a3.push(a)
    }else{
        a4.push(a);
    }

    })

    // if(typeof a === number){
    //     a3.push(a)
    // }else if(typeof a === string){
    //     a4.push(a);
    // }

    // })

    // console.log(a3);
    // console.log(a4);

}

// SplitArrConStr(arr1)


// 13.    Rotating an array by a given number of positions.

const rotate = (arr , ind) =>{

    let a = arr.slice(arr);
   let b = arr.slice(ind);

    let ans= b.concat(a);

console.log(ans);


}


// rotate(arr1, 1);


// 14.    Finding the second largest element in an array.

const MaxElm = (arr ,ind) =>{

    let uniqeElem=[];

    arr.map((a) => {

        if(!uniqeElem.includes(a)){
            uniqeElem.push(a);
        };
    
    });

    uniqeElem.sort((a,b) => b - a);

    console.log( uniqeElem[ind-1],uniqeElem);

}

// MaxElm(arr1 , 3);


// 15.    Finding the k-th smallest element in an array.

const smallest = (arr ,ind) =>{

    let uniqeElem=[];

    arr.map((a) => {

        if(!uniqeElem.includes(a)){
            uniqeElem.push(a);
        };
    
    });

    uniqeElem.sort((a,b) => a - b);

    console.log(uniqeElem[ind-1],uniqeElem);

}

// smallest(arr1, 3);


// 19.    Checking if two arrays are equal or not.

let first = [10 , 20 ,30];
let second = [10 , 20 ,30];

const equal = (fi,se) =>{

    if(fi.length === se.length){
    
        // for( let i=0; i<fi.length; i++){ 
        
            if(fi === se){
                console.log('equal');
            }else{
                console.log('not equal');
            }    
        
        // }
            // console.log('equal');
    
    }else{
        console.log('not equal');
    }

};

equal(first,second);


// 17.  Finding the median of an array.

// let arr = [1,2,3,4,5,6,7];

// const median = () =>{

//     let a = arr.length;

//     let ans = arr.sort((a,b) => a-b);

//     let med = Math.floor(a/2);

//     return ans[med];

    
// }

// median(arr);