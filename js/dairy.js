const handlemilk = () =>{

    let val =document.getElementById("milk").value;

    // console.log("sadhj");

    let b = document.getElementById("butter").value;
    b = b * 2;
    let c = document.getElementById("curd").value;
    c = c * 3;
    let p = document.getElementById("paneer").value;
    p = p * 6;
    let ch = document.getElementById("cheese").value;
    ch = ch * 10;
    
console.log(b,c,p,ch);



const select = (p , l ,r) =>{

    document.getElementById("pr").innerHTML = p;
    document.getElementById("ltr").innerHTML = l;
    document.getElementById("rn").innerHTML = r;

    console.log(p , l ,r);
}

// let data = document.getElementById("data").value;

//     if(butter ){
//         select("Butter" , b) 
//     }else if(curd){
//         select("Curd" , c)
//     }else if(paneer){
//         select("Panner" , p)
//     }else if(cheese){
//         select("Cheese" , ch)
//     }


    if(butter ,curd ,paneer ,cheese){
        select("Butter" , b) ;
        select("Curd" , c);  
        select("Panner" , p);
        select("Cheese" , ch)
    }


    // if(butter = butter){
    //     document.getElementById("ans").innerHTML = "butter" , b;
    // }else if(curd = curd){
    //     document.getElementById("ans").innerHTML = "curd" + c;
    // }else if(paneer){
    //     document.getElementById("ans").innerHTML = "Paneer" + p;
    // }else if(cheese){
    //     document.getElementById("ans").innerHTML = "cheese" + ch;
    // }



    document.getElementById("main").style.display = "block"

    let ans = val - b - c - p - ch;

    document.getElementById("total").innerHTML = "Available Milk =" + ans;


    console.log(ans);

}


