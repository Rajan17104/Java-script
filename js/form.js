            /***********email**********/

function handlefocus(){

    let r = document.getElementById("email").value;
   

    focus.style.borderColor="blue"


}

let focus = document.getElementById("email");
focus.addEventListener("focus" ,handlefocus);



function handleblur(){

    let r = document.getElementById("email").value;

    if(r === ''){
        blur.style.borderColor="red"
        document.getElementById("e-err").innerHTML = "Enter Your Email Id";
    }

}

let blur = document.getElementById("email");
blur.addEventListener("blur" ,handleblur);



function handleKeyDown(){
    let r = document.getElementById("email").value;
   

    if(r === ''){
        document.getElementById("e-err").innerHTML = "Enter Your Email Id";
        keyDown.style.borderColor="red"
    }else{
        document.getElementById("e-err").innerHTML = "";
        keyDown.style.borderColor="green"
    }
   
} 

let keyDown = document.getElementById("email");
keyDown.addEventListener("keydown" ,handleKeyDown)



                /********password*******/

let x = document.getElementById("password");

function icon(){


    console.log(x);

    // document.getElementById("show").innerHTML = x;

    if(x.type === "password"){
        x.type ="text";
        document.getElementById("off").style.display="block";
        document.getElementById("on").style.display="none";
    }else{
        x.type = "password";
        document.getElementById("off").style.display="none";
        document.getElementById("on").style.display="block";
    }
  
}


function handlefocusP(){

    let r = document.getElementById("password").value;
   
    focusP.style.borderColor="blue"


}

let focusP = document.getElementById("password");
focusP.addEventListener("focus" ,handlefocusP);


function handleblurP(){

    let r =document.getElementById("password").value;

    if(r === ''){
        blurP.style.borderColor="red"
        document.getElementById("p-err").innerHTML = "Enter Your Password";
    }
}

let blurP =document.getElementById("password");
blurP.addEventListener("blur" ,handleblurP);


function handlekeyDownP(){
     let r =document.getElementById("password").value;

     if(r === ""){
        document.getElementById("p-err").innerHTML = "Enter a Password"
        keyDownP.style.borderColor="red"
     }else{
        document.getElementById("p-err").innerHTML =""
        keyDownP.style.borderColor="green"
     }
}

let keyDownP = document.getElementById("password");
keyDownP.addEventListener("keydown" ,handlekeyDownP);