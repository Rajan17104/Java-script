let regRef = document.getElementById("register");

let arr = [];

const addForm = () =>{

    let Formref = document.getElementById("Formdata");

    let indivRef =document.createElement("div");

    let rNo = Math.floor(Math.random()*1000);

    indivRef.setAttribute("id","row-"+rNo);


    let Fname = document.createElement("input");
    Fname.setAttribute("placeholder","First name");
    Fname.setAttribute("name","fname");


    let Lname = document.createElement("input");
    Lname.setAttribute("placeholder","Last name");
    Lname.setAttribute("name","lname");

    let plus = document.createElement("button");
    let plusTxt = document.createTextNode("+");
    plus.setAttribute("type","button");
    plus.setAttribute("onclick","addForm()");

    plus.appendChild(plusTxt);

    let minus = document.createElement("button");
    let minusTxt = document.createTextNode("-");
    minus.setAttribute("type","button");
    minus.setAttribute("onclick","addRemove(" +rNo+ ")");
    
    minus.appendChild(minusTxt);

    indivRef.appendChild(Fname);
    indivRef.appendChild(Lname);
    indivRef.appendChild(plus);
    indivRef.appendChild(minus);

    Formref.appendChild(indivRef);


    event.preventDefault();

}

const addRemove = (id) => {

    let rowRef = document.getElementById("row-"+id);

    console.log(id);
 
    rowRef.remove();

    let fname = document.getElementsByName("fname");
    let lname = document.getElementsByName("lname");

    for(let i=0; i<fname.length; i++){
      arr.splice({fname : fname[i,0].value , lname : lname[i,0].value});
    }

    console.log(arr);

    event.preventDefault();


}

const handlesubmit = () =>{

    let fname = document.getElementsByName("fname");
    let lname = document.getElementsByName("lname");

   
    for(let i=0; i<fname.length; i++){
      arr.push({fname : fname[i].value , lname : lname[i].value});
    }

    console.log(arr);

    event.preventDefault();

}

regRef.addEventListener("submit",handlesubmit);