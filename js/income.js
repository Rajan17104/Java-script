function income(){

    let inc =document.getElementById("income").value;

    console.log(inc);

    if(inc < 300000){

        tax = inc * 0;

    }else if(inc >=300000 && inc <= 600000){

        tax = 300000 * 0 + (inc - 300000 * 5)/100; 

    }else if(inc >= 600000 && inc <= 900000){

        tax = 300000 * 0 + (300000 * 5/100) + (inc - 600000 * 10)/100 ;
   
    }else if(inc >= 900000 && inc <= 1200000){

        tax = 300000 * 0 + (300000 * 5/100) + (600000 * 10/100) + (inc - 900000 * 15)/100;

    }else if(inc >= 1200000 && inc <= 1500000){
   
        tax = 300000 * 0 + (300000 * 5)/100 + (600000 * 10)/100 + (x900000 * 15)/100 + (inc - 1200000* 20)/100;

    }else if(inc > 1500000){
   
        tax = 300000 * 0 + (300000 * 5)/100 + (600000 * 10)/100 + (900000 * 15)/100 + (1200000* 20)/100 + (inc - 1500000 * 30)/100;
   
    }

    document.getElementById("ans").innerHTML = "your incomeTax" +tax;
    // document.getElementById("tax").innerHTML = "Your tax"+ y;

}