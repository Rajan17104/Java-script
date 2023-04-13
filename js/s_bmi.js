function calculate(){

let w = parseInt.tofixed(2)(document.getElementById("weight").value);
let h = parseInt.tofixed(2)(document.getElementById("height").value);

let m;

m = h / 100;

let bmi;

bmi = w / (m*m);

// console.log(w);
// console.log(h);
// console.log(m);
// console.log(bmi);

document.getElementById("ans").innerHTML= bmi;

if(bmi < 18.5){
    document.getElementById("msg").innerHTML = "underweight"
}else if(bmi >= 18.5 && bmi <= 24.9 ){
    document.getElementById("msg").innerHTML = "normal"
}else if(bmi > 24.9){
    document.getElementById("msg").innerHTML = "overweight"
}

}