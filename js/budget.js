
let exeref =document.getElementById("exp");
let calref =document.getElementById("budgetFrom");

let expense = [];


const handleonload = () => {

    /*Budget*/

    let budElem = document.createElement("p");
    let budTaxElem = document.createTextNode("$0");

    budElem.appendChild(budTaxElem);

    let budgetref = document.getElementById("budget")

    budgetref.appendChild(budElem);

    event.preventDefault();

    /*Exepense*/

    let exeElem =document.createElement("p");
    let exeTaxElem =document.createTextNode("$0");

    exeElem.appendChild(exeTaxElem);

    let exebudref = document.getElementById("expense");

    exebudref.appendChild(exeElem);


    /*Balance*/

    // let balanceElem = document.createElement("p");
    // let balTaxElem = document.createTextNode("$0");

    // balanceElem.appendchild(balTaxElem); 

    // let balanceref = document.getElementById("balance");

    // balanceref.appendChild(balanceElem);

    let balElem = document.createElement("p");
    let balTaxElem = document.createTextNode("$0");

    balElem.appendChild(balTaxElem);    

    let balanceref = document.getElementById("balance");

    balanceref.appendChild(balElem);

    event.preventDefault();

}

const handlesubmit = () =>{

    let val = document.getElementById("input").value;

    document.getElementById("budget").innerHTML ="$"+val;
    document.getElementById("balance").innerHTML ="$"+val;


    event.preventDefault();
}


const handlesubmitExe = () =>{

    let exeName = document.getElementById("exe1").value;
    let exeCost = document.getElementById("exe2").value;

    console.log(exeName,exeCost);

    let trref = document.createElement("tr");
    let td1ref = document.createElement("td");
    let td2ref = document.createElement("td");
    let button1 = document.createElement("button");
    let button2 = document.createElement("button");
    
    let td1Tax = document.createTextNode(exeName);
    let td2Tax = document.createTextNode(exeCost);
    let btn1 = document.createTextNode("Update");
    let btn2 = document.createTextNode("Remove");

    td1ref.appendChild(td1Tax);
    td2ref.appendChild(td2Tax);
    button1.appendChild(btn1);
    button2.appendChild(btn2);

    let exeref = document.getElementById("Tabledata");

    exeref.appendChild(trref);
    exeref.appendChild(td1ref);
    exeref.appendChild(td2ref);
    exeref.appendChild(button1);
    exeref.appendChild(button2);

    expense.push({
        name:exeName,
        cost:exeCost
    });

    console.log(expense);

    handledata();

    event.preventDefault();

}

const handledata = () =>{

    let val = document.getElementById("input").value;

    let exCO = 0;
    let total = 0;

    expense.map((v)=> total= total + parseInt(v.cost));

    document.getElementById("expense").innerHTML = total;

    exCO = val - total;

    document.getElementById("balance").innerHTML = exCO;

    if(val < total){
        alert("Sorry")
    }

}

exeref.addEventListener("submit",handlesubmitExe);
calref.addEventListener("submit",handlesubmit);



window.onload = handleonload;