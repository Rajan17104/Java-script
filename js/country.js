const select = () =>{

// document.getElementById("ind").value;
// document.getElementById("aus").value;
// document.getElementById("canada").value;
// document.getElementById("us").value;

let ans = document.getElementById("country").value;
console.log(ans);
// console.log(i);
// console.log(a);
// console.log(c);  

if(ans === "India"){

    document.getElementById("main").style.backgroundColor="orange";
    document.getElementById("msg").innerHTML = "your selected country is India";

}else if(ans === "Australia"){

    document.getElementById("main").style.backgroundColor="yellow";
    document.getElementById("msg").innerHTML = "your selected country is Australia";

}else if(ans === "Canada"){

    document.getElementById("main").style.backgroundColor="red";
    document.getElementById("msg").innerHTML ="your selected country is Canada";

}else if(ans === "Us"){

    document.getElementById("main").style.backgroundColor="blue";
    document.getElementById("msg").innerHTML = "your selected country is Us";
}


}

