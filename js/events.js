function handleclick(){
    console.log("clikkkndjkfhs");
}





/*mouse Over*/

function handlemouseOver(){
    console.log("mouse over");
}


let btnMouseOver = document.getElementById("mouseOver");


btnMouseOver.addEventListener("mouseover" ,handlemouseOver);


/*mouse Out*/


function handlemouseOut(){
    console.log("mouse out");
}

let btnMouseOut = document.getElementById("mouseOut");

btnMouseOut.addEventListener("mouseout" ,handlemouseOut)


/*mouse down*/


function handlemouseDown(){
    console.log("mouse Down");
}

let btnMouseDown = document.getElementById("mouseDown");

btnMouseDown.addEventListener("mousedown" ,handlemouseDown)


/*mouse Up*/


function handlemouseUp(){
    console.log("mouse Up");
}

let btnMouseUp = document.getElementById("mouseUp");

btnMouseUp.addEventListener("mouseup" ,handlemouseUp)

/*mouse move*/


function handlemouseMove(){
    console.log("mouse Move");
}

let btnMouseMove = document.getElementById("mouseMove");

btnMouseMove.addEventListener("mousemove" ,handlemouseMove)



/******Keyboard Event******/


/*keyDown*/

function handleKeyDown(){
    console.log(Fname.value);
} 

let keyDown = document.getElementById("Fname");

keyDown.addEventListener("keydown" ,handleKeyDown)


/*keyUp*/

function handleKeyUp(){
    console.log(Lname.value);
} 

let keyUp = document.getElementById("Lname");

keyUp.addEventListener("keyup" ,handleKeyUp)



/******Form Event******/


/* focus */

function handlefocus(){
    focus.style.borderColor="red"
}

let focus = document.getElementById("email");

focus.addEventListener("focus" ,handlefocus);


/* blur */

function handleblur(){
    blur.style.borderColor="blue"
}

let blur = document.getElementById("email");

blur.addEventListener("blur" ,handleblur);


/*submit*/

function handlesubmit(){
    submit.style.borderColor="blue"
    console.log(submit.value);
}

let submit = document.getElementById("email");

submit.addEventListener("blur" ,handlesubmit);




/*****Window/Document event*****/

/*load*/

window.onload = function(){
    console.log("Page Load");
}

/*unload*/

window.onunload = function(){
    console.log("Page unload");
}

/*resize*/

window.onresize = function(){
    console.log("Resize");
}