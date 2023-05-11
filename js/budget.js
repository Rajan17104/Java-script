
let exeref =document.getElementById("exp");
let calref =document.getElementById("budgetFrom");

let expense = [];

let update = false;

let updateID = null;

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
    // console.log(exeName,exeCost);
    
    let random = Math.floor(Math.random() * 100);
    // console.log(random);

    let trref = document.createElement("tr");
    trref.setAttribute("id","row" + random);

    let td1ref = document.createElement("td");
    let td2ref = document.createElement("td");
    let td3ref =document.createElement("td");
    let button1 = document.createElement("button");
    button1.setAttribute("onclick","handleUpdate()");

    let button2 = document.createElement("button");
    button2.setAttribute("onclick","handleRemove("+ random +")");
    
    let td1Tax = document.createTextNode(exeName);
    let td2Tax = document.createTextNode(exeCost);
    let btn1 = document.createTextNode("Update");
    let btn2 = document.createTextNode("Remove");

    td3ref.appendChild(button1);
    td3ref.appendChild(button2);

    td1ref.appendChild(td1Tax);
    td2ref.appendChild(td2Tax);
    button1.appendChild(btn1);
    button2.appendChild(btn2);

    trref.appendChild(td1ref);
    trref.appendChild(td2ref);
    trref.appendChild(td3ref);


    let exeref = document.getElementById("Tabledata");

    exeref.appendChild(trref);

    expense.push({
        id:random,
        name:exeName,
        cost:exeCost
    });

    // console.log(expense);

    handledata();
    
    event.preventDefault();

}

const handledata = () =>{

    let val = document.getElementById("input").value;

    let exCO = 0;
    let total = 0;

    expense.map((v)=> {
        total = total + parseInt(v.cost)
    });

    document.getElementById("expense").innerHTML = total;

    exCO = val - total;

    document.getElementById("balance").innerHTML = exCO;

    if(val < total){
        alert("-- Sorry -- Invalid Expenese Amount")
    }

    document.getElementById("table").style.display="block"

}

const handleRemove = (random) =>{
    // console.log(random);

    let trref = document.getElementById("row"+ random);
    // console.log(trref);

    trref.remove();

    expense.map ((v,i) =>{
        if(v.id === random){
            expense.splice(i,1)
        }
    })

    // console.log(expense);

    // let fData = expense.filter((v,i) => v.id != random);

    // expense = [...fData];

    // console.log(fData);

}

const handleUpdate = (random) =>{

    console.log('clicked');

    //     update = true;

    //     console.log(expense[i]);

    //     updateID = i;

    //     document.getElementById("exe1").value = expense[i];
    //     document.getElementById("exe2").value = expense[i];

        let newval1 = document.getElementById("exe1").value;
        let newval2 = document.getElementById("exe2").value
        
        expense.map((v) =>{
            if(v.id === random){
                newval1.v = v.exeName;
                newval2.v = v.exeCost;  
            }
        });
        
        updateID = random;

        console.log(expense[newval1]);
            
        document.getElementById("exe1").value = expense[newval1];
        document.getElementById("exe2").value = expense[newval2];
    

    event.preventDefault();

}

const handleDes = () =>{

    if(update){
        handleUpdateData();
    }else{
        handlesubmit();
    }
  
    event.preventDefault();
  
} 

const handleUpdateData = () =>{

    console.log('Update call');
    
    // let newval1 = document.getElementById("exe1").value;
    // let newval2 = document.getElementById("exe2").value
    // console.log('dsd');

    // expense[i] =  newval1;
    // expense[i] =  newval2;

    // update = false;

    
    let newval1 = document.getElementById("exe1").value;
    let newval2 = document.getElementById("exe2").value;
    
    expense.map((v) =>{
        if(v.id === updateID){
            v.exeName = newval1;
            v.exeCost = newval2;  
        }
    });
    
    console.log(expense);
    
    update = false;
    updateID =null;

    event.preventDefault(); 

}

exeref.addEventListener("submit",handlesubmitExe);
calref.addEventListener("submit",handleDes);


window.onload = handleonload;