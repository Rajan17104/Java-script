// let tc = document.getElementById("tc").value;
// let fs = document.getElementById("fs").value;
// let rct = document.getElementById("rct").value;
// let rc = document.getElementById("rc").value;
// let bi = document.getElementById("bi").value;


let tcs =1,fss =2 ,rcts = 4,rcs = 6,bis = 12;

let tcc =500; fsc =1500,rctc =2500, rcc =12000 , bic =35000;

function changes(){

let main = document.getElementById("treat").value;
    
console.log(main);

if(main === "tc"){
    document.getElementById("ans").innerHTML = "Teeth Cleanings ";
    document.getElementById("seat").innerHTML = tcs;
    document.getElementById("cost").innerHTML = tcc;
    document.getElementById("table").style.display="block"
}else if(main === "fs"){
    document.getElementById("ans").innerHTML = "Fillings";
    document.getElementById("seat").innerHTML = fss;
    document.getElementById("cost").innerHTML = fsc;
    document.getElementById("table").style.display="block"
}else if(main === "rct"){
    document.getElementById("ans").innerHTML = "Root Canal Treatment";
    document.getElementById("seat").innerHTML = rcts;
    document.getElementById("cost").innerHTML = rctc;
    document.getElementById("table").style.display="block"
}else if(main === "rc"){
    document.getElementById("ans").innerHTML = "RCT  Cover";
    document.getElementById("seat").innerHTML = rcs;
    document.getElementById("cost").innerHTML = rcc;
    document.getElementById("table").style.display="block"
}else if(main === "bi"){
    document.getElementById("ans").innerHTML = "Braces/Invisalign";
    document.getElementById("seat").innerHTML = bis;
    document.getElementById("cost").innerHTML = bic;
    document.getElementById("table").style.display="block"
}


}

