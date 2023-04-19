function handlefocus(){

    let r = document.getElementById("email").value;
   

    // if(r === r){
    //     focus.style.borderColor="blue"
    //     document.getElementById("err").innerHTML = "";
    // }

}

let focus = document.getElementById("email");
focus.addEventListener("focus" ,handlefocus);


/*blur*/

function handleblur(){

    let r = document.getElementById("email").value;

    if(r === ''){
        blur.style.borderColor="red"
        document.getElementById("err").innerHTML = "Please Enter Your Email Id";
    }

}

let blur = document.getElementById("email");
blur.addEventListener("blur" ,handleblur);


/*keydown*/

function handleKeyDown(){
    let r = document.getElementById("email").value;


    if(r === ''){
        document.getElementById("err").innerHTML = "Please Enter Your Email Id";
        keyDown.style.borderColor="red"
    }else if(r != ""){
        document.getElementById("err").innerHTML = "";
        keyDown.style.borderColor="green"
    }
   
} 

let keyDown = document.getElementById("email");
keyDown.addEventListener("keydown" ,handleKeyDown)



function icon(){

    let x= document.getElementById("password").value ;

    console.log(x);

    document.getElementById("show").value;

    

}