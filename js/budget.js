let h1Elem = document.createElement("h1");
let h1TextElem = document.createTextNode("BUDGET APP");

h1Elem.appendChild(h1TextElem);

let budgetRef = document.getElementById("budget");
budgetRef.appendChild(h1Elem);

/*input*/

let input1 = document.createElement("input");
input1.setAttribute("id" , "input");

budgetRef.appendChild(input1)

/*submit*/

// let input2 = document.createElement("submit");
// input2.setAttribute("input", "submit");

// budgetRef.appendChild(input2)