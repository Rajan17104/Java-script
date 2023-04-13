let one= document.getElementById("one").innerHTML = Math.floor(Math.random() * 10);

let two =document.getElementById("two").innerHTML = Math.floor(Math.random() * 10);

let ans;

ans = one + two;

// console.log(ans);


function submit(){

let answer = document.getElementById("answer").value;

    if(ans == answer){
       alert("Your answer is correct")
    }else{
        alert("sorry Your answer is correct")
    }

}


