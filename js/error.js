function handlefocus(){

    let r = document.getElementById("email").value;

    if(r === r){
        focus.style.borderColor="blue"
        document.getElementById("err").innerHTML = "";
    }
   
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