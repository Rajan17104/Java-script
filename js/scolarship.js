function scolarship(){

    let fee = parseInt(document.getElementById("fees").value);
    let cgpa = parseInt(document.getElementById("cgpa").value);
    let cast = document.getElementById("cast").value;
    console.log(fee);
    console.log(cgpa);
    console.log(cast);

document.getElementById("fee").innerHTML = "Fees is :" + fee;


    if(cgpa >= 9){
        document.getElementById("cg-m").innerHTML = "Your grade = A";
    }else if(cgpa >= 8.5){
        document.getElementById("cg-m").innerHTML = "Your grade = B"
    }else if(cgpa >=8){
        document.getElementById("cg-m").innerHTML = "Your grade = C"
    }else if(cgpa >=7.5){
        document.getElementById("cg-m").innerHTML = "Your grade = E"
    }else if(cgpa >=7){
        document.getElementById("cg-m").innerHTML = "Your grade = F"
    }


    let c = document.getElementById("cast").value;
   
    if(c === "op"){
        c = (fee * 0)/100;
        total = fee - c;
    }else if(c === "ob" && cgpa >= 8.5){
        c = (fee * 25)/100;
        total = fee - c;    
    }else if(c === "sc" && cgpa >= 8.5){
        c = (fee * 50)/100;
        total = fee - c; 
    }else if(c === "st" && cgpa >= 8.5){
        c = (fee * 100)/100;
        total = fee - c; 
    }

    document.getElementById("ca-m").innerHTML = "Your scholarship is :" + c;
    document.getElementById("total").innerHTML = "Total fees is :" + total;
}