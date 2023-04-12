document.getElementById("one").innerHTML = Math.floor(Math.random() * 10);

document.getElementById("two").innerHTML = Math.floor(Math.random() * 10);

document.getElementById("ans").innerHTML = "ans";

let ans;

ans = one + two;

console.log(ans);


function submit(){

    if(ans == ans){
        parseInt(prompt("correct"));
    }else{
        parseInt(prompt("sorry"));
    }

}


