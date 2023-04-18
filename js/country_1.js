function data(){

    let ans= document.getElementById("country").value;
    console.log(ans);

    if(ans === "ind"){

        document.getElementById("msg").innerHTML = "Your selected country India";
        document.getElementById("main").style.backgroundColor="orange";
    }else if(ans === "can"){
        
        document.getElementById("msg").innerHTML = "Your selected country Canda";
        document.getElementById("main").style.backgroundColor="red";
    }else if(ans === "uk"){
       
        document.getElementById("msg").innerHTML = "Your selected country Uk";
        document.getElementById("main").style.backgroundColor="yellow";
    }

}