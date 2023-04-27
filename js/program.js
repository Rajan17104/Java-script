let a = 10;
let b = 30;
let c = 40;

// maximum //

if(a>b){
    if(a>c){
        console.log(a);
    }else{
        console.log(c);
    }
}else{
    if(b>c){
        console.log(b);
    }else{
        console.log(c);
    }
    
}

// minimum // 


if(a<b){
    if(a<c){
        console.log(a);
    }else{
        console.log(c);
    }
}else{
    if(b<c){
        console.log(b);
    }else{
        console.log(c);
    }
    
}

// sum //

let sum = a + b + c;

console.log(sum);


// average // 

let avg = (a + b + c) / 3 ;

console.log(avg);


// merging //

let x = [10 ,20 ,30];
let y = [40 ,50 ,60];
let z = [70, 80 ,90];

let ans = x.concat(y,z);
console.log(ans);

//