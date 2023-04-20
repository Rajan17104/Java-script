function scolarship(){

    let fee = parseInt(document.getElementById("fees").value);
    let cgpa = parseInt(document.getElementById("cgpa").value);
    let cast = document.getElementById("cast").value;
    console.log(fee);
    console.log(cgpa);
    console.log(cast);

// document.getElementById("fees").innerHTML = fee;



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


    // let total = document.getElementById("ca-m").value;

    if(cast === "op"){
        document.getElementById("ca-m").innerHTML = "No scolarship";
    }else if(cast === "ob" && cgpa >= 8.5){
        // total = fee / 0.25%
        // document.getElementById("ca-m").innerHTML = "total";    
    }

}