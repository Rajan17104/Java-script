const handleonload = () => {

    let calref =document.getElementById("submit");
    calref.setAttribute("onclick" ,"handlesubmit()");
    // calref.addEventListener("submit","handlesubmit()")

    let exeref =document.getElementById("submitExe");
    exeref.setAttribute("onclick" ,"handlesubmitExe()")
    // exeref.addEventListener("submit","handlesubmitExe()")

    /*Budget*/

    let budElem = document.createElement("p");
    let budTaxElem = document.createTextNode("$0");

    budElem.appendChild(budTaxElem);

    let budgetref = document.getElementById("budget")

    budgetref.appendChild(budElem);

    /*Exepense*/

    let exeElem =document.createElement("p");
    let exeTaxElem =document.createTextNode("$0");

    exeElem.appendChild(exeTaxElem);

    let exebudref = document.getElementById("expense");

    exebudref.appendChild(exeElem);

    /*Balance*/

    let balElem = document.createElement("p");
    let balTaxElem = document.createTextNode("$0");

    balElem.appendchild(balTaxElem);

    let balanceref = document.getElementById("balance");

    balanceref.appendChild(balElem);


}

const handlesubmit = () =>{

    let val = document.getElementById("input").value;

    document.getElementById("budget").innerHTML ="$"+val;
    document.getElementById("balance").innerHTML ="$"+val;

    // event.preventDefault();
}


const handlesubmitExe = () =>{

    let val = document.getElementById("input").value;

    let exe1 = document.getElementById("exe1").value;
    let exe2 =document.getElementById("exe2").value;
   
    console.log(exe1);
    console.log(exe2);

    let total = val - exe2;

    document.getElementById("expense").innerHTML ="$"+exe2;
    document.getElementById("ans").innerHTML =exe1 + "Total Badget is :" +total;
    document.getElementById("ans").style.display="block";
}


window.onload = handleonload;