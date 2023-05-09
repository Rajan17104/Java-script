const handleonload = () => {

    let calref =document.getElementById("budgetFrom");
    calref.setAttribute("onsubmit" ,"handlesubmit()");

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

    let balanceElem = document.createElement("p");
    let balTaxElem = document.createTextNode("$0");

    balanceElem.appendchild(balTaxElem); 

    let balanceref = document.getElementById("balance");

    balanceref.appendChild(balanceElem);

}

const handlesubmit = () =>{

    let val = document.getElementById("input").value;

    document.getElementById("budget").innerHTML ="$"+val;
    document.getElementById("balance").innerHTML ="$"+val;

    event.preventDefault();
}

let exeref =document.getElementById("exp");



const handlesubmitExe = () =>{

    let exePalace = document.getElementById("exe1").value;
    let exeCost =document.getElementById("exe2").value;
    console.log(exePalace);
    console.log(exeCost);


    let exetr = document.createElement("tr");
    let exetd1 = document.createElement("td");
    let exetd2 = document.createElement("td");
    let exetd3 = document.createElement("td");

    let exetd1Tax =createTextNode(exePalace);
    let exetd2Tax =createTextNode(exeCost);
    
    exetd1.appendChild(exetd1Tax);
    exetd2.appendChild(exetd2Tax);
    exetr.appendChild(exetd1);
    exetr.appendChild(exetd2);
    exetr.appendChild(exetd3);
 
    

    let exeref = document.getElementById("Tabledata");

    exeref.appendChild(exetr)

    event.preventDefault();

}

exeref.addEventListener("submit",handlesubmitExe)



window.onload = handleonload;